import { Breadcrumb } from "@/components/shared/breadcrumb";
import { Heading } from "@/components/shared/heading";

export function LeadsHeader() {
  return (
    <div className="flex flex-col gap-2">
      {/* LEFT */}
      <Breadcrumb />
      {/* TITLE */}
      <Heading
        title="Leads Management"
        description="Track, organize, and manage your sales pipeline efficiently."
      />
    </div>
  );
}
