/*
  Warnings:

  - You are about to drop the column `Category` on the `CardPurchases` table. All the data in the column will be lost.
  - Added the required column `category` to the `CardPurchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CardPurchases" DROP COLUMN "Category",
ADD COLUMN     "category" TEXT NOT NULL;
