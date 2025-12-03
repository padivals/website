import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import HospitalitySection from "@/components/sections/HospitalitySection";
import NearbyAttractions from "@/components/sections/NearbyAttractions";
import RoomsSection from "@/components/sections/RoomsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import EventsSection from "@/components/sections/EventsSection";
import ContactSection from "@/components/sections/ContactSection";
import MomentSectionTest from "@/components/sections/MomentSectionTest";
import ReservationBar from "@/components/sections/ReservationBar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative ">
      <Header />
      <Hero />
      <HospitalitySection />
      <NearbyAttractions />
      <RoomsSection />
      <div className="bg-[#F9F5EC] py-8">

          <MomentSectionTest
        heading="Discover Moments at The Padival Grand Hotel"
        videos={[
          "/momentsImg/vid1.mp4",
          "/momentsImg/video2.mp4",
          "/momentsImg/vid1.mp4",
          "/momentsImg/video2.mp4",
          "/momentsImg/vid1.mp4",
        ]}
      />
      </div>
    
      {/* <MomentsSection /> */}
      <TestimonialsSection />
      <div className="pt-16 bg-white">

        <FAQSection />
      </div>
      
      <div className=" bg-white md:pb-12 pb-4">
          <EventsSection />
      </div>
    
      <div className="md:py-0 py-14 bg-[#F9F5EC]">
        <ContactSection />
      </div>
      <Footer />

         <section className="hidden lg:block">
        <ReservationBar />
      </section>
    </main>
  );
}
