"use client";

import { Mail, CheckCircle } from "lucide-react";

export default function OwnerInformation({ owner }: any) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Mail size={20} className="text-blue-600" />
        <h2 className="text-lg font-bold text-gray-900">Owner Information</h2>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-2xl">
          {owner.avatar}
        </div>

        <div>
          <p className="font-semibold text-gray-900">{owner.name}</p>
          <p className="text-sm text-gray-500">{owner.title}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Private Email
          </p>

          <p className="text-gray-700 mt-1">{owner.email}</p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Mobile Phone
          </p>

          <p className="text-gray-700 mt-1">{owner.phone}</p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            Identity Verified
          </p>

          <div className="flex items-center gap-2 mt-1">
            <CheckCircle size={16} className="text-green-600" />
            <span className="text-green-600 font-medium">Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
