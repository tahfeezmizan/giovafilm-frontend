import { ContactForm } from "@/components/Common/contact/contact-form";

export default function GetInTouchPage() {
  return (
    <main className="min-h-screen">
      {/* Main container with max-width and padding */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Two-column layout: Contact section (left) and Form (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column: Contact information cards and map */}

          {/* Right column: Contact form with padding on larger screens */}
          <section className="lg:py-8">
            <ContactForm />
          </section>
        </div>
      </div>
    </main>
  );
}
