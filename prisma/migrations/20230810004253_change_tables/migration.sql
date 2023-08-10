/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditCards" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "limit" TEXT NOT NULL,
    "invoiceDueDate" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CreditCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardPurchases" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "purchaseInstallments" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "Category" TEXT NOT NULL,
    "PurchaseDate" TIMESTAMP(3) NOT NULL,
    "creditCardId" TEXT NOT NULL,

    CONSTRAINT "CardPurchases_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "CreditCards" ADD CONSTRAINT "CreditCards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardPurchases" ADD CONSTRAINT "CardPurchases_creditCardId_fkey" FOREIGN KEY ("creditCardId") REFERENCES "CreditCards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
