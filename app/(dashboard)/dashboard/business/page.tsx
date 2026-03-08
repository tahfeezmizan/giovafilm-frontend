import { BusinessStats } from "@/components/dashboard/business/business-stats";
import { BusinessTable } from "@/components/dashboard/business/business-table";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Business</h1>

        {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
          <Plus size={16} />
          Create New Map
        </Button> */}
      </div>

      <BusinessStats />
      {/* Table */}
      <BusinessTable />
    </div>
  );
}
