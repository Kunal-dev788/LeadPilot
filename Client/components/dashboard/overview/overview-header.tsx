import { Plus } from "lucide-react";

export function OverviewHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
      {/* LEFT */}
      <div>
        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <span>Home</span>
          <span>/</span>
          <span className="font-medium text-indigo-600">Dashboard</span>
        </div>
        {/* TITLE */}
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
          Overview
        </h1>
      </div>
      {/* BUTTON */}
      <button className="flex h-11 w-full items-center gap-2 rounded-2xl bg-indigo-600 px-4 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-500 sm:h-12 sm:w-fit">
        <Plus size={18} />
        <span>New Lead</span>
      </button>
    </div>
  );
}
