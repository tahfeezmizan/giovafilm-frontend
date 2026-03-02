import BottomNavbar from "@/components/shared/bottom-navbar";
import TopHeader from "@/components/shared/top-header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-2xl w-full max-w-107.5 mx-auto">
      <TopHeader />
      {children}
      <BottomNavbar />
    </div>
  );
}
