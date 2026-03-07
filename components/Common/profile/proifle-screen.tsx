import React from "react";
import {
  ArrowLeft,
  Camera,
  Heart,
  Map,
  Star,
  Trophy,
  ChevronRight,
  Store,
  CheckCircle2,
} from "lucide-react";

export const ProfileScreen = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-gray-50 sticky top-0 bg-white z-20">
        <button
          //   onClick={() => onNavigate("home")}
          className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-[#1A1A1A]" />
        </button>
        <h2 className="text-lg font-bold text-[#1A1A1A]">Profile</h2>
        <button className="text-[#FFC107] font-bold text-sm px-2">Edit</button>
      </header>

      <main className="flex-1 px-6 pt-8 pb-12 flex flex-col items-center">
        {/* Profile Image Section */}
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-[0_0_20px_rgba(255,193,7,0.2)] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
              alt="John Doe"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="absolute bottom-1 right-1 w-8 h-8 bg-[#FFC107] rounded-full border-2 border-white flex items-center justify-center shadow-md">
            <Camera className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* User Info */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-[#FFC107] mb-2">John Doe</h1>
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#FFF9E6] rounded-full">
            <CheckCircle2 className="w-4 h-4 text-[#FFC107]" />
            <span className="text-xs font-semibold text-[#BDBDBD]">
              Level 4 Explorer
            </span>
          </div>
        </div>

        {/* Menu List Card */}
        <div className="w-full bg-white border border-[#F5F5F5] rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden mb-10">
          <ProfileMenuItem
            icon={<Heart className="w-5 h-5" />}
            label="Favorites"
          />
          <ProfileMenuItem
            icon={<Map className="w-5 h-5" />}
            label="Purchased Maps"
          />
          <ProfileMenuItem
            icon={<Star className="w-5 h-5" />}
            label="Contributions & Reviews"
          />
          <ProfileMenuItem
            icon={<Trophy className="w-5 h-5" />}
            label="Awards"
            isLast
          />
        </div>

        {/* Add Business Button */}
        <div className="w-full mt-auto">
          <button className="w-full py-4 bg-[#FFC107] text-white font-bold rounded-2xl shadow-[0_8px_20px_rgba(255,193,7,0.3)] flex items-center justify-center gap-3 mb-4 hover:bg-[#FFB300] transition-colors">
            <Store className="w-5 h-5" />
            <span className="uppercase tracking-wider">Add Your Business</span>
          </button>
          <p className="text-center text-[11px] text-[#9E9E9E] leading-relaxed px-4">
            Showcase your local spot to thousands of travelers worldwide.
          </p>
        </div>
      </main>
    </div>
  );
};

function ProfileMenuItem({
  icon,
  label,
  isLast = false,
}: {
  icon: React.ReactNode;
  label: string;
  isLast?: boolean;
}) {
  return (
    <button
      className={`w-full flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors ${!isLast ? "border-b border-[#F5F5F5]" : ""}`}
    >
      <div className="flex items-center gap-4">
        <div className="text-[#1A1A1A]">{icon}</div>
        <span className="text-sm font-bold text-[#1A1A1A]">{label}</span>
      </div>
      <ChevronRight className="w-5 h-5 text-[#BDBDBD]" />
    </button>
  );
}
