// import Image from "next/image";
import Link from "next/link";
import { Movie, Series } from "@prisma/client";
import { Calendar } from "lucide-react";

import { formatDate } from "@/lib/utils";

import { Card, CardFooter } from "./ui/card";

interface Props {
  video: Movie | Series;
}

export default function VideoCard({ video }: Props) {
  const getPath = () => {
    if ("SERIES" === video.filmType) {
      return "/series/seasons/";
    }
    return "/movies/";
  };

  const { day, month, year } = formatDate(video.releaseDate.toString());

  return (
    <Card className="overflow-hidden border-neutral-200 dark:border-neutral-800">
      <img
        src={video.posterPath}
        alt={video.title}
        className="object-cover"
        width={300}
        height={450}
      />
      <CardFooter className="flex flex-col items-start p-2">
        <Link
          href={getPath() + video.slug}
          className="cursor-pointer text-xs font-semibold hover:text-primary active:text-primary-foreground"
        >
          {video.title}
        </Link>
        <p className="mt-1 flex items-center justify-between text-[0.6rem] text-muted-foreground">
          <span className="flex items-center justify-center gap-1">
            <Calendar className="size-3" />
            {day} {month} {year}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
}
