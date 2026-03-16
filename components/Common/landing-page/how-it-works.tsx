import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingBag, Box } from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Browse Maps",
    description:
      "Find the perfect curated guide for your next destination among hundreds of user-verified cities.",
    icon: <Search className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Purchase Your Map",
    description:
      "One-time purchase gives you lifetime access to interactive locations and real-time community updates.",
    icon: <ShoppingBag className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Explore the City",
    description:
      "Navigate like a local with hidden gems at your fingertips and unlock location-specific rewards.",
    icon: <Box className="w-6 h-6 text-amber-500" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-360 mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          How It Works
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-gray-100 shadow-none hover:shadow-md transition rounded-2xl py-2"
            >
              <CardContent className="flex flex-col items-center text-center p-10 space-y-4">
                {/* Icon */}
                <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-yellow-100">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
