import { Router } from "express";
import { getCandlesQuery } from "../timescale-db/queries";
import type { Pool } from "pg";
import { createPoolConnection } from "../timescale-db/pool";
import {
  closeTradeSchema,
  createTradeSchema,
  userSigninSchema,
  userSignupSchema,
} from "../schema/zodSchema";
import { prismaClient } from "../prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authCheck } from "../middleware/authMiddleware";
import { allOrders, assetPrices } from "..";
import { symbol } from "zod";

export const router = Router();

let pool: Pool;

(async () => {
  pool = await createPoolConnection();
})();

router.post("/user/signup", async (req, res) => {
  const saltround = process.env.SALTROUND || "10";

  const validInput = userSignupSchema.safeParse(req.body);

  if (!validInput.success) {
    res.status(403).json({
      message: "Error while signing up",
    });
    return;
  }

  const encryptedPwd = await bcrypt.hash(
    validInput.data.password,
    parseInt(saltround)
  );

  try {
    const dbRes = await prismaClient.users.create({
      data: {
        email: validInput.data.email,
        password: encryptedPwd,
      },
    });

    const userId = dbRes.id;

    res.json({
      userId,
    });
    return;
  } catch (e) {
    console.log(e);
    res.status(403).json({
      message: "Error while signing up",
    });
    return;
  }
});

router.post("/user/signin", async (req, res) => {
  const validInput = userSigninSchema.safeParse(req.body);

  if (!validInput.success) {
    res.status(403).json({
      message: "Incorrect credentials",
    });
    return;
  }

  try {
    const dbRes = await prismaClient.users.findFirst({
      where: {
        email: validInput.data.email,
      },
    });

    if (!dbRes?.id) {
      res.status(403).json({
        message: "Incorrect credentials",
      });
      return;
    }

    const pwdMatch = await bcrypt.compare(
      validInput.data.password,
      dbRes.password
    );

    if (!pwdMatch) {
      res.status(403).json({
        message: "Incorrect credentials",
      });
      return;
    }

    const token = jwt.sign(dbRes.id, process.env.JWT_SECRET || "JWTKASECRET");

    res.json({
      token,
    });

    return;
  } catch (e) {
    console.log(e);
    res.status(403).json({
      message: "Incorrect credentials",
    });
    return;
  }
});

router.get("/user/balance", authCheck, async (req, res) => {
  try {
    const user = await prismaClient.users.findFirst({
      where: {
        id: (req as unknown as { userId: string }).userId,
      },
    });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    let userBalWholeNo = Math.floor(user.balance / 10 ** user.balDecPos);
    let userBalFracNo = user.balance % 10 ** user.balDecPos;
    const userBalance = userBalWholeNo + userBalFracNo / 10 ** user.balDecPos;

    res.json({
      usd_balance: userBalance,
    });
  } catch (e) {
    console.log(e);
    res.status(401).json({
      message: "Unauthorized",
    });
  }
});

