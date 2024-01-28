/*
  Warnings:

  - Added the required column `ativo` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ativo` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Category` ADD COLUMN `ativo` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Product` ADD COLUMN `ativo` BOOLEAN NOT NULL;
