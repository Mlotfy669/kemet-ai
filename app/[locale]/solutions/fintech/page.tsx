import IntegratedServices from "./_Components/IntegratedServices";
import FintecSector from "./_Components/FintecSector";
import FinancialRisk from "./_Components/FinancialRisk";
import HeroSection from "./_Components/Hero";

const FintechPage = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <FintecSector />
      <IntegratedServices />
      <FinancialRisk />
    </main>
  )
}

export default FintechPage