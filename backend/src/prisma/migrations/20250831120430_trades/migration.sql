-- CreateEnum
CREATE TYPE "public"."tradeType" AS ENUM ('buy', 'sell');

-- CreateTable
CREATE TABLE "public"."trades" (
    "id" TEXT NOT NULL,
    "margin" INTEGER NOT NULL,
    "marginDecPos" INTEGER NOT NULL DEFAULT 4,
    "asset" TEXT NOT NULL,
    "type" "public"."tradeType" NOT NULL,
    "leverage" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "trades_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."trades" ADD CONSTRAINT "trades_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
