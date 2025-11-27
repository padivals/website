"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeader from "../ui/SectionHeader";

const NearbyAttractions = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    const attractions = [
        {
            id: 1,
            name: "Puttur Shree Mahalingeshwara Temple",
            description:
                "A historic Shiva temple known for its serene ambience and deep cultural roots.",
            imageColor: "bg-gray-300",
        },
        {
            id: 2,
            name: "Shivarama Karantha Balavana",
            description:
                "A peaceful cultural park with a museum, greenery and quiet spaces to unwind.",
            imageColor: "bg-gray-400",
        },
        {
            id: 3,
            name: "Beeramale Hill",
            description:
                "A scenic hilltop offering panoramic views of Puttur's landscapes.",
            imageColor: "bg-gray-500",
        },
        {
            id: 4,
            name: "Bendru Theertha",
            description: "A natural hot water spring located in a serene environment.",
            imageColor: "bg-gray-600",
        },
    ];

    return (
        <section className="bg-white py-20 overflow-hidden">
            <div className="container ml-32 px-6">
                {/* Top Divider Line */}
                <div className="w-full h-px bg-[#A3B19C] mb-12 opacity-50"></div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Column: Label */}
                    <div className="lg:w-1/4">
                        <span className="block text-[#4A6741] font-sans tracking-widest uppercase text-sm font-semibold">
                            WHAT'S NEARBY
                        </span>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-3/4">
                        <p className="text-[#0F2A1D] text-lg font-light leading-relaxed max-w-2xl mb-12">
                            You can book rooms, event halls and restaurant tables, each
                            supported by attentive service and well-prepared spaces.
                        </p>

                        {/* Slider */}
                        <Swiper
                            modules={[Navigation]}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            spaceBetween={30}
                            slidesPerView={1.2}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2.2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="w-full"
                        >
                            {attractions.map((attraction) => (
                                <SwiperSlide key={attraction.id}>
                                    <div className="group cursor-pointer">
                                        <div
                                            className={`w-full aspect-[3/4] ${attraction.imageColor} mb-6 relative overflow-hidden`}
                                        >
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                        </div>
                                        <h3 className="text-xl font-serif text-[#0F2A1D] mb-3 group-hover:text-[#D4AF37] transition-colors">
                                            {attraction.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm font-light leading-relaxed">
                                            {attraction.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NearbyAttractions;
