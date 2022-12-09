/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `DisLikes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Likes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DisLikes_userId_key" ON "DisLikes"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Likes_userId_key" ON "Likes"("userId");
