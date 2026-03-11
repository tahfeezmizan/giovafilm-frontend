"use client";

import { MAP_CARDS } from "@/components/Common/home-screen2";
import { ChevronLeft, Info, Play, Share2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function DetailsScreen() {
  const router = useRouter();
  const { id } = useParams();

  const data =
    MAP_CARDS.find((card) => card.id === parseInt(id as string)) ||
    MAP_CARDS[0];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-gray-50 sticky top-0 bg-white z-20">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6 text-[#1A1A1A]" />
        </button>
        <h2 className="text-lg font-bold text-[#1A1A1A]">Map Details</h2>
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <Share2 className="w-5 h-5 text-[#1A1A1A]" />
        </button>
      </header>

      <main className="flex-1 px-6 pt-6 pb-24">
        {/* Hero Image */}
        <div className="relative mb-8">
          <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={data?.image}
              alt={data?.title}
              width={400}
              height={400}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Play Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
              <div className="w-2 h-2 rounded-full bg-white/50"></div>
            </div>
          </div>
        </div>

        {/* Title & Price */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-[#1A1A1A] mb-2 tracking-tight">
            PUERTO RICO MAPS
          </h1>
          <p className="text-2xl font-medium text-[#757575]">{data?.price}</p>
        </div>

        {/* Buy Button */}
        <button className="w-full py-4 bg-[#FFC107] text-white font-bold rounded-2xl shadow-[0_12px_24px_rgba(255,193,7,0.4)] flex items-center justify-center gap-3 mb-10 hover:scale-[1.02] transition-transform active:scale-95">
          <ShoppingCart className="w-6 h-6" />
          <span className="text-lg uppercase tracking-wide">Buy Now</span>
        </button>

        {/* Description Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-[#1A1A1A] uppercase tracking-tight">
              Map Description
            </h3>
            <Info className="w-5 h-5 text-[#BDBDBD]" />
          </div>

          <div className="bg-white border border-[#F5F5F5] rounded-3xl p-6 shadow-sm">
            <div className="space-y-4 text-[#424242] text-[13px] leading-relaxed">
              <p>
                Explore the vibrant heart of the Caribbean with our
                comprehensive Puerto Rico Map collection. This digital package
                includes high-resolution topographic data, detailed urban street
                maps of San Juan, and curated points of interest across the
                island.
              </p>
              <p>
                From the lush trails of El Yunque National Forest to the
                historic cobblestone streets of Old San Juan, every corner of
                the island is mapped with precision.
              </p>
              <ul className="space-y-3 list-disc pl-4">
                <li>Offline access available for remote areas</li>
                <li>3D terrain visualization for hiking enthusiasts</li>
                <li>Verified points of interest including hidden beaches</li>
                <li>Real-time updates and seasonal highlights</li>
              </ul>
              <p className="italic text-[#757575] pt-2">
                Note: This is a digital download. Access is granted immediately
                after purchase through your profile's 'My Maps' section.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
