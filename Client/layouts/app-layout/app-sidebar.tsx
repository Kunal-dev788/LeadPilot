"use client";

import { DASHBOARD_NAVIGATION } from "@/constants/dashboard-nav";
import { SidebarNavItem } from "./sidebar-nav-item";
import { Logo } from "@/shared/components/logo";

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AppSidebar({ isOpen, onClose }: AppSidebarProps) {
  return (
    <>
      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-65 flex-col border-r border-zinc-200 bg-white px-6 py-7 transition-transform duration-300 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        {/* LOGO */}
        <Logo />

        {/* NAVIGATION */}
        <nav className="mt-14 flex flex-1 flex-col gap-2">
          {DASHBOARD_NAVIGATION.map((item) => (
            <SidebarNavItem
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
