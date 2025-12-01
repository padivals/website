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
  variant?: "centered" | "split";

  // Swiper Config
  slidesPerView?: number | "auto";
  breakpoints?: {
    [width: number]: {
      slidesPerView: number | "auto";
      spaceBetween?: number;
    };
  };
  spaceBetween?: number;
  centeredSlides?: boolean;
  loop?: boolean;
  showProgressBar?: boolean;
  showNavigation?: boolean;
  navigationTop?: string;
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
  variant = "centered",
  slidesPerView = 1.2,
  breakpoints,
  spaceBetween = 20,
  centeredSlides = true,
  loop = true,
  showProgressBar = true,
  showNavigation = true,
  navigationTop = "top-1/2",
}: CarouselSectionProps<T>) => {
  const swiperRef = useRef<SwiperType>(null);
  const [progress, setProgress] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleProgress = (swiper: SwiperType) => {
    // If loop is true, the calculation can be tricky.
    // Let's use the logic from MomentsSection which seemed to work for them:
    // const total = swiper.slides.length;
    // const current = swiper.realIndex + 1;
    // const prog = (current / total) * 100;

    const safeTotal = swiper.slides.length || 1;
    const safeCurrent = swiper.realIndex + 1;
    const calculatedProgress = (safeCurrent / safeTotal) * 100;

    setProgress(calculatedProgress);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section
      className={`${backgroundColor} py-20 overflow-hidden ${className}`}
    >
      <div className={`  ${variant === "split" ? "md:ml-0 ml-12" : "mx-auto"}`}>
        {/* Header Section */}
        {variant === "centered" && title && (
          <div className="text-center mb-12">
            {label && (
              <span className="block text-[#4A6741] font-sans tracking-widest uppercase text-sm font-semibold mb-4">
                {label}
              </span>
            )}
            <h2 className="text-3xl md:text-4xl font-serif text-[#0F2A1D] tracking-wide">
              {title}ss
            </h2>
            {description && (
              <p className="mt-4 text-[#012219CC] max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Split Layout Header */}
        {variant === "split" && (
          <>
            {/* Top Divider Line */}
            <div className=" h-px bg-[#165F41] mb-12 opacity-50 mx-6 md:mx-12 lg:mx-20"></div>

            <div className="px-6 md:px-12 lg:px-20">
              <div className="flex flex-col md:px-10 lg:flex-row gap-4 lg:gap-6 mb-6">
                <div className="lg:w-1/6">
                  {label && (
                    <span className="block text-[#4A6741] font-sans tracking-widest uppercase text-sm font-medium">
                      {label}
                    </span>
                  )}
                  {title && (
                    <h2 className="text-3xl font-serif text-[#0F2A1D] mt-1">
                      {title}
                    </h2>
                  )}
                </div>
                <div className="lg:w-3/4">
                  {description && (
                    <p className="text-[#0F2A1D] text-lg font-light leading-relaxed max-w-2xl mb-6">
                      {description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        <div
          className={`relative group ${variant === "centered"
              ? "max-w-[1400px] mx-auto"
              : "lg:pl-[19%] -mt-12"
            }`}
        >
          {/* Navigation Buttons - Absolute positioned for Centered */}
          {/* Navigation Buttons - Absolute positioned for Centered */}
          {showNavigation && (
            <>
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                className={`absolute ${navigationTop} -translate-y-1/2 z-20 w-10 h-10 border border-white/80 flex items-center justify-center transition-all duration-300 opacity-0 ${variant === "centered"
                    ? "left-4 md:left-20 text-white hover:bg-white/10"
                    : "left-4 md:left-10 lg:left-[25.5%] lg:-ml-20 bg-[gray]/70 border-[#0F2A1D]/30 text-[#0F2A1D] hover:text-[white] hover:bg-[#0F2A1D]/80"
                  } ${isBeginning
                    ? "group-hover:opacity-50 cursor-not-allowed"
                    : "group-hover:opacity-100 cursor-pointer"
                  }`}
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
                disabled={isEnd}
                className={`absolute ${navigationTop} -translate-y-1/2 z-20 w-10 h-10 bg-[gray]/30 border border-white/80 flex items-center justify-center transition-all duration-300 opacity-0 ${variant === "centered"
                    ? "right-4 md:right-10 text-white hover:bg-white/10"
                    : "right-4 md:right-0 border-[#0F2A1D]/30 text-[#0F2A1D]  bg-[gray]/70  hover:text-[white] hover:bg-[#0F2A1D]/80"
                  } ${isEnd
                    ? "group-hover:opacity-50 cursor-not-allowed"
                    : "group-hover:opacity-100 cursor-pointer"
                  }`}
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
            </>
          )}
          <div className="w-full flex ">
            <div className="w-full max-w-[1400px] xl:max-w-full">
              <Swiper
                modules={[Navigation, Pagination]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
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
                  <SwiperSlide
                    key={keyExtractor(item, index)}
                    className="transition-all duration-300"
                  >
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
