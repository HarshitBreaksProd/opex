/*
  Warnings:

  - You are about to drop the column `initialPrice` on the `trades` table. All the data in the column will be lost.
  - You are about to drop the column `initialPriceDecPos` on the `trades` table. All the data in the column will be lost.
  - Added the required column `openPrice` to the `trades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."trades" DROP COLUMN "initialPrice",
DROP COLUMN "initialPriceDecPos",
ADD COLUMN     "openPrice" INTEGER NOT NULL,
ADD COLUMN     "openPriceDecPos" INTEGER NOT NULL DEFAULT 4;
