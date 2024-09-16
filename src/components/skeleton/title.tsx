import { Skeleton } from "../ui/skeleton";
import Sorting from "./sorting";

interface Props {
  sorting?: boolean;
}

export default function Title({ sorting = false }: Props) {
  return (
    <div className="text-md flex items-center justify-between font-semibold capitalize text-foreground">
      <Skeleton className="-z-20 my-3 h-5 w-[150px]" />
      {sorting && <Sorting />}
    </div>
  );
}
