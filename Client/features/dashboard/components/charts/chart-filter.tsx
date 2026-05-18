type ChartFilterProps = {
  active: string;
};

export function ChartFilter({ active }: ChartFilterProps) {
  const filters = ["1W", "1M", "1Y"];

  return (
    <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-1">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`rounded-xl px-3 py-1.5 text-sm font-medium transition ${
            active === filter
              ? "bg-indigo-600 text-white shadow-sm"
              : "text-zinc-500 hover:text-zinc-900"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
