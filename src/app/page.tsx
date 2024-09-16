import { getHome, getRecommendations } from "@/lib/myFetch";
import { getPaginationParams } from "@/lib/utils";
import List from "@/components/list";
import PaginationControls from "@/components/paginationControl";
import Recommended from "@/components/recommended";
import Title from "@/components/title";

interface HomeProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export const metadata = {
  title: "Home",
  description: "list of recent movies and series ",
};

export default async function Home({ searchParams }: HomeProps) {
  const [data, recommendations, pagination] = await Promise.all([
    await getHome(),
    await getRecommendations(),
    await getPaginationParams(searchParams),
  ]);

  return (
    <section className="container my-2 flex flex-col gap-4">
      <Recommended videos={recommendations} />
      <div className="my-3 flex flex-col gap-1">
        <Title value={"movies"} />
        <List videos={data.data.slice(pagination.start, pagination.end)} />
      </div>
      <div className="flex justify-center">
        <PaginationControls length={data.length} />
      </div>
    </section>
  );
}
