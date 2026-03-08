"use client";

import { useState } from "react";
import { Search, MoreHorizontal, RotateCcw } from "lucide-react";

interface Business {
  id: string;
  name: string;
  description: string;
  category: string;
  location: string;
  status: "Pending" | "Approved";
  submitted: string;
}

const businesses: Business[] = [
  {
    id: "1",
    name: "The Golden Fork",
    description: "Premium italian dining experience...",
    category: "Restaurant",
    location: "Downtown, New York",
    status: "Pending",
    submitted: "Oct 24, 2023",
  },
  {
    id: "2",
    name: "Peak Fitness Gym",
    description: "State-of-the-art equipment...",
    category: "Health",
    location: "Brooklyn, New York",
    status: "Pending",
    submitted: "Oct 23, 2023",
  },
  {
    id: "3",
    name: "Artisan Hearth",
    description: "Organic sourdough bakery...",
    category: "Bakery",
    location: "Queens, New York",
    status: "Approved",
    submitted: "Oct 23, 2023",
  },
];

const businessTableHeaders = [
  "",
  "Business Details",
  "Category",
  "Location",
  "Status",
  "Submitted",
  "Actions",
];

export function BusinessTable() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const getStatusColor = (status: string) => {
    if (status === "Approved") return "bg-green-100 text-green-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mt-6">
      {/* FILTER BAR */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search size={16} className="absolute left-3 top-3 text-gray-400" />

            <input
              type="text"
              placeholder="Search business name, email, or ID..."
              className="w-full border rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            <button className="border px-3 py-2 rounded text-sm">Status</button>

            <button className="border px-3 py-2 rounded text-sm">
              Category
            </button>

            <button className="border px-3 py-2 rounded text-sm">
              City/Area
            </button>

            <button className="border px-3 py-2 rounded text-sm">Date</button>

            <button className="text-blue-600 text-sm">Clear Filters</button>
          </div>
        </div>
      </div>

      {/* BULK ACTION BAR */}
      {selected.length > 0 && (
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
          <p className="text-sm text-gray-600">
            {selected.length} businesses selected
          </p>

          <div className="flex gap-3">
            <button className="bg-green-600 text-white px-3 py-1.5 rounded text-sm">
              Approve
            </button>

            <button className="bg-yellow-500 text-white px-3 py-1.5 rounded text-sm">
              Request Changes
            </button>

            <button className="bg-red-500 text-white px-3 py-1.5 rounded text-sm">
              Reject
            </button>
          </div>

          <button className="text-gray-500 hover:text-gray-700">
            <RotateCcw size={18} />
          </button>
        </div>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-sm text-gray-600">
              {businessTableHeaders.map((header, index) => (
                <th
                  key={index}
                  className={`px-6 py-4 ${header ? "text-left" : ""}`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {businesses.map((business, index) => (
              <tr
                key={business.id}
                className={`${
                  index !== businesses.length - 1
                    ? "border-b border-gray-100"
                    : ""
                } hover:bg-gray-50`}
              >
                {/* Checkbox */}
                <td className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(business.id)}
                    onChange={() => toggleSelect(business.id)}
                    className="w-4 h-4"
                  />
                </td>

                {/* Business Info */}
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-900">{business.name}</p>
                  <p className="text-sm text-gray-500">
                    {business.description}
                  </p>
                </td>

                {/* Category */}
                <td className="px-6 py-4 text-sm">
                  <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                    {business.category}
                  </span>
                </td>

                {/* Location */}
                <td className="px-6 py-4 text-sm text-gray-600">
                  {business.location}
                </td>

                {/* Status */}
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`px-3 py-1 text-xs rounded-full ${getStatusColor(
                      business.status,
                    )}`}
                  >
                    {business.status}
                  </span>
                </td>

                {/* Submitted */}
                <td className="px-6 py-4 text-sm text-gray-600">
                  {business.submitted}
                </td>

                {/* Actions */}
                <td className="px-6 py-4">
                  <button className="text-gray-500 hover:text-gray-700">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-500 border-t border-gray-200">
        <p>Showing 1–4 of 12 results</p>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
        </div>
      </div>
    </div>
  );
}
