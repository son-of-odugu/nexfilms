"use client";

import { cn } from "@/lib/utils";
import useSideBar from "@/hooks/useSideBar";

interface Props {
  children: React.ReactNode;
}

export default function Body({ children }: Readonly<Props>) {
  const isMinimized = useSideBar()[0];

  return (
    <main
      className={cn(
        "h-screen w-full overflow-y-auto overflow-x-hidden",
        isMinimized ? "sm:ml-[90px]" : "sm:ml-52 md:ml-56",
      )}
    >
      {children}
    </main>
  );
}
