"use client";

import {
  BarChart3,
  Building2,
  Clock,
  Heart,
  MapPin,
  MessageSquare,
  Send,
  Share2,
  Star,
  Ticket,
  Timer,
  Toilet,
  Utensils,
} from "lucide-react";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { markers } from "./map";

export default function MapDetails() {
  const params = useParams();
  const id = Number(params?.id);
  console.log(id);

  const marker = markers.find((marker) => marker.id === id);

  console.log(marker);

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-10">
      {/* TOP GRID */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT HERO CARD */}
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden">
          <div className="h-[400px] object-cover">
            <Image
              src={marker?.image}
              alt={marker?.name}
              width={1000}
              height={1000}
              className="object-cover w-full! h-full"
            />
          </div>

          {/* overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* favorite */}
          <button className="absolute top-5 left-5 bg-white/40 backdrop-blur p-4 rounded-lg">
            <Heart className="size-6" />
          </button>

          {/* share */}
          <button className="absolute top-5 right-5 text-yellow-400 flex items-center gap-2 font-semibold">
            <Share2 size={18} />
            SHARE
          </button>

          {/* title */}
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-5xl font-bold font-public-sans">
              {marker?.name}
            </h1>

            <div className="flex items-center gap-2 mt-2 text-lg">
              <MapPin size={16} className="text-[#EC5B13]" />
              {marker?.type}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE INFO */}
        <div className="space-y-4">
          {/* grid cards */}
          <div className="grid grid-cols-2 gap-4">
            <InfoCard
              icon={<Clock size={18} />}
              label="SCHEDULES"
              value="Sunrise - Sunset"
            />

            <InfoCard
              icon={<Ticket size={18} />}
              label="ENTRY COST"
              value="$15.00 / vehicle"
            />

            <InfoCard
              icon={<BarChart3 size={18} />}
              label="DIFFICULTY"
              value="Moderate"
              highlight
            />

            <InfoCard
              icon={<Timer size={18} />}
              label="HIKE TIME"
              value="~ 3.5 Hours"
            />
          </div>

          {/* directions button */}
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-6 text-base rounded-xl">
            <Send size={18} className="mr-2" />
            DIRECTIONS
          </Button>
        </div>
      </div>

      {/* ACCORDIONS */}
      <div className="mt-10 space-y-4">
        <Accordion
          type="single"
          collapsible
          defaultValue="access"
          className="space-y-4"
        >
          {/* ACCESS */}
          <AccordionItem value="access" className="border rounded-xl px-6">
            <AccordionTrigger className="font-semibold">
              ACCESS
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground space-y-4 pb-6">
              <p>
                Arrival: Reach the trail using the main entrance of Glacier
                National Park. The trail head is located near the North visitor
                center, approximately 15 minutes from the entrance gate.
              </p>

              <p>
                Accessibility: The trail is primarily dirt and gravel. While the
                first 0.5 miles are relatively flat and ADA accessible, the
                remaining portion involves steep inclines and rocky terrain.
              </p>

              <p>
                Parking: A dedicated parking lot is available at the trailhead.
                During peak summer months, it is recommended to arrive before
                8:00 AM as parking fills up quickly.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* RECOMMENDATIONS */}
          <AccordionItem
            value="recommendations"
            className="border rounded-xl px-6"
          >
            <AccordionTrigger className="font-semibold">
              RECOMMENDATIONS
            </AccordionTrigger>

            <AccordionContent className="pb-6 space-y-5">
              <p className="text-muted-foreground">
                Bring a reusable water bottle, comfortable shoes, and light
                clothing. Don't forget your camera to capture the spectacular
                scenery!
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "Mosquito repellent",
                  "Hiking boots",
                  "Flashlight",
                  "Sunscreen",
                  "Rain jacket",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full border border-orange-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* SERVICES */}
          <AccordionItem value="services" className="border rounded-xl px-6">
            <AccordionTrigger className="font-semibold">
              SERVICES
            </AccordionTrigger>

            <AccordionContent className="pb-8">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="bg-gray-100 p-4 rounded-full">
                    <Toilet size={22} />
                  </div>

                  <p className="text-sm font-semibold text-muted-foreground">
                    RESTROOMS
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="bg-gray-100 p-4 rounded-full">
                    <Building2 size={22} />
                  </div>

                  <p className="text-sm font-semibold text-muted-foreground">
                    VISITOR CENTER
                  </p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <div className="bg-gray-100 p-4 rounded-full">
                    <Utensils size={22} />
                  </div>

                  <p className="text-sm font-semibold text-muted-foreground">
                    CAFETERIA
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* REVIEWS */}
          <AccordionItem
            value="reviews"
            className="border rounded-xl overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-4 font-semibold bg-yellow-50 text-yellow-700">
              REVIEWS
            </AccordionTrigger>

            <AccordionContent className="px-6 pb-6 space-y-6">
              {/* Rating summary */}
              <div className="flex items-center gap-3">
                <h3 className="text-3xl font-bold">4.8</h3>

                <div className="flex text-yellow-500">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                </div>

                <p className="text-sm text-muted-foreground">
                  Based on 124 reviews
                </p>
              </div>

              {/* REVIEW 1 */}
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Marcus Chen</p>
                      <p className="text-xs text-muted-foreground">
                        2 DAYS AGO
                      </p>
                    </div>

                    <div className="flex text-yellow-500">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Absolutely stunning views! The hike was moderately
                    challenging but well worth it when you reach the
                    crystal-clear water at the top. Highly recommend arriving
                    early.
                  </p>
                </div>
              </div>

              <div className="border-t"></div>

              {/* REVIEW 2 */}
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Sarah Jenkins</p>
                      <p className="text-xs text-muted-foreground">
                        1 WEEK AGO
                      </p>
                    </div>

                    <div className="flex text-yellow-500">
                      {Array(4)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      <Star size={16} />
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    The trail was well-marked. A bit crowded on the weekend but
                    the scenery is spectacular. Don't forget to bring plenty of
                    water!
                  </p>
                </div>
              </div>

              {/* Button */}
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-6 rounded-xl mt-6">
                <MessageSquare size={18} className="mr-2" />
                WRITE A REVIEW
              </Button>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

type InfoProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
};

function InfoCard({ icon, label, value, highlight }: InfoProps) {
  return (
    <div className="border rounded-xl p-4 bg-muted/40">
      <div className="flex items-center gap-2 text-orange-500 mb-2">{icon}</div>

      <p className="text-xs text-muted-foreground font-semibold tracking-wide">
        {label}
      </p>

      <p className={`font-semibold ${highlight ? "text-orange-500" : ""}`}>
        {value}
      </p>
    </div>
  );
}
