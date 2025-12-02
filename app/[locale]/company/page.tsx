import OurPrinciples from "./_Components/OurPrinciples"
import WorkWithUs from "./_Components/WorkWithUs"
import HeroSection from "./_Components/Hero"
import OurEvolution from "./_Components/OurEvolution"
import VisionMissionSection from "./_Components/VisionMissionSection"

const CompanyPage = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <OurEvolution />
      <VisionMissionSection />
      <OurPrinciples />
      <WorkWithUs />
    </main>
  )
}

export default CompanyPage