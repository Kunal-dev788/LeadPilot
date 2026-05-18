import { BarChart3 } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/20">
        <BarChart3 className="h-5 w-5 text-white" />
      </div>
      <div>
        <h2 className="text-xl font-bold tracking-tight">LeadPilot</h2>
        <p className="text-sm text-zinc-400">CRM Suite</p>
      </div>
    </div>
  );
}
