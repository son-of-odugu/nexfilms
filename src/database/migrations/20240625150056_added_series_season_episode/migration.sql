-- CreateTable
CREATE TABLE "Series" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "runtime" INTEGER NOT NULL,
    "type" "Type" DEFAULT 'FILM',
    "filmType" "FilmType" DEFAULT 'SERIES',
    "releaseDate" TIMESTAMP(6),
    "title" VARCHAR(255) NOT NULL,
    "tagline" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "posterPath" VARCHAR(255) NOT NULL,
    "status" "Status" DEFAULT 'RELEASED',
    "trailerPath" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Series_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Season" (
    "id" TEXT NOT NULL,
    "seasonNumber" INTEGER NOT NULL,
    "seriesId" TEXT NOT NULL,
    "status" "Status" DEFAULT 'RELEASED',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Season_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episode" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "episodeNumber" INTEGER NOT NULL,
    "releaseDate" TIMESTAMP(3),
    "description" TEXT NOT NULL,
    "videoPath" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "seasonId" TEXT NOT NULL,
    "status" "Status" DEFAULT 'RELEASED',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Episode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Season_seasonNumber_seriesId_idx" ON "Season"("seasonNumber", "seriesId");

-- CreateIndex
CREATE UNIQUE INDEX "Season_seasonNumber_seriesId_key" ON "Season"("seasonNumber", "seriesId");

-- CreateIndex
CREATE UNIQUE INDEX "Episode_slug_key" ON "Episode"("slug");

-- CreateIndex
CREATE INDEX "Episode_episodeNumber_seasonId_idx" ON "Episode"("episodeNumber", "seasonId");

-- CreateIndex
CREATE UNIQUE INDEX "Episode_episodeNumber_seasonId_key" ON "Episode"("episodeNumber", "seasonId");

-- AddForeignKey
ALTER TABLE "Season" ADD CONSTRAINT "Season_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "Series"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Episode" ADD CONSTRAINT "Episode_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
