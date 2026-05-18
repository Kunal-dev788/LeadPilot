import { ActivityCard } from "./activity-card";

export function RecentActivity() {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-7">
      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          Recent Activity
        </h2>
      </div>
      <ActivityCard />
      {/* FOOTER */}
      <button className="mt-10 text-sm font-medium text-indigo-600 transition hover:text-indigo-500">
        View All Activity
      </button>
    </div>
  );
}
