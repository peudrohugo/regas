-- CreateEnum
CREATE TYPE "Fuel" AS ENUM ('GASOLINE', 'ETANOL', 'DIESEL');

-- CreateTable
CREATE TABLE "Refuelling" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quantity" DOUBLE PRECISION NOT NULL,
    "driverId" INTEGER,

    CONSTRAINT "Refuelling_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuelType" (
    "id" SERIAL NOT NULL,
    "type" "Fuel" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FuelType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Refuelling" ADD CONSTRAINT "Refuelling_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE SET NULL ON UPDATE CASCADE;
