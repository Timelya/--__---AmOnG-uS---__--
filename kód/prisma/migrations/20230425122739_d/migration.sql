/*
  Warnings:

  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.

*/

-- CreateTable
CREATE TABLE `event` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `start` VARCHAR(255) NULL,
    `end` VARCHAR(255) NULL,
    `public` BOOLEAN NOT NULL DEFAULT false,
    `organizerId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `event` ADD CONSTRAINT `event_organizerId_fkey` FOREIGN KEY (`organizerId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
