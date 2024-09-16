import { z } from "zod";

import { FilmTypeEnum, StatusEnum, TypeEnum } from "./enums";

const SeriesSchema = z.object({
  rating: z.number(),
  runtime: z.number(),
  type: TypeEnum.optional().default("FILM"),
  filmType: FilmTypeEnum.optional().default("SERIES"),
  title: z.string().max(255),
  tagline: z.string().max(200),
  description: z.string(),
  posterPath: z.string().max(255),
  status: StatusEnum.optional().default("RELEASED"),
});

const SeasonSchema = z.object({
  seasonNumber: z.number(),
  seriesId: z.string(),
  slug: z.string(),
});

const EpisodeSchema = z.object({
  title: z.string().max(255),
  episodeNumber: z.number(),
  releaseDate: z.date(),
  description: z.string(),
  videoPath: z.string(),
  slug: z.string(),
});

export { SeriesSchema, SeasonSchema, EpisodeSchema };
