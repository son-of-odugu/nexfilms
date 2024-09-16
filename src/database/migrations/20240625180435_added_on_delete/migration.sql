-- DropForeignKey
ALTER TABLE "Episode" DROP CONSTRAINT "Episode_seasonId_fkey";

-- DropForeignKey
ALTER TABLE "Season" DROP CONSTRAINT "Season_seriesId_fkey";

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE CASCADE ON UPDATE CASCADE;
