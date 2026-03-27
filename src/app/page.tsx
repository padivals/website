import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import GlimpsesSection from "@/components/sections/GlimpsesSection";
import NearbyAttractions from "@/components/sections/NearbyAttractions";
import RoomsSection from "@/components/sections/RoomsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { generalFaqs } from "@/data/faqs";
import FAQSection from "@/components/sections/FAQSection";
import EventsSection from "@/components/sections/EventsSection";
import ContactSection from "@/components/sections/ContactSection";
import ReservationBar from "@/components/sections/ReservationBar";
import type { Metadata } from "next";
import VideoCarousel from "@/components/sections/MomentSectionTest";
import HospitalitySection from "@/components/sections/HospitalitySection";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Hotel in Puttur, Karnataka | The Padival Grand Stay",
  description:
    "Hotel rooms in Puttur, Karnataka with AC, WiFi, parking & pure veg dining. The Padival Grand ensures a clean, comfortable stay in Puttur for family & travelers.",

  openGraph: {
    title: "The Padival Grand Hotel | Luxury Hotel in Puttur, Karnataka",
    description:
      "Welcome to The Padival Grand Hotel - Puttur's premier luxury hotel. Experience world-class hospitality with elegant rooms, fine dining, and exceptional service.",
    url: "https://thepadivalgrand.com",
    images: [
      {
        url: "https://thepadivalgrand.com/ogImage.png",
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

import JsonLd from "@/components/seo/JsonLd";
import BestHotelSection from "@/components/sections/BestHotelSection";


export default function Home() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@id": "https://thepadivalgrand.com/#hotel",
    "@type": "Hotel",
    "name": "Mahaveer Ventures Hotel and Resort - The Padival Grand",
    "alternateName": "Padivals' Palara",
    "url": "https://thepadivalgrand.com/",
    "description": "The Padival Grand is a hotel in Puttur, Karnataka, offering comfortable rooms, pure vegetarian dining and modern amenities for families, travelers and pilgrims.",
    "telephone": "+919686804784",
    "image": [
      "https://thepadivalgrand.com/svgs/mainLogo.svg",
      "https://thepadivalgrand.com/wp-content/uploads/your-image-2.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mahaveer Mall, Puttur Main Road",
      "addressLocality": "Puttur",
      "addressRegion": "Karnataka",
      "postalCode": "574201",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.766130796400661,
      "longitude": 75.19643883776936
    },
    "checkinTime": "12:00",
    "checkoutTime": "11:00",
    "priceRange": "₹₹",
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "High-speed Wi-Fi", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air conditioning", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Elevator", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Power backup", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Daily housekeeping", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "CCTV surveillance", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Rooftop balcony", "value": true }
    ],
    "petsAllowed": false,
    "smokingAllowed": false,
    "hasMap": "https://www.google.com/maps/place/Mahaveer+Ventures+Hotel+and+Resort+-+The+Padival+Grand/@12.765932,75.1938854,17z/data=!4m9!3m8!1s0x3ba4bd11b23b38bf:0x29973ec88814e99b!5m2!4m1!1i2!8m2!3d12.765932!4d75.1964603!16s%2Fg%2F11pzh3m87_?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D",
    "containsPlace": [
      {
        "@type": "Restaurant",
        "name": "The Padival Grand Pure Vegetarian Restaurant",
        "servesCuisine": "Indian Vegetarian",
        "acceptsReservations": true
      },
      { "@type": "Place", "name": "Banquet Hall" }
    ],
    "makesOffer": {
      "@type": "Offer",
      "name": "Hotel Rooms in Puttur",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "reviewCount": "189",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.instagram.com/thepadivalgrand",
      "https://www.facebook.com/people/The-Padival-Grand/61583295038368/"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": generalFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Hotel Lobby and Reception Tour in Puttur",
    "description": "Explore the lobby and reception area of The Padival Grand Hotel in Puttur with modern amenities and comfortable seating.",
    "thumbnailUrl": "https://thepadivalgrand.com/images/lobby-thumb.jpg",
    "uploadDate": "2026-03-26",
    "contentUrl": "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FLOBBY%2C RECEPTION.mp4?alt=media&token=a66474d4-cc5c-4fd3-90e7-782dac157248",
    "embedUrl": "https://thepadivalgrand.com"
  };

  const reviewSchema = {
    "@context": "https://schema.org",

    "@type": "Hotel",

    "@id": "https://thepadivalgrand.com/#hotel",

    "name": "The Padival Grand",

    "url": "https://thepadivalgrand.com/",

    "image": "https://thepadivalgrand.com/ogImage.png",

    "telephone": "+91-9686804784",

    "address": {

      "@type": "PostalAddress",

      "streetAddress": "Mahaveer Mall, Main Road, Above Reliance Trendz, Bolwar",

      "addressLocality": "Puttur",

      "addressRegion": "Karnataka",

      "postalCode": "574201",

      "addressCountry": "IN"

    },

    "aggregateRating": {

      "@type": "AggregateRating",

      "ratingValue": "4.3",

      "reviewCount": "189",

      "bestRating": "5",

      "worstRating": "1"

    }
  };

  return (
    <main className="min-h-screen flex flex-col relative ">
      <JsonLd data={hotelSchema} id="hotel-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <JsonLd data={videoSchema} id="video-schema" />

      <Header />

      <Hero videoSrc="https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FLOBBY%2C%20RECEPTION.mp4?alt=media&token=a66474d4-cc5c-4fd3-90e7-782dac157248" />
      <HospitalitySection />
      <Image src="/hospitalityImg/padivalMainImg.webp" className="hidden" alt="Main Building Image" width={100} height={100} />
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

      <div className="">

        <BestHotelSection />
      </div>

      <div className="pt-0 bg-white">

        <FAQSection faqs={generalFaqs} />
      </div>

      <div className=" bg-white md:pb-12 pb-14">
        <EventsSection />
      </div>

      {/* <div className="md:py-0 py-16 md:pb-16 mb-0 bg-[#F9F5EC]">
        <ContactSection />
      </div> */}

      <section className="hidden lg:block">
        {/* <ReservationBar /> */}
      </section>

      <Footer />
    </main>
  );
}
