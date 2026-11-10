import { BenefitsSection } from "@/components/sections/benefits-section";
import { ClassesSection } from "@/components/sections/classes-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PlansSection } from "@/components/sections/plans-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ClassesSection />
        <PlansSection />
      </main>
      <SiteFooter />
    </>
  );
}
