import SalesTaxes from "@/components/dashboard/reports/sales-taxes";
import { UsageStatistics } from "@/components/dashboard/reports/usage-statistics";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Header */}

      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Reports & Statistics
      </h1>

      <div className="space-y-6">
        <SalesTaxes />
        <UsageStatistics />
      </div>
    </div>
  );
}
