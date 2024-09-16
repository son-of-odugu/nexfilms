import { getSeries } from "@/lib/myFetch";
import { getPaginationParams, getSortOrder } from "@/lib/utils";
import List from "@/components/list";
import PaginationControls from "@/components/paginationControl";
import Title from "@/components/title";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata = {
  title: "Series",
};

export default async function Series({ searchParams }: Props) {
  const sort = getSortOrder(searchParams["sort"]?.toString() || "recent");
  const [series, pagination] = await Promise.all([
    await getSeries(sort),
    await getPaginationParams(searchParams),
  ]);
  return (
    <section className="container my-2 flex flex-col gap-4 px-4">
      <div className="my-3 flex flex-col gap-1">
        <Title value={"series"} sorting={true} />
        <List videos={series.result.slice(pagination.start, pagination.end)} />
      </div>
      <div className="flex justify-center">
        <PaginationControls length={series.total} />
      </div>
    </section>
  );
}
