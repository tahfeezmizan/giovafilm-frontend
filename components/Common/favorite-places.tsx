"use client";

import Image from "next/image";
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type Place = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const initialPlaces: Place[] = [
  {
    id: 1,
    title: "Old San Juan Historic District",
    description:
      "Vibrant colonial architecture and cobblestone streets in the heart of Puerto Rico.",
    image: "/places/old-san-juan.jpg",
  },
  {
    id: 2,
    title: "El Yunque Rainforest Trails",
    description:
      "Lush tropical hiking paths leading to breathtaking waterfalls and exotic wildlife.",
    image: "/places/yunque.jpg",
  },
  {
    id: 3,
    title: "Culebra Island Beaches",
    description:
      "Pristine white sand beaches and crystal-clear turquoise waters for ultimate relaxation.",
    image: "/places/culebra.jpg",
  },
  {
    id: 4,
    title: "Coffee Hacienda Tour",
    description:
      "Educational journey through lush coffee plantations with authentic tasting sessions.",
    image: "/places/coffee.jpg",
  },
];

export default function FavoritePlaces() {
  const [places, setPlaces] = useState(initialPlaces);
  const [search, setSearch] = useState("");

  const removePlace = (id: number) => {
    setPlaces((prev) => prev.filter((place) => place.id !== id));
  };

  const filteredPlaces = places.filter((place) =>
    place.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Favorite Places</h1>

        {/* Search */}
        <div className="flex items-center border rounded-lg px-3 py-1 bg-white">
          <Search className="text-gray-400 w-4 h-4 mr-2" />

          <Input
            placeholder="Search"
            className="border-none focus-visible:ring-0 w-40"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredPlaces.map((place) => (
          <div
            key={place.id}
            className="bg-white rounded-xl overflow-hidden border hover:shadow-md transition"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={place.image}
                alt={place.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">{place.title}</h3>

              <p className="text-gray-500 text-sm mt-1">{place.description}</p>

              {/* Remove Button */}
              <button
                onClick={() => removePlace(place.id)}
                className="text-xs tracking-widest text-gray-400 mt-3 hover:text-red-500"
              >
                REMOVE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
