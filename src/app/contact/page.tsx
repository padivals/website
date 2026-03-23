import type { Metadata } from "next";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReservationBar from "@/components/sections/ReservationBar";
import FAQSection from "@/components/sections/FAQSection";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";
import HowToGetHereSection from "@/components/sections/HowToGetHereSection";
import ContactAndLocationSection from "@/components/sections/GetInTouchSection";
import HalfHeroSection from "@/components/sections/HalfHeroSection";

export const metadata: Metadata = {
    title: "Contact Us | The Padival Grand Hotel Puttur",
    description:
        "Get in touch with The Padival Grand Hotel. Visit us at 1st Floor, Mulliangana Complex, Bondel, Mangaluru or call us for reservations and inquiries. We're here to assist you.",
    keywords: [
        "contact Padival Hotel",
        "Padival Grand contact",
        "hotel Puttur contact",
        "Padival Grand location",
        "hotel reservations Puttur",
    ],
    openGraph: {
        title: "Contact Us | The Padival Grand Hotel Puttur",
        description:
            "Get in touch with The Padival Grand Hotel. Visit us at Bondel, Mangaluru or call us for reservations and inquiries.",
        url: "https://thepadivalgrand.com/contact",
    },
    alternates: {
        canonical: "/contact",
    },
};

export default function ContactPage() {
    return (
        <main className="">
            <Header />

            <HalfHeroSection title="Get in Touch" />

            <ContactAndLocationSection />

            {/* <HowToGetHereSection /> */}
            <div className="md:pb-0 pb-6 py-12 bg-white">
                <FAQSection />
            </div>



            <ReservationBar />
            <Footer />
        </main>
    );
}
