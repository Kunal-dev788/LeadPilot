import { leadsData } from "@/constants/dashboard-data";
import { LeadRow } from "./lead-row";

export function LeadsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-175">
        <thead>
          <tr className="border-t border-zinc-100 bg-zinc-50/70">
            <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide text-zinc-400 uppercase">
              Name
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide text-zinc-400 uppercase">
              Company
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide text-zinc-400 uppercase">
              Status
            </th>
            <th className="px-6 py-4 text-right text-xs font-semibold tracking-wide text-zinc-400 uppercase">
              Value
            </th>
          </tr>
        </thead>

        <tbody>
          {leadsData.map((lead) => (
            <LeadRow
              key={lead.id}
              name={lead.name}
              company={lead.company}
              status={lead.status}
              value={lead.value}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
