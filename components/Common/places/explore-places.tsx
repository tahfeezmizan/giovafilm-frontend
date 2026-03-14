"use client";

import Image, { StaticImageData } from "next/image";
import { Search, SlidersHorizontal, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import image1 from "@/public/favorite-places/favorite-places (1).png";
import image2 from "@/public/favorite-places/favorite-places (2).png";
import image3 from "@/public/favorite-places/favorite-places (3).png";
import image4 from "@/public/favorite-places/favorite-places (4).png";

type Place = {
  id: number;
  title: string;
  location: string;
  reviews: number;
  category: string;
  rating: number;
  image: StaticImageData | string;
};

const places: Place[] = [
  {
    id: 1,
    title: "Playa Flamingo",
    location: "Culebra, PR",
    reviews: 120,
    category: "Beach & Snorkeling",
    rating: 4.9,
    image: image2,
  },
  {
    id: 2,
    title: "El Yunque Forest",
    location: "Rio Grande, PR",
    reviews: 250,
    category: "Hiking & Nature",
    rating: 4.8,
    image: image1,
  },
  {
    id: 3,
    title: "Old San Juan",
    location: "San Juan, PR",
    reviews: 500,
    category: "History & Architecture",
    rating: 4.7,
    image: image3,
  },
  {
    id: 4,
    title: "Cueva Ventana",
    location: "Arecibo, PR",
    reviews: 180,
    category: "Adventure & Caves",
    rating: 4.6,
    image: image4,
  },
  {
    id: 5,
    title: "Río Camuy",
    location: "Camuy, PR",
    reviews: 90,
    category: "Exploration & Cave River",
    rating: 4.5,
    image: image1,
  },
  {
    id: 6,
    title: "La Parrilla",
    location: "Luquillo, PR",
    reviews: 310,
    category: "Local Food & Dining",
    rating: 4.4,
    image: image2,
  },
];

export default function ExplorePlaces() {
  const filters = ["Near me", "Popular", "New"];

  return (
    <section className=" max-w-360 mx-auto px-6 py-12">
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900">Explore Places</h1>

        <p className="text-gray-500 mt-2">
          Discover the most breathtaking hidden gems and popular destinations
          across Puerto Rico for your next road trip adventure.
        </p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3 bg-white border rounded-xl p-2 mb-6 shadow-sm">
        <Search className="text-gray-400 ml-2" />

        <Input
          placeholder="Search locations, parks, or beaches in Puerto Rico..."
          className="border-none focus-visible:ring-0"
        />

        <Button className="bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg px-6">
          Search
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-8 flex-wrap">
        <Button variant="outline" className="flex gap-2">
          <SlidersHorizontal size={16} />
          Filter
        </Button>

        {filters.map((filter) => (
          <Button key={filter} variant="outline" className="rounded-full">
            {filter}
          </Button>
        ))}
      </div>

      {/* Places Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <div
            key={place.id}
            className="rounded-xl overflow-hidden bg-white border hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative h-52 w-full">
              <Image
                src={place.image}
                alt={place.title}
                fill
                className="object-cover"
              />

              {/* Rating Badge */}
              <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md flex items-center gap-1 text-sm font-medium shadow">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                {place.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{place.title}</h3>

              <div className="flex items-center text-gray-500 text-sm mt-1 gap-1">
                <MapPin size={14} />
                {place.location}
              </div>

              <p className="text-gray-400 text-sm mt-1">
                {place.reviews} reviews • {place.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        <Button variant="outline" size="icon">
          ‹
        </Button>

        <Button className="bg-yellow-400 text-black">1</Button>

        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>

        <span className="flex items-center px-2">...</span>

        <Button variant="outline">12</Button>

        <Button variant="outline" size="icon">
          ›
        </Button>
      </div>
    </section>
  );
}
