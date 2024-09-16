import { Skeleton } from "@/components/ui/skeleton";
import Trailer from "@/components/skeleton/trailer";

export default function Loading() {
  return (
    <section className="container my-2 flex flex-col gap-4">
      {/* trailer */}
      <Trailer />
      {/* title and description */}
      <div className="flex flex-col items-center justify-center gap-4 bg-accent p-2 text-accent-foreground">
        <Skeleton className="h-5 w-[150px] bg-foreground" />
        <div className="text-md flex w-full flex-col items-start justify-start gap-4">
          <Skeleton className="h-5 w-[200px] bg-foreground" />
          <Skeleton className="h-5 w-[200px] bg-foreground" />
        </div>
      </div>
    </section>
  );
}
