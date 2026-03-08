"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export function NotificationSettings() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Email Notifications</p>
            <p className="text-sm text-muted-foreground">
              Receive email updates about your maps and places
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Push Notifications</p>
            <p className="text-sm text-muted-foreground">
              Get instant notifications in your browser
            </p>
          </div>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Weekly Reports</p>
            <p className="text-sm text-muted-foreground">
              Receive weekly summary of activity and stats
            </p>
          </div>
          <Switch />
        </div>
      </CardContent>
    </Card>
  );
}
