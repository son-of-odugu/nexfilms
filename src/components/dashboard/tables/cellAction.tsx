"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Movie, Series } from "@prisma/client";
import { Edit, MoreHorizontal, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteAction } from "@/app/(action)/action";

interface Props {
  data: Movie | Series;
}

export default function CellAction({ data }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const path = usePathname();

  async function Delete() {
    setOpen(false);
    if (data.filmType) {
      await DeleteAction(
        {
          id: data.id,
          fileType: data.filmType,
        },
        path,
      );
    }
  }

  return (
    <DropdownMenu modal={false} onOpenChange={setOpen} open={open}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="size-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>

        <DropdownMenuItem onClick={() => router.push(`${path}/${data.slug}`)}>
          <Edit className="mr-2 size-4" /> Update
        </DropdownMenuItem>
        <DropdownMenuItem onClick={Delete}>
          <Trash className="mr-2 size-4" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
