-- AlterTable
ALTER TABLE "public"."trades" ADD COLUMN     "stopLoss" INTEGER,
ADD COLUMN     "stopLossDecPos" INTEGER,
ADD COLUMN     "takeProfit" INTEGER,
ADD COLUMN     "takeProfitDecPos" INTEGER;
