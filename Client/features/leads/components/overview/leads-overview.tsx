import { LeadsToolbar } from "../toolbar/leads-toolbar";
import { LeadsHeader } from "./leads-headers";

export function LeadsOverview() {
  return (
    <section className="flex flex-col gap-5">
      <LeadsHeader />
      <LeadsToolbar />
    </section>
  );
}
