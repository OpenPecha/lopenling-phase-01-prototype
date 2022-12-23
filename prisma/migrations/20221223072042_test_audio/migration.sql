-- CreateTable
CREATE TABLE "Audio" (
    "id" SERIAL NOT NULL,
    "private" BOOLEAN NOT NULL DEFAULT true,
    "witnessId" INTEGER NOT NULL,
    "start" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "base64" TEXT NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Audio_id_key" ON "Audio"("id");

-- AddForeignKey
ALTER TABLE "Audio" ADD CONSTRAINT "Audio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
