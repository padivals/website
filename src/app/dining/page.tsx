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

export const metadata: Metadata = {
    title: "Dining | Padivals Palara Pure Veg Restaurant Puttur",
    description: "Enjoy authentic, pure vegetarian flavours at Padivals Palara. Our restaurant in Puttur serves homely, comforting dishes made with fresh ingredients and traditional recipes.",
    keywords: ["Veg Restaurant Puttur", "Pure Veg Dining", "Padivals Palara", "Best Restaurant in Puttur"],
    alternates: {
        canonical: "/dining",
    },
};

export default function DiningPage() {
    return (
        <main className="min-h-screen flex flex-col relative  ">
            <Header />
            <Hero videoSrc="https://firebasestorage.googleapis.com/v0/b/megamind-carrers.firebasestorage.app/o/padivals%2FPalara.mp4?alt=media&token=1061604b-2c1a-4955-8c5e-5f91d8436590" />

            <TextSection
                heading="Where Familiar Flavours Meet Thoughtful Cooking"
                description="At Padival's Palara, we believe that good food should feel familiar, comforting, and true to its roots. Our pure vegetarian kitchen brings together homely flavours, simple recipes, and consistent quality made with care. Every meal reflects the warmth of our region and the timeless comfort of dishes people in Puttur have enjoyed for generations."
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

            {/* <ReservationBar /> */}
            <Footer />
        </main>
    );
}
