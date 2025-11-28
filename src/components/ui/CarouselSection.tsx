"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselSectionProps<T> {
    // Data
    items: T[];
    renderItem: (item: T, isActive: boolean) => React.ReactNode;
    keyExtractor: (item: T, index: number) => string | number;

    // Content
    title?: string;
    label?: string;
    description?: string;

    // Styling
    backgroundColor?: string;
    className?: string;

    // Layout
    variant?: 'centered' | 'split';

    // Swiper Config
    slidesPerView?: number | 'auto';
    breakpoints?: any;
    spaceBetween?: number;
    centeredSlides?: boolean;
    loop?: boolean;
    showProgressBar?: boolean;
    showNavigation?: boolean;
}

const CarouselSection = <T,>({
    items,
    renderItem,
    keyExtractor,
    title,
    label,
    description,
    backgroundColor = "bg-[#F9F5EC]",
    className = "",
    variant = 'centered',
    slidesPerView = 1.2,
    breakpoints,
    spaceBetween = 20,
    centeredSlides = true,
    loop = true,
    showProgressBar = true,
    showNavigation = true,
}: CarouselSectionProps<T>) => {
    const swiperRef = useRef<SwiperType>(null);
    const [progress, setProgress] = useState(0);

    const handleProgress = (swiper: SwiperType) => {
        const total = swiper.slides.length - (swiper.params.slidesPerView as number) + 1;
        const current = swiper.realIndex;
        // Simple progress calculation
        const prog = ((current + 1) / swiper.slides.length) * 100;

        // If loop is true, the calculation can be tricky. 
        // Let's use the logic from MomentsSection which seemed to work for them:
        // const total = swiper.slides.length;
        // const current = swiper.realIndex + 1;
        // const prog = (current / total) * 100;

        const safeTotal = swiper.slides.length || 1;
        const safeCurrent = swiper.realIndex + 1;
        const calculatedProgress = (safeCurrent / safeTotal) * 100;

        setProgress(calculatedProgress);
    };

    return (
        <section className={`${backgroundColor} py-20 overflow-hidden ${className}`}>
            <div className={`  ${variant === 'split' ? 'ml-0' : 'mx-auto'}`}>

                {/* Header Section */}
                {variant === 'centered' && title && (
                    <div className="text-center mb-12">
                        {label && (
                            <span className="block text-[#4A6741] font-sans tracking-widest uppercase text-sm font-semibold mb-4">
                                {label}
                            </span>
                        )}
                        <h2 className="text-3xl md:text-4xl font-serif text-[#0F2A1D] tracking-wide">
                            {title}
                        </h2>
                        {description && (
                            <p className="mt-4 text-[#012219CC] max-w-2xl mx-auto">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                {/* Split Layout Header */}
                {variant === 'split' && (
                    <>
                        {/* Top Divider Line */}
                        <div className="w-full h-px bg-[#A3B19C] mb-12 opacity-50 "></div>

                        <div className="flex flex-col px-10 lg:flex-row  mb-8">
                            <div className="lg:w-1/6   ">
                                {label && (
                                    <span className="block text-[#4A6741] font-sans tracking-widest uppercase text-sm font-medium">
                                        {label}
                                    </span>
                                )}
                                {title && (
                                    <h2 className="text-3xl font-serif text-[#0F2A1D] mt-4">
                                        {title}
                                    </h2>
                                )}
                            </div>
                            <div className="lg:w-3/4">
                                {description && (
                                    <p className="text-[#0F2A1D] text-lg font-light leading-relaxed max-w-2xl mb-12">
                                        {description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </>
                )}

                <div className={`relative ${variant === 'centered' ? 'max-w-[1400px] mx-auto' : 'lg:pl-[19%] -mt-12'}`}>
                    {/* Navigation Buttons - Absolute positioned for Centered */}
                    {showNavigation && variant === 'centered' && (
                        <>
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="absolute left-4 md:left-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                                aria-label="Previous"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>

                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                                aria-label="Next"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </>
                    )}
 <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px] ">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={(swiper) => handleProgress(swiper)}
                        spaceBetween={spaceBetween}
                        slidesPerView={slidesPerView}
                        centeredSlides={centeredSlides}
                        loop={loop}
                        breakpoints={breakpoints}
                        className="w-full"
                    >
                        {items.map((item, index) => (
                            <SwiperSlide key={keyExtractor(item, index)} className="transition-all duration-300">
                                {({ isActive }) => renderItem(item, isActive)}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        

                    {/* Custom Progress Bar */}
                    {showProgressBar && (
                        <div className="w-64 h-1 bg-[#E5E5E5] mx-auto mt-12 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#1B4D3E] transition-all duration-300 ease-out"
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CarouselSection;
