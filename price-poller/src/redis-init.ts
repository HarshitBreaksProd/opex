import { Queue } from "bullmq";
import redis from "redis";

const redisUrl = "redis://localhost:6379";

export const processingQueue = new Queue("trades-processing", {
  connection: { host: "127.0.0.1", port: 6379 },
});

export const publisher = redis.createClient({ url: redisUrl });
