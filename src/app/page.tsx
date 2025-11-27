import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ReservationBar from "@/components/sections/ReservationBar";
import HospitalitySection from "@/components/sections/HospitalitySection";
import NearbyAttractions from "@/components/sections/NearbyAttractions";
import RoomsSection from "@/components/sections/RoomsSection";
import MomentsSection from "@/components/sections/MomentsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import EventsSection from "@/components/sections/EventsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative pb-24">
      <Header />
      <Hero />
      <HospitalitySection />
      <NearbyAttractions />
      <RoomsSection />
      <MomentsSection />
      <TestimonialsSection />
      <FAQSection />
      <EventsSection />
      <ContactSection />
      <Footer />

      <section className="hidden lg:block">
        <ReservationBar />
      </section>
    </main>
  );
}
