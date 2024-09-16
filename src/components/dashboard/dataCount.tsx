import { ConeIcon, FilmIcon, GlassesIcon, SmileIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type DataCounts = {
  anime: number;
  movies: number;
  series: number;
};

interface Props {
  data: DataCounts;
}

const value = [
  {
    name: "movies",
    icon: FilmIcon,
    count: "movies",
  },
  {
    name: "series",
    icon: ConeIcon,
    count: "series",
  },
  {
    name: "animations",
    icon: SmileIcon,
    count: "anime",
  },
  {
    name: "total",
    icon: GlassesIcon,
    count: "total",
  },
] as const;

export default function DataCount({ data }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-4">
      {value.map(({ name, count, icon: Icon }) => (
        <Card
          key={name}
          className="hover:bg-accent hover:text-accent-foreground dark:border-accent"
        >
          <CardHeader className="my-1 flex flex-row items-center justify-between gap-4">
            <CardTitle className="text-md my-1 capitalize">{name}</CardTitle>
            <Icon className="size-5" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">
              {count === "total"
                ? data.anime + data.movies + data.series
                : data[count]}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
