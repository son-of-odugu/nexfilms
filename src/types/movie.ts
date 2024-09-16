import { z } from "zod";

import { FilmTypeEnum, StatusEnum, TypeEnum } from "./enums";

export const MovieSchema = z.object({
  rating: z
    .number()
    .min(0, { message: "Rating must be at least 0" })
    .max(10, { message: "Rating must be at most 10" }),
  runtime: z.number().min(0, { message: "Runtime must be a positive number" }),
  type: TypeEnum.optional().default("FILM"),
  filmType: FilmTypeEnum.optional().default("MOVIE"),
  releaseDate: z
    .date()
    .optional()
    .refine((date) => date instanceof Date, { message: "Invalid date" }),
  title: z
    .string()
    .max(255, { message: "Title must be at most 255 characters" })
    .min(0, {
      message: "title must not be empty",
    }),
  tagline: z
    .string()
    .max(200, { message: "Tagline must be at most 200 characters" })
    .min(0, {
      message: "tagline must not be empty",
    }),
  trailerPath: z
    .string()
    .max(255, { message: "Trailer Path must be at most 255 characters" })
    .min(0, {
      message: "trailer path must not be empty",
    }),
  videoPath: z.string({ message: "Video Path is required" }),
  description: z.string({ message: "Description is required" }),
  posterPath: z
    .string()
    .max(255, { message: "Poster Path must be at most 255 characters" })
    .min(0, {
      message: "poster path must not be empty",
    }),
  genre: z.array(z.string(), { message: "Genre is required" }),
  slug: z.string({ message: "Slug is required" }),
  status: StatusEnum.optional().default("RELEASED"),
});

export const moviesSchema = z.array(MovieSchema);
