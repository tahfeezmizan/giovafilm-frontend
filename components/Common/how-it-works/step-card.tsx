"use client";

import React from "react";

interface Feature {
  icon: React.ReactNode;
  text: string;
}

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  features: Feature[];
  image: React.ReactNode;
  imagePosition: "left" | "right";
}

export function StepCard({
  stepNumber,
  title,
  description,
  features,
  image,
  imagePosition,
}: StepCardProps) {
  // Determine grid layout based on image position
  const gridClass =
    imagePosition === "left"
      ? "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-between"
      : "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-between";

  const contentOrder = imagePosition === "right" ? "order-1" : "order-2";
  const imageOrder = imagePosition === "right" ? "order-2" : "order-1";

  return (
    <div className="py-10">
      <div className={gridClass}>
        {/* Content section with text and features */}
        <div className={`space-y-6 ${contentOrder}`}>
          {/* Step number badge */}
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg">
              {stepNumber}
            </div>

            {/* Step title */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {title}
            </h2>
          </div>

          {/* Step description */}
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            {description}
          </p>

          {/* Features list */}
          <div className="space-y-3 pt-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-yellow-400 mt-1">{feature.icon}</span>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image section */}
        <div
          className={`${imageOrder} w-full! shadow-primary/50 shadow-2xl rounded-2xl overflow-hidden object-cover!`}
        >
          {image}
        </div>
      </div>
    </div>
  );
}
