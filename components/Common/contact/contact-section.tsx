// "use client";

// import { Mail, Globe, Share2, Instagram, Video } from "lucide-react";
// import { ContactInfoCard } from "./contact-info-card";
// import { PageHeader } from "./page-header";
// import { MapSection } from "./map-section";

// /**
//  * ContactSection Component
//  *
//  * The left section of the contact page containing:
//  * - Page header with title and description
//  * - Contact information cards (Email and Social Media)
//  * - Map section with location information
//  */

// export function ContactSection() {
//   return (
//     <section className="space-y-8">
//       {/* Page header with badge, title, and description */}
//       <PageHeader
//         badgeText="Connect With Us"
//         title="Get in Touch"
//         description="Have questions about our maps or your next adventure? We are here to help you plan the ultimate road trip."
//       />

//       {/* Contact information cards grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         {/* Email Support Card */}
//         <ContactInfoCard
//           icon={<Mail className="w-8 h-8 text-yellow-400" />}
//           title="Email Support"
//           description="Our team usually responds within 24 hours."
//           content={
//             <a
//               href="mailto:hello@roadtripeado.com"
//               className="text-yellow-500 font-semibold text-sm hover:text-yellow-600 transition-colors"
//             >
//               hello@roadtripeado.com
//             </a>
//           }
//         />

//         {/* Social Media Card */}
//         <ContactInfoCard
//           icon={<Globe className="w-8 h-8 text-yellow-400" />}
//           title="Social Media"
//           description="Follow our latest updates and travel tips."
//           content={
//             <div className="flex gap-3">
//               <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//                 <Share2 className="w-5 h-5 text-gray-400" />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//                 <Instagram className="w-5 h-5 text-gray-400" />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//                 <Video className="w-5 h-5 text-gray-400" />
//               </button>
//             </div>
//           }
//         />
//       </div>

//       {/* Map section showing location */}
//       <MapSection location="Based in Madrid, Spain" />
//     </section>
//   );
// }
