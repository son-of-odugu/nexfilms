"use client";

import Link from "next/link";
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu";

import { Icon, Submenu } from "@/types/nav";
import { cn, isEmail } from "@/lib/utils";
import useMobileNav from "@/hooks/useMobileNav";
import useSideBar from "@/hooks/useSideBar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface Props {
  Icon: Icon;
  label: string;
  submenus: Submenu[];
}

export default function DropDown({ Icon, label, submenus }: Props) {
  const setOpen = useMobileNav()[1];
  const isMinimized = useSideBar()[0];

  async function handleClick(text: string) {
    if (setOpen) setOpen(false);
    // if (text.startsWith("/")) return
      try {
        await navigator.clipboard.writeText(text);
        alert({
          message:"copied to clipboard",
          value:text
        });
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    
  }

  return (
    <DropdownMenu>
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <div
                className={cn(
                  "mx-0 mb-1 rounded-md px-4 py-2 font-normal hover:bg-accent hover:text-accent-foreground active:text-muted",
                )}
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Icon className="size-8" />

                    <p
                      className={cn(
                        "max-w-[200px] truncate text-xs",
                        isMinimized ? "opacity-0" : "opacity-100",
                      )}
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </div>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            align="center"
            alignOffset={2}
            className="text-xs font-thin"
          >
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent side="bottom" align="center">
        <DropdownMenuLabel className="max-w-[190px] truncate text-xs font-semibold">
          {label}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {submenus.map(({ href, label, active }, index) => (
          <DropdownMenuItem key={index} asChild>
            <Link
              className={cn(
                "mb-1 cursor-default rounded-md py-2 text-[0.6rem] opacity-80 hover:bg-accent hover:text-accent-foreground",
                active && "w-full bg-primary text-primary-foreground",
                isEmail(href) && "text-[0.5rem] font-bold lowercase",
              )}
              onClick={() => handleClick(href)}
              href={href}
            >
              <p className="max-w-[180px] truncate text-xs font-thin capitalize">
                {label}
              </p>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuArrow className="fill-border" />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
