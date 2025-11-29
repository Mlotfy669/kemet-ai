import OCR from "./_Components/OCR";
import StrengthExtends from "./_Components/StrengthExtends";
import Security from "./_Components/Security";
import HeroSection from "./_Components/Hero";

const VisionAnalysisPage = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <StrengthExtends />
      <OCR />
      <Security />
    </main>
  )
}

export default VisionAnalysisPage