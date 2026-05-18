import { ChartCard } from "./chart-card";
import { ChartFilter } from "./chart-filter";

export function SalesChart() {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6">
      {/* TOP */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-zinc-900">
          Sales Performance
        </h2>
        <ChartFilter active="1M" />
      </div>
      <ChartCard />
    </div>
  );
}
