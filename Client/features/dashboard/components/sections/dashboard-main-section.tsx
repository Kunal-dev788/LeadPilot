import { DashboardOverview } from "../overview/dashboard-overview";
import { DashboardChartSection } from "./dashboard-chart-section";
import { DashboardLeadsSection } from "./dashboard-leads-section";

export function DashboardMainSection() {
  return (
    <div className="space-y-6">
      <DashboardOverview />
      <DashboardChartSection />
      <DashboardLeadsSection />
    </div>
  );
}
