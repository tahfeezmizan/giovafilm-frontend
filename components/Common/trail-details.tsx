"use client";

import Image from "next/image";
import {
  Heart,
  Share2,
  MapPin,
  Clock,
  Ticket,
  BarChart3,
  Timer,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function TrailDetails() {
  return (
    <section className="max-w-[1400px] mx-auto px-6 py-10">
      {/* TOP GRID */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT HERO CARD */}
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden">
          <Image
            src="/trail.jpg"
            alt="Crystal Lake Trail"
            width={1200}
            height={700}
            className="object-cover w-full h-[360px]"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* favorite */}
          <button className="absolute top-5 left-5 bg-white/80 backdrop-blur p-2 rounded-lg">
            <Heart className="size-5" />
          </button>

          {/* share */}
          <button className="absolute top-5 right-5 text-yellow-400 flex items-center gap-2 font-semibold">
            <Share2 size={18} />
            SHARE
          </button>

          {/* title */}
          <div className="absolute bottom-6 left-6 text-white">
            <h1 className="text-4xl font-bold">Crystal Lake Trail</h1>

            <div className="flex items-center gap-2 mt-2 text-sm">
              <MapPin size={16} />
              Glacier National Park, MT
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
        <Accordion type="single" collapsible defaultValue="access">
          <AccordionItem value="access">
            <AccordionTrigger className="text-left font-semibold">
              ACCESS
            </AccordionTrigger>

            <AccordionContent className="text-muted-foreground space-y-4">
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

          <AccordionItem value="recommendation">
            <AccordionTrigger>RECOMMENDATION</AccordionTrigger>

            <AccordionContent>
              Bring enough water, proper hiking shoes, and start early in the
              morning to avoid crowds and heat.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="services">
            <AccordionTrigger>SERVICES</AccordionTrigger>

            <AccordionContent>
              Visitor center, parking area, restrooms, and picnic spots are
              available near the trail entrance.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="reviews">
            <AccordionTrigger>REVIEWS</AccordionTrigger>

            <AccordionContent>
              Visitors love the stunning mountain views and peaceful lake at the
              end of the trail.
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
