"use client";

import { PolicySection } from "@/components/shared/policy-section";
import privacyData from "@/lib/privacy-policy.json";

/**
 * Privacy Policy Page
 *
 * Displays the complete privacy policy with:
 * - Header with title and description
 * - Multiple sections with numbered indicators
 * - Clean, readable layout
 */

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Header section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            {privacyData.title}
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            {privacyData.description}
          </p>
          <p className="text-sm text-gray-500">
            Last Updated: {privacyData.lastUpdated}
          </p>
        </div>

        {/* White card container */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-gray-100">
          {/* Sections list */}
          <div className="space-y-8">
            {privacyData.sections.map((section) => (
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
              We take your privacy seriously. If you have any questions about
              our privacy practices or how we handle your personal information,
              please don&apos;t hesitate to contact us at{" "}
              <a
                href="mailto:privacy@roadtripeado.com"
                className="text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                privacy@roadtripeado.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
