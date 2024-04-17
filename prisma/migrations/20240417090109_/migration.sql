/*
  Warnings:

  - A unique constraint covering the columns `[userid]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Thread" (
    "id" SERIAL NOT NULL,
    "content" TEXT,
    "image" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Thread_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userid_key" ON "Profile"("userid");
