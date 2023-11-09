/*
  Warnings:

  - A unique constraint covering the columns `[refuellingId]` on the table `FuelType` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `refuellingId` to the `FuelType` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FuelType" ADD COLUMN     "refuellingId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "FuelType_refuellingId_key" ON "FuelType"("refuellingId");

-- AddForeignKey
ALTER TABLE "FuelType" ADD CONSTRAINT "FuelType_refuellingId_fkey" FOREIGN KEY ("refuellingId") REFERENCES "refuellings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
