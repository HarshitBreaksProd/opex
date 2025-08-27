import { Queue } from "bullmq";
import IORedis from "ioredis";

const redisUrl = "redis://localhost:6379";

const redisConnection = new IORedis(redisUrl, {
  maxRetriesPerRequest: null,
  lazyConnect: true,
});

export const processingQueue = new Queue("trades-processing", {
  connection: redisConnection,
});
