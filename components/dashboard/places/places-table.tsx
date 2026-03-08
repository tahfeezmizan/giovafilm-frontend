"use client";

import { Edit, Eye, EyeOff, Trash2 } from "lucide-react";

interface Place {
  id: string;
  name: string;
  category: string;
  map: string;
  status: "Active" | "Hidden";
  views: number;
}

const placesData: Place[] = [
  {
    id: "1",
    name: "Golden Gate Park",
    category: "Parks & Nature",
    map: "San Francisco Food Tour",
    status: "Active",
    views: 1234,
  },
  {
    id: "2",
    name: "The Louvre Museum",
    category: "Museums",
    map: "Paris Museums & Culture",
    status: "Active",
    views: 3456,
  },
  {
    id: "3",
    name: "Shibuya Crossing",
    category: "Landmarks",
    map: "Tokyo Hidden Gems",
    status: "Active",
    views: 2341,
  },
  {
    id: "4",
    name: "Brooklyn Street Art",
    category: "Art & Culture",
    map: "NYC Street Art",
    status: "Hidden",
    views: 567,
  },
  {
    id: "5",
    name: "Sagrada Familia",
    category: "Architecture",
    map: "Barcelona Architecture",
    status: "Active",
    views: 4123,
  },
];

export function PlacesTable() {
  const getStatusColor = (status: "Active" | "Hidden") => {
    return status === "Active"
      ? "bg-green-100 text-green-800"
      : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Place Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Category
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Map
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Views
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {placesData.map((place, index) => (
              <tr
                key={place.id}
                className={`${
                  index !== placesData.length - 1
                    ? "border-b border-gray-100"
                    : ""
                } hover:bg-gray-50 transition-colors`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {place.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {place.category}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{place.map}</td>
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      place.status,
                    )}`}
                  >
                    {place.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {place.views.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-3">
                    <button
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                      aria-label="Edit place"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      className="text-orange-500 hover:text-orange-700 transition-colors"
                      aria-label={
                        place.status === "Active" ? "Hide place" : "Show place"
                      }
                    >
                      {place.status === "Active" ? (
                        <Eye size={18} />
                      ) : (
                        <EyeOff size={18} />
                      )}
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Delete place"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
