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
import type { Metadata } from "next";

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
    url: "https://padivals-megamind.vercel.app/",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "The Padival Grand Hotel Puttur - Luxury Accommodation",
      },
    ],
  },
};

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
