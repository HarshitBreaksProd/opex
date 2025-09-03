/*
  Warnings:

  - Added the required column `initialPrice` to the `trades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."trades" ADD COLUMN     "initialPrice" INTEGER NOT NULL,
ADD COLUMN     "initialPriceDecPos" INTEGER NOT NULL DEFAULT 4,
ALTER COLUMN "marginDecPos" SET DEFAULT 2;
