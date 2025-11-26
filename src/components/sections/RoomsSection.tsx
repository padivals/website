"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Button from "../ui/Button";

const RoomsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const rooms = [
        {
            id: 1,
            title: "The Comfort Room",
            description:
                "A well-appointed split AC room designed for a calm, restful stay. It offers essential comforts, thoughtful touches and a welcoming atmosphere that makes every guest feel at ease.",
            imageColor: "bg-gray-300",
        },
        {
            id: 2,
            title: "The Premium Stay Room",
            description:
                "Elevate your experience with our Premium Stay Room, featuring enhanced amenities, extra space, and stylish decor for a truly relaxing retreat.",
            imageColor: "bg-gray-400",
        },
        {
            id: 3,
            title: "The Family Suite",
            description:
                "Spacious and inviting, the Family Suite is perfect for creating lasting memories together, offering separate living areas and all the comforts of home.",
            imageColor: "bg-gray-500",
        },
        {
            id: 4,
            title: "The Executive Retreat",
            description:
                "Designed for the discerning traveler, the Executive Retreat offers a sophisticated blend of luxury, privacy, and modern convenience for work or leisure.",
            imageColor: "bg-gray-600",
        },
    ];

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex);
    };

    const handleDotClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    };

    return (
        <section className="relative h-screen bg-[#F9F5EC] flex flex-col">
            {/* Static Header Overlay */}
            <div className="absolute top-0 left-0 w-full z-20 pt-20 px-6 md:px-12">
                <div className="container mx-auto">
                    {/* Top Divider */}
                    <div className="w-full h-px bg-white/30 mb-12"></div>

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 text-white">
                        {/* Left Label */}
                        <div className="lg:w-1/4">
                            <span className="block font-sans tracking-widest uppercase text-sm font-semibold">
                                OUR ROOMS
                            </span>
                        </div>

                        {/* Middle Description */}
                        <div className="lg:w-2/4">
                            <p className="text-lg md:text-xl font-light leading-relaxed mb-6 max-w-2xl">
                                {rooms[activeIndex].description}
                            </p>
                            <a
                                href="#"
                                className="inline-block border-b border-white pb-1 text-sm uppercase tracking-wider hover:text-gray-200 transition-colors"
                            >
                                Learn More
                            </a>
                        </div>

                        {/* Right Button */}
                        <div className="lg:w-1/4 flex justify-end">
                            <Button
                                variant="primary"
                                className="bg-[#1B4D3E] hover:bg-[#143a2f] text-white px-8 py-3 rounded-none"
                            >
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Container */}
            <div className="flex-1 relative h-full">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={handleSlideChange}
                    className="h-full w-full"
                >
                    {rooms.map((room) => (
                        <SwiperSlide key={room.id}>
                            <div className={`w-full h-full ${room.imageColor} relative`}>
                                <div className="absolute inset-0 bg-black/30"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Bottom Navigation Bar Overlay */}
            <div className="absolute bottom-0 left-0 w-full z-20 pb-12 px-6 md:px-12">
                <div className="container mx-auto">
                    {/* Desktop: Room Names */}
                    <div className="hidden md:flex w-full justify-between gap-8">
                        {rooms.map((room, index) => (
                            <button
                                key={room.id}
                                onClick={() => handleDotClick(index)}
                                className="flex-1 text-left py-6 relative group"
                            >
                                {/* Progress Track */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-white/20"></div>

                                {/* Progress Fill (Timer Animation) */}
                                <div
                                    className={`absolute top-0 left-0 h-[2px] bg-white ${activeIndex === index
                                        ? "w-full transition-all duration-[5000ms] ease-linear"
                                        : index < activeIndex
                                            ? "w-full transition-none"
                                            : "w-0 transition-none"
                                        }`}
                                ></div>

                                {/* Hover Line (for non-active items) */}
                                <div
                                    className={`absolute top-0 left-0 h-[2px] bg-white/50 transition-all duration-300 ${activeIndex !== index ? "w-0 group-hover:w-full" : "w-0"
                                        }`}
                                ></div>

                                <span
                                    className={`text-lg font-light tracking-wide block mt-4 transition-colors duration-300 ${activeIndex === index ? "text-white" : "text-white/60"
                                        }`}
                                >
                                    {room.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile: Dots */}
                    <div className="flex md:hidden justify-center gap-3 mt-4">
                        {rooms.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? "bg-white" : "bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomsSection;
