import FAQ from './_Components/FAQ';
import HeroSection from './_Components/Hero';

export default async function FAQPage() {

  return (
    <main className="flex-1">
      <HeroSection />
      <FAQ />
    </main>
  );
}