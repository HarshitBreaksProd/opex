import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:postgres@localhost:5432/postgres",
});

export async function createDbConnection() {
  await client.connect();
  return client;
}
