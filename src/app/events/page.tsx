import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import TextSection from "@/components/ui/TextSection";
import EventTypes from "@/components/sections/EventTypes";
import EventVenuesCarousel from "@/components/sections/EventVenuesCarousel";
import EventSpaces from "@/components/sections/EventSpaces";
import ReservationBar from "@/components/sections/ReservationBar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Event Spaces at Padival Grand | Banquet Halls in Puttur",
    description: "Host your weddings, corporate events, and celebrations at The Padival Grand. Our elegant banquet halls and event spaces in Puttur offer the perfect setting for memorable occasions.",
    keywords: ["Banquet Halls Puttur", "Wedding Venues Puttur", "Conference Halls Puttur", "Event Spaces Padival Grand"],
};

export default function EventsPage() {
    return (
        <main className="min-h-screen flex flex-col relative pb-24 bg-[#F9F5EC]">
            <Header />

            <PageHero
                title="Celebrations & Gatherings"
                subtitle="Elegant Spaces for Every Occasion"
                image="/hero-bg.png" // Placeholder
            />

            <TextSection
                heading="Host Your Events with Us"
                description="From intimate family gatherings to grand weddings and professional conferences, The Padival Grand offers versatile event spaces designed to make your occasions memorable. With impeccable service and modern amenities, we ensure every detail is perfect."
            />

            <EventTypes />

            <EventVenuesCarousel />

            <EventSpaces />

            <ReservationBar />
            <Footer />
        </main>
    );
}
