"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { MoreVertical } from "lucide-react";
import { MapItem } from "@/lib/purchased-maps";

type Props = {
  map: MapItem;
};

export default function PurchasedMapCard({ map }: Props) {
  return (
    <Card className="flex items-center justify-between p-4 rounded-xl">
      {/* Left Content */}
      <div className="flex items-center gap-4">
        {/* Image */}
        <div className="relative w-20 h-16 rounded-lg overflow-hidden">
          <Image
            src={map.image}
            alt={map.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="font-semibold text-sm">{map.title}</h3>

          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
            <Badge variant="secondary" className="text-[10px]">
              {map.tag}
            </Badge>

            <span>{map.description}</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">OFFLINE STATUS</span>

          <Switch defaultChecked={map.offline} />
        </div>

        <MoreVertical size={18} className="text-muted-foreground" />
      </div>
    </Card>
  );
}
