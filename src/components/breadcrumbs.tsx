"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export default function BreadCrumb() {
  const pathname = usePathname();
  const dashboard = pathname.split("/")[1] === "dashboard";
  const path = pathname.split("/").slice(2, undefined);

  if (!dashboard) return null;
  return (
    <div className="mx-3 flex w-full items-center justify-center gap-x-2 text-sm text-muted-foreground">
      <Link
        href={"/dashboard"}
        className="text-md truncate hover:text-primary-foreground"
      >
        Dashboard
      </Link>
      {path.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRightIcon className="size-4" />
          <Link
            href={"/dashboard/" + item}
            className={cn(
              "text-lg font-medium text-primary-foreground",
              index === path.length - 1
                ? "pointer-events-none text-foreground"
                : "text-muted-foreground",
            )}
          >
            {item}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
