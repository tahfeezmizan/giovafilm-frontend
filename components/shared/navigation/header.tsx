// "use client";

// import { Button } from "@/components/ui/button";
// import { Search } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const navLinks = [
//   { name: "Maps", href: "/maps" },
//   { name: "Places", href: "/places" },
//   { name: "Offer", href: "/offer" },
//   { name: "Catalog", href: "/catalog" },
//   { name: "For Business", href: "/for-business" },
// ];

// export default function Header() {
//   const pathname = usePathname();

//   return (
//     <div>
//       <header className="border-b border-gray-100">
//         <nav className="flex items-center justify-between px-6 py-4 max-w-360 mx-auto gap-4">
//           {/* Logo */}
//           <div className="shrink-0">
//             <Link href="/">
//               <Image
//                 src={require("@/public/logo.png")}
//                 alt="Dashboard Logo"
//                 height={200}
//                 width={200}
//                 className="w-48 h-auto"
//               />
//             </Link>
//           </div>

//           {/* Search Bar */}
//           <div className="flex-1 max-w-2xl mx-4">
//             <div className="relative group">
//               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5 group-focus-within:text-primary transition-colors" />
//               <input
//                 type="text"
//                 placeholder="Search digital maps, cities, landmarks..."
//                 className="w-full bg-[#F5F5F5] border-none rounded-full py-3.5 pl-12 pr-6 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
//               />
//             </div>
//           </div>

//           {/* Nav Links */}

//           <div className="hidden lg:flex items-center gap-6 whitespace-nowrap">
//             {navLinks.map((link, index) => {
//               const isActive = pathname === link.href;

//               return (
//                 <Link
//                   key={index}
//                   href={link.href}
//                   className={`font-semibold text-black font-inter transition-colors py-1 rounded-lg ${
//                     isActive ? "bg-primary px-3 " : ""
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}

//             <div className="h-8 w-px bg-gray-200 mx-2"></div>

//             <Link href="/dashboard">
//               <Button className="bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold font-public-sans rounded-xl px-8 py-6 text-base shadow-none">
//                 Log In
//               </Button>
//             </Link>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Search, Heart, Map, Star, Trophy, User } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Maps", href: "/maps" },
  { name: "Places", href: "/places" },
  { name: "Offer", href: "/offer" },
  { name: "Catalog", href: "/catalog" },
  { name: "For Business", href: "/for-business" },
];

export default function Header() {
  const pathname = usePathname();

  // Example user data
  const user = {
    name: "John Doe",
    image: "", // if image exists it will show
  };

  const isLoggedIn = true; // change this according to auth logic

  return (
    <div>
      <header className="border-b border-gray-100">
        <nav className="flex items-center justify-between px-6 py-4 max-w-360 mx-auto gap-4">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src={require("@/public/logo.png")}
                alt="Dashboard Logo"
                height={200}
                width={200}
                className="w-48 h-auto"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 size-5 group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search digital maps, cities, landmarks..."
                className="w-full bg-[#F5F5F5] border-none rounded-full py-3.5 pl-12 pr-6 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
              />
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-6 whitespace-nowrap">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={index}
                  href={link.href}
                  className={`font-semibold text-black font-inter transition-colors py-1 rounded-lg ${
                    isActive ? "bg-primary px-3 " : ""
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="h-8 w-px bg-gray-200 mx-2"></div>

            {/* Auth Section */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="outline-none">
                    <Avatar className="h-10 w-10 cursor-pointer">
                      <AvatarImage src={user.image} />
                      <AvatarFallback>
                        <User className="size-5" />
                      </AvatarFallback>
                    </Avatar>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  className="w-72 p-0 overflow-hidden rounded-xl shadow-lg"
                >
                  <div className="py-2">
                    <DropdownMenuItem className="px-4 py-3 cursor-pointer">
                      <Heart className="mr-3 size-5" />
                      Favorites
                    </DropdownMenuItem>

                    <DropdownMenuItem className="px-4 py-3 cursor-pointer">
                      <Map className="mr-3 size-5" />
                      Purchased Maps
                    </DropdownMenuItem>

                    <DropdownMenuItem className="px-4 py-3 cursor-pointer">
                      <Star className="mr-3 size-5" />
                      Contributions & Reviews
                    </DropdownMenuItem>

                    <DropdownMenuItem className="px-4 py-3 cursor-pointer">
                      <Trophy className="mr-3 size-5" />
                      Awards
                    </DropdownMenuItem>
                  </div>

                  <DropdownMenuSeparator />

                  <button className="w-full bg-[#FFC107] hover:bg-[#FFB300] py-3 font-semibold text-center">
                    Log Out
                  </button>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/dashboard">
                <Button className="bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold font-public-sans rounded-xl px-8 py-6 text-base shadow-none">
                  Log In
                </Button>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
