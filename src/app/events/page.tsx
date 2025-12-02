import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import TextSection from "@/components/ui/TextSection";
import EventTypes from "@/components/sections/EventTypes";
import EventSpaces from "@/components/sections/EventSpaces";
import ReservationBar from "@/components/sections/ReservationBar";
import { Metadata } from "next";
import MomentSectionTest from "@/components/sections/MomentSectionTest";
import ContactSection from "@/components/sections/ContactSection";
export const metadata: Metadata = {
    title: "Event Spaces at Padival Grand | Banquet Halls in Puttur",
    description: "Host your weddings, corporate events, and celebrations at The Padival Grand. Our elegant banquet halls and event spaces in Puttur offer the perfect setting for memorable occasions.",
    keywords: ["Banquet Halls Puttur", "Wedding Venues Puttur", "Conference Halls Puttur", "Event Spaces Padival Grand"],
};

export default function EventsPage() {
    return (
        <main className="min-h-screen flex flex-col relative  bg-[#F9F5EC]">
            <Header />

            <PageHero
               underlineClass="hidden"
                image="/hero-bg.png" // Placeholder
            />

            <TextSection
                heading="Where Every Occasion Finds a Comfortable Setting"
                description="At The Padival Grand, we believe that every gathering deserves a space that feels calm, welcoming, and thoughtfully arranged. Our event venues bring together clean interiors, practical layouts, and dependable support that help guests feel at ease. Each hall and terrace space reflects the warmth of Puttur and the steady comfort people look for when hosting family functions, celebrations, or community moments."
            />

            <EventTypes />

            <MomentSectionTest backgroundColor="bg-white" heading="What Awaits You in Our Event Venues" videos={["/momentsImg/vid1.mp4", "/momentsImg/video2.mp4", "/momentsImg/vid1.mp4", "/momentsImg/video2.mp4", "/momentsImg/vid1.mp4"]} />

            <EventSpaces />
            <ContactSection />
            <ReservationBar />
            <Footer />
        </main>
    );
}
