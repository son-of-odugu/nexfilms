import { z } from "zod";

export const SortSchema = z.union([
  z.literal("asc"),
  z.literal("desc"),
  z.literal("recent"),
]);

export type SortType = z.infer<typeof SortSchema>;
