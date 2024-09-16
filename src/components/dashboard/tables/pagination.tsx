import { Table } from "@tanstack/react-table";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icons from "@/components/icons";

interface Props<TData> {
  table: Table<TData>;
}

export default function TablePagination<TData>({ table }: Props<TData>) {
  const DoubleArrowLeftIcon = Icons["DoubleArrowLeft"];
  const DoubleArrowRightIcon = Icons["DoubleArrowRight"];

  return (
    <div className="flex items-center justify-between gap-6 p-2">
      <div className="text-xs lowercase text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of {""}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div className="mx-4 flex items-center justify-between gap-2">
        <p className="text-xs lowercase">Rows per page</p>
        <Select
          value={`${table.getState().pagination.pageSize}`}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="h-9 w-16 text-xs ring-0">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>
          <SelectContent side="top" className="border-accent text-xs">
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <SelectItem
                key={pageSize}
                value={`${pageSize}`}
                className={cn(
                  "mb-1 text-xs",
                  table.getState().pagination.pageSize === pageSize &&
                    "bg-primary text-primary-foreground",
                )}
              >
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center justify-between gap-2 text-xs lowercase">
        <p
          className={
            table.getState().pagination.pageIndex + 1 === table.getPageCount()
              ? "hidden"
              : "flex"
          }
        >
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </p>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden lg:flex"
            size="sm"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hidden lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
