/*
  Warnings:

  - A unique constraint covering the columns `[slug,seasonId]` on the table `Episode` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Season` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug,seriesId]` on the table `Season` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Series` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug,title]` on the table `Series` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Season` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Series` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Episode_episodeNumber_seasonId_idx";

-- DropIndex
DROP INDEX "Episode_episodeNumber_seasonId_key";

-- DropIndex
DROP INDEX "Season_seasonNumber_seriesId_idx";

-- DropIndex
DROP INDEX "Season_seasonNumber_seriesId_key";

-- AlterTable
ALTER TABLE "Season" ADD COLUMN     "slug" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Series" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Episode_slug_seasonId_idx" ON "Episode"("slug", "seasonId");

-- CreateIndex
CREATE UNIQUE INDEX "Episode_slug_seasonId_key" ON "Episode"("slug", "seasonId");

-- CreateIndex
CREATE UNIQUE INDEX "Season_slug_key" ON "Season"("slug");

-- CreateIndex
CREATE INDEX "Season_slug_seriesId_idx" ON "Season"("slug", "seriesId");

-- CreateIndex
CREATE UNIQUE INDEX "Season_slug_seriesId_key" ON "Season"("slug", "seriesId");

-- CreateIndex
CREATE UNIQUE INDEX "Series_slug_key" ON "Series"("slug");

-- CreateIndex
CREATE INDEX "Series_slug_title_idx" ON "Series"("slug", "title");

-- CreateIndex
CREATE UNIQUE INDEX "Series_slug_title_key" ON "Series"("slug", "title");
