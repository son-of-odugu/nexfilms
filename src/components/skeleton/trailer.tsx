import { Skeleton } from "../ui/skeleton";

export default function Trailer() {
  return (
    <div className="-z-20 my-2 flex flex-col items-center justify-center gap-4 border-2 border-neutral-100 dark:border-neutral-950">
      <Skeleton className="h-5 w-36" />
      <Skeleton className="h-[60vh] w-[80vw] rounded-lg sm:w-[55vw] md:w-[60vw] lg:h-[70vh] lg:w-[70vw]" />
    </div>
  );
}
