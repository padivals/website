"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Button from "../ui/Button";

import { rooms } from "@/data/rooms";

const RoomsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSlideChange = (swiper: SwiperType) => {
        setActiveIndex(swiper.realIndex);
    };

    const handleDotClick = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index);
        }
    };

    return (
        <section className="relative h-screen flex flex-col">
            {/* Dark Overlay for better text readability if needed, matching the photo's look */}
            {/* <div className="absolute inset-0 bg-black/20 z-0"></div> */}

            {/* Static Header Overlay */}
            <div className="absolute top-0 left-0 w-full z-20 pt-24 lg:pt-20 px-6 md:px-12 lg:px-16">
                <div className="container mx-auto">
                    {/* Top Divider */}
                    <div className="w-full h-px bg-white/50 mb-8 lg:mb-12"></div>

                    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 text-white">
                        {/* Left Label */}
                        <div className="lg:w-1/6">
                            <span className="block font-sans tracking-widest uppercase text-xs lg:text-sm font-semibold">
                                OUR ROOMS
                            </span>
                        </div>

                        {/* Middle Description */}
                        <div className="lg:w-1/2">
                            <p className="text-base lg:text-xl font-light leading-relaxed mb-6 max-w-3xl">
                                {rooms[activeIndex].description}
                            </p>
                            <a
                                href={`/rooms/${rooms[activeIndex].slug}`}
                                className="inline-block border-b border-white pb-1 text-xs lg:text-sm uppercase tracking-wider hover:text-gray-200 transition-colors"
                            >
                                Learn More
                            </a>
                        </div>

                        {/* Right Button */}
                        <div className="lg:w-1/6 flex justify-end">
                            <Button
                                variant="primary"
                                className="bg-[#1B4D3E] hover:bg-[#143a2f] text-white px-6 py-3 rounded-none uppercase text-xs lg:text-sm tracking-wider"
                            >
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider Container - Just for content transitions if needed, but bg is static now */}
            <div className="flex-1 relative h-full z-10">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    observer={true}
                    observeParents={true}
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
                            <div className="w-full h-full relative">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${room.heroImage})` }}
                                >
                                    {/* Optional overlay for text readability */}
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Bottom Navigation Bar Overlay */}
            <div className="absolute bottom-0 left-0 w-full z-20 pb-8 lg:pb-12 px-6 md:px-12 lg:px-16">
                <style>
                    {`
                    @keyframes grow {
                        from { width: 0%; }
                        to { width: 100%; }
                    }
                    `}
                </style>
                <div className="container mx-auto">
                    {/* Desktop: Room Names */}
                    <div className="hidden lg:flex w-full justify-between gap-8">
                        {rooms.map((room, index) => (
                            <button
                                key={room.id}
                                onClick={() => handleDotClick(index)}
                                className="flex-1 text-left py-4 relative group"
                            >
                                {/* Progress Track */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-white/30"></div>

                                {/* Progress Fill (Timer Animation) */}
                                <div
                                    className="absolute top-0 left-0 h-[2px] bg-white"
                                    style={{
                                        width: index < activeIndex ? "100%" : "0%",
                                        animation: activeIndex === index && mounted ? "grow 5000ms linear forwards" : "none"
                                    }}
                                ></div>

                                {/* Hover Line (for non-active items) */}
                                <div
                                    className={`absolute top-0 left-0 h-[2px] bg-white/50 transition-all duration-300 ${activeIndex !== index ? "w-0 group-hover:w-full" : "w-0"
                                        }`}
                                ></div>

                                <span
                                    className={`text-sm font-light tracking-wide block mt-4 transition-colors duration-300 ${activeIndex === index ? "text-white" : "text-white/60"
                                        }`}
                                >
                                    {room.title}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile/Tablet: Dots */}
                    <div className="flex lg:hidden justify-center gap-3 mt-4">
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
