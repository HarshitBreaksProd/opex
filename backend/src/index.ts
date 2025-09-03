import express from "express";
import cookieParser from "cookie-parser";
import redis from "redis";
import { router } from "./routes/router";
import { prismaClient } from "./prisma";

type TradeDataType = {
  event: "trade";
  event_time: string;
  symbol: string;
  price: Number;
  quantity: Number;
  bid_price: Number;
  ask_price: Number;
};

type AssetPriceType = {
  currPriceIntPart: number;
  currPriceDecPos: number;
  askPriceIntPart: number;
  askPriceDecPos: number;
  bidPriceIntPart: number;
  bidPriceDecPos: number;
  name: string;
};

type Orders = {
  margin: number;
  marginDecPos: number;
  asset: string;
  type: "buy" | "sell";
  leverage: number;
  openPrice: number;
  openPriceDecPos: number;
  orderStatus: "open" | "close";
  closePrice?: number;
  closePriceDecPos?: number;
  pnl?: number;
  pnlDecPos?: number;
  createdAt?: Date;
  stopLoss?: number;
  stopLossDecPos?: number;
  takeProfit?: number;
  takeProfitDecPos?: number;
  userId: string;
};

type UserBalanceType = {
  balance: number;
  balDecPos: number;
};

const redisUrl = "redis://localhost:6379";

export const assetPrices: Record<string, AssetPriceType> = {};

export const allOrders: Orders[] = [];

export const allUserBalances: Record<string, UserBalanceType> = {};

const client = redis.createClient({ url: redisUrl });

const subscriber = client.duplicate();

(async () => {
  try {
    const allOpenTradesFromDb = await prismaClient.trades.findMany({
      where: {
        orderStatus: "open",
      },
    });

    allOpenTradesFromDb.forEach((openTrade) => {
      allOrders.push({
        margin: openTrade.margin,
        marginDecPos: openTrade.marginDecPos,
        asset: openTrade.asset,
        type: openTrade.type,
        leverage: openTrade.leverage,
        openPrice: openTrade.openPrice,
        openPriceDecPos: openTrade.openPriceDecPos,
        orderStatus: openTrade.orderStatus,
        stopLoss: openTrade.stopLoss ? openTrade.stopLoss : undefined,
        stopLossDecPos: openTrade.stopLossDecPos
          ? openTrade.stopLossDecPos
          : undefined,
        takeProfit: openTrade.takeProfit ? openTrade.takeProfit : undefined,
        takeProfitDecPos: openTrade.takeProfitDecPos
          ? openTrade.takeProfitDecPos
          : undefined,
        closePrice: undefined,
        closePriceDecPos: undefined,
        pnl: undefined,
        pnlDecPos: undefined,
        createdAt: new Date(),
        userId: openTrade.userId,
      });
    });

    const users = await prismaClient.users.findMany();

    users.forEach((user) => {
      allUserBalances[user.id] = {
        balance: user.balance,
        balDecPos: user.balDecPos,
      };
    });

    await subscriber.connect();

    await subscriber.subscribe("trades-info", (message) => {
      const tradeData: TradeDataType = JSON.parse(message);

      const asset = tradeData.symbol;

      const priceString = tradeData.price.toFixed(4);
      const priceStringBfrDecimal = priceString.split(".")[0]!;
      const priceStringAfrDecimal = priceString.split(".")[1]!;
      const priceDecimalPosition = priceStringAfrDecimal?.length;
      const priceIntegerPart = priceStringBfrDecimal + priceStringAfrDecimal;

      const askPriceString = tradeData.ask_price.toFixed(4);
      const askPriceStringBfrDecimal = askPriceString.split(".")[0]!;
      const askPriceStringAfrDecimal = askPriceString.split(".")[1]!;
      const askPriceDecimalPosition = askPriceStringAfrDecimal?.length;
      const askPriceIntegerPart =
        askPriceStringBfrDecimal + askPriceStringAfrDecimal;

      const bidPriceString = tradeData.bid_price.toFixed(4);
      const bidPriceStringBfrDecimal = bidPriceString.split(".")[0]!;
      const bidPriceStringAfrDecimal = bidPriceString.split(".")[1]!;
      const bidPriceDecimalPosition = bidPriceStringAfrDecimal?.length;
      const bidPriceIntegerPart =
        bidPriceStringBfrDecimal + bidPriceStringAfrDecimal;

      const name =
        asset === "ETHUSDT"
          ? "Ethereum"
          : asset === "SOLUSDT"
          ? "Solana"
          : asset === "BTCUSDT"
          ? "Bitcoin"
          : "asset";

      assetPrices[asset] = {
        name,
        currPriceIntPart: Number(priceIntegerPart),
        currPriceDecPos: priceDecimalPosition,
        askPriceIntPart: Number(askPriceIntegerPart),
        askPriceDecPos: askPriceDecimalPosition,
        bidPriceIntPart: Number(bidPriceIntegerPart),
        bidPriceDecPos: bidPriceDecimalPosition,
      };

      // console.log(assetPrices)

      // ----- Liquidity Checks ----- //
      console.log("===============");

      for (const order of allOrders) {
        if (!assetPrices[order.asset]?.name) {
          throw new Error(
            "Unknown Asset to check prices for: " + `${order.asset}`
          );
        }
        const currentPrice = assetPrices[order.asset]!.currPriceIntPart;
        if (order.type === "buy") {
          const priceChange = currentPrice - order.openPrice;
          let closePrice: number = 0;
          let closePriceDecPos;
          let pnl: number = 0;
          let pnlDecPos;
          // margin
          if (
            (priceChange < 0 &&
              Math.abs(priceChange) > 0.95 * (order.margin / order.leverage)) ||
            (order.stopLoss && order.stopLoss > 0.95 * currentPrice) ||
            (order.takeProfit && order.takeProfit < currentPrice)
          ) {
            // close order here;

            let openPrice = order.openPrice;

            closePrice = assetPrices[order.asset]!.bidPriceIntPart;
            closePriceDecPos = assetPrices[order.asset]!.bidPriceDecPos;

            const priceChange = closePrice - openPrice;

            let margin = order.margin;

            const qty = margin / openPrice;
            const pnlFloat = (priceChange / 10 ** closePriceDecPos) * qty;

            const pnlString = pnlFloat.toFixed(4).toString();
            const pnlStringBfrDecimal = pnlString.split(".")[0]!;
            const pnlStringAfrDecimal = pnlString.split(".")[1]!;
            const pnlDecimalPosition = pnlStringAfrDecimal?.length;
            const pnlIntegerPart = pnlStringBfrDecimal + pnlStringAfrDecimal;

            pnl = Number(pnlIntegerPart);
            pnlDecPos = pnlDecimalPosition;

            // allOpenOrders[key] =
            //   allOpenOrders[key]?.filter((o) => o.id !== order.id) || [];
          }
        } else {
          // sell
          const priceChange = order.openPrice - currentPrice;

          if (
            (priceChange < 0 &&
              Math.abs(priceChange) > 0.95 * (order.margin / order.leverage)) ||
            (order.stopLoss && order.stopLoss < 1.05 * currentPrice) ||
            (order.takeProfit && order.takeProfit > currentPrice)
          ) {
            // close order here;
            console.log("Close Sell order");
          }
        }
      }
    });
  } catch (error) {
    console.log(error);
    console.log("Error running checks");
    return;
  }
})();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
