import HealthcareSector from "./_Components/HealthcareSector";
import ConfidentialMedical from "./_Components/ConfidentialMedical";
import HeroSection from "./_Components/Hero";
import Compliance from "./_Components/Compliance";

const HealthcarePage = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <HealthcareSector />
      <ConfidentialMedical />
      <Compliance />
    </main>
  )
}

export default HealthcarePage