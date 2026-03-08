"use client";

import { Edit, Pause, Play, Trash2 } from "lucide-react";

interface Offer {
  id: string;
  title: string;
  place: string;
  discount: string;
  validUntil: string;
  status: "Active" | "Paused" | "Expired";
  redemptions: number;
}

const offersData: Offer[] = [
  {
    id: "1",
    title: "20% off Coffee",
    place: "Cafe Mocha",
    discount: "20%",
    validUntil: "2026-03-15",
    status: "Active",
    redemptions: 42,
  },
  {
    id: "2",
    title: "Free Dessert",
    place: "Bella Italia",
    discount: "Free item",
    validUntil: "2026-02-28",
    status: "Active",
    redemptions: 18,
  },
  {
    id: "3",
    title: "$5 off Entry",
    place: "Modern Art Museum",
    discount: "$5",
    validUntil: "2026-01-31",
    status: "Expired",
    redemptions: 156,
  },
  {
    id: "4",
    title: "Buy 1 Get 1 Free",
    place: "Pizza Paradise",
    discount: "BOGO",
    validUntil: "2026-04-30",
    status: "Paused",
    redemptions: 8,
  },
];

export function OffersTable() {
  const getStatusColor = (status: Offer["status"]) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Paused":
        return "bg-yellow-100 text-yellow-800";
      case "Expired":
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Header */}
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Offer Title
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Place
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Discount
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Valid Until
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Redemptions
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {offersData.map((offer, index) => (
              <tr
                key={offer.id}
                className={`${
                  index !== offersData.length - 1
                    ? "border-b border-gray-100"
                    : ""
                } hover:bg-gray-50 transition-colors`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {offer.title}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {offer.place}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {offer.discount}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {offer.validUntil}
                </td>

                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      offer.status,
                    )}`}
                  >
                    {offer.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {offer.redemptions}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-3">
                    {/* Edit */}
                    <button
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                      aria-label="Edit offer"
                    >
                      <Edit size={18} />
                    </button>

                    {/* Pause / Resume */}
                    {offer.status === "Active" && (
                      <button
                        className="text-orange-500 hover:text-orange-700"
                        aria-label="Pause offer"
                      >
                        <Pause size={18} />
                      </button>
                    )}

                    {offer.status === "Paused" && (
                      <button
                        className="text-green-600 hover:text-green-700"
                        aria-label="Resume offer"
                      >
                        <Play size={18} />
                      </button>
                    )}

                    {/* Delete */}
                    <button
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Delete offer"
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
