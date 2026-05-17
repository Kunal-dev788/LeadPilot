import { OverviewHeader } from "./overview-header";
import { StatsGrid } from "../stats/stats-grid";

export function DashboardOverview() {
  return (
    <section className="mb-6">
      <OverviewHeader />
      <StatsGrid />
    </section>
  );
}
