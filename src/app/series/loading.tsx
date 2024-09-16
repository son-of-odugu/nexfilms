import Listing from "@/components/skeleton/listing";
import Title from "@/components/skeleton/title";

export default function Loading() {
  return (
    <div className="container -z-20 my-2 px-4">
      <Title sorting={true} />
      <Listing />
    </div>
  );
}
