/*
  Warnings:

  - You are about to drop the `Annotation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Annotation" DROP CONSTRAINT "Annotation_userId_fkey";

-- DropTable
DROP TABLE "Annotation";

-- CreateTable
CREATE TABLE "UserAnnotation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "start" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "is_deleted" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "original" TEXT NOT NULL,
    "modifiedContent" TEXT NOT NULL,

    CONSTRAINT "UserAnnotation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserAnnotation" ADD CONSTRAINT "UserAnnotation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
