import { AppLayout } from "@/components/layouts/app-layout/app-layout";
import { LeadsOverview } from "@/components/leads/overview/leads-overview";

export default function LeadsPage() {
  return (
    <AppLayout>
      <LeadsOverview />
    </AppLayout>
  );
}
