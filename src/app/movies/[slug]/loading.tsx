import { Skeleton } from "@/components/ui/skeleton";
import Trailer from "@/components/skeleton/trailer";

export default function Loading() {
  return (
    <section className="container my-2 flex flex-col items-center justify-center gap-4 px-4">
      {/* trailer */}
      <Trailer />
      {/* title and description */}
      <div className="my-2 flex w-full flex-col items-center justify-center gap-1">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
      </div>
    </section>
  );
}
