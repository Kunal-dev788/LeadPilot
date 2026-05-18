import { Breadcrumb } from "@/shared/components/breadcrumb";
import { Heading } from "@/shared/components/heading";
import { Button } from "@/shared/ui/button";
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
