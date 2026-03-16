"use client";

import Image from "next/image";

export function ContactMapSection() {
  return (
    <div className="h-72 rounded-2xl overflow-hidden">
      <Image
        src={require("@/public/explore-maps.png")}
        alt="map"
        width={1000}
        height={1000}
        className="w-full h-full object-cover "
      />
    </div>
  );
}
