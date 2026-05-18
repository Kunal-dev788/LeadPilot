import { LucideIcon } from "lucide-react";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
};

export function Button({
  label,
  icon: Icon,
  variant = "secondary",
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center gap-2 rounded-2xl px-6 text-sm transition",

        variant === "primary" &&
          `h-12 bg-indigo-600 font-semibold text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500`,

        variant === "secondary" &&
          `border border-zinc-200 bg-white py-4 font-medium text-zinc-700 hover:bg-zinc-50`,
      )}
    >
      {Icon && <Icon size={16} />}

      {label}
    </button>
  );
}
