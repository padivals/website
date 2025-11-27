"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper";

const MomentsSection = () => {
    const swiperRef = useRef<SwiperType>(null);
    const [progress, setProgress] = useState(0);

    const moments = [
        { color: "bg-red-100" },
        { color: "bg-blue-100" },
        { color: "bg-green-100" },
        { color: "bg-yellow-100" },
        { color: "bg-purple-100" },
        { color: "bg-pink-100" },
    ];

    const handleProgress = (swiper: SwiperType) => {
        // Calculate progress based on active index
        const total = swiper.slides.length;
        const current = swiper.realIndex + 1;
        const prog = (current / total) * 100;
        setProgress(prog);
    };

    return (
        <section className="bg-[#F9F5EC] py-20 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-[#0F2A1D] tracking-wide">
                    Discover Moments at The Padival Grand Hotel
                </h2>
            </div>

            <div className="relative max-w-[1400px] mx-auto ">
                {/* Navigation Buttons - Absolute positioned */}
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                    aria-label="Previous"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>

                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                    aria-label="Next"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>

                <Swiper
                    modules={[Navigation, Pagination]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => handleProgress(swiper)}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
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
                    {moments.map((moment, index) => (
                        <SwiperSlide key={index} className="transition-all duration-300">
                            {({ isActive }) => (
                                <div
                                    className={`relative w-full aspect-[3/4] ${moment.color
                                        } overflow-hidden transition-transform duration-500 ${isActive ? "scale-100" : "scale-90 opacity-80"
                                        }`}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                        Moment {index + 1}
                                    </div>
                                    {/* Overlay for non-active slides */}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-black/20"></div>
                                    )}
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Progress Bar */}
                <div className="w-64 h-1 bg-[#E5E5E5] mx-auto mt-12 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#1B4D3E] transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default MomentsSection;
