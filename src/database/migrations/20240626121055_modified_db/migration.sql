/*
  Warnings:

  - Made the column `releaseDate` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `releaseDate` to the `Series` table without a default value. This is not possible if the table is not empty.
  - Made the column `status` on table `Series` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Episode" ALTER COLUMN "releaseDate" SET DATA TYPE TIMESTAMP(6);

-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "releaseDate" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL;

-- AlterTable
ALTER TABLE "Series" ADD COLUMN     "releaseDate" TIMESTAMP(6) NOT NULL,
ALTER COLUMN "status" SET NOT NULL;
