'use client'

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



export default function DiningPage() {
    return (
        <main className="min-h-screen flex flex-col relative  ">
            <Header />
            <Hero videoSrc="https://res.cloudinary.com/dqhzf4lsg/video/upload/v1769672614/HERO_ROOFTOP_DINNING_rcrk1i.mp4" />

            <TextSection
                heading="Where Familiar Flavours Meet Thoughtful Cooking"
                description="At Padival's Palara, we believe that good food should feel familiar, comforting, and true to its roots. Our pure vegetarian kitchen brings together homely flavours, simple recipes, and consistent quality made with care. Every meal reflects the warmth of our region and the timeless comfort of dishes people in Puttur have enjoyed for generations."
            />

            {/* <DiningCarousel /> */}
      <div className="bg-[#F9F5EC] py-8">

        <VideoCarousel
          heading="Discover Moments at The Padival Grand Hotel"
          videos={[
            "https://res.cloudinary.com/dqhzf4lsg/video/upload/v1769751838/Set_Dosa_1_wr1k0h.mp4",
            "https://res.cloudinary.com/dqhzf4lsg/video/upload/v1769751834/COFFEE_1_ahjxif.mp4",
            "https://res.cloudinary.com/dqhzf4lsg/video/upload/v1769751823/Fruit_Salad_1_q3njnn.mp4",
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
