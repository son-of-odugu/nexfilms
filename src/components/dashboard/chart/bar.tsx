"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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
    label: "movies",
    color: "hsl(var(--chart-1))",
  },
  series: {
    label: "series",
    color: "hsl(var(--chart-2))",
  },
  anime: {
    label: "anime",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export default function BarVideos({ data }: Props) {
  const chartData = [
    { content: "movies", total: data.movies, fill: "var(--color-movies)" },
    { content: "series", total: data.series, fill: "var(--color-series)" },
    { content: "anime", total: data.anime, fill: "var(--color-anime)" },
  ];
  return (
    <Card className="dark:border-accent">
      <CardHeader className="items-center">
        <CardDescription className="text-sm capitalize text-muted-foreground">
          chart of videos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="content"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="total"
              strokeWidth={2}
              radius={8}
              activeIndex={2}
              // activeBar={({ ...props }) => {
              //   return (
              //     <Rectangle
              //       {...props}
              //       fillOpacity={0.8}
              //       stroke={props.payload.fill}
              //       strokeDasharray={4}
              //       strokeDashoffset={4}
              //     />
              //   );
              // }}
            />
          </BarChart>
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
