/*
  Warnings:

  - You are about to drop the `Driver` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Refuelling` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Refuelling" DROP CONSTRAINT "Refuelling_driverId_fkey";

-- DropTable
DROP TABLE "Driver";

-- DropTable
DROP TABLE "Refuelling";

-- CreateTable
CREATE TABLE "refuellings" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quantity" DOUBLE PRECISION NOT NULL,
    "driverId" INTEGER,

    CONSTRAINT "refuellings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "drivers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "drivers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "refuellings" ADD CONSTRAINT "refuellings_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "drivers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
