import { getMovie } from "@/lib/myFetch";
import Info from "@/components/info";
import Trailer from "@/components/trailer";

interface Props {
  params: { slug: string };
}

export default async function Movie({ params }: Props) {
  const movie = await getMovie({ slug: params.slug });

  // const url = await getUrl(movie?.videoPath || "", bucketName);
  const infos = [
    {
      name: "genre",
      data: movie?.genre.join(", "),
    },
    {
      name: "tagline",
      data: movie?.tagline,
    },
    {
      name: "date",
      data: movie?.releaseDate,
    },
    {
      name: "runtime",
      data: movie?.runtime,
    },
    {
      name: "rating",
      data: movie?.rating,
    },
  ];

  if (!movie) {
    throw new Error("That movie wasn't found!");
  }

  return (
    <section className="container my-2 flex flex-col items-center justify-center gap-4 px-4">
      {/* trailer */}
      <Trailer title={movie.title} url={movie.trailerPath} />
      {/* description */}
      <div className="flex flex-col gap-4">
        <p className="tacking-wide text-xs leading-5 text-foreground dark:font-thin lg:w-4/5">
          {movie.description}
        </p>
        <Info data={infos} />
      </div>
      <div className="">
        {/* <DownloadBtn videoUrl={url} title={movie.title + "-" + year} /> */}
      </div>
    </section>
  );
}
