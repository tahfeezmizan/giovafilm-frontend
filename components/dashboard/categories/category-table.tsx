"use client";

import { Edit, Eye, EyeOff, Trash2 } from "lucide-react";

interface Category {
  id: string;
  icon: string;
  name: string;
  color: string;
  status: "Active" | "Hidden";
}

const categoriesData: Category[] = [
  {
    id: "1",
    icon: "🌳",
    name: "Parks & Nature",
    color: "#22c55e",
    status: "Active",
  },
  {
    id: "2",
    icon: "🏛️",
    name: "Museums",
    color: "#3b82f6",
    status: "Active",
  },
  {
    id: "3",
    icon: "🗿",
    name: "Landmarks",
    color: "#f59e0b",
    status: "Active",
  },
  {
    id: "4",
    icon: "🎨",
    name: "Art & Culture",
    color: "#a855f7",
    status: "Active",
  },
  {
    id: "5",
    icon: "🏗️",
    name: "Architecture",
    color: "#ec4899",
    status: "Active",
  },
  {
    id: "6",
    icon: "🍽️",
    name: "Food & Dining",
    color: "#ef4444",
    status: "Hidden",
  },
];

export function CategoryTable() {
  const getStatusColor = (status: "Active" | "Hidden") => {
    return status === "Active"
      ? "bg-green-100 text-green-800"
      : "bg-gray-100 text-gray-800";
  };

  const categoryTableHeaders = [
    "Icon",
    "Category Name",
    "Color",
    "Status",
    "Actions",
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {categoryTableHeaders.map((header) => (
                <th
                  key={header}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-900"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {categoriesData.map((category, index) => (
              <tr
                key={category.id}
                className={`${
                  index !== categoriesData.length - 1
                    ? "border-b border-gray-100"
                    : ""
                } hover:bg-gray-50 transition-colors`}
              >
                {/* Icon */}
                <td className="px-6 py-4 text-xl">{category.icon}</td>

                {/* Category Name */}
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {category.name}
                </td>

                {/* Color */}
                <td className="px-6 py-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-4 w-4 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />

                    <span>{category.color}</span>
                  </div>
                </td>

                {/* Status */}
                <td className="px-6 py-4 text-sm">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      category.status,
                    )}`}
                  >
                    {category.status}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-3">
                    <button
                      className="text-blue-500 hover:text-blue-700 transition-colors"
                      aria-label="Edit category"
                    >
                      <Edit size={18} />
                    </button>

                    <button
                      className="text-orange-500 hover:text-orange-700 transition-colors"
                      aria-label={
                        category.status === "Active"
                          ? "Hide category"
                          : "Show category"
                      }
                    >
                      {category.status === "Active" ? (
                        <Eye size={18} />
                      ) : (
                        <EyeOff size={18} />
                      )}
                    </button>

                    <button
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Delete category"
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
