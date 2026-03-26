"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Edit2, Share2 } from "lucide-react";

/**
 * ProfileSidebar Component
 *
 * Left sidebar displaying user profile information including:
 * - User avatar with level badge
 * - User name and achievement level
 * - Join date
 * - Edit Profile and Share Profile buttons
 * - Milestones card with statistics
 */

interface MilestonesData {
  distanceTraveled: string;
  placesVisited: number;
  tripsPlanned: number;
}

interface ProfileSidebarProps {
  name: string;
  level: string;
  joinDate: string;
  avatar: string;
  milestones: MilestonesData;
}

export function ProfileSidebar({
  name,
  level,
  joinDate,
  avatar,
  milestones,
}: ProfileSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
        {/* Avatar with Achievement Badge */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-lg object-cover"
          />
          <div className="absolute bottom-0 right-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-white">
            ⭐
          </div>
        </div>

        {/* User Name */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>

        {/* Level Badge */}
        <div className="inline-block bg-yellow-50 px-3 py-1 rounded-full mb-2">
          <span className="text-yellow-500 font-semibold text-sm">{level}</span>
        </div>

        {/* Join Date */}
        <p className="text-gray-500 text-sm flex items-center justify-center gap-1 mb-6">
          📅 Joined {joinDate}
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg flex items-center justify-center gap-2">
            <Edit2 size={18} />
            Edit Profile
          </Button>
          <Button
            variant="outline"
            className="w-full rounded-lg flex items-center justify-center gap-2 border-gray-200"
          >
            <Share2 size={18} />
            Share Profile
          </Button>
        </div>
      </div>

      {/* Milestones Card */}
      <div className="bg-gray-900 rounded-2xl p-6 text-white">
        <h3 className="font-bold text-lg mb-6 tracking-widest">MILESTONES</h3>

        <div className="space-y-5">
          {/* Distance Traveled */}
          <div>
            <p className="text-gray-400 text-sm mb-1">Distance Traveled</p>
            <p className="text-yellow-400 text-2xl font-bold">
              {milestones.distanceTraveled}
            </p>
          </div>

          {/* Places Visited */}
          <div>
            <p className="text-gray-400 text-sm mb-1">Places Visited</p>
            <p className="text-yellow-400 text-2xl font-bold">
              {milestones.placesVisited}
            </p>
          </div>

          {/* Trips Planned */}
          <div>
            <p className="text-gray-400 text-sm mb-1">Trips Planned</p>
            <p className="text-yellow-400 text-2xl font-bold">
              {milestones.tripsPlanned}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
