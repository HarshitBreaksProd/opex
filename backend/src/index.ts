import express from "express";
import cookieParser from "cookie-parser";
import { createPoolConnection } from "./db/pool";
import { getQuery } from "./db/queries";
import redis from "redis";

type TradeDataType = {
  event: "trade";
  event_time: string;
  symbol: string;
  price: Number;
  quantity: Number;
  bid_price: Number;
  ask_price: Number;
};

const redisUrl = "redis://localhost:6379";

const assetPrices: Record<string, TradeDataType> = {};

const client = redis.createClient({ url: redisUrl });

const subscriber = client.duplicate();


(async () => {
  await subscriber.connect();

  await subscriber.subscribe("trades-info", (message) => {
    const tradeData: TradeDataType = JSON.parse(message);

    const asset = tradeData.symbol;

    assetPrices[asset] = tradeData;

    console.log(assetPrices);
  });
})();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/candles", async (req, res) => {
  const symbol = req.query.symbol?.toString();
  const timeInterval = req.query.timeInterval?.toString();

  if (!symbol) {
    return res.json({
      message: "Symbol required to fetch correct candles",
      status: "error",
    });
  }

  if (!timeInterval) {
    return res.json({
      message: "time interval required to fetch correct candles",
      status: "error",
    });
  }

  const pool = await createPoolConnection();

  const dbRes = await pool.query(await getQuery(symbol, timeInterval));

  const candles = dbRes.rows;

  console.log(candles);

  return res.json(candles);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
