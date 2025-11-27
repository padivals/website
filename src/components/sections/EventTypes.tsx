"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const EventTypes = () => {
    const swiperRef = useRef<SwiperType>(null);

    const eventTypes = [
        {
            id: 1,
            title: "Engagement and Pre-Wedding Rituals",
            description: "Neat, welcoming spaces suited for meaningful ceremonies held with care and simplicity.",
            image: "/hero-bg.png", // Placeholder
        },
        {
            id: 2,
            title: "Naming Ceremonies",
            description: "A peaceful space for families to celebrate their special milestone in a calm and supportive setting.",
            image: "/hero-bg.png", // Placeholder
        },
        {
            id: 3,
            title: "Small Corporate Meetings",
            description: "Quiet, well-kept rooms ideal for discussions, training sessions, and professional gatherings.",
            image: "/hero-bg.png", // Placeholder
        },
        {
            id: 4,
            title: "Birthday Celebrations",
            description: "Intimate spaces perfect for celebrating another year of life with close friends and family.",
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
                            TYPES OF EVENTS
                            <br />
                            WE CATER TO
                        </span>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-3/4">
                        <p className="text-[#0F2A1D] text-lg font-light leading-relaxed max-w-3xl mb-12">
                            We offer well-kept event spaces so guests can gather, celebrate, and host meaningful moments in a setting that feels comfortable and thoughtfully managed.
                        </p>

                        {/* Carousel */}
                        <div className="relative">
                            {/* Navigation Buttons */}
                            <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 hidden lg:block">
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    className="w-10 h-10 rounded-full bg-white/80 border border-[#A3B19C] flex items-center justify-center text-[#0F2A1D] hover:bg-white transition-colors shadow-sm"
                                    aria-label="Previous"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                            </div>
                            <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 hidden lg:block">
                                <button
                                    onClick={() => swiperRef.current?.slideNext()}
                                    className="w-10 h-10 rounded-full bg-white/80 border border-[#A3B19C] flex items-center justify-center text-[#0F2A1D] hover:bg-white transition-colors shadow-sm"
                                    aria-label="Next"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>

                            <Swiper
                                modules={[Navigation, Pagination]}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                spaceBetween={24}
                                slidesPerView={1.2}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                                className="w-full"
                            >
                                {eventTypes.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="flex flex-col h-full group cursor-pointer">
                                            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                            <h3 className="text-xl font-serif text-[#0F2A1D] mb-3 group-hover:text-[#4A6741] transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm font-light leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventTypes;
