-- CreateEnum
CREATE TYPE "Type" AS ENUM ('FILM', 'ANIMATION');

-- CreateEnum
CREATE TYPE "FilmType" AS ENUM ('MOVIE', 'SERIES');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('RELEASED', 'UNRELEASED');

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "runtime" INTEGER NOT NULL,
    "type" "Type" DEFAULT 'FILM',
    "filmType" "FilmType" DEFAULT 'MOVIE',
    "releaseDate" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "tagline" VARCHAR(200) NOT NULL,
    "trailerPath" VARCHAR(255) NOT NULL,
    "videoPath" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "posterPath" VARCHAR(255) NOT NULL,
    "genre" TEXT[],
    "slug" TEXT NOT NULL,
    "status" "Status" DEFAULT 'RELEASED',
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
