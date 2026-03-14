import { Button } from "@/components/ui/button";
import PurchasedMapCard from "./purchased-maps-card";
import { maps } from "@/lib/purchased-maps";

export default function PurchasedMaps() {
  return (
    <section className="max-w-5xl mx-auto py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Purchased Maps</h2>
          <p className="text-muted-foreground text-sm">
            Manage and access your offline adventure guides
          </p>
        </div>

        <Button className="bg-yellow-500 hover:bg-yellow-600">
          Browse More Maps
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 text-sm border-b pb-2">
        <span className="font-semibold border-b-2 border-yellow-500 pb-1">
          All Maps
        </span>

        <span className="text-muted-foreground">Active</span>
        <span className="text-muted-foreground">Inactive</span>
      </div>

      {/* Map List */}
      <div className="space-y-4">
        {maps.map((map) => (
          <PurchasedMapCard key={map.id} map={map} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 pt-4">
        <Button variant="outline" size="icon">
          {"<"}
        </Button>

        <Button className="bg-yellow-500 hover:bg-yellow-600">1</Button>

        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>

        <Button variant="outline" size="icon">
          {">"}
        </Button>
      </div>
    </section>
  );
}
