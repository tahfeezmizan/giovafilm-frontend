"use client";

import { Clock } from "lucide-react";

export default function HoursOfOperation({ hours }: any) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Clock size={20} className="text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">
            Hours of Operation
          </h2>
        </div>

        <span className="text-xs font-semibold text-green-600 uppercase">
          Valid Format
        </span>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Object.entries(hours).map(([day, hours]: any) => (
          <div key={day} className="text-center">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
              {day}
            </p>

            <div className="text-sm text-gray-700 font-medium">
              {typeof hours === "string" ? (
                <span className="text-gray-400">{hours}</span>
              ) : (
                <>
                  <p>{hours.start}</p>
                  <p>{hours.end}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
