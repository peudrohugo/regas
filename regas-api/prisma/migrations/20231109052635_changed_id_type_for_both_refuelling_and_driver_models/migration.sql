/*
  Warnings:

  - The primary key for the `drivers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `driverId` on table `refuellings` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "refuellings" DROP CONSTRAINT "refuellings_driverId_fkey";

-- AlterTable
ALTER TABLE "drivers" DROP CONSTRAINT "drivers_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "drivers_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "drivers_id_seq";

-- AlterTable
ALTER TABLE "refuellings" ALTER COLUMN "driverId" SET NOT NULL,
ALTER COLUMN "driverId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "refuellings" ADD CONSTRAINT "refuellings_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "drivers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
