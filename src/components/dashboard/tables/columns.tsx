"use client";

import { Movie, Series } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";

import CellAction from "./cellAction";
import ColumnHeader from "./columnHeader";

const Columns: ColumnDef<Movie | Series>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "title",
    header: ({ column }) => <ColumnHeader column={column} title={"title"} />,
  },
  {
    accessorKey: "runtime",
    header: ({ column }) => <ColumnHeader column={column} title={"runtime"} />,
  },
  {
    accessorKey: "filmType",
    header: ({ column }) => <ColumnHeader column={column} title={"filmType"} />,
  },
  {
    accessorKey: "releaseDate",
    header: ({ column }) => (
      <ColumnHeader column={column} title={"releaseDate"} />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("releaseDate"));
      const formattedDate = date.toLocaleDateString("en-US", {
        year: "2-digit",
        month: "short",
        day: "2-digit",
      });
      return (
        <div className="text-left text-xs font-medium">{formattedDate}</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <ColumnHeader column={column} title={"status"} />,
  },
  {
    accessorKey: "rating",
    header: ({ column }) => <ColumnHeader column={column} title={"rating"} />,
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
export default Columns;
