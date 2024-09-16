import type { Metadata } from "next";
import { DEFAULT_TITLE } from "@/constants";

import { getCount, getRecent } from "@/lib/myFetch";
import BarVideos from "@/components/dashboard/chart/bar";
import PieVideos from "@/components/dashboard/chart/pie";
import DataCount from "@/components/dashboard/dataCount";
import RecentlyAdded from "@/components/dashboard/recent";

export const metadata: Metadata = {
  title: "dashboard",
  description: DEFAULT_TITLE + "dashboard",
};

export default async function Page() {
  const [dataCounts, recentlyAdded] = await Promise.all([
    await getCount(),
    await getRecent(10),
  ]);
  return (
    <section className="container my-2 flex flex-col gap-6">
      <div className="my-2 flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight">
          Hi, Welcome back 👋
        </h2>
        {/* <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button>Download</Button>
          </div> */}
      </div>
      <DataCount data={dataCounts} />
      <div className="my-2 grid gap-4 md:grid-cols-2">
        <PieVideos data={dataCounts} />
        <BarVideos data={dataCounts} />
        <div className="md:col-span-2">
          <RecentlyAdded data={recentlyAdded} />
        </div>
      </div>
    </section>
  );
}
