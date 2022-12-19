/*
  Warnings:

  - You are about to drop the column `modifiedContent` on the `UserAnnotation` table. All the data in the column will be lost.
  - Added the required column `content` to the `UserAnnotation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserAnnotation" DROP COLUMN "modifiedContent",
ADD COLUMN     "content" TEXT NOT NULL;
