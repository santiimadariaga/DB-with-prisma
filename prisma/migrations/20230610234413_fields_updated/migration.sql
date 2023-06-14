-- AlterTable
ALTER TABLE `Gastos` ADD COLUMN `description` VARCHAR(255) NOT NULL DEFAULT 'varias';

-- AlterTable
ALTER TABLE `Users` ADD COLUMN `name` VARCHAR(255) NOT NULL DEFAULT 'user';
