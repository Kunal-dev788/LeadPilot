import { activityData } from "@/constants/dashboard-data";
import { ActivityItem } from "./activity-item";

export function ActivityCard() {
  return (
    <div className="relative mt-8">
      {/* LINE */}
      <div className="absolute top-0 left-4.5 h-full w-px bg-zinc-200" />

      <div className="space-y-8">
        {activityData.map((activity) => (
          <ActivityItem
            key={activity.id}
            type={activity.type}
            title={activity.title}
            time={activity.time}
            description={activity.description}
          />
        ))}
      </div>
    </div>
  );
}
