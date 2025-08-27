import { WebSocket } from "ws";
import { createDbConnection } from "./db-pool";

type filteredDataType = {
  event: string;
  event_time: Date;
  symbol: string;
  price: number;
  quantity: number;
  bid_price: number;
  ask_price: number;
};

const FILTERED_DATA_ARRAY: filteredDataType[] = [];
let LAST_INSERT_TIME = Date.now();

const ws = new WebSocket(
  "wss://stream.binance.com:9443/stream?streams=btcusdt@trade/ethusdt@trade/solusdt@trade"
);

const main = async () => {
  const client = await createDbConnection();

  ws.on("open", () => {
    console.log("Connected");
  });

  ws.on("message", async (dataBuffer) => {
    const data = dataBuffer.toString();
    const trade = JSON.parse(data);

    const filteredData = {
      event: trade.data.e,
      event_time: new Date(trade.data.E),
      symbol: trade.data.s,
      price: parseFloat(trade.data.p),
      quantity: parseFloat(trade.data.q),
      bid_price: parseFloat(trade.data.p),
      ask_price: parseFloat(trade.data.p) + 0.02 * parseFloat(trade.data.p),
    };

    const client = await createDbConnection();

    console.log(filteredData);

    const res = await client.query(
      "INSERT INTO trades (event, event_time, symbol, price, quantity, bid_price, ask_price) VALUES ($1::string[], $2::timestamptz[], $3::string[], $4::string[], $5::float[], $6::float[], $7::float[])",
      [
        filteredData.event,
        filteredData.event_time,
        filteredData.symbol,
        filteredData.price,
        filteredData.quantity,
        filteredData.bid_price,
        filteredData.ask_price,
      ]
    );

    console.log(JSON.stringify(res));

    FILTERED_DATA_ARRAY.push(filteredData);
  });

  while (1) {
    if (
      FILTERED_DATA_ARRAY.length > 1000
      // || Date.now() - LAST_INSERT_TIME > 5000
    ) {
      try {
        const events = FILTERED_DATA_ARRAY.map((data) => data.event);
        const event_times = FILTERED_DATA_ARRAY.map((data) => data.event_time);
        const symbols = FILTERED_DATA_ARRAY.map((data) => data.symbol);
        const prices = FILTERED_DATA_ARRAY.map((data) => data.price);
        const quantities = FILTERED_DATA_ARRAY.map((data) => data.quantity);
        const bid_prices = FILTERED_DATA_ARRAY.map((data) => data.bid_price);
        const ask_prices = FILTERED_DATA_ARRAY.map((data) => data.ask_price);

        const query = `
            INSERT INTO trades (event, event_time, symbol, price, quantity, bid_price, ask_price)
            SELECT * FROM unnest($1::varchar[], $2::timestamptz[], $3::varchar[], $4::decimal[], $5::decimal[], $6::decimal[], $7::decimal[])
          `;

        const res = await client.query(query, [
          events,
          event_times,
          symbols,
          prices,
          quantities,
          bid_prices,
          ask_prices,
        ]);

        console.log(JSON.stringify(res));

        console.log("Inserted into db");

        LAST_INSERT_TIME = Date.now();
      } catch (e) {
        console.log(e);
      }
    }
  }
};

main();
