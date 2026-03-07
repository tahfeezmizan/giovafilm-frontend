import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function DashTopHeader() {
  const profileImage = ""; // put image url here

  return (
    <div className="p-4 px-8 border-b border-gray-300/50">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold font-arial">Administrator Panel</h1>

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Avatar className="w-10 h-10 cursor-pointer">
              {profileImage && (
                <AvatarImage asChild>
                  <Image
                    src={profileImage}
                    alt="Profile"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </AvatarImage>
              )}

              <AvatarFallback>
                <User className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem>My Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
