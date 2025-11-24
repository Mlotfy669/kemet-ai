import { setRequestLocale } from "next-intl/server";
import { Footer } from "@/components/layout/footer";
import BrandsTrustSection from "@/app/[locale]/_Components/BrandsTrustSection";
import IndustriesSection from "@/components/sections/industries-section";
import { StatsSection } from "@/components/sections/stats-section";
import { IdrakSection } from "@/components/sections/idrak-section";
import { VisionMissionSection } from "@/components/sections/vision-mission-section";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { CTASection } from "@/components/sections/cta-section";
import HeroSection from "./_Components/Hero";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <BrandsTrustSection />
        <IndustriesSection />
        <StatsSection />
        <IdrakSection />
        <VisionMissionSection />
        <LeadershipSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
