import { ReactNode } from "react";

interface AuthStatsCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export function SignUpStatsCard({
  title,
  value,
  subtitle,
  icon,
  children,
}: AuthStatsCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-white/20 hover:bg-white/6 hover:shadow-[0_20px_80px_rgba(99,102,241,0.18)]">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-400">{title}</span>

        {icon}
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-[40px] font-bold tracking-tight text-white 2xl:text-2xl">
          {value}
        </h3>

        {subtitle && (
          <p className="text-sm font-medium text-emerald-400">{subtitle}</p>
        )}

        {children}
      </div>
    </div>
  );
}
