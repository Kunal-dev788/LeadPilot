"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/utils/merger";

interface SidebarNavItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

export function SidebarNavItem({
  label,
  href,
  icon: Icon,
}: SidebarNavItemProps) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-14 items-center gap-4 rounded-2xl px-4 transition-all duration-200",

        isActive
          ? "bg-indigo-50 text-indigo-600"
          : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
      )}
    >
      {/* ACTIVE INDICATOR */}
      {isActive && (
        <div className="absolute top-1/2 left-0 h-8 w-1 -translate-y-1/2 rounded-r-full bg-indigo-600" />
      )}

      {/* ICON */}
      <Icon
        size={22}
        className={cn(
          "transition-transform duration-200 group-hover:scale-110",
        )}
      />

      {/* LABEL */}
      <span className="text-[15px] font-medium">{label}</span>
    </Link>
  );
}
