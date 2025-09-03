-- CreateEnum
CREATE TYPE "public"."orderStatus" AS ENUM ('open', 'close');

-- AlterTable
ALTER TABLE "public"."trades" ADD COLUMN     "closePrice" INTEGER,
ADD COLUMN     "closePriceDecPos" INTEGER,
ADD COLUMN     "orderStatus" "public"."orderStatus" NOT NULL DEFAULT 'open';
