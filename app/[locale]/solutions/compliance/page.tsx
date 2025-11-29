import RegulatoryCompliance from "./_Components/RegulatoryCompliance";
import HeroSection from "./_Components/Hero";
import FullTransparency from "./_Components/FullTransparency";
import Transitioning from "./_Components/Transitioning";
import CtaSection from "./_Components/CtaSection";

const CompliancePage = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <RegulatoryCompliance />
      <Transitioning />
      <FullTransparency />
      <CtaSection />
    </main>
  )
}

export default CompliancePage