import { BusinessStats } from "@/components/dashboard/business/business-stats";
import { BusinessTable } from "@/components/dashboard/business/business-table";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-800  mb-6">Business</h1>

      <BusinessStats />
      {/* Table */}
      <BusinessTable />
    </div>
  );
}
