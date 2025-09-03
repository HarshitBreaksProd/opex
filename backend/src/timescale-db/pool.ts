import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgresql://postgres:postgres@localhost:5432/postgres",
});

export async function createPoolConnection() {
  await pool.connect();
  return pool;
}
