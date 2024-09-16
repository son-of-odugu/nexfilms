import { getAnime } from "@/lib/myFetch";
import { getPaginationParams, getSortOrder } from "@/lib/utils";
import List from "@/components/list";
import PaginationControls from "@/components/paginationControl";
import Title from "@/components/title";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata = {
  title: "Animations",
  description: "list of animations",
};

export default async function Animations({ searchParams }: Props) {
  const sort = getSortOrder(searchParams["sort"]?.toString() || "recent");
  const [anime, pagination] = await Promise.all([
    await getAnime(sort),
    await getPaginationParams(searchParams),
  ]);

  return (
    <section className="container my-2 flex flex-col gap-4 px-4">
      <div className="my-3 flex flex-col gap-1">
        <Title value={"animations"} sorting={true} />
        <List videos={anime.slice(pagination.start, pagination.end)} />
      </div>
      <div className="flex justify-center">
        <PaginationControls length={anime.length} />
      </div>
    </section>
  );
}
