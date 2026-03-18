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
import ReservationBar from "@/components/sections/ReservationBar";
import type { Metadata } from "next";
import VideoCarousel from "@/components/sections/MomentSectionTest";

export const metadata: Metadata = {
  title: "The Padival Grand Hotel | Luxury Hotel in Puttur, Karnataka",
  description:
    "Welcome to The Padival Grand Hotel - Puttur's premier luxury hotel. Experience world-class hospitality with elegant rooms, fine dining, grand event spaces, and exceptional service in the heart of Karnataka.",
  keywords: [
    "Padival Grand Hotel",
    "luxury hotel Puttur",
    "best hotel in Puttur",
    "hotels near Puttur",
    "Karnataka hotels",
    "accommodation Puttur",
    "event venues Puttur",
    "wedding halls Puttur",
    "business hotel Puttur",
  ],
  openGraph: {
    title: "The Padival Grand Hotel | Luxury Hotel in Puttur, Karnataka",
    description:
      "Welcome to The Padival Grand Hotel - Puttur's premier luxury hotel. Experience world-class hospitality with elegant rooms, fine dining, and exceptional service.",
    url: "https://www.thepadivalgrand.com",
    images: [
      {
        url: "https://www.thepadivalgrand.com/ogImage.png",
        width: 1200,
        height: 630,
        alt: "The Padival Grand Hotel Puttur - Luxury Accommodation",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative ">
      <Header />
      <Hero videoSrc="https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FLOBBY%2C%20RECEPTION.mp4?alt=media&token=a66474d4-cc5c-4fd3-90e7-782dac157248" />
      <HospitalitySection />
      <NearbyAttractions />
      <RoomsSection />
      
      <div className="bg-[#F9F5EC] ">

        <VideoCarousel
          heading="Discover Moments at The Padival Grand Hotel"
          videos={[
            "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FNON%20AC.mp4?alt=media&token=1dba7ef6-7eac-4c4e-bea2-08ef5fc23877",
            "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FROOMS.mp4?alt=media&token=f063c9d0-bd52-4a72-ba84-d3c36e660c61",
            "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FRooms%202.mp4?alt=media&token=c0489353-8b51-4be2-920a-80e1b7a4c5c1",
            "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FTriple%20Sharing%20Room.mp4?alt=media&token=8d19155a-1a93-49f2-b227-29a1b0d4ddd7",
            "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FRooms%202.mp4?alt=media&token=c0489353-8b51-4be2-920a-80e1b7a4c5c1",
            "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FTriple%20Sharing%20Room.mp4?alt=media&token=8d19155a-1a93-49f2-b227-29a1b0d4ddd7",
          ]}
        />
      </div>

      {/* <MomentsSection /> */}
      <div className="md:py-12 py-12 bg-[#F9F2E8]">
         <TestimonialsSection />
      </div>
     
      <div className="pt-6 bg-white">

        <FAQSection />
      </div>

      <div className=" bg-white md:pb-12 pb-14">
        <EventsSection />
      </div>

      <div className="md:py-0 py-16 md:pb-16 mb-0 bg-[#F9F5EC]">
        <ContactSection />
      </div>
      
      <section className="hidden lg:block">
        <ReservationBar />
      </section>
      
      <Footer />
    </main>
  );
}
