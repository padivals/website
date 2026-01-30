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
      <Hero videoSrc="https://res.cloudinary.com/dqhzf4lsg/video/upload/v1768566629/home_qy3xrp.mp4" />
      <HospitalitySection />
      <NearbyAttractions />
      <RoomsSection />
      
      <div className="bg-[#F9F5EC] ">

        <VideoCarousel
          heading="Discover Moments at The Padival Grand Hotel"
          videos={[
            "https://res.cloudinary.com/dqhzf4lsg/video/upload/v1769517453/new-non-ac_hjyg6b.mp4",
            "https://res.cloudinary.com/dqhzf4lsg/video/upload/v1769517451/new-fam-quad_dxwsh1.mp4",
            "https://res.cloudinary.com/dqhzf4lsg/video/upload/v1769517450/new-triple-room_eljvdj.mp4",
            "https://res.cloudinary.com/dqhzf4lsg/video/upload/v1769517409/new-non-ac_w08kk0.mp4",
            "https://res.cloudinary.com/dqhzf4lsg/video/upload/v1769517405/new-delux-non_dhrg88.mp4",
            "https://res.cloudinary.com/dqhzf4lsg/video/upload/v1769517401/new-triple-room_zfjrmg.mp4",
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
