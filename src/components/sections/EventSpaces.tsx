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
        <section className=" py-20 bg-white">
            <div className="container mx-auto px-6">

                <div className="w-full h-px bg-[#165F41] mb-12  "></div>
            </div>
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
                                    <div className="relative w-full aspect-[3.5/3.5] overflow-hidden mb-6">
                                        <Image
                                            src={space.image}
                                            alt={space.title}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <p className="text-xl font-medium text-[#012219CC] mb-3">
                                        {space.title}
                                    </p>
                                    <p className="text-[#012219CC] text-sm font-medium leading-relaxed">
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
