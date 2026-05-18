"use client";

import { Bell, Menu, Moon, Search, UserCircle2 } from "lucide-react";

interface AppHeaderProps {
  onMenuClick: () => void;
}

export function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white">
      <div className="flex h-18.5 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* MOBILE MENU */}
          <button
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 lg:hidden"
          >
            <Menu size={20} />
          </button>

          {/* TITLE */}
          <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
            Dashboard
          </h1>
        </div>

        {/* DESKTOP SEARCH */}
        <div className="hidden items-center gap-5 md:flex">
          {/* SEARCH */}
          <div className="relative">
            <Search
              size={18}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-zinc-400"
            />

            <input
              type="text"
              placeholder="Search leads..."
              className="h-12 w-60 rounded-full border border-zinc-200 bg-zinc-50 pr-4 pl-11 text-sm transition-all duration-200 outline-none placeholder:text-zinc-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 lg:w-[320px]"
            />
          </div>

          {/* ICONS */}
          <div className="flex items-center gap-4">
            <button className="text-zinc-500 transition hover:text-zinc-900">
              <Bell size={22} />
            </button>

            <button className="text-zinc-500 transition hover:text-zinc-900">
              <Moon size={22} />
            </button>

            <button className="text-zinc-500 transition hover:text-zinc-900">
              <UserCircle2 size={24} />
            </button>
          </div>
        </div>

        {/* MOBILE PROFILE */}
        <button className="md:hidden">
          <UserCircle2 size={30} className="text-zinc-600" />
        </button>
      </div>
      {/* MOBILE SEARCH */}
      <div className="px-4 pb-4 md:hidden">
        <div className="relative">
          <Search
            size={18}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-zinc-400"
          />
          <input
            type="text"
            placeholder="Search leads..."
            className="h-12 w-full rounded-full border border-zinc-200 bg-zinc-50 pr-4 pl-11 text-sm outline-none placeholder:text-zinc-400 focus:border-indigo-500"
          />
        </div>
      </div>
    </header>
  );
}
