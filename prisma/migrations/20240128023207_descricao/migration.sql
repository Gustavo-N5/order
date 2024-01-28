/*
  Warnings:

  - You are about to drop the column `deescricao` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `preco` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `deescricao`,
    ADD COLUMN `descricao` TEXT NULL,
    MODIFY `preco` DECIMAL NOT NULL;
