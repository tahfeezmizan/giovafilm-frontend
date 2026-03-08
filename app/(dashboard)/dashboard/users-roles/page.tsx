import { MapsTable } from "@/components/dashboard/maps/maps-table";
import { InviteUserForm } from "@/components/dashboard/users-roles/invite-user-form";
import { RolePermissions } from "@/components/dashboard/users-roles/role-permissions";
import { UsersTable } from "@/components/dashboard/users-roles/users-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function page() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Users & Roles</h1>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
          <Plus size={16} />
          Invite User
        </Button>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          <RolePermissions />
          <InviteUserForm />
        </div>
        <UsersTable />
      </div>
    </div>
  );
}
