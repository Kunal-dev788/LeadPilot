import { Activity } from "@/features/dashboard/types/dashboard";

export const salesData = [
  { week: "Week 1", revenue: 4000 },
  { week: "Week 2", revenue: 22000 },
  { week: "Week 3", revenue: 34000 },
  { week: "Week 4", revenue: 46000 },
];

export const activityData: Activity[] = [
  {
    id: 1,
    title: "Lead Assigned",
    description: "Sarah Jenkins assigned to TechCorp deal.",
    time: "10m ago",
    type: "assigned",
  },

  {
    id: 2,
    title: "Status Changed",
    description: "GlobalWorks moved to Qualified.",
    time: "2h ago",
    type: "status",
  },

  {
    id: 3,
    title: "Email Sent",
    description: "Follow-up sent to Mike Ross.",
    time: "5h ago",
    type: "email",
  },
];

export const leadsData = [
  {
    id: 1,
    name: "Emma Lawson",
    company: "Acme Corp",
    status: "Qualified",
    value: "₹12,000",
  },

  {
    id: 2,
    name: "Mike Ross",
    company: "Pearson Specter",
    status: "Contacted",
    value: "₹8,500",
  },

  {
    id: 3,
    name: "Sarah Jenkins",
    company: "TechCorp Inc.",
    status: "New",
    value: "₹24,000",
  },

  {
    id: 4,
    name: "David Barnes",
    company: "GlobalWorks",
    status: "Qualified",
    value: "₹45,000",
  },

  {
    id: 5,
    name: "Alice Wright",
    company: "Wright & Co.",
    status: "Contacted",
    value: "₹5,200",
  },
];
