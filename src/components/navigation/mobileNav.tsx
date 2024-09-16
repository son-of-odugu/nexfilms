"use client";

import { useEffect } from "react";
import { MenuIcon } from "lucide-react";

import useMobileNav from "@/hooks/useMobileNav";
import useSideBar from "@/hooks/useSideBar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Brand from "../brand";
import { Menu } from "./menu";

export default function MobileNav() {
  const [open, setOpen] = useMobileNav();
  const [isMinimized, toggleMinimized] = useSideBar();

  useEffect(() => {
    if (isMinimized && open) {
      toggleMinimized();
    }
  }, [open, isMinimized, toggleMinimized]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <MenuIcon className="size-7 cursor-pointer text-foreground sm:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex h-fit flex-col">
          <Brand logo={true} mobile={true} />
          <Menu />
        </div>
      </SheetContent>
    </Sheet>
  );
}
