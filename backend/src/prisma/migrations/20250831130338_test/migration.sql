-- AlterTable
ALTER TABLE "public"."trades" ADD COLUMN     "pnl" INTEGER,
ADD COLUMN     "pnlDecPos" INTEGER;

-- AlterTable
ALTER TABLE "public"."users" ALTER COLUMN "balance" SET DEFAULT 50345225;
