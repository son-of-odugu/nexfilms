"use client";

import { SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Icons from "../icons";

const Moon = Icons.moon;

const icons = [
  {
    name: "light",
    icon: <SunIcon className="block size-4 dark:hidden" />,
  },
  {
    name: "dark",
    icon: <Moon className="hidden size-4 dark:block" />,
  },
  {
    name: "system",
    icon: null,
  },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const changeTheme = (themeName: string) => () => setTheme(themeName);

  return (
    <Menubar className="rounded-full border border-accent hover:bg-accent">
      <MenubarMenu>
        <MenubarTrigger className="rounded-full p-2.5">
          <TooltipProvider disableHoverableContent>
            {icons.slice(0, 2).map((icon, index) => (
              <Tooltip delayDuration={100} key={index}>
                <TooltipTrigger asChild>{icon.icon}</TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  sideOffset={10}
                  className="m-0 p-1 px-2 text-xs font-thin"
                >
                  {icon.name}
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
          <span className="sr-only">Switch Theme</span>
        </MenubarTrigger>
        <MenubarContent
          className="min-w-36 border border-accent bg-background text-center shadow-sm"
          side="bottom"
          align="center"
        >
          {icons.map((icon, index) => (
            <div key={index}>
              <MenubarItem
                onClick={changeTheme(icon.name)}
                className={cn(
                  "cursor-pointer text-xs font-normal capitalize hover:bg-accent hover:text-accent-foreground",
                  icon.name === theme && "bg-primary text-primary-foreground",
                )}
                role="button"
              >
                {icon.name}
              </MenubarItem>
              {icon.icon && (
                <MenubarSeparator className="bg-neutral-200 dark:bg-neutral-900" />
              )}
            </div>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
