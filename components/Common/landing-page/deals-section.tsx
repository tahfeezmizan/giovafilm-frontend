import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Calendar, Home, Gift } from "lucide-react";

type Deal = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const deals: Deal[] = [
  {
    title: "FREE TREAT",
    description: "Free pastry with any brew at Artisan Bakeries.",
    icon: <Coffee className="text-yellow-500" size={24} />,
  },
  {
    title: "20% OFF DINNER",
    description: "Exclusive evening discounts at top-rated local bistros.",
    icon: <Calendar className="text-yellow-500" size={24} />,
  },
  {
    title: "SKIP THE LINE",
    description: "Priority entry at boutique galleries and local museums.",
    icon: <Home className="text-yellow-500" size={24} />,
  },
  {
    title: "LOCAL CURIO",
    description: "Special gift with purchases at concept stores.",
    icon: <Gift className="text-yellow-500" size={24} />,
  },
];

export default function DealsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold">Unlock Exclusive Local Deals</h2>

          <p className="text-muted-foreground max-w-xl mx-auto">
            Access perks and discounts at our partner locations that you won't
            find anywhere else.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <Card
              key={index}
              className="rounded-xl shadow-sm hover:shadow-md transition"
            >
              <CardContent className="p-6 text-left space-y-4">
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center bg-yellow-50 rounded-md">
                  {deal.icon}
                </div>

                {/* Title */}
                <h3 className="text-xs font-semibold text-muted-foreground tracking-wide">
                  {deal.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-700">{deal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
