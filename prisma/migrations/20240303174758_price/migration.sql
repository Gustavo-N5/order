/*
  Warnings:

  - You are about to alter the column `valor_total` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Double`.

*/
-- AlterTable
ALTER TABLE `Order` MODIFY `valor_total` DOUBLE NOT NULL;
