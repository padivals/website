"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import SectionHeader from "../ui/SectionHeader";

const TestimonialsSection = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const testimonials = [
        {
            id: 1,
            text: "This is a hidden jem in Puttur. Even though I am originally from puttur, I did not know about this place. This is the best place to stay in Puttur. It is in central location very near to ಮಹಾಲಿಂಗೇಶ್ವರ temple. It has got ample parking space. Rooms are maintained spotlessly clean...",
            author: "Shagrithaya B S",
        },
        {
            id: 2,
            text: "The Hotel is centrally located. The rooms are neat & well furnished. Lighting & AC were also Sufficient parking space.Courtesies staff. Res ground floor serves good veg food. Overall we comfortable stay...",
            author: "Nataraja Sundarappa",
        },
        {
            id: 3,
            text: "Excellent hospitality and very clean rooms. The staff went above and beyond to make our stay comfortable. The food was delicious and authentic. Will definitely visit again.",
            author: "Rahul Menon",
        },
    ];

    const handleProgress = (swiper: SwiperType) => {
        const total = swiper.slides.length;
        const current = swiper.realIndex + 1;
        const prog = (current / total) * 100;
        setProgress(prog);
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section className="bg-[#F9F5EC] py-20">
            <div className="container mx-auto px-6">
                {/* Top Divider Line */}
                <div className="w-full h-px bg-[#A3B19C] mb-12 opacity-50"></div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16">
                    {/* Left Side - Header */}
                    <div className="lg:w-1/3">
                        <span className="block text-[#4A6741] font-sans tracking-widest uppercase text-sm font-semibold mb-4">
                            REVIEWS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0F2A1D] leading-tight">
                            What Our Guests Appreciate Most
                        </h2>
                    </div>

                    {/* Right Side - Slider */}
                    <div className="lg:w-2/3">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                            loop={true}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                handleProgress(swiper);
                            }}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.realIndex);
                                handleProgress(swiper);
                            }}
                            className="w-full"
                        >
                            {testimonials.map((testimonial) => (
                                <SwiperSlide key={testimonial.id} className="h-auto">
                                    <div className="bg-[#F9F5EC] p-8 border border-[#A3B19C] h-full flex flex-col justify-between min-h-[320px]">
                                        <p className="text-[#0F2A1D] text-base md:text-lg font-medium leading-relaxed mb-8">
                                            “{testimonial.text}”
                                        </p>
                                        <div>
                                            <span className="text-gray-600 text-sm font-light block mt-auto">
                                                - {testimonial.author}
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* Bottom Section: Rating & Navigation */}
                <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                    {/* Left: Rating */}
                    <div>
                        <h3 className="text-[#0F2A1D] text-2xl font-bold mb-1">
                            4.3 Stars
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                            Average Rating by Past Guests
                        </p>
                        <div className="flex text-[#1B4D3E] text-xl gap-1">
                            {"★".repeat(4)}
                            <div className="relative inline-block text-gray-300">
                                ★<span className="absolute top-0 left-0 overflow-hidden w-[30%] text-[#1B4D3E]">★</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Progress & Arrows */}
                    <div className="flex items-center gap-6 w-full md:w-auto">
                        {/* Progress Bar */}
                        <div className="w-full md:w-48 h-[2px] bg-[#E5E5E5] relative">
                            <div
                                className="absolute top-0 left-0 h-full bg-[#1B4D3E] transition-all duration-300"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>

                        {/* Arrows */}
                        <div className="flex gap-4 text-[#1B4D3E]">
                            <button
                                onClick={handlePrev}
                                className="hover:text-[#D4AF37] transition-colors text-xl"
                            >
                                &lt;
                            </button>
                            <button
                                onClick={handleNext}
                                className="hover:text-[#D4AF37] transition-colors text-xl"
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
