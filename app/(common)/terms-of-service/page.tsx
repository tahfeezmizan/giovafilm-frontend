"use client";

import { PolicySection } from "@/components/shared/policy-section";
import termsData from "@/lib/terms.json";

export default function TermsOfServicePage() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            {termsData.title}
          </h1>
          <p className="text-gray-600 text-lg mb-4">{termsData.description}</p>
          <p className="text-sm text-gray-500">
            Last Updated: {termsData.lastUpdated}
          </p>
        </div>

        {/* White card container */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-100">
          {/* Sections list */}
          <div className="space-y-8">
            {termsData.sections.map((section) => (
              <PolicySection
                key={section.id}
                id={section.id}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              These terms and conditions constitute the entire agreement between
              you and RoadTripAdo regarding your use of our website and
              services. If you have any questions, please contact us at{" "}
              <a
                href="mailto:legal@roadtripeado.com"
                className="text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                legal@roadtripeado.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
