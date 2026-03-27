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
    title: "Best Pure Veg Restaurant in Puttur | Padival’s Palara",
    description: "Pure veg restaurant in Puttur Karnataka - Padival’s Palara serves breakfast, lunch & dinner with authentic taste, family-friendly dining, and quality vegetarian food.  ",
    alternates: {
        canonical: "/dining",
    },
};

import JsonLd from "@/components/seo/JsonLd";

export default function DiningPage() {

    const hotelSchema = {
        "@context": "https://schema.org",

        "@type": "Restaurant",

        "@id": "https://thepadivalgrand.com/dining#restaurant",

        "name": "Padival’s Palara - Pure Veg Restaurant",

        "url": "https://thepadivalgrand.com/dining",

        "image": [

            "https://thepadivalgrand.com/wp-content/uploads/your-dining-image.jpg"

        ],

        "description": "Padival’s Palara is a pure veg restaurant in Puttur offering breakfast, lunch and dinner with authentic vegetarian food in a family-friendly environment.",

        "servesCuisine": "Indian Vegetarian",

        "priceRange": "₹₹",

        "telephone": "+919686804784",

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

        "acceptsReservations": true,

        "hasMenu": "https://thepadivalgrand.com/dining",

        "parentOrganization": {

            "@type": "Hotel",

            "name": "Mahaveer Ventures Hotel and Resort - The Padival Grand",

            "url": "https://thepadivalgrand.com/"

        },

        "sameAs": [

            "https://www.instagram.com/thepadivalgrand",

            "https://www.facebook.com/people/The-Padival-Grand/61583295038368/"

        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": diningFaqs.map((faq) => ({
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
            {/* <JsonLd data={videoSchema} id="video-schema" />
            <JsonLd data={reviewSchema} id="review-schema" /> */}
            <Header />
            <Hero videoSrc="https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FPalara.mp4?alt=media&token=1061604b-2c1a-4955-8c5e-5f91d8436590" />

            <TextSection
                heading="Breakfast at Padival’s Palara with Fresh & Authentic Taste "
                description="At Padival’s Palara, we offer a trusted pure veg dining experience in Puttur, known for serving fresh, hygienic, and consistently high-quality meals rooted in local flavors. Recognized among the best veg restaurants in Puttur, Karnataka, our expertise lies in crafting homely dishes that balance tradition with everyday comfort. From authentic South Indian recipes to wholesome breakfast options, every meal is prepared with care, ensuring reliability for families and travelers alike. Whether you’re starting your day or enjoying a relaxed meal, Padival’s Palara stands as a dependable vegetarian restaurant in Puttur that prioritizes taste, quality, and customer trust."
            />

            {/* <DiningCarousel /> */}
            <div className="bg-[#F9F5EC] py-8">

                <VideoCarousel
                    heading="Discover Moments at The Padival Grand Hotel"
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

            <FAQSection faqs={diningFaqs} />

            {/* <ReservationBar /> */}
            <Footer />
        </main>
    );
}
