"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
