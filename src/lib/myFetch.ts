import { cache } from "react";
import { FilmType, Prisma } from "@prisma/client";

import "server-only";

import db from "@/database/db";
import { SortType } from "@/types";

export const getMovies = cache(async (sort: SortType) => {
  try {
    if (sort === "recent") {
      const [total, result] = await Promise.all([
        await db.movie.count(),
        await db.movie.findMany({
          orderBy: {
            createdAt: "desc",
          },
        }),
      ]);
      return { result, total };
    }

    const [total, result] = await Promise.all([
      await db.movie.count(),
      await db.movie.findMany({
        orderBy: {
          title: sort,
        },
      }),
    ]);
    return { result, total };
  } catch (error) {
    throw new Error("Failed to fetch movies");
  }
});

export const getSeries = cache(async (sort: SortType) => {
  try {
    if (sort === "recent") {
      const [total, result] = await Promise.all([
        await db.series.count(),
        await db.series.findMany({
          orderBy: {
            createdAt: "desc",
          },
        }),
      ]);
      return { result, total };
    }
    const [total, result] = await Promise.all([
      await db.series.count(),
      await db.series.findMany({
        orderBy: {
          title: sort,
        },
      }),
    ]);
    return { result, total };
  } catch (error) {
    throw new Error("Failed to fetch series");
  }
});

export const getAnime = cache(async (sort: SortType) => {
  try {
    if (sort === "recent") {
      const [movies, series] = await Promise.all([
        await db.movie.findMany({
          where: {
            type: "ANIMATION",
          },
          orderBy: {
            createdAt: "desc",
          },
        }),
        await db.series.findMany({
          where: {
            type: "ANIMATION",
          },
          orderBy: {
            createdAt: "desc",
          },
        }),
      ]);
      return [...movies, ...series];
    }
    const [movies, series] = await Promise.all([
      await db.movie.findMany({
        where: {
          type: "ANIMATION",
        },
        orderBy: {
          title: sort,
        },
      }),
      await db.series.findMany({
        where: {
          type: "ANIMATION",
        },
        orderBy: {
          title: sort,
        },
      }),
    ]);
    return [...movies, ...series];
  } catch (error) {
    throw new Error("Failed to fetch anime");
  }
});

export const getRecommendations = cache(async () => {
  try {
    const [series, movies] = await Promise.all([
      await db.series.findMany({
        take: 3,
        orderBy: {
          rating: "desc",
        },
      }),
      await db.movie.findMany({
        take: 3,
        orderBy: {
          rating: "desc",
        },
      }),
    ]);
    return [...movies, ...series].sort((a, b) => b.rating - a.rating);
  } catch (error) {
    throw new Error("Failed to fetch recommendations");
  }
});

export const getMovie = cache(async (where: Prisma.MovieWhereUniqueInput) => {
  try {
    return await db.movie.findUnique({
      where: where,
    });
  } catch (error) {
    throw new Error("Failed to fetch movie");
  }
});

export const getSeasons = cache(
  async (where: Prisma.SeriesWhereUniqueInput) => {
    try {
      return await db.series.findUnique({
        where: where,
        include: {
          seasons: true,
        },
      });
    } catch (error) {
      throw new Error("Failed to fetch seasons");
    }
  },
);

export const getEpisodes = cache(
  async (where: Prisma.SeasonWhereUniqueInput) => {
    try {
      return await db.season.findUnique({
        where,
        include: {
          episodes: true,
        },
      });
    } catch (error) {
      throw new Error("Failed to fetch episodes");
    }
  },
);

export const getOneSeries = cache(async (seriesId: string) => {
  try {
    return await db.series.findUnique({
      where: {
        id: seriesId,
      },
    });
  } catch (error) {
    throw new Error("Failed to fetch one series");
  }
});

export const getHome = cache(async () => {
  const [movies, series] = await Promise.all([
    await getMovies("recent"),
    await getSeries("recent"),
  ]);
  const data = [...movies.result, ...series.result].sort((a, b) => {
    // Using getTime() to compare Date objects
    const dateA = a.createdAt instanceof Date ? a.createdAt.getTime() : 0;
    const dateB = b.createdAt instanceof Date ? b.createdAt.getTime() : 0;
    return dateB - dateA; // Sorting in descending order
  });
  return {
    data,
    length: movies.total + series.total,
  };
});

export const getCount = cache(async () => {
  const [movies, series, anime] = await Promise.all([
    await db.movie.count(),
    await db.series.count(),
    (await getAnime("recent")).length,
  ]);

  return { movies, series, anime };
});

export const getRecent = cache(async (limit: number) => {
  const data = await getHome();
  return data.data.slice(0, limit);
});

export async function deleteItem(id: string, type: FilmType) {
  const deleteQuery = {
    where: {
      id,
    },
  };
  try {
    switch (type) {
      case "MOVIE":
        return await db.movie.delete(deleteQuery);
      case "SERIES":
        return await db.series.delete(deleteQuery);
      default:
        throw new Error("Invalid type");
    }
  } catch (error) {
    throw new Error("Failed to delete");
  }
}
