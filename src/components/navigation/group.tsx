"use client";

import { Ellipsis } from "lucide-react";

import useSideBar from "@/hooks/useSideBar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface Props {
  groupLabel: string;
}

export default function Group({ groupLabel }: Props) {
  const isMinimized = useSideBar()[0];

  if (isMinimized && groupLabel) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="ml-5">
            <Ellipsis className="size-6" />
          </TooltipTrigger>
          <TooltipContent
            side="right"
            sideOffset={10}
            className="px-2 py-1 text-xs font-light"
          >
            {groupLabel}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  if (!isMinimized && groupLabel) {
    return (
      <p className="my-2 max-w-[248px] truncate text-xs font-medium text-muted-foreground">
        {groupLabel}
      </p>
    );
  }
  return <p className="pb-2"></p>;
}
