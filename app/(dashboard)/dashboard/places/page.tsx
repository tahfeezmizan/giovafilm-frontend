"use client";

import { PlacesTable } from "@/components/dashboard/places/places-table";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Places</h1>
        </div>
        <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
          <Plus size={20} />
          Add Place
        </button>
      </div>

      {/* Table */}
      <PlacesTable />
    </div>
  );
}
