"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from "@/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

interface Props {
  length: number;
}

export default function PaginationControl({ length }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const currentPage = parseInt(page ?? DEFAULT_PAGE.toString(), 10);
  const pages = useMemo(() => Math.ceil(length / DEFAULT_PER_PAGE), [length]);

  const createQueryString = useCallback(
    (pageNumber: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", pageNumber.toString());
      return pathname + "?" + params.toString();
    },
    [pathname, searchParams],
  );

  if (pages <= 1) {
    return;
  }

  return (
    <div className="my-2 flex items-center justify-between gap-2">
      {/* previous */}
      <Button
        disabled={currentPage <= DEFAULT_PAGE}
        className="border border-neutral-300 bg-transparent p-1 text-primary-foreground hover:bg-accent hover:text-accent-foreground dark:border-neutral-800"
        onClick={() => router.push(createQueryString(currentPage - 1))}
      >
        <ChevronLeft />
      </Button>
      {/* page buttons  */}
      {Array.from({ length: pages }, (_, i) => i + 1).map((page) => {
        return (
          <Button
            disabled={page === currentPage}
            key={page}
            className={cn(
              "border border-neutral-300 bg-transparent p-1 px-3 text-primary-foreground hover:bg-accent hover:text-accent-foreground dark:border-neutral-800",
              page === currentPage && "bg-primary",
            )}
            onClick={() => router.push(createQueryString(page))}
          >
            {page}
          </Button>
        );
      })}
      {/* next */}
      <Button
        disabled={currentPage >= pages}
        className="border border-neutral-300 bg-transparent p-1 text-primary-foreground hover:bg-accent hover:text-accent-foreground dark:border-neutral-800"
        onClick={() => router.push(createQueryString(currentPage + 1))}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
