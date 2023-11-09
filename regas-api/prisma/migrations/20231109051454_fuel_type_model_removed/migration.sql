/*
  Warnings:

  - You are about to drop the `FuelType` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fuelType` to the `refuellings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `refuellings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FuelType" DROP CONSTRAINT "FuelType_refuellingId_fkey";

-- AlterTable
ALTER TABLE "refuellings" ADD COLUMN     "fuelType" TEXT NOT NULL,
ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "FuelType";
