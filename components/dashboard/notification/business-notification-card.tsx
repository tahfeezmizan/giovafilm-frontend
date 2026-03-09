"use client";

import { ReactNode } from "react";

interface BusinessNotificationCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  timestamp: string;
  iconBgColor: string;
}

export function BusinessNotificationCard({
  icon,
  title,
  description,
  timestamp,
  iconBgColor,
}: BusinessNotificationCardProps) {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      {/* Icon Container */}
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 ${iconBgColor}`}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <p className="text-xs text-gray-500 mt-2">{timestamp}</p>
      </div>
    </div>
  );
}
