import { Movie, Series } from "@prisma/client";

import VideoCard from "./videoCard";

type Videos = Movie & Series;
type Props = {
  videos: Movie[] | Series[] | Videos[];
};

export default function List({ videos }: Props) {
  return (
    <div className="grid grid-cols-1 gap-x-5 gap-y-7 py-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {videos.map((video) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </div>
  );
}
