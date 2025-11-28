import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import ReservationBar from "@/components/sections/ReservationBar";
import FAQSection from "@/components/sections/FAQSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col relative pb-24 bg-[#F9F5EC]">
            <Header />

            {/* Custom Hero Section (Same as About Us) */}
            <section className="relative h-[60vh] min-h-[500px] flex flex-col justify-center px-6 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/half-hero.png"
                        alt="Privacy Policy Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay for text readability */}
                    {/* <div className="absolute inset-0 bg-black/20"></div> */}
                </div>

                <div className="container mx-auto relative z-10">
                    <div className="flex flex-col gap-2 mb-12">
                        {/* Breadcrumb or label if needed */}
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl text-white mb-8 text-[#F9F2E8]">
                        Get in Touch
                    </h1>

                </div>
            </section>

            {/* Get in Touch Section */}
            <section className="bg-[#F9F5EC] py-20">
                <div className="container mx-auto px-6">
                    {/* Top Divider Line */}


                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Left Content */}

                        <div className="lg:w-1/2">
                            <div className="w-full h-px bg-[#A3B19C] mb-12 opacity-50"></div>
                            <h2 className="text-3xl md:text-4xl font-serif text-[#0F2A1D] mb-4">
                                Get in Touch
                            </h2>
                            <p className="text-[#4A5568] text-lg font-light mb-12">
                                Plan your Padival experience.
                            </p>

                            <div className="grid grid-cols-[100px_1fr] gap-y-8 gap-x-4">
                                <span className="text-[#4A6C58] text-xs font-bold uppercase tracking-wider pt-1">
                                    CALL
                                </span>
                                <a href="tel:+919686804784" className="text-[#0F2A1D] text-lg font-medium underline underline-offset-4 decoration-[#A3B19C]">
                                    +91 96868 04784
                                </a>

                                <span className="text-[#4A6C58] text-xs font-bold uppercase tracking-wider pt-1">
                                    EMAIL
                                </span>
                                <a href="mailto:info@padival-grand-hotel.com" className="text-[#0F2A1D] text-lg font-medium underline underline-offset-4 decoration-[#A3B19C]">
                                    info@padival-grand-hotel.com
                                </a>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
                                <Image
                                    src="/hero-bg.png" // Placeholder for receptionist image
                                    alt="Reception"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Get Here Section */}
            <section className="bg-[#F9F5EC] py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 items-center lg:flex-row-reverse">
                        {/* Right Content (Text) */}
                        <div className="lg:w-1/2">
                            {/* Divider for this section */}
                            <div className="w-full h-px bg-[#A3B19C] mb-8 opacity-50"></div>

                            <h2 className="text-3xl md:text-4xl font-serif text-[#0F2A1D] mb-6">
                                How to Get Here
                            </h2>
                            <p className="text-[#4A5568] text-lg font-light leading-relaxed mb-12">
                                The Padival Grand Hotel sits close to Puttur's central routes, only a few minutes from the main market and local transport points.
                            </p>

                            <div className="grid grid-cols-[100px_1fr] gap-y-8 gap-x-4">
                                <span className="text-[#4A6C58] text-xs font-bold uppercase tracking-wider pt-1">
                                    ADDRESS
                                </span>
                                <div className="flex flex-col items-start">
                                    <p className="text-[#0F2A1D] text-lg font-light leading-relaxed mb-4">
                                        Mahaveer Mall, Main Road, Above Reliance Trendz, Bolwar, Puttur, Karnataka 574201
                                    </p>
                                    <a href="#" className="text-[#4A6C58] text-sm underline underline-offset-4 font-medium hover:text-[#1B4D3E]">
                                        View on Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Left Map */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-sm bg-gray-200">
                                {/* Map Placeholder Image or Iframe */}
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                                    <span className="text-gray-500">Map Placeholder</span>
                                </div>
                                {/* Center Marker Button */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <button className="bg-[#1B4D3E] text-white p-4 rounded-full shadow-lg hover:bg-[#143a2f] transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection />

            <ReservationBar />
            <Footer />
        </main>
    );
}
