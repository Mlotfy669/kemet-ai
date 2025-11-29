import EducationSector from "./_Components/EducationSector";
import HeroSection from "./_Components/Hero";
import AutomatingAccess from "./_Components/AutomatingAccess";
import ProtectingAcademic from "./_Components/ProtectingAcademic";

const EducationPage = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <EducationSector />
      <AutomatingAccess />
      <ProtectingAcademic />
    </main>
  )
}

export default EducationPage