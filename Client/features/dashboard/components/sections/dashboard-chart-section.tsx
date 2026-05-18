import { RecentActivity } from "../activity/recent-activity";
import { SalesChart } from "../charts/sales-chart";

export function DashboardChartSection() {
  return (
    <section className="grid grid-cols-1 gap-6 2xl:grid-cols-[1.45fr_0.55fr]">
      <SalesChart />

      <RecentActivity />
    </section>
  );
}
