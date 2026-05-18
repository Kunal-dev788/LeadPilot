"use client";

import { useState } from "react";
import { AppHeader } from "./app-header";
import { AppShell } from "./app-shell";
import { AppSidebar } from "./app-sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="flex min-h-screen bg-white">
      {/* SIDEBAR */}
      <AppSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* CONTENT */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader onMenuClick={() => setIsSidebarOpen(true)} />

        <AppShell>{children}</AppShell>
      </div>
    </main>
  );
}
