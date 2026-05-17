import { IndianRupee, Percent, Users } from "lucide-react";
import { StatCard } from "./stats-card";

export function StatsGrid() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
      <StatCard title="Total Leads" value="2,845" growth="+12%" icon={Users} />
      <StatCard
        title="Conversion Rate"
        value="4.8%"
        growth="+0.4%"
        icon={Percent}
      />
      <StatCard
        title="Monthly Revenue"
        value="₹42,500"
        growth="+8%"
        icon={IndianRupee}
      />
    </div>
  );
}
