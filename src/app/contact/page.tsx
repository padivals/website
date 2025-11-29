import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReservationBar from "@/components/sections/ReservationBar";
import FAQSection from "@/components/sections/FAQSection";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";
import HowToGetHereSection from "@/components/sections/HowToGetHereSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col relative pb-24 bg-[#F9F5EC]">
            <Header />

            <ContactHeroSection />

            <GetInTouchSection />

            <HowToGetHereSection />

            <FAQSection />

            <ReservationBar />
            <Footer />
        </main>
    );
}
