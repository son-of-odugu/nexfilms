import { DEFAULT_PER_PAGE } from "@/constants";

import VideoCard from "./videoCard";

interface Props {
  length?: number;
}

export default function Listing({ length }: Props) {
  const len = length || DEFAULT_PER_PAGE;
  return (
    <div className="-z-20 grid grid-cols-1 gap-x-5 gap-y-7 py-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {Array.from({ length: len }).map((_, i) => (
        <VideoCard key={i + 1} />
      ))}
    </div>
  );
}
