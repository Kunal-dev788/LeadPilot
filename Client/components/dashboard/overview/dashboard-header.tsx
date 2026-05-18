import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Heading } from "@/components/shared/heading";
import { Button } from "@/components/ui/buttons/button";
import { Plus } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
      {/* LEFT */}
      <div className="space-y-2">
        <Breadcrumb />
        {/* TITLE */}
        <Heading title="Overview" />
      </div>
      {/* BUTTON */}
      <Button label="Add Lead" icon={Plus} variant="primary" />
    </div>
  );
}
