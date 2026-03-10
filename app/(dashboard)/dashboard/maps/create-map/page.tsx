"use client";

import { AddCategoryDialog } from "@/components/dashboard/categories/AddCategoryDialog";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import {
  Car,
  ChevronRight,
  Download,
  Edit2,
  History,
  Hotel,
  Layers,
  Moon,
  Palmtree,
  ParkingCircle,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Square,
  Star,
  Target,
  Trees,
  Utensils,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "Featured", icon: Star, count: 0 },
  { name: "Food & Drinks", icon: Utensils, count: 4 },
  { name: "Beaches", icon: Palmtree, count: 1 },
  { name: "Nature & Views", icon: Trees, count: 1 },
  { name: "Activities", icon: Target, count: 1 },
  { name: "History & Culture", icon: History, count: 1 },
  { name: "Shopping & Markets", icon: ShoppingBag, count: 0 },
  { name: "Nightlife", icon: Moon, count: 0 },
  { name: "Hidden Gems", icon: Sparkles, count: 0 },
  { name: "Roadside Stops", icon: Car, count: 0 },
  { name: "Hotels & Stays", icon: Hotel, count: 0 },
  { name: "Parking & Services", icon: ParkingCircle, count: 0 },
];

export default function CreateMapPage() {
  const [selectedCategory, setSelectedCategory] = useState("Food & Drinks");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY || ""}>
      <div className="flex h-[85vh] w-full bg-white overflow-hidden font-sans rounded-2xl">
        {/* Sidebar */}
        <div className="w-80 flex flex-col border-r border-gray-200 bg-white z-20">
          <div className="p-6 space-y-4">
            <div className="space-y-1">
              <h1 className="text-xl font-black tracking-tight text-gray-900 uppercase">
                Map Title
              </h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Roadtripeado Maps 9.0</span>
                <Edit2
                  size={14}
                  className="cursor-pointer hover:text-blue-600"
                />
              </div>
              <p className="text-xs text-gray-400">
                Admin can manage pins & categories
              </p>
            </div>

            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <Plus size={16} />
                Add Place (Drop Pin)
              </button>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="w-full flex items-center gap-3 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Plus size={16} />
                Add Category
              </button>
            </div>

            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search places..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-2">
            <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Categories
            </div>
            <div className="space-y-0.5">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    selectedCategory === cat.name
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <ChevronRight
                      size={14}
                      className={
                        selectedCategory === cat.name
                          ? "text-blue-500"
                          : "text-gray-300"
                      }
                    />
                    <cat.icon size={18} />
                    <span className="font-medium">{cat.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-100 space-y-2">
            <button className="w-full text-left text-xs text-gray-500 hover:text-blue-600 transition-colors">
              Import places (CSV)
            </button>
            <button className="w-full text-left text-xs text-gray-500 hover:text-blue-600 transition-colors">
              Export map
            </button>
          </div>

          <div className="bg-gray-100 p-3 text-[10px] font-bold text-gray-500 uppercase">
            Selected: {selectedCategory}
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative">
          {/* Top Search Bar */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 w-full max-w-md px-4">
            <div className="relative group">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors"
                size={18}
              />
              <input
                type="text"
                placeholder="Search location..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Map Component */}
          <div className="w-full h-full bg-gray-200">
            <Map
              defaultCenter={{ lat: 40.7128, lng: -74.006 }}
              defaultZoom={11}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
              mapId="DEMO_MAP_ID"
            >
              <Marker position={{ lat: 40.7128, lng: -74.006 }} />
            </Map>
          </div>

          {/* Bottom Toolbar */}
          {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-white rounded-xl shadow-2xl border border-gray-200 flex items-center p-1 gap-1">
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-all">
                <X size={16} />
                Cancel
              </button>
              <div className="w-px h-6 bg-gray-200 mx-1" />
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-bold transition-all">
                <Square size={16} />
                Draw Area
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-bold transition-all">
                <Layers size={16} />
                Layers
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-bold transition-all">
                <Download size={16} />
                Export
              </button>
            </div>
          </div> */}

          {/* Zoom Controls (Right) */}
          {/* <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
            <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-600 font-bold text-xl hover:bg-gray-50 transition-all border border-gray-200">
              +
            </button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-600 font-bold text-xl hover:bg-gray-50 transition-all border border-gray-200">
              -
            </button>
            <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all border border-gray-200">
              <Target size={18} className="text-gray-400" />
            </button>
          </div> */}
        </div>
        <AddCategoryDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
      </div>
    </APIProvider>
  );
}
