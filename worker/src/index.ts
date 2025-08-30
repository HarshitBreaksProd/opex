import { Worker } from "bullmq";
import { createDbConnection } from "./db-client";

type filteredDataType = {
  event: string;
  event_time: Date;
  symbol: string;
  price: number;
  quantity: number;
};

let FILTERED_DATA_ARRAY: filteredDataType[] = [];
let LAST_INSERT_TIME = Date.now();

const main = async () => {
  const client = await createDbConnection();

  const worker = new Worker<filteredDataType>(
    "trades-processing",
    async (job) => {
      const filteredData = job.data;

      FILTERED_DATA_ARRAY.push(filteredData);

      if (
        FILTERED_DATA_ARRAY.length >= 300 ||
        Date.now() - LAST_INSERT_TIME >= 5000
      ) {
        try {
          const events = FILTERED_DATA_ARRAY.map((data) => data.event);
          const event_times = FILTERED_DATA_ARRAY.map(
            (data) => data.event_time
          );
          const symbols = FILTERED_DATA_ARRAY.map((data) => data.symbol);
          const prices = FILTERED_DATA_ARRAY.map((data) => data.price);
          const quantities = FILTERED_DATA_ARRAY.map((data) => data.quantity);

          FILTERED_DATA_ARRAY = []; // WE keep this here because the insert takes time and the filtered data array is not updated so it triggers the insert multiple times
          LAST_INSERT_TIME = Date.now();

          const query = `
            INSERT INTO trades (event, event_time, symbol, price, quantity)
            SELECT * FROM unnest($1::varchar[], $2::timestamptz[], $3::varchar[], $4::decimal[], $5::decimal[])
          `;

          await client.query(query, [
            events,
            event_times,
            symbols,
            prices,
            quantities,
          ]);

          console.log("Inserted into db");
          console.log(events.length);
        } catch (e) {
          console.log(e);
        }
      }
    },
    {
      connection: { host: "127.0.0.1", port: 6379 },
    }
  );

  worker.on("completed", (job) => console.log(`Job ${job.id} has completed.`));

  worker.on("failed", (job, err) =>
    console.log(`Job ${job?.id} has failed with error: ${err.message}`)
  );
};

main();
