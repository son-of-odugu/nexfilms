import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "@/constants";
import { SortSchema, SortType } from "@/types";
import { FilmType } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(title: string, type: string) {
  const slug = type.toLowerCase();
  return `${slug}/${title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")}`;
}

export async function getSlug(title: string, filmType: FilmType, date: string) {
  const slug = title.toLowerCase().replace(/ /g, "-");
  const { year } = formatDate(date);
  return `${slug}-${year}-${filmType.toLowerCase()}`;
}

export function getVideoId(video: string) {
  const url = new URL(video);
  return url.searchParams.get("v");
}

export function formatDate(date: string) {
  const d = new Date(date);
  const month = d.toLocaleString("default", { month: "short" });
  const day = d.getDate();
  const year = d.getFullYear();
  return { month, day, year };
}

export async function getPaginationParams(searchParams: SearchParams) {
  const page = searchParams["page"]?.toString();
  const currentPage = parseInt(page ?? DEFAULT_PAGE.toString(), 10);
  const perPage = DEFAULT_PER_PAGE;
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  return { start, end };
}

export function isEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export function getSortOrder(sortOrder: string): SortType {
  const order = SortSchema.safeParse(sortOrder);
  if (order.success) return order.data;
  return "recent";
}

export function formatTimeSince(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

  if (seconds < 60) {
    return "Just now";
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes === 1) {
    return "1 minute ago";
  }

  return `${minutes} minutes ago`;
}
