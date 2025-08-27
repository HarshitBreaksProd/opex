import { WebSocket } from "ws";
import { createDbConnection } from "./db-client";
import { processingQueue } from "./queue";

type filteredDataType = {
  event: string;
  event_time: Date;
  symbol: string;
  price: number;
  quantity: number;
  bid_price: number;
  ask_price: number;
};

let FILTERED_DATA_ARRAY: filteredDataType[] = [];
let LAST_INSERT_TIME = Date.now();

const ws = new WebSocket(
  "wss://stream.binance.com:9443/stream?streams=btcusdt@trade/ethusdt@trade/solusdt@trade"
);

const main = async () => {
  const client = await createDbConnection();

  ws.on("open", () => {
    console.log("Connected");
    LAST_INSERT_TIME = Date.now();
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

    FILTERED_DATA_ARRAY.push(filteredData);

    console.log(FILTERED_DATA_ARRAY.length);

    // if (
    //   FILTERED_DATA_ARRAY.length >= 300 ||
    //   Date.now() - LAST_INSERT_TIME >= 5000
    // ) {
    //   try {
    //     const events = FILTERED_DATA_ARRAY.map((data) => data.event);
    //     const event_times = FILTERED_DATA_ARRAY.map((data) => data.event_time);
    //     const symbols = FILTERED_DATA_ARRAY.map((data) => data.symbol);
    //     const prices = FILTERED_DATA_ARRAY.map((data) => data.price);
    //     const quantities = FILTERED_DATA_ARRAY.map((data) => data.quantity);
    //     const bid_prices = FILTERED_DATA_ARRAY.map((data) => data.bid_price);
    //     const ask_prices = FILTERED_DATA_ARRAY.map((data) => data.ask_price);

    //     FILTERED_DATA_ARRAY = []; // WE keep this here because the insert takes time and the filtered data array is not updated so it triggers the insert multiple times
    //     LAST_INSERT_TIME = Date.now();

    //     const query = `
    //         INSERT INTO trades (event, event_time, symbol, price, quantity, bid_price, ask_price)
    //         SELECT * FROM unnest($1::varchar[], $2::timestamptz[], $3::varchar[], $4::decimal[], $5::decimal[], $6::decimal[], $7::decimal[])
    //       `;

    //     await client.query(query, [
    //       events,
    //       event_times,
    //       symbols,
    //       prices,
    //       quantities,
    //       bid_prices,
    //       ask_prices,
    //     ]);

    //     console.log("Inserted into db");
    //     console.log(events.length);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }

    try{
      await processingQueue.add('process-trade', filteredData);
    } catch (error) {
      console.log(error);
      console.log("Error pushing into queue")
    }
  });
};

main();
