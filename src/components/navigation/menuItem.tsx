"use client";

import Link from "next/link";

import { Icon } from "@/types/nav";
import { cn } from "@/lib/utils";
import useMobileNav from "@/hooks/useMobileNav";
import useSideBar from "@/hooks/useSideBar";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface Props {
  href: string;
  label: string;
  Icon: Icon;
  active: boolean;
}

export default function MenuItem({ href, label, Icon, active }: Props) {
  const setOpen = useMobileNav()[1];
  const isMinimized = useSideBar()[0];

  return (
    <div
      className={cn(
        "mb-1 rounded-md px-1 py-2 font-normal hover:bg-accent hover:text-accent-foreground",
        active && "bg-primary text-primary-foreground",
        isMinimized ? "mx-0 px-4" : "mx-3",
      )}
      onClick={() => setOpen(false)}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href={href} className="flex items-center justify-start gap-4">
              <Icon className={cn("size-6", isMinimized && "size-8")} />
              <p
                className={cn(
                  "duration-800 max-w-[220px] flex-1 truncate text-sm capitalize transition-all",
                  isMinimized
                    ? "-translate-x-96 opacity-0"
                    : "translate-x-0 opacity-100",
                )}
              >
                {label}
              </p>
            </Link>
          </TooltipTrigger>
          <TooltipContent
            align="center"
            side="bottom"
            className={cn(
              "hidden text-xs font-thin",
              isMinimized ? "inline-block" : "hidden",
            )}
          >
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
