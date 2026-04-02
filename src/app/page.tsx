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
    title: "Padival Grand Hotel | Comfortable Stay & Pure Veg Dining in Puttur",
    description:
      "Looking for a comfortable stay in Puttur? The Padival Grand offers clean rooms, pure veg dining, AC, and WiFi for families, travellers, and temple visitors.",
    url: "https://thepadivalgrand.com",
    images: [
      {
        url: "https://thepadivalgrand.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Padival Grand Hotel - Luxurious Stay & Pure Veg Dining in Puttur",
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

    "@graph": [

      {

        "@type": "WebSite",

        "@id": "https://thepadivalgrand.com/#website",

        "url": "https://thepadivalgrand.com/",

        "name": "The Padival Grand",

        "inLanguage": "en"

      },

      {

        "@type": "WebPage",

        "@id": "https://thepadivalgrand.com/#webpage",

        "url": "https://thepadivalgrand.com/",

        "name": "The Padival Grand | Hotel in Puttur",

        "isPartOf": {

          "@id": "https://thepadivalgrand.com/#website"

        },

        "about": {

          "@id": "https://thepadivalgrand.com/#hotel"

        }

      },

      {

        "@type": "Hotel",

        "@id": "https://thepadivalgrand.com/#hotel",

        "name": "The Padival Grand",

        "alternateName": "Mahaveer Ventures  - The Padival Grand",

        "url": "https://thepadivalgrand.com/",

        "description": "The Padival Grand is a hotel in Puttur, Karnataka offering comfortable rooms, pure vegetarian dining, banquet space and essential amenities for families, travellers and pilgrims.",

        "telephone": "+91-9686804784",

        "image": [

          "https://thepadivalgrand.com/ogImage.png",

          "https://thepadivalgrand.com/images/hotel-exterior.jpg"

        ],

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

        "checkinTime": "12:00",

        "checkoutTime": "11:00",

        "priceRange": "₹₹",

        "amenityFeature": [

          {

            "@type": "LocationFeatureSpecification",

            "name": "High-speed Wi-Fi",

            "value": true

          },

          {

            "@type": "LocationFeatureSpecification",

            "name": "Air conditioning",

            "value": true

          },

          {

            "@type": "LocationFeatureSpecification",

            "name": "Elevator",

            "value": true

          },

          {

            "@type": "LocationFeatureSpecification",

            "name": "Parking",

            "value": true

          },

          {

            "@type": "LocationFeatureSpecification",

            "name": "Power backup",

            "value": true

          },

          {

            "@type": "LocationFeatureSpecification",

            "name": "Daily housekeeping",

            "value": true

          },

          {

            "@type": "LocationFeatureSpecification",

            "name": "CCTV surveillance",

            "value": true

          }

        ],

        "containsPlace": [

          {

            "@type": "Restaurant",

            "@id": "https://thepadivalgrand.com/dining#restaurant",

            "name": "Padival’s Palara"

          },

          {

            "@type": "EventVenue",

            "@id": "https://thepadivalgrand.com/events#venue",

            "name": "The Padival Grand Event Venue"

          }

        ],

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

      }

    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    "mainEntity": [

      {

        "@type": "Question",

        "name": "What are the best hotels in Puttur, Karnataka?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "The Padival Grand is a reliable choice for comfortable stays, offering clean rooms, essential amenities, and pure vegetarian dining suited for families and travellers."

        }

      },

      {

        "@type": "Question",

        "name": "Are the rooms suitable for families or groups?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "Yes, the hotel offers multiple room options designed to comfortably accommodate families, small groups, and individual travellers."

        }

      },

      {

        "@type": "Question",

        "name": "Is the hotel easy to access from main roads and transport?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "Yes, the property is conveniently located near the main road with easy access to transport, making travel simple and hassle-free."

        }

      },

      {

        "@type": "Question",

        "name": "Does the hotel allow pets?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "No, pets are not allowed. Guests are requested not to bring any pets to the hotel premises."

        }

      },
      {

        "@type": "Question",

        "name": "What are the opening hours of the reception?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "The reception is available to assist guests throughout the day, ensuring support for check-in, check-out, and any assistance during your stay."

        }

      },

      {

        "@type": "Question",

        "name": "What payment methods are accepted at the hotel?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "The hotel accepts major payment methods including cash, debit cards, credit cards, and digital payment options for convenience."

        }

      }

    ]
  };

  const videoSchema = {
    "@context": "https://schema.org",

    "@type": "VideoObject",

    "@id": "https://thepadivalgrand.com/#video-lobby-reception",

    "name": "The Padival Grand Lobby and Reception",

    "description": "Watch the lobby and reception area at The Padival Grand in Puttur, showcasing the hotel ambience, guest arrival experience and clean, comfortable interiors.",

    "thumbnailUrl": [

      "https://thepadivalgrand.com/images/lobby-thumb.jpg"

    ],

    "uploadDate": "2026-03-26",

    "contentUrl": "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FLOBBY%2C%20RECEPTION.mp4?alt=media&token=a66474d4-cc5c-4fd3-90e7-782dac157248",

    "embedUrl": "https://thepadivalgrand.com/",

    "inLanguage": "en",

    "isPartOf": {

      "@id": "https://thepadivalgrand.com/#webpage"

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
    <main className="min-h-screen flex flex-col relative ">
      <JsonLd data={hotelSchema} id="hotel-schema" />
      <JsonLd data={faqSchema} id="faq-schema" />
      <JsonLd data={videoSchema} id="video-schema" />

      <Header />

      <Hero 
        videoSrc="https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FLOBBY%2C%20RECEPTION.mp4?alt=media&token=a66474d4-cc5c-4fd3-90e7-782dac157248" 
        bgImg="/images/placeholder.png"
      />
      <HospitalitySection />
      <div className="">

        <BestHotelSection />
      </div>
      <Image src="/hospitalityImg/padivalMainImg.webp" className="hidden" alt="Main Building Image" width={100} height={100} />
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



      <NearbyAttractions />


      <div className="pt-0 bg-white">

        <FAQSection
          faqs={generalFaqs}
          heading="Common Questions About Your Visit in Puttur"
        />
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
