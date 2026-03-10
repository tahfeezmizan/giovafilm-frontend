"use client";

import { AddCategoryDialog } from "@/components/dashboard/categories/AddCategoryDialog";
import { CategoryTable } from "@/components/dashboard/categories/category-table";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
        </div>
        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          <Plus size={20} />
          Add Categories
        </button>
      </div>

      {/* Table */}
      <CategoryTable />

      <AddCategoryDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
}
