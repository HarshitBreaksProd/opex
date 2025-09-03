/*
  Warnings:

  - You are about to alter the column `balance` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Decimal(15,4)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "balDecPos" INTEGER NOT NULL DEFAULT 4,
ALTER COLUMN "balance" SET DEFAULT 50000000,
ALTER COLUMN "balance" SET DATA TYPE INTEGER;
