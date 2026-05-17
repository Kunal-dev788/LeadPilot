import { ArrowRight } from "lucide-react";

import { LeadsTable } from "./leads-table";

export function LeadsOverview() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white">
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-5">
        <div>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Leads Overview
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Track and manage recent leads
          </p>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-indigo-600 transition hover:text-indigo-500">
          View All
          <ArrowRight size={16} />
        </button>
      </div>

      {/* TABLE */}
      <LeadsTable />
    </section>
  );
}
