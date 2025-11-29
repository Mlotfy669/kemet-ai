import HealthcareSector from "./_Components/HealthcareSector";
import HeroSection from "./_Components/Hero";
import ConfidentialMedical from "./_Components/ConfidentialMedical";
import Compliance from "./_Components/Compliance";

const EducationPage = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <HealthcareSector />
      <ConfidentialMedical />
      <Compliance />
    </main>
  )
}

export default EducationPage