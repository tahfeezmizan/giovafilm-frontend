"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Bookmark, Download, Share2 } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    title: "Wishlist Collection",
    description:
      "Save maps you're planning to buy later for your next big adventure.",
    icon: <Bookmark className="text-yellow-500" size={20} />,
  },
  {
    title: "Offline Access",
    description:
      "Download your maps to navigate even without an internet connection.",
    icon: <Download className="text-yellow-500" size={20} />,
  },
  {
    title: "Collaborative Trips",
    description:
      "Invite friends to view your purchased maps and plan together.",
    icon: <Share2 className="text-yellow-500" size={20} />,
  },
];

export default function PersonalizedExperience() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute inset-0 bg-[#e9dfc9] rounded-tr-[200px] z-0" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold">Personalized Experience</h2>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="rounded-xl shadow-sm bg-white/70 backdrop-blur"
              >
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="bg-yellow-100 w-9 h-9 rounded-md flex items-center justify-center">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>

                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE MOCK UI */}
        <div className="relative flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl w-[420px] p-6">
            {/* Fake Browser Top */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>

            {/* Profile Row */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">👤</span>
              </div>

              <div>
                <p className="font-semibold">Welcome back, Explorer!</p>

                <p className="text-sm text-muted-foreground">
                  You have 3 active maps in your collection.
                </p>
              </div>
            </div>

            {/* Fake Content */}
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/2" />

              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 border-2 border-dashed rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-gray-300 rounded-full" />
                </div>

                <div className="space-y-3">
                  <div className="h-10 bg-yellow-100 rounded-md" />
                  <div className="h-10 bg-gray-200 rounded-md" />
                  <div className="h-10 bg-gray-200 rounded-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
