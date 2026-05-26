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
  title: " Rooms in Puttur, Karnataka | The Padival Grand",
  description:
    "Rooms in Puttur, Karnataka with AC, WiFi, parking and clean, comfortable stays for families, travellers and short visits at The Padival Grand.",
  openGraph: {
    title: "Rooms in Puttur That Make Your Stay Easy | The Padival Grand ",
    description:
      "Looking for clean and comfortable rooms in Puttur? The Padival Grand offers well-maintained stays with AC, WiFi and parking, ideal for families, travellers and short visits. ",
    url: "https://thepadivalgrand.com/rooms",

  },
  twitter: {
    card: "summary_large_image",
    title: "Rooms in Puttur | The Padival Grand",
    description: "Clean and comfortable rooms with essential amenities, ideal for families, travellers and short stays at The Padival Grand. ",
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

        "@type": "CollectionPage",

        "@id": "https://thepadivalgrand.com/rooms#webpage",

        "url": "https://thepadivalgrand.com/rooms",

        "name": "Rooms in Puttur at The Padival Grand",

        "description": "Explore room options at The Padival Grand, including Standard Room, Deluxe Room, Triple Bed Room and Family Quad Room for short stays, family stays and group stays in Puttur.",

        "isPartOf": {

          "@id": "https://thepadivalgrand.com/#website"

        },

        "about": {

          "@id": "https://thepadivalgrand.com/#hotel"

        },

        "mainEntity": {

          "@id": "https://thepadivalgrand.com/rooms#itemlist"

        }

      },

      {

        "@type": "ItemList",

        "@id": "https://thepadivalgrand.com/rooms#itemlist",

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

              "description": "A comfortable room for short stays and budget-friendly travel.",

              "occupancy": {

                "@type": "QuantitativeValue",

                "minValue": 1,

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

              "description": "A spacious room suitable for couples, families and business travellers.",

              "occupancy": {

                "@type": "QuantitativeValue",

                "minValue": 1,

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

              "name": "Triple Bed Room",

              "url": "https://thepadivalgrand.com/rooms/triple-bed-room",

              "description": "A practical room option for three guests, suitable for small families or group stays.",

              "occupancy": {

                "@type": "QuantitativeValue",

                "minValue": 1,

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

              "description": "A spacious room designed for families or groups who need extra sleeping space.",

              "occupancy": {

                "@type": "QuantitativeValue",

                "minValue": 1,

                "maxValue": 4

              },

              "containedInPlace": {

                "@id": "https://thepadivalgrand.com/#hotel"

              }

            }

          }

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

        "name": "Where can I find hotel rooms in Puttur with modern amenities?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "You can find well-equipped rooms at The Padival Grand, offering AC, high-speed WiFi, parking and daily housekeeping for a comfortable and convenient stay."

        }

      },

      {

        "@type": "Question",

        "name": "Are there affordable rooms for short stays?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "Yes, there are budget-friendly options available for short stays as well as longer visits. The Padival Grand offers clean and well-maintained rooms without unnecessary costs."

        }

      },

      {

        "@type": "Question",

        "name": "Is it easy to find a stay near Puttur Main Road?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "Yes, staying near Puttur Main Road makes travel easier. The Padival Grand is conveniently located with quick access to transport, nearby attractions and essential services."

        }

      },

      {

        "@type": "Question",

        "name": "What is the average price of hotel rooms in Puttur?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "Room prices vary based on location and facilities, but options like The Padival Grand offer good value with essential amenities and reliable service."

        }

      },

      {

        "@type": "Question",

        "name": "Which is a good hotel for rooms in Puttur?",

        "acceptedAnswer": {

          "@type": "Answer",

          "text": "The Padival Grand is a reliable choice, offering clean spaces, essential amenities and a convenient location for families and travellers."

        }

      }

    ]
  };

  const videoSchema = {



    "@context": "https://schema.org",

    "@type": "VideoObject",

    "@id": "https://thepadivalgrand.com/rooms#video",

    "name": "Rooms at The Padival Grand",

    "description": "Watch the room experience at The Padival Grand in Puttur, featuring Standard Room, Deluxe Room, Triple Bedroom and Family Quad Room for families, groups and travellers.",

    "thumbnailUrl": [

      "https://thepadivalgrand.com/rooms-thumbnail.jpg"

    ],

    "uploadDate": "2026-03-29",

    "contentUrl": "https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FROOMS%20(1).mp4?alt=media&token=95052066-e5a7-4ebb-a482-d622b4257ac2",

    "embedUrl": "https://thepadivalgrand.com/rooms",

    "inLanguage": "en",

    "isPartOf": {

      "@id": "https://thepadivalgrand.com/rooms#webpage"

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
      <Header />
      <Hero 
        videoSrc="https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FROOMS%20(1).mp4?alt=media&token=95052066-e5a7-4ebb-a482-d622b4257ac2" 
        bgImg="/roomsImg/placeholder.png"
        mobileBgImg="/heroImg/rooms.jpg"
      />

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
      {/* <FoodAndDining /> */}
      <div className="lg:pb-30 pb-12 bg-[white] ">
        <FAQSection
          faqs={roomFaqs}
          heading="Questions You Might Have About Your Stay with Us "
        />
      </div>

      <section className="">
        {/* <ReservationBar /> */}
      </section>

      <Footer />
    </main>
  );
}
