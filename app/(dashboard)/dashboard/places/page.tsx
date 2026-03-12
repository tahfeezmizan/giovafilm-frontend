"use client";

import { PlacesTable } from "@/components/dashboard/places/places-table";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Places</h1>
        </div>
        <Link href={"/dashboard/places/add-place"}>
          <button className="flex items-center gap-2 bg-primary/80 px-4 py-2 rounded-lg hover:bg-primary transition-colors font-medium">
            <Plus size={20} />
            Add Place
          </button>
        </Link>
      </div>

      {/* Table */}
      <PlacesTable />
    </div>
  );
}
