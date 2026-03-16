"use client";

import { Utensils, MessageSquare, Mountain, Feather } from "lucide-react";
import { AwardCard } from "./award-card";
import { UnlockedAwardCard } from "./unlocked-award-card";

import unlockImage from "@/public/offers-image/Gourmet Garden.png";

/*
  Awards Page
  Displays user achievements with progress.
*/

export default function AwardsPage() {
  const awards = [
    {
      title: "Gourmet Guide",
      progress: 72,
      current: 1458,
      total: 2000,
      icon: Utensils,
    },
    {
      title: "Top Reviewer",
      progress: 80,
      current: 800,
      total: 1000,
      icon: MessageSquare,
    },
    {
      title: "Trail Master",
      progress: 50,
      current: 250,
      total: 500,
      icon: Mountain,
    },
    {
      title: "History Buff",
      progress: 80,
      current: 1200,
      total: 1500,
      icon: Feather,
    },
  ];

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-360 mx-auto px-4 md:px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10">AWARDS</h1>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award) => (
            <AwardCard
              key={award.title}
              title={award.title}
              progress={award.progress}
              current={award.current}
              total={award.total}
              Icon={award.icon}
            />
          ))}
        </div>

        {/* Unlocked Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <UnlockedAwardCard title="Legendary Explorer" image={unlockImage} />
        </div>
      </div>
    </div>
  );
}
