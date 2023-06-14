/*
  Warnings:

  - Added the required column `price` to the `Gastos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Gastos` ADD COLUMN `price` FLOAT NOT NULL;
