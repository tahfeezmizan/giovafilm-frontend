"use client";

import AdminReviewTasks from "@/components/dashboard/business/AdminReviewTasks";
import BusinessOverview from "@/components/dashboard/business/business-overview";
import HoursOfOperation from "@/components/dashboard/business/hours-of-operation";
import LocationVerification from "@/components/dashboard/business/LocationVerification";
import OwnerInformation from "@/components/dashboard/business/owner-information";
import PhotosMediaReview from "@/components/dashboard/business/photos-media-Review";
import PublicContactLinks from "@/components/dashboard/business/public-contact-links";
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
          <BusinessOverview businessData={businessData} />

          {/* Public Contact & Links */}
          <PublicContactLinks contact={businessData.contact} />

          {/* Hours of Operation */}
          <HoursOfOperation hours={businessData.hours} />

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
          <OwnerInformation owner={businessData.owner} />

          {/* Location Verification */}
          <LocationVerification location={businessData.location} />

          {/* Admin Review Tasks */}

          <AdminReviewTasks reviewTasks={businessData.reviewTasks} />
        </div>
      </div>
    </div>
  );
}
