import { Movie, Series } from "@prisma/client";

import List from "./list";
import Title from "./title";

interface Props {
  videos: Movie[] | Series[];
}

export default function Recommended({ videos }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <Title value="recommended" />
      <List videos={videos} />
    </div>
  );
}
