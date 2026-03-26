"use client";

/**
 * PolicySection Component
 *
 * Reusable component for displaying individual policy sections.
 * Takes section data and renders it with consistent styling.
 *
 * Props:
 * - id: number - Unique identifier for the section
 * - title: string - Section title
 * - content: string - Section content/description
 */

interface PolicySectionProps {
  id: number;
  title: string;
  content: string;
}

export function PolicySection({ id, title, content }: PolicySectionProps) {
  return (
    <div className="border-b border-gray-200 pb-8 last:border-b-0">
      {/* Section number and title */}
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 bg-yellow-50 rounded-lg text-yellow-600 font-bold text-sm">
          {id}
        </span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          {/* Section content */}
          <p className="text-gray-600 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}
