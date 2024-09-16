import { Movie, Series } from "@prisma/client";

import { formatTimeSince } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  data: Movie[] | Series[];
}

export default function RecentlyAdded({ data }: Props) {
  return (
    <Card className="border-accent">
      <CardHeader>
        <CardTitle className="text-sm capitalize text-muted-foreground">
          Recent videos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <div className="flex items-center justify-between" key={index}>
              <div className="flex items-center gap-4">
                <Avatar className="size-9">
                  <AvatarImage src={item.posterPath} alt="Avatar" />
                  <AvatarFallback>
                    {item.title.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-xs">
                  <p className="font-medium leading-none">{item.title}</p>
                  <p className="w-[250px] truncate text-muted-foreground">
                    {item.tagline}
                  </p>
                </div>
              </div>
              <div className="text-xs font-medium">
                {item.createdAt && formatTimeSince(item.createdAt)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
