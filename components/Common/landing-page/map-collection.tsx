"use client";

import Image from "next/image";

import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";

type MapItem = {
  title: string;
  spots: number;
  curator: string;
  price: string;
  image: string;
};

const maps: MapItem[] = [
  {
    title: "Oxford Hidden Gems",
    spots: 48,
    curator: "Alice P.",
    price: "$12.99",
    image:
      "https://images.unsplash.com/photo-1580041065738-e72023775cdc?q=80&w=1200",
  },
  {
    title: "Secret Paris Bistro Map",
    spots: 32,
    curator: "Jean R.",
    price: "$14.99",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200",
  },
  {
    title: "Amsterdam Nightlife",
    spots: 65,
    curator: "Bram V.",
    price: "$15.99",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?q=80&w=1200",
  },
];

export default function MapCollection() {
  return (
    <section className="max-w-360 mx-auto px-4 md:px-6 py-16 space-y-10">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold">Explore Our Map Collection</h2>
          <p className="text-muted-foreground mt-2">
            Curated by experts and updated daily.
          </p>
        </div>

        <Link href={"/catalog"}>
          <button className="text-sm font-medium border-b-2 border-yellow-500">
            View Full Catalog
          </button>
        </Link>
      </div>

      {/* Carousel */}
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {maps.map((map, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="relative rounded-3xl overflow-hidden group">
                {/* Image */}
                <Image
                  src={map.image}
                  alt={map.title}
                  width={600}
                  height={700}
                  className="w-full h-105 object-cover"
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                {/* Price */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {map.price}
                </div>

                {/* Text */}
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">{map.title}</h3>

                  <p className="text-sm text-white/80">
                    {map.spots} spots • Curated by {map.curator}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
