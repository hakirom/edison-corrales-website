import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { MethodologySection } from "@/components/methodology-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-primary-900 text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <MethodologySection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
