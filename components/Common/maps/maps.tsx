"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { MAP_CARDS } from "../home-screen2";

export default function Maps() {
  return (
    <div className="bg-gray-50 py-10 font-inter">
      <div className="max-w-360 mx-auto px-6">
        <div className="flex justify-between items-center mb-5 mt-2">
          <div className="">
            <h2 className="text-3xl  font-bold leading-normal">
              Featured Maps
            </h2>
            <p className="text-gray-500/80">
              Explore the best walking tours curated by professionals.
            </p>
          </div>
          <button className="text-black font-bold flex justify-between items-center">
            View All <ArrowRight />
          </button>
        </div>

        <div className={`grid  grid-cols-4 gap-7`}>
          {MAP_CARDS?.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: card.id * 0.05 }}
              //   onClick={() => onNavigate("details")}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col cursor-pointer pb-2"
            >
              {/* Image Container */}
              <div className="relative h-64 mb-2">
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
                <h3 className="text-lg font-bold text-[#1A1A1A] leading-tight mb-1 line-clamp-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#9E9E9E] mb-2">{card.subtitle}</p>
                <div className="mt-auto">
                  <span className="text-xl font-bold text-[#1A1A1A] block mb-2">
                    {card.price}
                  </span>
                  <Link href={`/details/${card.id}`}>
                    <Button className="w-full text-black py-6 px-13.5 text-lg bg-primary/80 hover:bg-primary font-bold rounded-lg transition-colors shadow-sm cursor-pointer">
                      Buy Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
