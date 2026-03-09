"use client";

import { MapPin } from "lucide-react";

export default function LocationVerification({ location }: any) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <MapPin size={20} className="text-blue-600" />
        <h2 className="text-lg font-bold text-gray-900">
          Location Verification
        </h2>
      </div>

      <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
        <span className="text-gray-500">Map View</span>
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Physical Address
        </p>

        <p className="text-gray-700 mt-2">{location.address}</p>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <span className="text-sm font-medium text-gray-700">
          Verify Pin Accuracy
        </span>

        <button className="w-12 h-6 bg-blue-600 rounded-full flex items-center justify-end pr-1">
          <div className="w-5 h-5 bg-white rounded-full"></div>
        </button>
      </div>
    </div>
  );
}
