import type { Metadata } from "next";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReservationBar from "@/components/sections/ReservationBar";
import FAQSection from "@/components/sections/FAQSection";
import { contactFaqs } from "@/data/faqs";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";
import HowToGetHereSection from "@/components/sections/HowToGetHereSection";
import ContactAndLocationSection from "@/components/sections/GetInTouchSection";
import HalfHeroSection from "@/components/sections/HalfHeroSection";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Hotel in Puttur - Contact & Directions | The Padival Grand ",
    description:
        "Looking for hotels in Puttur Karnataka? Contact The Padival Grand for room bookings, directions, phone details and easy access near Puttur Main Road.",

    openGraph: {
        title: " in Puttur Karnataka | Contact The Padival Grand ",
        description:
            "Looking for hotels in Puttur Karnataka? Contact The Padival Grand for room bookings, directions, phone details and easy access near Puttur Main Road.",
        url: "https://thepadivalgrand.com/contact",
      
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact The Padival Grand | Hotel in Puttur Karnataka",
        description: "Contact The Padival Grand for bookings, directions, and assistance. Conveniently located near Puttur Main Road",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {

const hotelSchema = {


  "@context": "https://schema.org", 

  "@type": "ContactPage", 

  "@id": "https://thepadivalgrand.com/contact#webpage", 

  "url": "https://thepadivalgrand.com/contact", 

  "name": "Contact The Padival Grand", 

  "description": "Contact The Padival Grand for room bookings, directions and stay enquiries in Puttur, Karnataka.", 

  "isPartOf": { 

    "@id": "https://thepadivalgrand.com/#website" 

  }, 

  "about": { 

    "@id": "https://thepadivalgrand.com/#hotel" 

  }, 

  "mainEntity": { 

    "@type": "ContactPoint", 

    "telephone": "+91-9686804784", 

    "contactType": "reservations", 

    "areaServed": "IN", 

    "availableLanguage": [ 

      "English", 

      "Kannada" 

    ] 

  } 
};

    const faqSchema = {
         "@context": "https://schema.org", 

  "@type": "FAQPage", 

  "mainEntity": [ 

    { 

      "@type": "Question", 

      "name": "Where is The Padival Grand located in Puttur?", 

      "acceptedAnswer": { 

        "@type": "Answer", 

        "text": "The Padival Grand is located near Puttur Main Road in Puttur, Karnataka, with easy access to the town center, market, and transport points." 

      } 

    }, 

    { 

      "@type": "Question", 

      "name": "Which hotel in Puttur offers easy booking and contact support?", 

      "acceptedAnswer": { 

        "@type": "Answer", 

        "text": "The Padival Grand offers quick booking assistance by phone and WhatsApp, making it easy to contact and plan your stay in Puttur." 

      } 

    }, 

    { 

      "@type": "Question", 

      "name": "Does The Padival Grand provide parking for visitors?", 

      "acceptedAnswer": { 

        "@type": "Answer", 

        "text": "Yes, The Padival Grand offers secure parking for guests, making it convenient for those traveling by car." 

      } 

    }, 

    { 

      "@type": "Question", 

      "name": "Are there hotels in Puttur Karnataka with parking facilities?", 

      "acceptedAnswer": { 

        "@type": "Answer", 

        "text": "Yes, The Padival Grand offers secure parking, making it a convenient choice among hotels in Puttur Karnataka for travelers with vehicles." 

      } 

    } 

  ] 
    };


    
    return (
        <main className="">
            <JsonLd data={hotelSchema} id="hotel-schema" />
            <JsonLd data={faqSchema} id="faq-schema" />




            <Header />




            <HalfHeroSection title="Contact The Padival Grand  " />

            <ContactAndLocationSection />

            {/* <HowToGetHereSection /> */}
            <div className="md:pb-0 pb-6 py-12 bg-white">
                <FAQSection 
                    faqs={contactFaqs} 
                    heading="Frequently Asked Questions About Your Visit"
                />
            </div>



            {/* <ReservationBar /> */}
            <Footer />
        </main>
    );
}
