/*
  Warnings:

  - You are about to drop the column `status` on the `Episode` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Season` table. All the data in the column will be lost.
  - You are about to drop the column `releaseDate` on the `Series` table. All the data in the column will be lost.
  - Made the column `releaseDate` on table `Episode` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Episode" DROP COLUMN "status",
ALTER COLUMN "releaseDate" SET NOT NULL,
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "status" SET DEFAULT 'UNRELEASED',
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Season" DROP COLUMN "status",
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Series" DROP COLUMN "releaseDate",
ALTER COLUMN "status" SET DEFAULT 'UNRELEASED',
ALTER COLUMN "createdAt" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;
