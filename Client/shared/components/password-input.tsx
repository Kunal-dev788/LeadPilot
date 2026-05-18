"use client";

import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff, LucideIcon } from "lucide-react";
import { cn } from "@/utils/merger";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: LucideIcon;
  error?: string;
}

export function PasswordInput({
  label,
  icon: Icon,
  error,
  className,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2.5">
      {/* LABEL */}
      <label className="text-sm font-medium text-zinc-700">{label}</label>

      {/* WRAPPER */}
      <div className="relative">
        {/* LEFT ICON */}
        {Icon && (
          <div className="absolute top-1/2 left-4 -translate-y-1/2 text-zinc-400">
            <Icon size={18} />
          </div>
        )}

        {/* INPUT */}
        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "h-14 w-full rounded-2xl border border-zinc-200 bg-white text-[15px] text-zinc-900 transition-all duration-200 outline-none placeholder:text-zinc-400",

            "focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10",

            Icon ? "pr-12 pl-12" : "px-4 pr-12",

            error &&
              "border-red-300 focus:border-red-500 focus:ring-red-500/10",

            className,
          )}
          {...props}
        />

        {/* TOGGLE */}
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-zinc-400 transition hover:text-zinc-600"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      {/* ERROR */}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
