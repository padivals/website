import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import TextSection from "@/components/ui/TextSection";
import EventTypes from "@/components/sections/EventTypes";
import EventSpaces from "@/components/sections/EventSpaces";
import ReservationBar from "@/components/sections/ReservationBar";
import { Metadata } from "next";
import MomentSectionTest from "@/components/sections/MomentSectionTest";
import ContactSection from "@/components/sections/ContactSection";
import Hero from "@/components/sections/Hero";
import FAQSection from "@/components/sections/FAQSection";
import { eventFaqs } from "@/data/faqs";
import JsonLd from "@/components/seo/JsonLd";


export const metadata: Metadata = {
  title: "Marriage Hall in Puttur with Rooms, Dining & Event Space",
  description: "Book your marriage hall in Puttur, Karnataka with banquet space, rooms and pure veg dining. Ideal for weddings, parties, and events. Call now to book your date. ",
  openGraph: {
    title: "Marriage Hall in Puttur with Rooms, Dining & Event Space ",
    description: " Book a marriage hall in Puttur with banquet space, rooms and pure veg dining. Perfect for weddings, parties, and events. ",
    url: "https://thepadivalgrand.com/events",
 
  },
  twitter: {
    card: "summary_large_image",
    title: "Marriage Hall in Puttur with Rooms & Banquet Space",
    description: "Marriage Hall in Puttur with Rooms & Banquet Space",
    images: ["https://thepadivalgrand.com/og-image.png"],
  },
  alternates: {
    canonical: "/events",
  },
};





export default function EventsPage() {



  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "@id": "https://thepadivalgrand.com/events#eventvenue",
    "name": "The Padival Grand Event Venue",
    "url": "https://thepadivalgrand.com/events",
    "description": "The Padival Grand offers a marriage hall, banquet hall and function hall in Puttur for weddings, family functions, parties and events, with rooms, pure vegetarian dining and parking.",
    "image": "https://thepadivalgrand.com/og-image.png",
    "telephone": "+91-9686804784",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mahaveer Mall, Main Road, Above Reliance Trendz, Bolwar",
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
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Marriage Hall", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Banquet Hall", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Function Hall", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Rooms Available", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Pure Vegetarian Dining", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Parking", "value": true }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "reviewCount": "190",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": "https://thepadivalgrand.com/events#video",
    "name": "Events and Banquet Experience at The Padival Grand",
    "description": "Watch the event and banquet experience at The Padival Grand in Puttur, featuring wedding setups, family functions and event spaces with dining, rooms and parking facilities.",
    "thumbnailUrl": [
      "https://thepadivalgrand.com/og-image.png"
    ],
    "uploadDate": "2026-03-30",
    "contentUrl": "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FEVENTS.mp4?alt=media&token=a73adaea-de2a-46ff-8850-aa56acb7048c",
    "embedUrl": "https://thepadivalgrand.com/events",
    "inLanguage": "en",
    "publisher": {
      "@type": "Organization",
      "name": "The Padival Grand",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thepadivalgrand.com/svgs/mainLogo.svg"
      }
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://thepadivalgrand.com/events#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I find a marriage hall near me in Puttur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can find a well-equipped marriage hall at The Padival Grand in Puttur, offering banquet space, rooms, dining and complete support for smooth and comfortable events."
        }
      },
      {
        "@type": "Question",
        "name": "Which is a good banquet hall in Puttur for events?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Padival Grand offers a clean and well-managed banquet hall in Puttur, suitable for weddings, parties and family functions with reliable service and essential amenities."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a party hall near me with dining and parking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, The Padival Grand offers a party hall in Puttur with pure veg dining and parking facilities, making it ideal for celebrations and social gatherings."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best place to host events in Puttur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Padival Grand is a reliable choice for hosting events in Puttur, offering a combination of banquet space, rooms, dining and a well-managed environment."
        }
      }
    ]
  };

  return (


    <main className="min-h-screen flex flex-col relative  ">
      <JsonLd data={hotelSchema} id="hotel-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <JsonLd data={videoSchema} id="video-schema" />

      <Header />

      <Hero 
        videoSrc="https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FEVENTS.mp4?alt=media&token=a73adaea-de2a-46ff-8850-aa56acb7048c" 
        bgImg="/evnts/placeholder.png"
        mobileBgImg="/heroImg/events.jpg"
      />

      <TextSection
      as="h1"
        heading="Marriage Hall in Puttur for Weddings, Functions & Events"
        description="Planning an event in Puttur shouldn’t mean juggling multiple vendors. Many venues offer just a hall, leaving you to manage rooms, dining and coordination. At The Padival Grand, we bring everything together. Our marriage hall in Puttur, along with a well-maintained banquet and flexible function hall, offers a complete setup with rooms and pure veg dining. Designed for seamless gatherings, it ensures every celebration feels organised, comfortable and stress-free. "
      />

      <EventTypes />

      {/* <MomentSectionTest backgroundColor="bg-white" heading="What Awaits You in Our Event Venues" videos={["/momentsImg/vid1.mp4", "/momentsImg/video2.mp4", "/momentsImg/vid1.mp4", "/momentsImg/video2.mp4", "/momentsImg/vid1.mp4"]} /> */}

      <EventSpaces />
      {/* <div className="pb-10 bg-[#F9F5EC] ">
            <ContactSection />
            </div> */}
      <div className="lg:pb-30 pb-12 bg-[white] ">
        <FAQSection
          faqs={eventFaqs}
          heading="Questions You Might Have About Your Stay with Us "
        />
      </div>

      {/* <ReservationBar /> */}

      <Footer />
    </main>
  );
}
