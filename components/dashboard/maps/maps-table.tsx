"use client";

import { Edit, Copy, Eye, EyeOff, Trash2 } from "lucide-react";

interface Map {
  id: string;
  name: string;
  region: string;
  status: "Published" | "Draft";
  places: number;
  updated: string;
}

const mapsData: Map[] = [
  {
    id: "1",
    name: "San Francisco Food Tour",
    region: "San Francisco, CA",
    status: "Published",
    places: 12,
    updated: "2026-02-13",
  },
  {
    id: "2",
    name: "Paris Museums & Culture",
    region: "Paris, France",
    status: "Published",
    places: 18,
    updated: "2026-02-12",
  },
  {
    id: "3",
    name: "Tokyo Hidden Gems",
    region: "Tokyo, Japan",
    status: "Draft",
    places: 8,
    updated: "2026-02-10",
  },
  {
    id: "4",
    name: "NYC Street Art",
    region: "New York, NY",
    status: "Published",
    places: 25,
    updated: "2026-02-08",
  },
  {
    id: "5",
    name: "Barcelona Architecture",
    region: "Barcelona, Spain",
    status: "Draft",
    places: 14,
    updated: "2026-02-05",
  },
];

export function MapsTable() {
  const getStatusColor = (status: "Published" | "Draft") => {
    return status === "Published"
      ? "bg-green-100 text-green-800"
      : "bg-gray-100 text-gray-800";
  };

  const tableHeaders = [
    "Map Name",
    "Region / City",
    "Status",
    "Places",
    "Last Updated",
    "Actions",
  ];

  return (
  <div className="bg-white rounded-lg border overflow-hidden border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {tableHeaders.map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {mapsData.map((map, index) => (
              <tr
                key={map.id}
                className={`${
                  index !== mapsData.length - 1
                    ? "border-b border-gray-100"
                    : ""
                } hover:bg-gray-50 transition-colors`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {map.name}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {map.region}
                </td>

                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      map.status,
                    )}`}
                  >
                    {map.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {map.places}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {map.updated}
                </td>

                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-3">
                    <button
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                      aria-label="Edit map"
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="Duplicate map"
                    >
                      <Copy size={18} />
                    </button>

                    <button
                      className="text-orange-500 hover:text-orange-700 transition-colors"
                      aria-label={
                        map.status === "Published" ? "Hide map" : "Show map"
                      }
                    >
                      {map.status === "Published" ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                    <button
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Delete map"
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
