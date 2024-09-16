import Link from "next/link";
import { Plus } from "lucide-react";

import { getAnime } from "@/lib/myFetch";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Columns from "@/components/dashboard/tables/columns";
import VideoTable from "@/components/dashboard/tables/videoTable";

export default async function page() {
  const data = await getAnime("recent");
  return (
    <section className="container my-2 flex flex-col gap-4 overflow-hidden">
      <div className="my-2 flex items-start justify-between">
        <p className="text-lg">{`Movies (${data.length})`}</p>
        <Link
          href={"/dashboard/new"}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          <Plus className="mr-2 size-4" /> Add New
        </Link>
      </div>
      <Separator />

      <VideoTable data={data} columns={Columns} />
    </section>
  );
}
