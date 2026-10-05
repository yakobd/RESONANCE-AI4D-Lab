import { ContactSection } from "@/components/home/ContactSection";
import { GetInvolvedSection } from "@/components/home/GetInvolvedSection";
import { Hero } from "@/components/home/Hero";
import { PartnersSection } from "@/components/home/PartnersSection";
import { ResearchSection } from "@/components/home/ResearchSection";
import { VisionSection } from "@/components/home/VisionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <VisionSection />
      <ResearchSection />
      <GetInvolvedSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}
