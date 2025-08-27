import express from "express";
import cookieParser from "cookie-parser";
import { createPoolConnection } from "./db/pool";
import { getQuery } from "./db/queries";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/candle", async (req, res) => {
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

  const candles1m = dbRes.rows;

  console.log(candles1m);

  console.log("object");

  return res.json(candles1m);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
