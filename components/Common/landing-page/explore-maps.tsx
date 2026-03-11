import Image from "next/image";
import { Filter, Eye, Heart, Navigation } from "lucide-react";

const features = [
  {
    icon: Filter,
    text: "Filter by preference, time of day, or popularity.",
  },
  {
    icon: Eye,
    text: "View immersive details and history for every spot.",
  },
  {
    icon: Heart,
    text: "Save favorites to your personal itinerary.",
  },
  {
    icon: Navigation,
    text: "Seamless navigation with your favorite GPS app.",
  },
];

export default function ExploreMaps() {
  return (
    <section className="bg-[#0f0f0f] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Map Image */}
        <div className="w-[500px] h-[500px] relative rounded-3xl p-4 bg-blue-900/30">
          <div className=" rounded-2xl overflow-hidden">
            <Image
              src={require("@/public/explore-maps.png")}
              alt="Interactive Map"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Explore With Interactive Maps</h2>

          <p className="text-gray-400 leading-relaxed">
            Our dynamic platform transforms a static map into a powerful
            exploration tool. Real-time data and community insights ensure you
            never miss a beat.
          </p>

          {/* Features */}
          <div className="space-y-4 pt-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <Icon className="text-yellow-400 w-5 h-5 mt-1" />
                  <p className="text-gray-300 text-sm">{feature.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
