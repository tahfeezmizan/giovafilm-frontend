import Image, { StaticImageData } from "next/image";
import { MapPin, Star } from "lucide-react";
import Link from "next/link";

export type PlaceCardProps = {
  id: number;
  image: StaticImageData | string;
  title: string;
  location: string;
  rating: number;
  reviews: number;
  category: string;
};

export function PlaceCard({ data }: { data: PlaceCardProps }) {
  return (
    <Link href={`/places/${data?.id}`}>
      <div className="rounded-xl overflow-hidden bg-white border hover:shadow-lg transition">
        {/* Image Section */}
        <div className="relative h-64 w-full">
          <Image
            src={data?.image}
            alt={data?.title}
            fill
            className="object-cover"
          />

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 text-sm font-medium shadow">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            {data?.rating}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg">{data?.title}</h3>

          <div className="flex items-center text-gray-500 text-sm mt-1 gap-1">
            <MapPin size={14} />
            {data?.location}
          </div>

          <p className="text-gray-400 text-sm mt-1">
            {data?.reviews} reviews • {data?.category}
          </p>
        </div>
      </div>
    </Link>
  );
}
