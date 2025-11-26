import { setRequestLocale } from "next-intl/server";
import BrandsTrustSection from "./_Components/BrandsTrustSection";
import CTASection from "./_Components/CtaSection";
import HeroSection from "./_Components/Hero";
import IdrakSection from "./_Components/IdrakSection";
import IndustrySection from "./_Components/IndustriesSection";
import LeadershipSection from "./_Components/LeadershipSection";
import StatsSection from "./_Components/StatsSection";
import VisionMissionSection from "./_Components/VisionMissionSection";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      <HeroSection />
      <BrandsTrustSection />
      <IndustrySection />
      <StatsSection />
      <IdrakSection />
      <VisionMissionSection />
      <LeadershipSection />
      <CTASection />
    </main>
  );
}
