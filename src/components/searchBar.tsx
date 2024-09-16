"use client";

import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const pathname = usePathname();
  const dashboard = pathname.split("/")[1] === "dashboard";

  if (dashboard) return null;
  return (
    <form className="mx-3 flex w-full items-center justify-center rounded-full border border-neutral-200 bg-background p-2 text-foreground dark:border-neutral-800 md:mx-8">
      <input
        type="text"
        placeholder="Search..."
        className="sm:text-md w-full appearance-none border-none bg-transparent px-2 text-sm outline-none placeholder:text-neutral-500 focus:outline-none focus:ring-0 dark:placeholder:text-neutral-500"
      />
      <Search className="size-5 text-neutral-600 dark:text-neutral-500" />
    </form>
  );
}
