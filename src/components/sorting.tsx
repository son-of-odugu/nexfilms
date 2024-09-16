"use client";

import { ReactElement, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SortAsc, SortDesc } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

type SortType = "asc" | "desc" | "recent";

type SortButtons = {
  name: SortType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ReactElement<any, any>;
};

const sortButtons: SortButtons[] = [
  {
    name: "recent",
    icon: <p className="text-xs">recent</p>,
  },
  {
    name: "asc",
    icon: <SortAsc size={18} />,
  },
  {
    name: "desc",
    icon: <SortDesc size={18} />,
  },
];

export default function Sorting() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = searchParams.get("sort") || "recent";
  const router = useRouter();

  const createQueryString = useCallback(
    (sortOder: SortType) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sort", sortOder);
      return pathname + "?" + params.toString();
    },
    [pathname, searchParams],
  );

  return (
    <div className="mx-2 flex items-center justify-between gap-4 text-xs">
      {sortButtons.map(({ icon, name }, index) => (
        <Button
          disabled={params === name}
          className={cn(
            "h-1 w-full border border-neutral-200 bg-background py-3 text-foreground hover:bg-accent hover:text-accent-foreground active:bg-background dark:border-neutral-800",
            name === params && "-z-10 bg-primary text-primary-foreground",
          )}
          key={index}
          onClick={() => router.push(createQueryString(name))}
        >
          {icon}
        </Button>
      ))}
    </div>
  );
}
