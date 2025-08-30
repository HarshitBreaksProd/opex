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
        price DECIMAL(15, 8) NOT NULL,
        quantity DECIMAL(15, 8) NOT NULL,
        PRIMARY KEY (id, event_time)
      );
    `);

    await client.query(`
      SELECT create_hypertable('trades', 'event_time', if_not_exists => TRUE);
    `);

    // 1 min
    await client.query(`
      CREATE MATERIALIZED VIEW IF NOT EXISTS candles_1m
      WITH (timescaledb.continuous) AS
      SELECT time_bucket('1 minute', event_time) AS bucket,
             symbol,
             first(price, event_time) AS open,
             max(price) AS high,
             min(price) AS low,
             last(price, event_time) AS close
      FROM trades
      GROUP BY time_bucket('1 minute', event_time), symbol;
    `);

    await client.query(`
      SELECT add_continuous_aggregate_policy('candles_1m'::regclass,
        start_offset => NULL,
        end_offset => '1 minute'::interval,
        schedule_interval => '1 minute'::interval
      );
    `);

    // 5 min
    await client.query(`
      CREATE MATERIALIZED VIEW IF NOT EXISTS candles_5m
      WITH (timescaledb.continuous) AS
      SELECT time_bucket('5 minute', event_time) AS bucket,
             symbol,
             first(price, event_time) AS open,
             max(price) AS high,
             min(price) AS low,
             last(price, event_time) AS close
      FROM trades
      GROUP BY time_bucket('5 minute', event_time), symbol;
    `);

    await client.query(`
      SELECT add_continuous_aggregate_policy('candles_5m'::regclass,
        start_offset => '1 day'::interval,
        end_offset => NULL,
        schedule_interval => '5 minute'::interval
      );
    `);

    // 15 mins
    await client.query(`
      CREATE MATERIALIZED VIEW IF NOT EXISTS candles_15m
      WITH (timescaledb.continuous) AS
      SELECT time_bucket('15 minute', event_time) AS bucket,
             symbol,
             first(price, event_time) AS open,
             max(price) AS high,
             min(price) AS low,
             last(price, event_time) AS close
      FROM trades
      GROUP BY time_bucket('15 minute', event_time), symbol;
    `);

    await client.query(`
      SELECT add_continuous_aggregate_policy('candles_15m'::regclass,
        start_offset => '1 day'::interval,
        end_offset => NULL,
        schedule_interval => '15 minute'::interval
      );
    `);

    // 30 mins
    await client.query(`
      CREATE MATERIALIZED VIEW IF NOT EXISTS candles_30m
      WITH (timescaledb.continuous) AS
      SELECT time_bucket('30 minute', event_time) AS bucket,
             symbol,
             first(price, event_time) AS open,
             max(price) AS high,
             min(price) AS low,
             last(price, event_time) AS close
      FROM trades
      GROUP BY time_bucket('30 minute', event_time), symbol;
    `);

    await client.query(`
      SELECT add_continuous_aggregate_policy('candles_30m'::regclass,
        start_offset => '1 day'::interval,
        end_offset => NULL,
        schedule_interval => '30 minute'::interval
      );
    `);

    // 1 hour
    await client.query(`
      CREATE MATERIALIZED VIEW IF NOT EXISTS candles_1h
      WITH (timescaledb.continuous) AS
      SELECT time_bucket('1 hour', event_time) AS bucket,
             symbol,
             first(price, event_time) AS open,
             max(price) AS high,
             min(price) AS low,
             last(price, event_time) AS close
      FROM trades
      GROUP BY time_bucket('1 hour', event_time), symbol;
    `);

    await client.query(`
      SELECT add_continuous_aggregate_policy('candles_1h'::regclass,
        start_offset => '2 day'::interval,
        end_offset => NULL,
        schedule_interval => '1 hour'::interval
      );
    `);

    // 4 hour
    await client.query(`
      CREATE MATERIALIZED VIEW IF NOT EXISTS candles_4h
      WITH (timescaledb.continuous) AS
      SELECT time_bucket('4 hour', event_time) AS bucket,
             symbol,
             first(price, event_time) AS open,
             max(price) AS high,
             min(price) AS low,
             last(price, event_time) AS close
      FROM trades
      GROUP BY time_bucket('4 hour', event_time), symbol;
    `);

    await client.query(`
      SELECT add_continuous_aggregate_policy('candles_4h'::regclass,
        start_offset => '2 day'::interval,
        end_offset => NULL,
        schedule_interval => '4 hour'::interval
      );
    `);

    // 1 day
    await client.query(`
      CREATE MATERIALIZED VIEW IF NOT EXISTS candles_1d
      WITH (timescaledb.continuous) AS
      SELECT time_bucket('1 day', event_time) AS bucket,
             symbol,
             first(price, event_time) AS open,
             max(price) AS high,
             min(price) AS low,
             last(price, event_time) AS close
      FROM trades
      GROUP BY time_bucket('1 day', event_time), symbol;
    `);

    await client.query(`
      SELECT add_continuous_aggregate_policy('candles_1d'::regclass,
        start_offset => '1 day'::interval,
        end_offset => NULL,
        schedule_interval => '1 day'::interval
      );
    `);

    // 7 day
    await client.query(`
      CREATE MATERIALIZED VIEW IF NOT EXISTS candles_7d
      WITH (timescaledb.continuous) AS
      SELECT time_bucket('7 day', event_time) AS bucket,
             symbol,
             first(price, event_time) AS open,
             max(price) AS high,
             min(price) AS low,
             last(price, event_time) AS close
      FROM trades
      GROUP BY time_bucket('7 day', event_time), symbol;
    `);

    await client.query(`
      SELECT add_continuous_aggregate_policy('candles_7d'::regclass,
        start_offset => '30 day'::interval,
        end_offset => NULL,
        schedule_interval => '7 day'::interval
      );
    `);

    // 30 days
    await client.query(`
      CREATE MATERIALIZED VIEW IF NOT EXISTS candles_30d
      WITH (timescaledb.continuous) AS
      SELECT time_bucket('30 day', event_time) AS bucket,
             symbol,
             first(price, event_time) AS open,
             max(price) AS high,
             min(price) AS low,
             last(price, event_time) AS close
      FROM trades
      GROUP BY time_bucket('30 day', event_time), symbol;
    `);

    await client.query(`
      SELECT add_continuous_aggregate_policy('candles_30d'::regclass,
        start_offset => '120 day'::interval,
        end_offset => NULL,
        schedule_interval => '30 day'::interval
      );
    `);

    console.log("DB init completed");
  } catch (error) {
    console.log("error");
    console.log(error);
  }
}

main();
