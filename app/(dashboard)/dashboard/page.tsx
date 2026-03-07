import { QuickActions } from "@/components/dashboard/quick-actions";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { StatCard } from "@/components/dashboard/stat-card";
import {
  Calculator,
  DollarSign,
  Gift,
  LayoutGrid,
  MapPin,
  TrendingUp,
} from "lucide-react";

export default function Page() {
  const statsData = [
    {
      label: "Total Maps",
      value: "48",
      icon: <LayoutGrid size={24} />,
      iconBgColor: "bg-blue-500",
    },
    {
      label: "Total Places",
      value: "342",
      icon: <MapPin size={24} />,
      iconBgColor: "bg-green-500",
    },
    {
      label: "Active Offers",
      value: "27",
      icon: <Gift size={24} />,
      iconBgColor: "bg-purple-500",
    },
    {
      label: "Total Sales",
      value: "$12,450",
      icon: <DollarSign size={24} />,
      iconBgColor: "bg-yellow-500",
    },
    {
      label: "This Month Revenue",
      value: "$3,280",
      icon: <TrendingUp size={24} />,
      iconBgColor: "bg-pink-500",
    },
    {
      label: "Taxes Collected",
      value: "$820",
      icon: <Calculator size={24} />,
      iconBgColor: "bg-indigo-500",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold font-arial pb-6">Dashboard Overview</h1>
      <StatCard data={statsData} />
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <QuickActions />
        </div>
        <div className="col-span-2">
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
