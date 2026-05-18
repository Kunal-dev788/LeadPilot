import { StatsGrid } from "../stats/stats-grid";
import { DashboardHeader } from "./dashboard-header";

export function DashboardOverview() {
  return (
    <section>
      <DashboardHeader />
      <StatsGrid />
    </section>
  );
}
