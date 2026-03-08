"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SecuritySettings() {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>Security</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <Button variant="outline" className="w-full justify-start">
          Change Password
        </Button>

        <Button variant="outline" className="w-full justify-start">
          Enable Two-Factor Authentication
        </Button>
      </CardContent>
    </Card>
  );
}
