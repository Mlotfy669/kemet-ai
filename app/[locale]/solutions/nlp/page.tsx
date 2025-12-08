import NLPServing from "./_Components/NLPServing";
import NaturalLanguage from "./_Components/NaturalLanguage";
import NLPAndVisionAnalysis from "./_Components/NLPAndVisionAnalysis";
import HeroSection from "./_Components/Hero";

const NLPPage = () => {
  return (
    <main className="flex-1">
      <HeroSection />
      <NaturalLanguage />
      <NLPServing />
      <NLPAndVisionAnalysis />
    </main>
  )
}

export default NLPPage