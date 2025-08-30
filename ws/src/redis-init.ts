import redis from "redis";

const redisUrl = "redis://localhost:6379";

const client = redis.createClient({url: redisUrl});

export const subscriber = client.duplicate();

