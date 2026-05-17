import { TrendingUp, Zap } from "lucide-react";
import { AuthStatsCard } from "./auth-stats-card";

export function AuthFloatingCards() {
  return (
    <div className="relative h-55 w-full max-w-2xl">
      <div className="absolute top-0 left-0 w-82.5">
        <AuthStatsCard
          title="Total Leads"
          value="2,845"
          subtitle="+12% from last month"
          icon={<TrendingUp className="h-5 w-5 text-emerald-400" />}
        />
      </div>

      <div className="absolute right-0 bottom-0 w-90">
        <AuthStatsCard
          title="Conversion Rate"
          value="4.8%"
          icon={<Zap className="h-5 w-5 text-zinc-400" />}
        >
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[48%] rounded-full bg-indigo-500" />
          </div>
        </AuthStatsCard>
      </div>
    </div>
  );
}
