/*
  Warnings:

  - Added the required column `witnessId` to the `UserAnnotation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserAnnotation" ADD COLUMN     "witnessId" INTEGER NOT NULL;
