import { MainLayout } from "@/components/layout/MainLayout";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CTASection } from "@/components/landing/CTASection";

const Features = () => {
  return (
    <MainLayout>
      <div className="pt-16">
        <FeaturesSection />
        <CTASection />
      </div>
    </MainLayout>
  );
};

export default Features;
