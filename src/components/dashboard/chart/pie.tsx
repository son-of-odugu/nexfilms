"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface Data {
  movies: number;
  series: number;
  anime: number;
}

interface Props {
  data: Data;
}

const chartConfig = {
  movies: {
    label: "Movies",
    color: "hsl(var(--chart-1))",
  },
  series: {
    label: "Series",
    color: "hsl(var(--chart-2))",
  },
  anime: {
    label: "Animation",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function PieVideos({ data }: Props) {
  const total = React.useMemo(() => {
    return data.movies + data.series + data.anime;
  }, [data.movies , data.series , data.anime]);

  const chartData = [
    { content: "movies", total: data.movies, fill: "var(--color-movies)" },
    { content: "series", total: data.series, fill: "var(--color-series)" },
    { content: "anime", total: data.anime, fill: "var(--color-anime)" },
  ];

  return (
    <Card className="flex flex-col dark:border-accent">
      <CardHeader className="items-center">
        <CardDescription className="text-sm capitalize text-muted-foreground">
          chart of videos{" "}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="total"
              nameKey="videos"
              innerRadius={45}
              strokeWidth={10}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground capitalize"
                        >
                          Videos
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center justify-center gap-2 font-medium leading-none text-primary">
          Trending up by 5.2% <TrendingUp className="size-4" />
        </div>
        <div className="text-xs leading-none text-muted-foreground">
          Showing total videos
        </div>
      </CardFooter>
    </Card>
  );
}
