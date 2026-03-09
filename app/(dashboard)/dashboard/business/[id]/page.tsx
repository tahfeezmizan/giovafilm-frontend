"use client";

import {
  CheckCircle,
  ChevronLeft,
  Clock,
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface BusinessDetailPageProps {
  params: {
    id: string;
  };
}

export default function BusinessDetailPage({
  params,
}: BusinessDetailPageProps) {
  const router = useRouter();
  const { id } = params;

  // Mock business data - in a real app, this would come from an API
  const businessData = {
    id,
    name: "La Costa Tacos",
    category: "Mexican Restaurant / Tacos",
    description:
      "Authentic coastal tacos and handmade tortillas serving the community since 2010. Specializing in Ensenada-style fish tacos and slow-cooked Al Pastor.",
    website: "www.lacostatacos.official.com",
    owner: {
      name: "Marco Rodriguez",
      title: "Submitter / Business Owner",
      email: "m.rodriguez@gmail.com",
      phone: "+1 (555) 009-8877",
      verified: true,
      avatar: "👤",
    },
    contact: {
      publicPhone: "(555) 123-4567",
      email: "hello@lacostatacos.com",
      socialProfiles: ["Instagram", "Facebook"],
    },
    location: {
      address: "123 Coastal Hwy, Suite 10, Santa Monica, CA 90401",
      coordinates: { lat: 34.0195, lng: -118.4912 },
      verified: true,
    },
    hours: {
      MON: { start: "10:00 AM", end: "9:00 PM" },
      TUE: { start: "10:00 AM", end: "9:00 PM" },
      WED: { start: "10:00 AM", end: "9:00 PM" },
      THU: { start: "10:00 AM", end: "9:00 PM" },
      FRI: { start: "10:00 AM", end: "11:00 PM" },
      SAT: { start: "11:00 AM", end: "11:00 PM" },
      SUN: "CLOSED",
    },
    status: "Pending Review",
    photos: [
      { type: "PRIMARY", url: "food.jpg" },
      { type: "STOREFRONT", url: "storefront.jpg" },
      { type: "MENU", url: "menu.jpg" },
    ],
    reviewTasks: [
      { task: "Phone number verified via SMS/Call", completed: false },
      { task: "Website links are functional", completed: false },
      { task: "No offensive content in photos", completed: false },
    ],
  };

  return (
    <div className=" min-h-screen">
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Business Overview */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-2">
                <Globe size={20} className="text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Business Overview
                </h2>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Edit Details
              </button>
            </div>

            <div className="space-y-6">
              {/* Business Name */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Business Name
                </p>
                <p className="text-lg font-semibold text-gray-900 mt-1">
                  {businessData.name}
                </p>
              </div>

              {/* Category */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Category
                </p>
                <p className="text-gray-700 mt-1">{businessData.category}</p>
              </div>

              {/* Description */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Description
                </p>
                <p className="text-gray-700 mt-1 leading-relaxed">
                  {businessData.description}
                </p>
              </div>

              {/* Website */}
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Website
                </p>
                <a
                  href={`https://${businessData.website}`}
                  className="text-blue-600 hover:underline mt-1"
                >
                  {businessData.website} ↗
                </a>
              </div>
            </div>
          </div>

          {/* Public Contact & Links */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Phone size={20} className="text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">
                Public Contact & Links
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Public Phone
                </p>
                <p className="text-gray-900 font-medium mt-2">
                  {businessData.contact.publicPhone}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Public Email
                </p>
                <p className="text-gray-900 font-medium mt-2">
                  {businessData.contact.email}
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  Social Profiles
                </p>
                <div className="flex gap-3">
                  {businessData.contact.socialProfiles.map((profile) => (
                    <span
                      key={profile}
                      className="bg-gray-100 px-3 py-1 rounded text-sm text-gray-700"
                    >
                      {profile}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hours of Operation */}
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
              {Object.entries(businessData.hours).map(([day, hours]) => (
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

          {/* Photos & Media Review */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Photos & Media Review
              </h2>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                Re-order Photos
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {businessData.photos.map((photo, idx) => (
                <div
                  key={idx}
                  className="bg-gray-200 rounded-lg h-32 flex items-center justify-center"
                >
                  <span className="text-gray-500">Photo {idx + 1}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <p className="font-semibold text-gray-900">
                  {businessData.name}
                </p>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mt-2">
                  {businessData.status}
                </span>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Reject
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Request Changes
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Approve & Publish
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Owner Information */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Mail size={20} className="text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">
                Owner Information
              </h2>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                {businessData.owner.avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  {businessData.owner.name}
                </p>
                <p className="text-sm text-gray-500">
                  {businessData.owner.title}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Private Email
                </p>
                <p className="text-gray-700 mt-1">{businessData.owner.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Mobile Phone
                </p>
                <p className="text-gray-700 mt-1">{businessData.owner.phone}</p>
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

          {/* Location Verification */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={20} className="text-blue-600" />
              <h2 className="text-lg font-bold text-gray-900">
                Location Verification
              </h2>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
              <span className="text-gray-500">Map View</span>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Physical Address
              </p>
              <p className="text-gray-700 mt-2">
                {businessData.location.address}
              </p>
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

          {/* Admin Review Tasks */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              Admin Review Tasks
            </h2>

            <div className="space-y-4">
              {businessData.reviewTasks.map((task, idx) => (
                <label
                  key={idx}
                  className="flex items-start gap-3 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    className="w-4 h-4 mt-1"
                    readOnly
                  />
                  <span className="text-sm text-gray-700">{task.task}</span>
                </label>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Internal Notes (not visible to owner)
              </p>
              <textarea
                placeholder="Add private notes about this verification..."
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
