"use client";

import { CreateOfferDialog } from "@/components/dashboard/offers/create-offer-dialog";
import { OffersTable } from "@/components/dashboard/offers/offers-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function page() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Offers</h1>

        <Button
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
        >
          <Plus size={20} />
          Create Offers
        </Button>
      </div>

      {/* Table */}
      <OffersTable />

      {/* Create Offer Dialog */}
      <CreateOfferDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
