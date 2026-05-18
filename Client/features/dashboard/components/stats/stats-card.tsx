import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  growth: string;
  icon: LucideIcon;
}

export function StatCard({ title, value, growth, icon: Icon }: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/40 sm:p-6">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-indigo-100/0 blur-3xl transition-all duration-300 group-hover:bg-indigo-100/60" />

      {/* TOP */}
      <div className="relative flex items-center justify-between">
        <p className="text-[15px] font-medium text-zinc-500">{title}</p>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-500 transition-all duration-300 group-hover:bg-indigo-50 group-hover:text-indigo-600">
          <Icon size={20} />
        </div>
      </div>
      {/* VALUE */}
      <h2 className="relative mt-2 text-[42px] font-bold tracking-tight text-zinc-950">
        {value}
      </h2>
      {/* GROWTH */}
      <p className="relative mt-4 text-sm font-medium text-emerald-500">
        ↗ {growth} vs last month
      </p>
    </div>
  );
}
