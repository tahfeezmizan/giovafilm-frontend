import { MapsTable } from "@/components/dashboard/maps/maps-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Maps</h1>

        <Link href="/dashboard/maps/create-map">
          <Button className="bg-primary/80 hover:bg-primary text-black flex items-center gap-2">
            <Plus size={16} />
            Create New Map
          </Button>
        </Link>
      </div>

      {/* Table */}
      <MapsTable />
    </div>
  );
}
