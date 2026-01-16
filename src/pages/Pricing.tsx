import { MainLayout } from "@/components/layout/MainLayout";
import { PricingSection } from "@/components/landing/PricingSection";
import { CTASection } from "@/components/landing/CTASection";

const Pricing = () => {
  return (
    <MainLayout>
      <div className="pt-16">
        <PricingSection />
        <CTASection />
      </div>
    </MainLayout>
  );
};

export default Pricing;
