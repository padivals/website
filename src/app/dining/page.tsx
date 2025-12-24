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



export default function DiningPage() {
    return (
        <main className="min-h-screen flex flex-col relative  ">
            <Header />
            <Hero bgImg="/dining-bg.png" />

            <TextSection
                heading="Where Familiar Flavours Meet Thoughtful Cooking"
                description="At Padival's Palara, we believe that good food should feel familiar, comforting, and true to its roots. Our pure vegetarian kitchen brings together homely flavours, simple recipes, and consistent quality made with care. Every meal reflects the warmth of our region and the timeless comfort of dishes people in Puttur have enjoyed for generations."
            />

            {/* <DiningCarousel /> */}
<div className="py-0 bg-[white]">
    <ImageCarousel/>
</div>

            <div className="py-20 md:pb-[12rem] bg-[white]">
                <DiningTestimonials />
            </div>

            <ReservationBar />
            <Footer />
        </main>
    );
}
