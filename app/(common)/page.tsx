import ExploreMaps from "@/components/Common/landing-page/explore-maps";
import HeroBanner from "@/components/Common/landing-page/hero-banner";
import HowItWorks from "@/components/Common/landing-page/how-it-works";
import PromoteBusiness from "@/components/Common/landing-page/promote-business";

export default function page() {
  return (
    <div>
      <HeroBanner />
      <HowItWorks />
      <ExploreMaps />
      <PromoteBusiness />
    </div>
  );
}
