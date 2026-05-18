import { AppLayout } from "@/layouts/app-layout/app-layout";
import { DashboardMainSection } from "@/features/dashboard/components/sections/dashboard-main-section";

export default function DashboardPage() {
  return (
    <AppLayout>
      <DashboardMainSection />
    </AppLayout>
  );
}
