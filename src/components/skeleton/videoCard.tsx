import { Skeleton } from "../ui/skeleton";

export default function VideoCard() {
  return (
    <div className="-z-20 flex flex-col space-y-3">
      <Skeleton className="h-[350px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[70%]" />
        <Skeleton className="h-3 w-[30%]" />
      </div>
    </div>
  );
}
