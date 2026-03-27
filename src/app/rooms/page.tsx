import type { Metadata } from "next";
import React from "react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import ReservationBar from "@/components/sections/ReservationBar";
import { rooms } from "@/data/rooms";
import { roomFaqs } from "@/data/faqs";
import RoomCard from "@/components/ui/RoomCard";
import CommonAmenities from "@/components/sections/CommonAmenities";
import FoodAndDining from "@/components/sections/FoodAndDining";
import FAQSection from "@/components/sections/FAQSection";
import Hero from "@/components/sections/Hero";
import GlimpsesSection from "@/components/sections/GlimpsesSection";
import RoomsIntro from "@/components/sections/RoomsIntro";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
    title: "Luxury Rooms & Suites | The Padival Grand Hotel Puttur",
    description:
        "Discover elegant accommodations at The Padival Grand Hotel. Choose from Comfort Rooms, Premium Stay Rooms, Family Suites, and Executive Retreats. Each room features modern amenities and exceptional comfort.",
    keywords: [
        "hotel rooms Puttur",
        "luxury suites Puttur",
        "accommodation Puttur",
        "family rooms Puttur",
        "executive rooms Puttur",
        "comfortable stay Puttur",
    ],
    openGraph: {
        title: "Luxury Rooms & Suites | The Padival Grand Hotel Puttur",
        description:
            "Discover elegant accommodations at The Padival Grand Hotel. Choose from Comfort Rooms, Premium Stay Rooms, Family Suites, and Executive Retreats.",
        url: "https://thepadivalgrand.com/rooms",
    },
    alternates: {
        canonical: "/rooms",
    },
};

export default function RoomsPage() {


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
        "mainEntity": roomFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    
    return (
        <main className="min-h-screen flex flex-col relative  ">

            <JsonLd data={hotelSchema} id="hotel-schema" />
            <JsonLd data={faqSchema} id="faq-schema" />
            <Header />
            <Hero videoSrc="https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FROOMS%20(1).mp4?alt=media&token=95052066-e5a7-4ebb-a482-d622b4257ac2" />

            <style>{`
        @media (min-width: 2100px) {
          .xl-faq-padding {
            padding-left: 0 !important;
            padding-right: 0 !important;
            padding-top: 40px !important;
            padding-bottom: 20px !important;
          }
        }
      `}</style>

            <RoomsIntro />

            <section className=" md:px-16 px-6 pb-20 xl-faq-padding bg-[#F9F5EC]">


                {/* Desktop grid (visible md+) */}
                <div className="hidden container mx-auto md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {rooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            id={room.id}
                            title={room.title}
                            description={room.description}
                            slug={room.slug}
                            heroImage={room.cardImg}
                            imageColor={room.imageColor}
                        />
                    ))}
                </div>

                {/* Mobile swiper (visible only on small screens) */}
                <div className="md:hidden">
                    <div className="flex gap-4 overflow-x-auto px-4 py-2 snap-x snap-mandatory scrollbar-hide items-stretch">
                        {rooms.map((room) => (
                            <RoomCard
                                key={room.id}
                                id={room.id}
                                title={room.title}
                                description={room.description}
                                slug={room.slug}
                                heroImage={room.heroImage}
                                imageColor={room.imageColor}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CommonAmenities />
            <FoodAndDining />
            <div className="lg:pb-30 pb-12 bg-[white] ">
                <FAQSection faqs={roomFaqs} />
            </div>

            <section className="">
                {/* <ReservationBar /> */}
            </section>

            <Footer />
        </main>
    );
}
