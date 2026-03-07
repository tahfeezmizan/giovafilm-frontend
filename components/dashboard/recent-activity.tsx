import { Card } from "@/components/ui/card";

interface Activity {
  description: string;
  timestamp: string;
}

const activities: Activity[] = [
  { description: "Place updated: Golden Gate Park", timestamp: "2 hours ago" },
  {
    description: "Offer published: 20% off at Cafe Mocha",
    timestamp: "4 hours ago",
  },
  {
    description: "Map created: San Francisco Food Tour",
    timestamp: "Yesterday",
  },
  {
    description: "User role changed: Sarah Johnson to Administrator",
    timestamp: "2 days ago",
  },
  { description: "Place updated: The Louvre Museum", timestamp: "3 days ago" },
  {
    description: "Offer published: Free dessert at Bella Italia",
    timestamp: "3 days ago",
  },
];

export function RecentActivity() {
  return (
    <Card className="bg-white p-6 rounded-xl border-0 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
          >
            <p className="text-gray-700 text-sm">{activity.description}</p>
            <p className="text-gray-400 text-xs whitespace-nowrap ml-4">
              {activity.timestamp}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}
