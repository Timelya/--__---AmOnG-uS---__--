/*
  Warnings:

  - Added the required column `email` to the `user` table without a default value. This is not possible if the table is not empty.

*/

-- CreateTable
CREATE TABLE `invites` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eventid` INTEGER NOT NULL,
    `userid` INTEGER NOT NULL,
    `accepted` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
