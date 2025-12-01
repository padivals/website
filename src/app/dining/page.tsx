import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import TextSection from "@/components/ui/TextSection";
import DiningCarousel from "@/components/sections/DiningCarousel";
import DiningTestimonials from "@/components/sections/DiningTestimonials";
import ReservationBar from "@/components/sections/ReservationBar";

import { Metadata } from "next";
import MomentSectionTest from "@/components/sections/MomentSectionTest";

export const metadata: Metadata = {
    title: "Dining at Padival Grand | Padival's Palara Vegetarian Restaurant",
    description: "Experience authentic vegetarian dining at Padival's Palara within The Padival Grand Hotel. Enjoy homely flavours and a calm atmosphere.",
    keywords: ["Vegetarian Restaurant Puttur", "Padival's Palara", "Hotel Dining Puttur", "Family Restaurant Puttur"],
};

export default function DiningPage() {
    return (
        <main className="min-h-screen flex flex-col relative  bg-[#F9F5EC]">
            <Header />
            <PageHero
                title="Food and Dining"
                subtitle="Experience"
                image="/hero-bg.png" // Using placeholder for now
            />

            <TextSection
                heading="Where Familiar Flavours Meet Thoughtful Cooking"
                description="At Padival's Palara, we believe that good food should feel familiar, comforting, and true to its roots. Our pure vegetarian kitchen brings together homely flavours, simple recipes, and consistent quality made with care. Every meal reflects the warmth of our region and the timeless comfort of dishes people in Puttur have enjoyed for generations."
            />

            {/* <DiningCarousel /> */}
                        <MomentSectionTest backgroundColor="bg-white" heading="A Calm, Homely Dining Experience" videos={["/momentsImg/vid1.mp4", "/momentsImg/video2.mp4", "/momentsImg/vid1.mp4", "/momentsImg/video2.mp4", "/momentsImg/vid1.mp4"]} />
            

            <DiningTestimonials />

            <ReservationBar />
            <Footer />
        </main>
    );
}
