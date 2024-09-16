import { z } from "zod";

export const TypeEnum = z.enum(["FILM", "ANIMATION"]);
export const FilmTypeEnum = z.enum(["MOVIE", "SERIES"]);
export const StatusEnum = z.enum(["RELEASED", "UNRELEASED"]);
