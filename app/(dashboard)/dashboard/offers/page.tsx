import { MapsTable } from "@/components/dashboard/maps/maps-table";
import { OffersTable } from "@/components/dashboard/offers/offers-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Offers</h1>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
          <Plus size={16} />
          Create Offers
        </Button>
      </div>

      {/* Table */}
      <OffersTable />
    </div>
  );
}