router.post("/trade", authCheck, async (req, res) => {
  try {
    const validInput = createTradeSchema.safeParse(req.body);

    if (!validInput.success) {
      res.status(411).json({
        message: "Incorrect inputs",
      });
      return;
    }

    const userInfo = await prismaClient.users.findFirst({
      where: {
        id: (req as unknown as { userId: string }).userId,
      },
    });

    if (!userInfo) {
      res.status(401).json({
        message: "User not found",
      });
      return;
    }

    if (validInput.data.margin > userInfo.balance) {
      // assumes the margin dec pos is same as balance dec pos
      res.status(400).json({
        message: "User does not sufficient balance",
      });
      return;
    }

    let openPrice;
    let openPriceDecPos;

    if (!assetPrices[validInput.data.asset]?.name) {
      res.status(411).json({
        message: "Invalid Asset",
      });
      return;
    }

    if (validInput.data.type === "buy") {
      openPrice = assetPrices[validInput.data.asset]!.askPriceIntPart;
      openPriceDecPos = assetPrices[validInput.data.asset]!.askPriceDecPos;
    } else {
      openPrice = assetPrices[validInput.data.asset]!.bidPriceIntPart;
      openPriceDecPos = assetPrices[validInput.data.asset]!.bidPriceDecPos;
    }

    const dbRes = await prismaClient.trades.create({
      data: {
        userId: (req as unknown as { userId: string }).userId,
        asset: validInput.data.asset,
        margin: validInput.data.margin,
        leverage: validInput.data.leverage,
        type: validInput.data.type,
        openPrice,
        openPriceDecPos,
        stopLoss: validInput.data.stopLoss,
        takeProfit: validInput.data.takeProfit,
      },
    });

    const trade = dbRes;

    const balFloat = userInfo.balance / 10 ** userInfo.balDecPos;
    const marginFloat = trade.margin / 10 ** trade.marginDecPos;

    const updatedBalFloat = balFloat - marginFloat;
    const updatedBalString = updatedBalFloat.toFixed(4);
    const updatedBalStringBfrDecimal = updatedBalString.split(".")[0]!;
    const updatedBalStringAfrDecimal = updatedBalString.split(".")[1]!;
    const updatedBalDecimalPosition = updatedBalStringAfrDecimal?.length;
    const updatedBalIntegerPart = Number(
      updatedBalStringBfrDecimal + updatedBalStringAfrDecimal
    );

    const userBalUpdate = await prismaClient.users.update({
      where: {
        id: (req as unknown as { userId: string }).userId,
      },
      data: {
        balance: updatedBalIntegerPart,
        balDecPos: updatedBalDecimalPosition,
      },
    });

    // allOrders?.push({
    //   margin: trade.margin,
    //   marginDecPos: trade.marginDecPos,
    //   asset: trade.asset,
    //   type: trade.type,
    //   leverage: trade.leverage,
    //   openPrice: trade.openPrice,
    //   openPriceDecPos: trade.openPriceDecPos,
    //   orderStatus: trade.orderStatus,
    //   stopLoss: trade.stopLoss ? trade.stopLoss : undefined,
    //   stopLossDecPos: trade.stopLossDecPos ? trade.stopLossDecPos : undefined,
    //   takeProfit: trade.takeProfit ? trade.takeProfit : undefined,
    //   takeProfitDecPos: trade.takeProfitDecPos
    //     ? trade.takeProfitDecPos
    //     : undefined,
    //   closePrice: undefined,
    //   closePriceDecPos: undefined,
    //   pnl: undefined,
    //   pnlDecPos: undefined,
    //   userId: trade.userId,
    // });

    res.json({
      orderId: trade.id,
    });
    return;
  } catch (e) {
    console.log(e);
    res.status(411).json({
      message: "Incorrect inputs",
    });
    return;
  }
});

router.post("/trade/close", authCheck, async (req, res) => {
  try {
    const validInput = closeTradeSchema.safeParse(req.body);

    if (!validInput.success) {
      res.status(411).json({
        message: "Incorrect inputs",
      });
      return;
    }

    const dbRes = await prismaClient.trades.findFirst({
      where: {
        userId: (req as unknown as { userId: string }).userId,
        id: validInput.data.orderId,
      },
    });

    if (!dbRes || dbRes.orderStatus === "close") {
      res.status(404).json({
        message: "Does not exist or already closed",
      });
      return;
    }

    let closePrice: number = 0;
    let closePriceDecPos;
    let pnl: number = 0;
    let pnlDecPos;

    if (!assetPrices[dbRes.asset]?.name) {
      res.status(411).json({
        message: "Invalid Asset",
      });
      return;
    }

    let openPrice = dbRes.openPrice;

    if (dbRes.type === "buy") {
      closePrice = assetPrices[dbRes.asset]!.bidPriceIntPart;
      closePriceDecPos = assetPrices[dbRes.asset]!.bidPriceDecPos;

      const priceChange = closePrice - openPrice;

      let margin = dbRes.margin;

      const qty = margin / openPrice;
      const pnlFloat = (priceChange / 10 ** closePriceDecPos) * qty;

      const pnlString = pnlFloat.toFixed(4).toString();
      const pnlStringBfrDecimal = pnlString.split(".")[0]!;
      const pnlStringAfrDecimal = pnlString.split(".")[1]!;
      const pnlDecimalPosition = pnlStringAfrDecimal?.length;
      const pnlIntegerPart = pnlStringBfrDecimal + pnlStringAfrDecimal;

      pnl = Number(pnlIntegerPart);
      pnlDecPos = pnlDecimalPosition;
    } else if (dbRes.type === "sell") {
      closePrice = assetPrices[dbRes.asset]!.askPriceIntPart;
      closePriceDecPos = assetPrices[dbRes.asset]!.askPriceDecPos;

      const priceChange = openPrice - closePrice;

      let margin = dbRes.margin;

      const qty = margin / openPrice;
      const pnlFloat = (priceChange / 10 ** closePriceDecPos) * qty;

      const pnlString = pnlFloat.toFixed(4).toString();
      const pnlStringBfrDecimal = pnlString.split(".")[0]!;
      const pnlStringAfrDecimal = pnlString.split(".")[1]!;
      const pnlDecimalPosition = pnlStringAfrDecimal?.length;
      const pnlIntegerPart = pnlStringBfrDecimal + pnlStringAfrDecimal;

      pnl = Number(pnlIntegerPart);
      pnlDecPos = pnlDecimalPosition;
    }

    const closedTrade = await prismaClient.trades.update({
      where: {
        id: dbRes.id,
      },
      data: {
        orderStatus: "close",
        closePrice,
        closePriceDecPos,
        pnl,
        pnlDecPos,
      },
    });

    const userInfo = await prismaClient.users.findFirst({
      where: {
        id: (req as unknown as { userId: string }).userId,
      },
    });

    if (!userInfo) {
      res.status(401).json({
        message: "User not found",
      });
      return;
    }

    const balFloat = userInfo.balance / 10 ** userInfo.balDecPos;
    const marginFloat = closedTrade.margin / 10 ** closedTrade.marginDecPos;
    const pnlFloat = closedTrade.pnl! / 10 ** closedTrade.pnlDecPos!;

    const updatedBalFloat = balFloat + marginFloat + pnlFloat;
    const updatedBalString = updatedBalFloat.toFixed(4).toString();
    const updatedBalStringBfrDecimal = updatedBalString.split(".")[0]!;
    const updatedBalStringAfrDecimal = updatedBalString.split(".")[1]!;
    const updatedBalDecimalPosition = updatedBalStringAfrDecimal?.length;
    const updatedBalIntegerPart = Number(
      updatedBalStringBfrDecimal + updatedBalStringAfrDecimal
    );

    const updateUserBalance = await prismaClient.users.update({
      where: {
        id: (req as unknown as { userId: string }).userId,
      },
      data: {
        balance: updatedBalIntegerPart,
        balDecPos: updatedBalDecimalPosition,
      },
    });

    console.log(closedTrade);

    // allOpenOrders[userInfo.id] = allOpenOrders[userInfo.id]!.filter((trade) => {
    //   return trade.id !== closedTrade.id;
    // });

    res.json({
      orderId: closedTrade.id,
      userBalance: updateUserBalance.balance,
      userBalDecPos: updateUserBalance.balDecPos,
    });
    return;
  } catch (e) {
    console.log(e);
    res.status(411).json({
      message: "Incorrect inputs",
    });
    return;
  }
});

