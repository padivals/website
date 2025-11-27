"use client";

import React from "react";
import Image from "next/image";

const EventSpaces = () => {
    const spaces = [
        {
            title: "Conference Hall",
            description: "A clean and comfortable indoor venue suited for meetings, family events, and small gatherings held in a calm setting.",
            image: "/hero-bg.png", // Placeholder
        },
        {
            title: "Rooftop Terrace Space",
            description: "An open-air, breezy venue ideal for evening functions and intimate celebrations with a relaxed, homely atmosphere.",
            image: "/hero-bg.png", // Placeholder
        },
    ];

    return (
        <section className="bg-[#F9F5EC] py-20 border-t border-[#A3B19C]/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Label */}
                    <div className="lg:w-1/4">
                        <span className="block text-[#4A6741] font-sans tracking-widest uppercase text-sm font-semibold">
                            OUR SPACES
                        </span>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-3/4">
                        <p className="text-[#0F2A1D] text-lg font-light leading-relaxed max-w-3xl mb-12">
                            You can choose between our indoor conference hall and open-air rooftop space, each offering calm surroundings and steady support for your gatherings.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {spaces.map((space, index) => (
                                <div key={index} className="flex flex-col">
                                    <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                                        <Image
                                            src={space.image}
                                            alt={space.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="text-xl font-serif text-[#0F2A1D] mb-3">
                                        {space.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                                        {space.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventSpaces;
