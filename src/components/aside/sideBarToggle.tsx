import { ChevronLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
  isMinimized: boolean;
  handleClick: () => void;
}

export default function SidebarToggle({ isMinimized, handleClick }: Props) {
  return (
    <div className="absolute -right-3 top-2">
      <Button
        onClick={handleClick}
        className="invisible size-6 rounded-md dark:border-neutral-800 sm:visible"
        variant="outline"
        size="icon"
      >
        <ChevronLeft
          className={cn(
            "duration-800 size-4 transition-transform ease-in-out",
            isMinimized ? "rotate-180" : "rotate-0",
          )}
        />
      </Button>
    </div>
  );
}
