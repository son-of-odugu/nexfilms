/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "releaseDate" DROP NOT NULL,
ALTER COLUMN "releaseDate" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP(6);

-- CreateIndex
CREATE UNIQUE INDEX "Movie_slug_key" ON "Movie"("slug");
