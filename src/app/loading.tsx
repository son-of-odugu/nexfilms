import Listing from "@/components/skeleton/listing";
import Recommendation from "@/components/skeleton/recommendation";
import Title from "@/components/skeleton/title";

export default function Loading() {
  return (
    <section className="container my-2 flex flex-col gap-4 px-4">
      <Recommendation />
      <div className="my-3 flex flex-col gap-1">
        <Title />
        <Listing />
      </div>
    </section>
  );
}
