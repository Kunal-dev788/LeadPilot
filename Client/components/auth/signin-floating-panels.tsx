import { Activity, UserPlus } from "lucide-react";

export function SignInFloatingPanels() {
  return (
    <div className="max-w-160 space-y-6">
      {/* ANALYTICS CARD */}
      <div className="group rounded-[28px] border border-white/10 bg-white/4 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(99,102,241,0.18)]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.12em] text-zinc-500 uppercase">
              Lead Analytics
            </p>

            <div className="mt-5 flex items-end gap-3">
              <h3 className="text-[26px] font-bold tracking-tight text-white">
                84%
              </h3>

              <span className="mb-2 text-sm font-medium text-indigo-300">
                +12% this week
              </span>
            </div>
          </div>

          <Activity className="mt-1 h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>

      {/* NOTIFICATION CARD */}
      <div className="group flex items-center gap-4 rounded-[28px] border border-white/10 bg-white/4 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_20px_80px_rgba(99,102,241,0.18)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
          <UserPlus className="h-4 w-4 text-zinc-300" />
        </div>

        <div>
          <h4 className="text-[16px] font-semibold text-white">
            New lead assigned: Acme Corp
          </h4>

          <p className="mt-1 text-sm text-zinc-400">2 mins ago</p>
        </div>
      </div>
    </div>
  );
}
