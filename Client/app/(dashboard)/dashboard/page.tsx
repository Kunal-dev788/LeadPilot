import { DashboardMainSection } from "@/components/dashboard/sections/dashboard-main-section";
import { DashboardLayout } from "@/components/layouts/dashboard-layout/dashboard-layout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardMainSection />
    </DashboardLayout>
  );
}
