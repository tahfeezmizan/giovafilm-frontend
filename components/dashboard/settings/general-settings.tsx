"use client";

import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormData = {
  workspaceName: string;
  companyName: string;
  email: string;
  timezone: string;
  language: string;
};

export function GeneralSettings() {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      workspaceName: "My Travel Maps",
      companyName: "Travel Co.",
      email: "admin@example.com",
      timezone: "",
      language: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label>Workspace Name</Label>
            <Input className="text-base! py-5" {...register("workspaceName")} />
          </div>

          <div className="space-y-2">
            <Label>Company Name</Label>
            <Input className="text-base! py-5" {...register("companyName")} />
          </div>

          <div className="space-y-2">
            <Label>Email Address</Label>
            <Input
              className="text-base! py-5"
              type="email"
              {...register("email")}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Timezone</Label>
              <Input
                className="text-base! py-5"
                placeholder="Select timezone"
                {...register("timezone")}
              />
            </div>

            <div className="space-y-2">
              <Label>Language</Label>
              <Input
                className="text-base! py-5"
                placeholder="Select language"
                {...register("language")}
              />
            </div>
          </div>

          <Button type="submit" className="mt-2">
            Save Settings
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
