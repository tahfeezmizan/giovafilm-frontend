"use client";

import { Card } from "@/components/ui/card";

interface RolePermission {
  role: string;
  description: string;
}

const rolePermissions: RolePermission[] = [
  {
    role: "Owner",
    description:
      "Full access to all features including billing and workspace deletion",
  },
  {
    role: "Administrator",
    description:
      "Manage maps, places, offers, users, and view reports (cannot delete workspace)",
  },
  {
    role: "Map Editor",
    description:
      "Create and edit maps, places, and offers (no user management or reports)",
  },
];

export function RolePermissions(): React.ReactElement {
  return (
    <Card className="p-6 bg-white border border-gray-200 gap-4">
      <h2 className="text-xl font-bold text-gray-900 ">Role Permissions</h2>

      <div className="space-y-4">
        {rolePermissions.map((permission) => (
          <div
            key={permission.role}
            className="border-b border-gray-200 pb-2 last:border-b-0 last:pb-0"
          >
            <p className="font-semibold text-gray-900 mb-2">
              {permission.role}:
            </p>
            <p className="text-gray-600 text-sm">{permission.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
