import { LeadAvatar } from "./lead-avatar";

import { StatusBadge } from "./status-badge";

type LeadRowProps = {
  name: string;
  company: string;
  status: string;
  value: string;
};

export function LeadRow({ name, company, status, value }: LeadRowProps) {
  return (
    <tr className="border-t border-zinc-100 transition hover:bg-zinc-50/60">
      {/* NAME */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-4">
          <LeadAvatar name={name} />

          <div>
            <p className="font-medium text-zinc-900">{name}</p>
          </div>
        </div>
      </td>

      {/* COMPANY */}
      <td className="px-6 py-5 text-sm text-zinc-600">{company}</td>

      {/* STATUS */}
      <td className="px-6 py-5">
        <StatusBadge status={status} />
      </td>

      {/* VALUE */}
      <td className="px-6 py-5 text-right font-semibold text-zinc-900">
        {value}
      </td>
    </tr>
  );
}
