
import AwarenessSection from "./_Components/AwarenessSection";
import CTASection from "./_Components/CtaSection";
import DiscoverThePower from "./_Components/DiscoverThePower";
import HeroSection from "./_Components/Hero";
import HowIdrakWork from "./_Components/HowIdrakWork";
import StatsSection from "./_Components/StatsSection";
import UseCases from "./_Components/UseCases";


const IdrakPage = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <AwarenessSection />
      <HowIdrakWork />
      <StatsSection />
      <DiscoverThePower />
      <UseCases />
      <CTASection />
    </main>
  )
}

export default IdrakPage