import Link from "next/link";

import { getEpisodes, getOneSeries } from "@/lib/myFetch";
import Trailer from "@/components/trailer";

interface Props {
  params: { slug: string };
}

export default async function Episodes({ params }: Props) {
  const season = await getEpisodes({ slug: params.slug });
  const oneSeries = await getOneSeries(season?.seriesId || "");
  if (!season && !oneSeries) throw new Error("Failed to fetch episodes");

  const episodes = season?.episodes.sort(
    (a, b) => a.episodeNumber - b.episodeNumber,
  );

  const getPath = (slug: string) => `/download/${slug}`;

  return (
    <section className="container my-2 flex flex-col gap-4 px-4">
      <Trailer
        url={oneSeries?.trailerPath || ""}
        title={oneSeries?.title || ""}
      />

      <div className="flex flex-col items-center justify-center gap-4 bg-accent p-2 text-accent-foreground">
        <h2 className="text-xl font-bold capitalize">episodes</h2>
        <div className="text-md flex w-full flex-col items-start justify-start gap-4">
          {episodes?.map((episode, index) => (
            <h3
              className="hover:text-primary active:text-primary-foreground"
              key={index}
            >
              <Link href={getPath(episode.slug)}>
                episode {episode.episodeNumber}
              </Link>
            </h3>
          ))}
        </div>
      </div>
    </section>
  );
}
