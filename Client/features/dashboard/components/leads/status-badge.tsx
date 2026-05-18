type StatusBadgeProps = {
  status: string;
};

const statusStyles = {
  Qualified: "bg-emerald-50 text-emerald-600 border border-emerald-100",

  Contacted: "bg-blue-50 text-blue-600 border border-blue-100",

  New: "bg-zinc-100 text-zinc-500 border border-zinc-200",
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
        statusStyles[status as keyof typeof statusStyles]
      }`}
    >
      {status}
    </span>
  );
}
