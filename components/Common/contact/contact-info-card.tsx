"use client";

import { Mail, Globe, Share2, Instagram, Youtube } from "lucide-react";

export type ContactInfo = {
  id: number;
  icon: string;
  title: string;
  description: string;
  content: string | string[];
  contentType: "email" | "social";
};

export interface ContactInfoCardProps {
  data: ContactInfo;
}

const iconMap = {
  mail: <Mail className="w-8 h-8 text-yellow-400" />,
  globe: <Globe className="w-8 h-8 text-yellow-400" />,
};

const socialIconMap = {
  share: (
    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
      <Share2 className="w-5 h-5 text-gray-400 hover:text-gray-600" />
    </button>
  ),
  instagram: (
    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
      <Instagram className="w-5 h-5 text-gray-400 hover:text-gray-600" />
    </button>
  ),
  youtube: (
    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
      <Youtube className="w-5 h-5 text-gray-400 hover:text-gray-600" />
    </button>
  ),
};

export function ContactInfoCard({ data }: ContactInfoCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 border border-gray-200">
      {/* Icon container with yellow background */}
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-yellow-50 rounded-lg">
        {iconMap[data?.icon as keyof typeof iconMap]}
      </div>

      {/* Card title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{data?.title}</h3>

      {/* Card description */}
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
        {data?.description}
      </p>

      {/* Render content based on type */}
      {data?.contentType === "email" && typeof data?.content === "string" && (
        <a
          href={`mailto:${data?.content}`}
          className="text-yellow-500 font-semibold text-sm hover:text-yellow-600 transition-colors inline-block"
        >
          {data?.content}
        </a>
      )}

      {data?.contentType === "social" && Array.isArray(data?.content) && (
        <div className="flex gap-2">
          {data?.content.map((icon) => (
            <div key={icon}>
              {socialIconMap[icon as keyof typeof socialIconMap]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
