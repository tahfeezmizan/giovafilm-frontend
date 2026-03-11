import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { name: "Map", href: "/map" },
    { name: "Places", href: "/places" },
    { name: "Offer", href: "/offer" },
    { name: "Catalog", href: "/catalog" },
    { name: "For Business", href: "/for-business" },
  ];

  return (
    <div>
      <header className="border-b border-gray-100">
        <nav className="flex items-center justify-between px-6 py-4 max-w-[1440px] mx-auto gap-4">
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
          {/* <div className="hidden lg:flex items-center gap-6 whitespace-nowrap">
            <a
              href="#"
              className="text-[15px] font-bold text-black hover:text-blue-600 transition-colors"
            >
              Map
            </a>
            <a
              href="#"
              className="text-[15px] font-bold text-black hover:text-blue-600 transition-colors"
            >
              Places
            </a>
            <a
              href="#"
              className="text-[15px] font-bold text-black hover:text-blue-600 transition-colors"
            >
              Offer
            </a>
            <a
              href="#"
              className="text-[15px] font-bold text-black hover:text-blue-600 transition-colors"
            >
              Catalog
            </a>
            <a
              href="#"
              className="text-[15px] font-bold text-black hover:text-blue-600 transition-colors"
            >
              For Business
            </a>

            <div className="h-8 w-px bg-gray-200 mx-2"></div>

            <Link href="/dashboard">
              <Button className="bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold rounded-xl px-8 py-6 text-base shadow-none">
                Log In
              </Button>
            </Link>
          </div> */}
          <div className="hidden lg:flex items-center gap-6 whitespace-nowrap">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-semibold text-black font-inter hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="h-8 w-px bg-gray-200 mx-2"></div>

            <Link href="/dashboard">
              <Button className="bg-[#FFC107] hover:bg-[#FFB300] text-black font-bold font-public-sans rounded-xl px-8 py-6 text-base shadow-none">
                Log In
              </Button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
