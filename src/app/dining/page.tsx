import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import TextSection from "@/components/ui/TextSection";
import DiningTestimonials from "@/components/sections/DiningTestimonials";
import ReservationBar from "@/components/sections/ReservationBar";

import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ImageCarousel from "@/components/sections/MomentsSection";
import VideoCarousel from "@/components/sections/MomentSectionTest";
import FAQSection from "@/components/sections/FAQSection";
import { diningFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Pure Veg Restaurant in Puttur | Padival’s Palara",
  description: "Experience the finest pure veg restaurant in Puttur at Padival’s Palara. Authentic South Indian vegetarian food, family-friendly environment & fresh local flavors.",
  alternates: {
    canonical: "/dining",
  },
  openGraph: {
    title: "Pure Veg Restaurant in Puttur | Padival’s Palara",
    description: "A clean, welcoming pure veg restaurant in Puttur serving fresh breakfast, lunch, and dinner. Ideal for families, travellers, and everyday dining.",
    url: "https://thepadivalgrand.com/dining",
    siteName: "The Padival Grand",
 
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Padival’s Palara | Pure Veg Restaurant in Puttur",
    description: "Padival’s Palara | Pure Veg Restaurant in Puttur",
    images: ["https://thepadivalgrand.com/og-image.png"],
  },
};






import JsonLd from "@/components/seo/JsonLd";

export default function DiningPage() {

  const hotelSchema = {
    "@context": "https://schema.org",

    "@type": "Restaurant",

    "@id": "https://thepadivalgrand.com/dining#restaurant",

    "name": "Padival’s Palara",

    "alternateName": "Padival’s Palara - Pure Veg Restaurant",

    "url": "https://thepadivalgrand.com/dining",

    "image": [

      "https://thepadivalgrand.com/images/dining-1.jpg",

      "https://thepadivalgrand.com/images/dining-2.jpg"

    ],

    "description": "Padival’s Palara is a pure veg restaurant in Puttur serving fresh vegetarian breakfast, lunch and dinner in a clean and family-friendly setting.",

    "servesCuisine": [

      "Indian Vegetarian",

      "South Indian Vegetarian"

    ],

    "priceRange": "₹₹",

    "telephone": "+919686804784",

    "address": {

      "@type": "PostalAddress",

      "streetAddress": "Mahaveer Mall, Puttur Main Road, Above Reliance Trendz, Bolwar",

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

    "openingHoursSpecification": [

      {

        "@type": "OpeningHoursSpecification",

        "dayOfWeek": [

          "Monday",

          "Tuesday",

          "Wednesday",

          "Thursday",

          "Friday",

          "Saturday",

          "Sunday"

        ],

        "opens": "07:00",

        "closes": "22:30"

      }

    ],

    "acceptsReservations": true,

    "isPartOf": {

      "@id": "https://thepadivalgrand.com/#hotel"

    },

    "sameAs": [

      "https://www.instagram.com/thepadivalgrand",

      "https://www.facebook.com/people/The-Padival-Grand/61583295038368/"

    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    "mainEntity": [

      {

        "@type": "Question",

        "name": "What type of food is served at Padival’s Palara?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "Padival’s Palara serves pure vegetarian food, including South Indian breakfast, along with lunch and dinner prepared with a simple, homely taste."

        }

      },

      {

        "@type": "Question",

        "name": "Is Padival’s Palara a good pure veg restaurant in Puttur?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "Yes, Padival’s Palara is a well-known pure veg restaurant in Puttur, offering clean dining, consistent food quality and a comfortable experience for families and visitors."

        }

      },

      {

        "@type": "Question",

        "name": "Do you serve vegetarian breakfast in Puttur?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "Yes, Padival’s Palara offers fresh vegetarian breakfast options, making it a convenient choice for starting your day with hygienic and timely service."

        }

      },

      {

        "@type": "Question",

        "name": "Is the restaurant open for lunch and dinner?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "Yes, the restaurant serves both lunch and dinner with a variety of vegetarian dishes suitable for everyday dining and family meals."

        }

      }

    ]
  };

  const videoSchema = {
    "@context": "https://schema.org",

    "@type": "VideoObject",

    "@id": "https://thepadivalgrand.com/dining#video",

    "name": "Padival’s Palara Pure Veg Dining Experience",

    "description": "Watch the dining experience at Padival’s Palara, a pure veg restaurant in Puttur serving vegetarian breakfast, lunch and dinner in a clean and family-friendly setting.",

    "thumbnailUrl": [

      "https://thepadivalgrand.com/ogImage.png"

    ],

    "uploadDate": "2026-01-01",

    "contentUrl": "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FPalara.mp4?alt=media&token=1061604b-2c1a-4955-8c5e-5f91d8436590",

    "embedUrl": "https://thepadivalgrand.com/dining",

    "inLanguage": "en",

    "isPartOf": {

      "@id": "https://thepadivalgrand.com/dining#webpage"

    },

    "publisher": {

      "@type": "Hotel",

      "@id": "https://thepadivalgrand.com/#hotel",

      "name": "The Padival Grand",

      "url": "https://thepadivalgrand.com/",

      "logo": {

        "@type": "ImageObject",

        "url": "https://thepadivalgrand.com/svgs/mainLogo.svg"

      }

    }
  };




  return (
    <main className="min-h-screen flex flex-col relative  ">

      <JsonLd data={hotelSchema} id="hotel-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <JsonLd data={videoSchema} id="video-schema" />
      {/* <JsonLd data={reviewSchema} id="review-schema" /> */}
      <Header />
      <Hero videoSrc="https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FPalara.mp4?alt=media&token=1061604b-2c1a-4955-8c5e-5f91d8436590" />

      <TextSection
        heading="Breakfast in Puttur That Feels Fresh, Simple & Reliable  "
        description="At Padival’s Palara, we serve simple, fresh, and hygienic vegetarian food you can rely on every day. As a pure veg restaurant in Puttur, the focus is on clean preparation, consistent taste, and familiar flavours for both quick meals and family dining. From breakfast to dinner, every meal is served with care and without delay. For those searching for a pure veg restaurant near me in Puttur, it’s a dependable choice for clean food and quick service. 
"
      />

      {/* <DiningCarousel /> */}
      <div className="bg-[#F9F5EC] py-8">

        <VideoCarousel
          heading="A Comfortable Family Dining Experience in Puttur "
          videos={[
            "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FCOFFEE.mp4?alt=media&token=e93a638b-fc26-4f64-8ac6-11ee4f745e8c",
            "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FFruit%20Salad.mp4?alt=media&token=d2120982-05ff-42b3-a7d3-f4d65bd82c42",
            "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FSet%20Dosa.mp4?alt=media&token=861d56c8-267f-4754-bbc6-c30fbdbfe532",
          ]}
        />
      </div>

      <div className="py-20 md:pb-[12rem] bg-[white]">
        <DiningTestimonials />
      </div>

      <FAQSection
        faqs={diningFaqs}
        heading="Everything You Need to Know Before Dining "
      />

      {/* <ReservationBar /> */}
      <Footer />
    </main>
  );
}
