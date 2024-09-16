import { FilmType, PrismaClient } from "@prisma/client";

import moviesData from "../data/movies.json";
import series from "../data/series.json";

type MovieType = (typeof moviesData)[0];
type SeriesType = (typeof series)[0];
type SeasonType = (typeof series)[0]["seasons"][0];
type EpisodeType = (typeof series)[0]["seasons"][0]["episodes"][0];

const prisma = new PrismaClient();

async function createMovie(movie: MovieType) {
  const slug = await getSlug(movie.title, "MOVIE", movie.releaseDate);
  const existingMovie = await prisma.movie.findUnique({ where: { slug } });

  if (existingMovie) {
    console.log(`Movie with slug "${slug}" already exists. Skipping creation.`);
    return;
  }

  await prisma.movie.create({
    data: {
      ...movie,
      filmType: "MOVIE",
      slug,
      type: movie.type === "ANIMATION" ? "ANIMATION" : "FILM",
      releaseDate: new Date(movie.releaseDate).toISOString(),
      status: "RELEASED",
    },
  });
}

function formatDate(date: string) {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "short" });
  const day = d.getDate();
  const year = d.getFullYear();
  return { month, day, year };
}

async function getSlug(title: string, filmType: FilmType, date: string) {
  const slug = title.toLowerCase().replace(/ /g, "-");
  const { year } = formatDate(date);
  return `${slug}-${year}-${filmType.toLowerCase()}`;
}

async function createEpisode(
  episode: EpisodeType,
  episodeNumber: number,
  seasonId: string,
  slug: string,
) {
  const newSlug = slug + `-episode-${episodeNumber}`;

  // Check if the episode already exists
  const existingEpisode = await prisma.episode.findUnique({
    where: { slug: newSlug },
  });

  if (existingEpisode) {
    console.log(
      `Episode with slug "${newSlug}" already exists. Skipping creation.`,
    );
    return;
  }

  await prisma.episode.create({
    data: {
      title: episode.title,
      episodeNumber: episodeNumber,
      runtime: episode.runtime,
      releaseDate: episode.releaseDate,
      description: episode.description,
      videoPath: episode.videoPath,
      slug: newSlug,
      seasonId,
    },
  });
}

async function createSeason(
  season: SeasonType,
  seasonNumber: number,
  seriesId: string,
  slug: string,
) {
  const newSlug = slug + `-season-${seasonNumber}`;
  const existingSeason = await prisma.season.findUnique({
    where: { slug: newSlug },
  });

  if (existingSeason) {
    console.log(
      `Season with slug "${newSlug}" already exists. Skipping creation.`,
    );
    return;
  }

  const newSeason = await prisma.season.create({
    data: {
      seasonNumber: seasonNumber,
      seriesId,
      slug: newSlug,
    },
  });

  await Promise.all(
    season.episodes.map((episode, index) =>
      createEpisode(episode, index + 1, newSeason.id, newSeason.slug),
    ),
  );
}

async function createSeries(item: SeriesType) {
  const slug = await getSlug(item.title, "SERIES", item.releaseDate);
  const existingSeries = await prisma.series.findUnique({ where: { slug } });

  if (existingSeries) {
    console.log(
      `Series with slug "${slug}" already exists. Skipping creation.`,
    );
    return;
  }

  const newSeries = await prisma.series.create({
    data: {
      filmType: "SERIES",
      slug,
      type: item.type === "ANIMATION" ? "ANIMATION" : "FILM",
      tagline: item.tagline,
      title: item.title,
      rating: item.rating,
      description: item.description,
      posterPath: item.posterPath,
      trailerPath: item.trailerPath,
      status: "RELEASED",
      releaseDate: new Date(item.releaseDate).toISOString(),
    },
  });

  await Promise.all(
    item.seasons.map((season, index) =>
      createSeason(season, index + 1, newSeries.id, newSeries.slug),
    ),
  );
}

async function seedSeries() {
  for (const item of series) {
    await createSeries(item);
  }

  const rt = await prisma.series.findMany();
  console.log({ series: rt });
}

async function seedMovies() {
  await Promise.all(
    moviesData.map(async (movie) => {
      await createMovie(movie);
    }),
  );

  const movies = await prisma.movie.findMany();
  console.log({ movies });
}

async function main() {
  try {
    // Uncomment this if you also want to seed movies
    await seedMovies();
    // add interval before running
    setTimeout(seedSeries, 5000);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
