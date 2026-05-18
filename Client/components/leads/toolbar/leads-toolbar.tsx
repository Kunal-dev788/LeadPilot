"use client";

import { Button } from "@/components/ui/buttons/button";
import { Download, Funnel, Plus, Search } from "lucide-react";

export function LeadsToolbar() {
  return (
    <div className="flex items-center gap-5">
      {/* LEFT */}
      <div className="flex min-w-0 flex-1 items-center gap-4">
        {/* SEARCH */}
        <div className="relative min-w-0 flex-1">
          <Search
            size={18}
            className="absolute top-1/2 left-4 -translate-y-1/2 text-zinc-400"
          />

          <input
            type="text"
            placeholder="Search leads by name, email, or company..."
            className="h-12 w-full rounded-2xl border border-zinc-200 bg-white pr-4 pl-11 text-sm transition outline-none focus:border-indigo-500"
          />
        </div>

        {/* FILTERS */}
        <div className="flex items-center gap-3">
          <Button label="Status" icon={Funnel} />

          <Button label="Source" />

          <Button label="Latest" />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex shrink-0 items-center gap-3">
        <Button label="Export" icon={Download} />

        <Button label="Add Lead" icon={Plus} variant="primary" />
      </div>
    </div>
  );
}
