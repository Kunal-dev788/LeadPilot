import { LeadsOverview } from "@/features/leads/components/overview/leads-overview";
import { AppLayout } from "@/layouts/app-layout/app-layout";

export default function LeadsPage() {
  return (
    <AppLayout>
      <LeadsOverview />
    </AppLayout>
  );
}
