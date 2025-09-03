-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "balance" DECIMAL(15,4) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
