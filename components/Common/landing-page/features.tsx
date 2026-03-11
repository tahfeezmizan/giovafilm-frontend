import React from "react";
import { MapPin, Camera, Tag, LayoutGrid } from "lucide-react";

const features = [
  {
    title: "Curated Locations",
    description: "Hand-picked spots from locals.",
    icon: MapPin,
    color: "bg-[#FFC107]",
  },
  {
    title: "Photos & Videos",
    description: "Visual previews of every spot.",
    icon: Camera,
    color: "bg-[#FFC107]",
  },
  {
    title: "Exclusive Local Offers",
    description: "Deals only for our explorers.",
    icon: Tag,
    color: "bg-[#FFC107]",
  },
  {
    title: "Smart Categories",
    description: "Filter by mood or activity.",
    icon: LayoutGrid,
    color: "bg-[#FFC107]",
  },
];

export function Features() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Curved Background Shape */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[#FFFDF5] clip-path-hero"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-black text-gray-900 leading-tight mb-6">
            What You Get Inside Every Map
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-12 max-w-lg">
            Every digital map is hand-crafted to provide the ultimate urban
            exploration experience, far beyond what simple GPS apps offer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div
                  className={`${feature.color} p-2 rounded-lg text-black shrink-0`}
                >
                  <feature.icon size={20} fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-[32px] overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/seed/night-city/600/600"
                alt="Night City"
                className="w-full h-full object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-[32px] overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/seed/coffee/600/600"
                alt="Coffee"
                className="w-full h-full object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="rounded-[32px] overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/seed/alley/600/800"
                alt="Alley"
                className="w-full h-full object-cover aspect-[3/4]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-[32px] overflow-hidden shadow-lg">
              <img
                src="https://picsum.photos/seed/interior/600/600"
                alt="Interior"
                className="w-full h-full object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