router.get("/trades/open", authCheck, async (req, res) => {
  try {
    const trades = await prismaClient.trades.findMany({
      where: {
        userId: (req as unknown as { userId: string }).userId,
        orderStatus: "open",
      },
    });

    res.json({
      trades,
    });
    return;
  } catch (e) {
    console.log(e);
    res.status(411).json({
      message: "Incorrect inputs",
    });
    return;
  }
});

router.get("/trades", authCheck, async (req, res) => {
  try {
    const trades = await prismaClient.trades.findMany({
      where: {
        userId: (req as unknown as { userId: string }).userId,
        orderStatus: "close",
      },
    });

    res.json({
      trades,
    });
    return;
  } catch (e) {
    console.log(e);
    res.status(411).json({
      message: "Incorrect inputs",
    });
    return;
  }
});

router.get("/candles", async (req, res) => {
  const asset = req.query.asset?.toString();
  const ts = req.query.ts?.toString();
  const startTime = req.query.startTime?.toString();
  const endTime = req.query.endTime?.toString();

  if (!asset || !ts || !endTime || !startTime) {
    res.status(403).json({
      message: "Invlaid Inputs",
    });
    return;
  }

  try {
    const dataQuery = await getCandlesQuery(asset, ts, startTime, endTime);

    console.log("Start query");
    const dbRes = await pool.query(dataQuery);

    const candles = dbRes.rows;

    // console.log(candles);

    return res.json(candles);
  } catch (e) {
    return {
      status: "error",
      message: "DB query failed",
    };
  }
});

router.get("/assets", authCheck, async (req, res) => {
  enum assetSym {
    "BTC",
    "ETH",
    "SOL",
  }

  const assets: {
    name: string;
    symbol: assetSym;
    buyPrice: Number;
    buyPriceDecPos: Number;
    sellPrice: Number;
    sellPriceDecPos: Number;
    imageUrl?: string;
  }[] = [];

  for (const [asset, prices] of Object.entries(assetPrices)) {
    assets.push({
      name: prices.name,
      symbol: asset.replace("USDT", "") as unknown as assetSym,
      buyPrice: prices.askPriceIntPart,
      buyPriceDecPos: prices.askPriceDecPos,
      sellPrice: prices.bidPriceIntPart,
      sellPriceDecPos: prices.bidPriceDecPos,
    });
  }

  res.json({
    assets,
  });
});
