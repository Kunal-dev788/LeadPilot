import { CheckCircle2, Mail, UserPlus2 } from "lucide-react";

const iconMap = {
  assigned: UserPlus2,
  status: CheckCircle2,
  email: Mail,
};

type ActivityItemProps = {
  type: "assigned" | "status" | "email";
  title: string;
  time: string;
  description: string;
};

export function ActivityItem({
  type,
  title,
  time,
  description,
}: ActivityItemProps) {
  const Icon = iconMap[type];

  return (
    <div className="relative flex items-start gap-4">
      {/* ICON */}
      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500">
        <Icon size={16} />
      </div>

      {/* CONTENT */}
      <div>
        <div className="flex items-center gap-2">
          <h4 className="text-sm font-semibold text-zinc-900">{title}</h4>

          <span className="text-xs text-zinc-400">{time}</span>
        </div>

        <p className="mt-1 max-w-60 text-sm leading-6 text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
}
