"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function GeneralSettings() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Workspace Name</Label>
          <Input defaultValue="My Travel Maps" />
        </div>

        <div className="space-y-2">
          <Label>Company Name</Label>
          <Input defaultValue="Travel Co." />
        </div>

        <div className="space-y-2">
          <Label>Email Address</Label>
          <Input defaultValue="admin@example.com" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Timezone</Label>
            <Input placeholder="Select timezone" />
          </div>

          <div className="space-y-2">
            <Label>Language</Label>
            <Input placeholder="Select language" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
