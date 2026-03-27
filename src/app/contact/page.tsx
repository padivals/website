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
    title: " Hotel in Puttur Karnataka | Contact the Padival Grand",
    description:
        " Contact The Padival Grand, a leading hotel in Puttur Karnataka. Get directions, phone number, address, and location details for easy access and bookings.",

    openGraph: {
        title: "Contact Us | The Padival Grand Hotel Puttur",
        description:
            "Get in touch with The Padival Grand Hotel. Visit us at Bondel, Mangaluru or call us for reservations and inquiries.",
        url: "https://thepadivalgrand.com/contact",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {

    const hotelSchema = {


        "@context": "https://schema.org",

        "@graph": [

            {

                "@type": "WebSite",

                "@id": "https://thepadivalgrand.com/#website",

                "url": "https://thepadivalgrand.com/",

                "name": "The Padival Grand"

            },

            {

                "@type": "Hotel",

                "@id": "https://thepadivalgrand.com/#hotel",

                "name": "The Padival Grand",

                "url": "https://thepadivalgrand.com/",

                "address": {

                    "@type": "PostalAddress",

                    "addressLocality": "Puttur",

                    "addressRegion": "Karnataka",

                    "addressCountry": "IN"

                }

            },

            {

                "@type": "CollectionPage",

                "@id": "https://thepadivalgrand.com/rooms#collection",

                "url": "https://thepadivalgrand.com/rooms",

                "name": "Rooms at The Padival Grand",

                "description": "Explore rooms in Puttur at The Padival Grand, including Standard Room, Deluxe Room, Triple Bed Room and Family Quad Room for a comfortable stay.",

                "isPartOf": {

                    "@id": "https://thepadivalgrand.com/#website"

                },

                "mainEntity": {

                    "@type": "ItemList",

                    "name": "Room Types at The Padival Grand",

                    "numberOfItems": 4,

                    "itemListElement": [

                        {

                            "@type": "ListItem",

                            "position": 1,

                            "item": {

                                "@type": "HotelRoom",

                                "@id": "https://thepadivalgrand.com/rooms/standard-room#room",

                                "name": "Standard Room",

                                "url": "https://thepadivalgrand.com/rooms/standard-room",

                                "description": "Comfortable standard room in Puttur with essential amenities for a relaxed stay.",

                                "occupancy": {

                                    "@type": "QuantitativeValue",

                                    "maxValue": 2

                                },

                                "containedInPlace": {

                                    "@id": "https://thepadivalgrand.com/#hotel"

                                }

                            }

                        },

                        {

                            "@type": "ListItem",

                            "position": 2,

                            "item": {

                                "@type": "HotelRoom",

                                "@id": "https://thepadivalgrand.com/rooms/deluxe-room#room",

                                "name": "Deluxe Room",

                                "url": "https://thepadivalgrand.com/rooms/deluxe-room",

                                "description": "Well-designed deluxe room in Puttur with modern comforts for travelers and families.",

                                "occupancy": {

                                    "@type": "QuantitativeValue",

                                    "maxValue": 2

                                },

                                "containedInPlace": {

                                    "@id": "https://thepadivalgrand.com/#hotel"

                                }

                            }

                        },

                        {

                            "@type": "ListItem",

                            "position": 3,

                            "item": {

                                "@type": "HotelRoom",

                                "@id": "https://thepadivalgrand.com/rooms/triple-bed-room#room",

                                "name": "Triple Bedroom",

                                "url": "https://thepadivalgrand.com/rooms/triple-bed-room",

                                "description": "Spacious triple bedroom in Puttur ideal for small groups and family stays.",

                                "occupancy": {

                                    "@type": "QuantitativeValue",

                                    "maxValue": 3

                                },

                                "containedInPlace": {

                                    "@id": "https://thepadivalgrand.com/#hotel"

                                }

                            }

                        },

                        {

                            "@type": "ListItem",

                            "position": 4,

                            "item": {

                                "@type": "HotelRoom",

                                "@id": "https://thepadivalgrand.com/rooms/family-quad-room#room",

                                "name": "Family Quad Room",

                                "url": "https://thepadivalgrand.com/rooms/family-quad-room",

                                "description": "Family quad room in Puttur with ample space and modern amenities for a comfortable group stay.",

                                "occupancy": {

                                    "@type": "QuantitativeValue",

                                    "maxValue": 4

                                },

                                "containedInPlace": {

                                    "@id": "https://thepadivalgrand.com/#hotel"

                                }

                            }

                        }

                    ]

                }

            }

        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": contactFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };


    
    return (
        <main className="">
            <JsonLd data={hotelSchema} id="hotel-schema" />
            <JsonLd data={faqSchema} id="faq-schema" />




            <Header />




            <HalfHeroSection title="Get in Touch" />

            <ContactAndLocationSection />

            {/* <HowToGetHereSection /> */}
            <div className="md:pb-0 pb-6 py-12 bg-white">
                <FAQSection faqs={contactFaqs} />
            </div>



            {/* <ReservationBar /> */}
            <Footer />
        </main>
    );
}
