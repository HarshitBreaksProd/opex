import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:postgres@localhost:5432/postgres",
});

async function main() {
  await client.connect();

  try {
    await client.query(`
      CREATE EXTENSION IF NOT EXISTS timescaledb;
    `);

    await client.query(`
      CREATE TABLE IF NOT EXISTS trades (
        id SERIAL,
        event VARCHAR(25) NOT NULL,
        event_time TIMESTAMPTZ NOT NULL,
        symbol VARCHAR(25) NOT NULL,
        price INTEGER NOT NULL,
        decimal_pos INTEGER NOT NULL,
        PRIMARY KEY (id, event_time)
      );
    `);

    await client.query(`
      SELECT create_hypertable('trades', 'event_time', if_not_exists => TRUE);
    `);

    const intervals = [
      { viewSuffix: "1m", timeBucket: "1 minute", startOffset: "1 day" },
      { viewSuffix: "5m", timeBucket: "5 minute", startOffset: "1 day" },
      { viewSuffix: "15m", timeBucket: "15 minute", startOffset: "1 day" },
      { viewSuffix: "30m", timeBucket: "30 minute", startOffset: "1 day" },
      { viewSuffix: "1h", timeBucket: "1 hour", startOffset: "2 day" },
      { viewSuffix: "4h", timeBucket: "4 hour", startOffset: "2 day" },
      { viewSuffix: "1d", timeBucket: "1 day", startOffset: "1 day" },
      { viewSuffix: "7d", timeBucket: "7 day", startOffset: "30 day" },
      { viewSuffix: "30d", timeBucket: "30 day", startOffset: "120 day" },
    ];

    for (const interval of intervals) {
      const viewName = `candles_${interval.viewSuffix}`;

      await client.query(`
        CREATE MATERIALIZED VIEW IF NOT EXISTS ${viewName}
        WITH (timescaledb.continuous) AS
        SELECT time_bucket('${interval.timeBucket}', event_time) AS start_time,
               symbol,
               first(price, event_time) AS open,
               max(price) AS high,
               min(price) AS low,
               last(price, event_time) AS close,
               decimal_pos
        FROM trades
        GROUP BY time_bucket('${interval.timeBucket}', event_time), symbol, decimal_pos;
      `);

      await client.query(`
        SELECT add_continuous_aggregate_policy('${viewName}'::regclass,
          start_offset => '${interval.startOffset}'::interval,
          end_offset => NULL,
          schedule_interval => '${interval.timeBucket}'::interval
        );
      `);
    }

    console.log("DB init completed");
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}

main();
