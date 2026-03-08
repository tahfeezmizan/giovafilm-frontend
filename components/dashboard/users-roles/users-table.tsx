"use client";

import { Edit, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  lastActive: string;
}

const users: User[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    role: "Owner",
    lastActive: "2026-02-14",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Administrator",
    lastActive: "2026-02-13",
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike@example.com",
    role: "Map Editor",
    lastActive: "2026-02-12",
  },
  {
    id: "4",
    name: "Emily Davis",
    email: "emily@example.com",
    role: "Map Editor",
    lastActive: "2026-02-10",
  },
];

const userTableHeaders = ["Name", "Email", "Role", "Last Active", "Actions"];

export function UsersTable(): React.ReactElement {
  const handleEdit = (userId: string) => {
    console.log("Edit user:", userId);
  };

  const handleDelete = (userId: string) => {
    console.log("Delete user:", userId);
  };

  return (
    <Card className="overflow-hidden border border-gray-200 py-0 shadow-none">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {userTableHeaders.map((header) => (
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
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  <div className="px-3 py-1 bg-gray-100 text-gray-700 rounded border border-gray-300 inline-block text-xs font-medium">
                    {user.role}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {user.lastActive}
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="text-blue-500 hover:text-blue-700 transition-colors p-2 hover:bg-blue-50 rounded"
                      aria-label="Edit user"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded"
                      aria-label="Delete user"
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
    </Card>
  );
}
