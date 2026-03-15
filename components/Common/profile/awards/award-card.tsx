"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LucideIcon } from "lucide-react";

interface AwardCardProps {
  title: string;
  progress: number;
  current: number;
  total: number;
  Icon: LucideIcon;
}

export function AwardCard({
  title,
  progress,
  current,
  total,
  Icon,
}: AwardCardProps) {
  return (
    <Card className="border rounded-xl shadow-sm hover:shadow-md transition py-0 overflow-hidden">
      <CardContent className="flex justify-center items-center py-10 bg-gray-100 h-72">
        {/* Circle Icon Container */}
        <div className="w-40 h-40 rounded-full bg-amber-100 flex items-center justify-center">
          <Icon className="text-amber-500 w-10 h-10" />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-1.5 pb-5 font-public-sans">
        {/* Title */}
        <h3 className="font-bold text-lg">{title}</h3>

        {/* Progress Text */}
        <div className="flex justify-between w-full text-sm text-muted-foreground">
          <span>
            PROGRESS {current.toLocaleString()} / {total.toLocaleString()}
          </span>
          <span className="text-amber-500 font-medium">{progress}%</span>
        </div>

        {/* Progress Bar */}
        <Progress value={progress} className="h-2 bg-gray-200" />
      </CardFooter>
    </Card>
  );
}
