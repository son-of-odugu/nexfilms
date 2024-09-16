"use client";

import { cn } from "@/lib/utils";
import useSidebar from "@/hooks/useSideBar";

import Brand from "../brand";
import { Menu } from "../navigation/menu";
import SidebarToggle from "./sideBarToggle";

export default function SideBar() {
  const [isMinimized, toggle] = useSidebar();

  return (
    <aside
      className={cn(
        "duration-800 fixed inset-y-0 left-0 z-20 h-screen -translate-x-full border-r border-neutral-200 bg-background text-foreground transition-[width] ease-in-out dark:border-neutral-800 sm:translate-x-0",
        isMinimized ? "w-[90px]" : "w-52 md:w-56",
      )}
    >
      <SidebarToggle isMinimized={isMinimized} handleClick={toggle} />
      <div className="flex h-full flex-col">
        <Brand logo={true} />
        <Menu />
      </div>
    </aside>
  );
}
