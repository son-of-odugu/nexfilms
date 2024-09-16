import { getMovies } from "@/lib/myFetch";
import { getPaginationParams, getSortOrder } from "@/lib/utils";
import List from "@/components/list";
import PaginationControls from "@/components/paginationControl";
import Title from "@/components/title";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata = {
  title: "Movies",
  description: "list of all movies",
};

export default async function Movies({ searchParams }: Props) {
  const sort = getSortOrder(searchParams["sort"]?.toString() || "recent");
  const [movies, pagination] = await Promise.all([
    await getMovies(sort),
    await getPaginationParams(searchParams),
  ]);

  return (
    <section className="container my-2 flex flex-col gap-4 px-4">
      <div className="my-3 flex flex-col gap-1">
        <Title value={"movies"} sorting={true} />
        <List videos={movies.result.slice(pagination.start, pagination.end)} />
      </div>
      <div className="flex justify-center">
        <PaginationControls length={movies.total} />
      </div>
    </section>
  );
}
