export type ActivityType = "assigned" | "status" | "email";

export interface Activity {
  id: number;
  title: string;
  description: string;
  time: string;
  type: ActivityType;
}
