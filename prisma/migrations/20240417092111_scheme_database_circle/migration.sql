/*
  Warnings:

  - You are about to drop the column `image` on the `Thread` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Thread" DROP COLUMN "image",
ADD COLUMN     "threadId" INTEGER;

-- CreateTable
CREATE TABLE "Like" (
    "threadId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("threadId","userId")
);

-- CreateTable
CREATE TABLE "ThreadImage" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "threadId" INTEGER NOT NULL,

    CONSTRAINT "ThreadImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "Thread"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "Thread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ThreadImage" ADD CONSTRAINT "ThreadImage_threadId_fkey" FOREIGN KEY ("threadId") REFERENCES "Thread"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
