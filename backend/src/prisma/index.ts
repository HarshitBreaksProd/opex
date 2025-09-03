import { PrismaClient } from "./generated/prisma";

export let prismaClient: PrismaClient;

if (
  process.env.NODE_ENV !== "production" &&
  (globalThis as unknown as { prismaClient: PrismaClient }).prismaClient
) {
  prismaClient = (globalThis as unknown as { prismaClient: PrismaClient })
    .prismaClient;
} else {
  prismaClient = new PrismaClient();
  (globalThis as unknown as { prismaClient: PrismaClient }).prismaClient =
    prismaClient;
}
