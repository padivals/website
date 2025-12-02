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
        <main className="min-h-screen flex flex-col relative  bg-[#F9F5EC]">
            <Header />

            <ContactHeroSection />

            <GetInTouchSection />

            <HowToGetHereSection />
<div className="md:pb-0 pb-6 bg-white">
     <FAQSection />
</div>

           

            <ReservationBar />
            <Footer />
        </main>
    );
}
