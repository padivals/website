"use client";

import React from "react";
import SectionHeader from "../ui/SectionHeader";

const EventsSection = () => {
    const events = [
        {
            title: "Leisure",
            imageColor: "bg-gray-200", // Placeholder
        },
        {
            title: "Celebration",
            imageColor: "bg-orange-100", // Placeholder
        },
        {
            title: "Dining",
            imageColor: "bg-yellow-100", // Placeholder
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                {/* Top Divider Line */}
                <div className="w-full h-px bg-[#A3B19C] mb-12 opacity-50"></div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
                    {/* Left Side - Label */}
                    <div className="lg:w-1/3">
                        <SectionHeader label="EVENTS" heading="" />
                    </div>

                    {/* Right Side - Description */}
                    <div className="lg:w-2/3">
                        <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
                            Celebrate life&apos;s special moments or host purposeful corporate
                            gatherings with ease and elegance. Our thoughtfully designed
                            spaces adapt seamlessly to your occasion.
                        </p>
                        <a
                            href="#"
                            className="text-[#1B4D3E] underline underline-offset-4 hover:text-[#143a2f] font-medium"
                        >
                            Discover Our Spaces
                        </a>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            <div
                                className={`w-full aspect-[4/3] ${event.imageColor} mb-6 overflow-hidden relative`}
                            >
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm">
                                    {event.title} Image Placeholder
                                </div>
                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                            <h4 className="text-[#0F2A1D] font-medium text-lg">
                                {event.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
