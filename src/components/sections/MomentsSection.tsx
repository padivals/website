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
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const moments = [
        {
            id: 1,
            video: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
            poster: "/hero-bg.png", // Placeholder poster
        },
        {
            id: 2,
            video: "https://www.w3schools.com/html/movie.mp4", // Placeholder video
            poster: "/hero-bg.png",
        },
        {
            id: 3,
            video: "https://www.w3schools.com/html/mov_bbb.mp4",
            poster: "/hero-bg.png",
        },
        {
            id: 4,
            video: "https://www.w3schools.com/html/movie.mp4",
            poster: "/hero-bg.png",
        },
        {
            id: 5,
            video: "https://www.w3schools.com/html/mov_bbb.mp4",
            poster: "/hero-bg.png",
        },
    ];

    const handleProgress = (swiper: SwiperType) => {
        const total = swiper.slides.length;
        const current = swiper.realIndex + 1;
        const prog = (current / total) * 100;
        setProgress(prog);
    };

    const handleSlideChange = (swiper: SwiperType) => {
        handleProgress(swiper);

        // Pause all videos
        videoRefs.current.forEach((video) => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });

        // Play active video
        const activeIndex = swiper.realIndex;
        const activeVideo = videoRefs.current[activeIndex];
        if (activeVideo) {
            activeVideo.play().catch((e) => console.log("Autoplay prevented:", e));
        }
    };

    return (
        <section className="bg-[#F9F5EC] py-20 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif text-[#0F2A1D] tracking-wide">
                    Discover Moments at The Padival Grand Hotel
                </h2>
            </div>

            <div className="relative max-w-[1400px] mx-auto px-4 md:px-12">
                <Swiper
                    modules={[Navigation, Pagination]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={handleSlideChange}
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
                        <SwiperSlide key={moment.id} className="transition-all duration-300">
                            {({ isActive }) => (
                                <div
                                    className={`relative w-full aspect-[9/16] bg-black overflow-hidden transition-transform duration-500 ${isActive ? "scale-100 shadow-2xl" : "scale-90 opacity-60"
                                        }`}
                                >
                                    <video
                                        ref={(el) => {
                                            videoRefs.current[index] = el;
                                        }}
                                        src={moment.video}
                                        poster={moment.poster}
                                        className="w-full h-full object-cover"
                                        muted
                                        loop
                                        playsInline
                                    />

                                    {/* Overlay Content for Active Slide */}
                                    {isActive && (
                                        <>
                                            {/* Center Play Icon/Logo */}
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                {/* Assuming 'K' logo is a placeholder, using a simple circle for now */}
                                                {/* <div className="w-16 h-16 rounded-full bg-[#0099FF] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          K
                        </div> */}
                                            </div>

                                            {/* Bottom Right Pause Icon */}
                                            <div className="absolute bottom-4 right-4 text-white/80">
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
                                                        d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                                                    />
                                                </svg>
                                            </div>
                                        </>
                                    )}

                                    {/* Navigation Arrows Overlay (Only visible on active slide contextually in design, 
                      but typically arrows are outside or on edges. 
                      The design shows arrows ON the previous/next slides. 
                      Let's implement that logic.) */}
                                </div>
                            )}
                        </SwiperSlide>
                    ))}

                    {/* Custom Navigation Arrows positioned over the adjacent slides */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute left-[10%] top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors hidden md:flex"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute right-[10%] top-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors hidden md:flex"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </button>
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
