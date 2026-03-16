"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Download, RotateCcw, Shield, Star } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import SimilarMaps from "./similar-maps";

interface MapDetail {
  id: number;
  title: string;
  collection: string;
  price: string;
  rating: number;
  reviews: number;
  description: string;
  mainImage: string;
  thumbnails: string[];
  features: Array<{ icon: string; text: string }>;
}

const MAPS_DATA: Record<number, MapDetail> = {
  1: {
    id: 1,
    title: "Puerto Rico Maps",
    collection: "Most Popular Collection",
    price: "$14.99",
    rating: 3.5,
    reviews: 1248,
    mainImage:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
    thumbnails: [
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=150",
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=150",
      "https://images.unsplash.com/photo-1693707994429-95caaceab2a4?q=80&w=150",
      "https://images.unsplash.com/photo-1772289935663-80aa987be656?q=80&w=150",
    ],
    description:
      "Explore the vibrant heart of the Caribbean with our comprehensive Puerto Rico Map collection. From the historic cobblestone streets of Old San Juan to the lush rainforests of El Yunque and the pristine beaches of Culebra, this bundle offers unmatched detail for travelers, researchers, and adventurers alike.",
    features: [
      { icon: "⭕", text: "Offline access" },
      { icon: "📍", text: "Verified points of interest" },
      { icon: "🏔️", text: "3D terrain visualization" },
      { icon: "⚡", text: "Real-time updates" },
    ],
  },
};

export default function FeatureMapDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);

  console.log(id);
  const map = MAPS_DATA[id] || MAPS_DATA[1];
  const [mainImage, setMainImage] = useState(map.mainImage);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-360 mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/maps" className="text-blue-600 hover:underline">
            Regional Maps
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{map.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-teal-600 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
              <img
                src={mainImage}
                alt={map.title}
                className="w-full h-full object-cover transition-opacity duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Carousel Thumbnails */}
            <div className="w-full px-0">
              <Carousel className="w-full">
                <CarouselContent>
                  {map.thumbnails.map((thumb, idx) => (
                    <CarouselItem key={idx} className="basis-1/4">
                      <div
                        onClick={() => setMainImage(thumb)}
                        className={`h-24 rounded-lg overflow-hidden cursor-pointer border-2 transition-all hover:border-yellow-400 ${
                          mainImage === thumb
                            ? "border-yellow-400"
                            : "border-gray-200"
                        }`}
                      >
                        <img
                          src={thumb}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="space-y-6">
            {/* Collection Label */}
            <div>
              <span className="inline-block text-yellow-500 font-bold text-sm tracking-wide mb-2">
                {map.collection.toUpperCase()}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {map.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-yellow-500">
                  {map.price}
                </span>
                <div className="flex items-center gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={
                          i < Math.floor(map.rating)
                            ? "fill-gray-400 text-gray-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    ({map.reviews.toLocaleString()} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Buy Button */}
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-3 rounded-lg">
              BUY NOW
            </Button>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Download size={24} className="mx-auto mb-2 text-yellow-500" />
                <p className="text-xs font-semibold text-gray-700">
                  INSTANT DOWNLOAD
                </p>
              </div>
              <div className="text-center">
                <RotateCcw size={24} className="mx-auto mb-2 text-yellow-500" />
                <p className="text-xs font-semibold text-gray-700">
                  FREE UPDATES
                </p>
              </div>
              <div className="text-center">
                <Shield size={24} className="mx-auto mb-2 text-yellow-500" />
                <p className="text-xs font-semibold text-gray-700">
                  VERIFIED DATA
                </p>
              </div>
            </div>

            {/* Description Section */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-gray-900">
                MAP DESCRIPTION
              </h3>
              <p className="text-gray-700 leading-relaxed">{map.description}</p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">KEY FEATURES</h3>
              <div className="grid grid-cols-2 gap-3">
                {map.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-xl">{feature.icon}</span>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SimilarMaps />
    </div>
  );
}
