"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Dot } from "lucide-react";

import { Icon, Submenu } from "@/types/nav";
import { cn, isEmail } from "@/lib/utils";
import useMobileNav from "@/hooks/useMobileNav";
import useSideBar from "@/hooks/useSideBar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import DropDown from "./dropdown";

interface Props {
  Icon: Icon;
  label: string;
  active: boolean;
  submenus: Submenu[];
}

export default function SubMenu({ Icon, label, active, submenus }: Props) {
  const setOpen = useMobileNav()[1];
  const isMinimized = useSideBar()[0];
  const isSubmenuActive = submenus.some((submenu) => submenu.active);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);
  submenus.sort((a, b) => a.label.localeCompare(b.label));

  function handleClick(text: string) {
    setOpen(false);
    if (!text.startsWith("/")) {
      try {
        navigator.clipboard.writeText(text);
        alert("copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  }

  if (!isMinimized) {
    return (
      <Collapsible open={isCollapsed} onOpenChange={setIsCollapsed}>
        <CollapsibleTrigger asChild>
          <div
            className={cn(
              "mx-3 mb-1 flex cursor-pointer items-center justify-between rounded-md p-2 font-normal hover:bg-accent hover:text-accent-foreground",
              active && "w-full bg-primary text-primary-foreground",
            )}
          >
            <div
              className={cn("flex items-center gap-4")}
              onClick={() => setOpen(false)}
            >
              <Icon className={cn("size-6", isMinimized && "size-8")} />

              <p
                className={cn(
                  "max-w-[150px] truncate text-sm capitalize transition-all duration-300",
                  isMinimized
                    ? "-translate-x-96 opacity-0"
                    : "translate-x-0 opacity-100",
                )}
              >
                {label}
              </p>
            </div>
            <div
              className={cn(
                "whitespace-nowrap",
                isMinimized
                  ? "-translate-x-96 opacity-0"
                  : "translate-x-0 opacity-100",
              )}
            >
              <ChevronDown
                size={18}
                className={cn(
                  "transition-transform duration-200",
                  isCollapsed ? "rotate-0" : "-rotate-90",
                )}
              />
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mx-3">
          {submenus.map(({ href, label, active }, index) => (
            <Link
              href={href}
              className={cn(
                "mb-1 ml-4 flex cursor-default items-center gap-2 rounded-md py-2 text-[0.6rem] opacity-80 hover:bg-accent hover:text-accent-foreground",
                active && "bg-primary text-primary-foreground",
                href.startsWith("/") && "cursor-pointer text-xs",
                isEmail(href) && "select-text text-[0.5rem]",
              )}
              onClick={() => handleClick(href)}
              key={index}
            >
              <Dot size={18} />
              <p
                className={cn(
                  "max-w-[140px] truncate font-light",
                  isMinimized
                    ? "-translate-x-96 opacity-0"
                    : "translate-x-0 opacity-100",
                )}
              >
                {label}
              </p>
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }
  return <DropDown Icon={Icon} label={label} submenus={submenus} />;
}
