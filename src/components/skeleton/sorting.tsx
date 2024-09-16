import { Skeleton } from "../ui/skeleton";

export default function Sorting() {
  return (
    <div className="-z-20 mx-2 flex items-center justify-between gap-4 text-xs">
      <Skeleton className="h-5 w-[80px]" />
      <Skeleton className="h-5 w-[50px]" />
      <Skeleton className="h-5 w-[50px]" />
    </div>
  );
}
