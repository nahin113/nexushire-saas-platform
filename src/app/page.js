import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import JobGridSection from "@/components/JobGridSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <JobGridSection/>
      <FeaturesSection/>
      <PricingSection/>
      <CTASection/>
    </div>
  );
}
