import React from "react";
import { motion } from "motion/react";
import {
  Heart,
  Map as MapIcon,
  LayoutGrid,
  Gift,
  BookOpen,
} from "lucide-react";
import { NavItem } from "./NavItem";

export const HomeScreen = ({
  onNavigate,
}: {
  onNavigate: (screen: string) => void;
}) => {
  const MAP_CARDS = [
    {
      id: 1,
      title: "Rome Historic Center Walking Tour",
      subtitle: "Professional Guide",
      price: "$9.99",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      title: "Rome Historic Center Walking Tour",
      subtitle: "Professional Guide",
      price: "$9.99",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      title: "Rome Historic Center Walking Tour",
      subtitle: "Professional Guide",
      price: "$9.99",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      title: "Rome Historic Center Walking Tour",
      subtitle: "Professional Guide",
      price: "$9.99",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 5,
      title: "Rome Historic Center Walking Tour",
      subtitle: "Professional Guide",
      price: "$9.99",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 6,
      title: "Rome Historic Center Walking Tour",
      subtitle: "Professional Guide",
      price: "$9.99",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Top Search Bar */}
      <header className="px-5 pt-6 pb-4 sticky top-0 bg-white/80 backdrop-blur-md z-20">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M4 6H20M4 18H12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-gray-400 text-sm font-medium">
              Search digital maps, cities...
            </span>
          </div>
          <div
            className="w-10 h-10 rounded-full border-2 border-[#FFC107] p-0.5 overflow-hidden cursor-pointer"
            onClick={() => onNavigate("login")}
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-5 flex-1 pb-24">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-5 mt-2">
          <h2 className="text-xl font-bold text-[#1A1A1A]">Featured Maps</h2>
          <button className="text-[#FFC107] text-sm font-bold">View All</button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          {MAP_CARDS.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.id * 0.05 }}
              onClick={() => onNavigate("details")}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                  <Heart className="w-4 h-4 text-[#FFC107]" />
                </button>
              </div>

              {/* Card Details */}
              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-[13px] font-bold text-[#1A1A1A] leading-tight mb-1 line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-[11px] text-[#9E9E9E] mb-2">
                  {card.subtitle}
                </p>
                <div className="mt-auto">
                  <span className="text-sm font-bold text-[#1A1A1A] block mb-2">
                    {card.price}
                  </span>
                  <button className="w-full py-2.5 bg-[#FFC107] hover:bg-[#FFB300] text-white text-[12px] font-bold rounded-full transition-colors shadow-sm">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-107.5 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center z-30">
        <NavItem icon={<MapIcon className="w-6 h-6" />} label="Map" />
        <NavItem icon={<LayoutGrid className="w-6 h-6" />} label="Places" />
        <NavItem icon={<Gift className="w-6 h-6" />} label="Offer" />
        <NavItem
          icon={<BookOpen className="w-6 h-6" />}
          label="Catalog"
          active
        />
      </nav>
    </div>
  );
};
