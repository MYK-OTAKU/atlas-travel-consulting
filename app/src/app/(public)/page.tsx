import { Metadata } from "next";
import HeroSection from "@/components/public/HeroSection";
import ServicesOverview from "@/components/public/ServicesOverview";
import ValuesSection from "@/components/public/ValuesSection";
import CampusFranceSpotlight from "@/components/public/CampusFranceSpotlight";
import DestinationsPreview from "@/components/public/DestinationsPreview";
import ReviewsSection from "@/components/public/ReviewsSection";
import FAQSection from "@/components/public/FAQSection";
import ContactCTA from "@/components/public/ContactCTA";

export const metadata: Metadata = {
  title:
    "Agence de Voyage, Accompagnement Visa & Études à Bamako | ATLAS TRAVEL & CONSULTING",
  description:
    "ATLAS TRAVEL & CONSULTING à Bamako, Mali : accompagnement études Campus France, assistance visa, billetterie toutes destinations, assurance voyage. Contactez-nous sur WhatsApp.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <ValuesSection />
      <CampusFranceSpotlight />
      <DestinationsPreview />
      <ReviewsSection />
      <ContactCTA />
      <FAQSection />
    </>
  );
}
