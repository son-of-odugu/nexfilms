import Link from "next/link";

import { getSeasons } from "@/lib/myFetch";
import Trailer from "@/components/trailer";

interface Props {
  params: { slug: string };
}

export const metadata = {
  title: "seasons",
  description: "list of seasons",
};

export default async function Seasons({ params }: Props) {
  const data = await getSeasons({ slug: params.slug });

  if (!data) throw new Error("Failed to fetch seasons");

  const seasons = data.seasons.sort((a, b) => a.seasonNumber - b.seasonNumber);
  const getPath = (slug: string) => `/series/seasons/episodes/${slug}`;

  return (
    <section className="container my-2 flex flex-col gap-4">
      <Trailer url={data.trailerPath} title={data.title} />
      <div className="flex flex-col items-center justify-center gap-4 bg-accent p-2 text-accent-foreground">
        <h2 className="text-xl font-bold">Seasons</h2>
        <div className="text-md flex w-full flex-col items-start justify-start gap-4">
          {seasons.map((season, index) => (
            <h3
              className="hover:text-primary active:text-primary-foreground"
              key={index}
            >
              <Link href={getPath(season.slug)}>
                Season {season.seasonNumber}
              </Link>
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
}
