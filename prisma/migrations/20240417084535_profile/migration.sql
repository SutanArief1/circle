-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "userid" INTEGER NOT NULL,
    "avatar" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "bio" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
