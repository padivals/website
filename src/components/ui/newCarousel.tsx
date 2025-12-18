"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import clsx from "clsx";

type Variant = "split" | "centered";

interface ImageShowcaseSwiperProps {
  variant: Variant;
  images: {
    src: string;
    alt?: string;
    heading?: string;
    content?: string;
  }[];
  leftLabel: string; // vertical text
  heading: string;
  classname?: string;
}

export default function ImageShowcaseSwiper({
  variant,
  images,
  leftLabel,
  heading,
  classname,
}: ImageShowcaseSwiperProps) {
  const swiperRef = useRef<SwiperType>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className={`w-full ${classname} overflow-hidden`}>
      {variant === "split" && (
        <div className="mb-10 container mx-auto xl-faq-padding px-6 lg:px-0 lg:pl-16">
          <div className="border-t-2 border-[#165F41]/60 mx-auto lg:mx-0"></div>
        </div>
      )}
      {/* SPLIT VARIANT */}
      {variant === "split" && (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-[6rem] px-6 lg:px-0 lg:pl-16 padding-left max-w-none">
          {/* LEFT VERTICAL TEXT */}
          <div className="flex-shrink-0 pt-0 text-center lg:text-left">
            <div className="flex lg:flex-col  gap-4 lg:gap-1 text-[18px] lg:text-[16px] font-semibold text-[#165F41CC] uppercase">
              <p>{leftLabel}</p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 w-full min-w-0">
            {/* HEADING */}
            <p className="text-[16px] lg:text-[16px] font-medium mb-8 lg:mb-14 text-[#012219CC] max-w-xl leading-tight ">
              {heading}
            </p>

            {/* SWIPER CONTAINER */}
            <div className="relative group w-full">
              {/* Custom Navigation Buttons */}
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                className={clsx(
                  "md:-mt-14 absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300",
                  "left-0 bg-[#7d7d7d]/50 border border-[#0F2A1D]/10 text-white backdrop-blur-[2px] hover:bg-[#0F2A1D]/80",
                  "opacity-0 group-hover:opacity-100",
                  isBeginning ? "cursor-not-allowed" : "cursor-pointer"
                )}
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
                className={clsx(
                  "md:-mt-14 absolute top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center transition-all duration-300",
                  "right-0 bg-[#7d7d7d]/50 border border-[#0F2A1D]/10 text-white backdrop-blur-[2px] hover:bg-[#0F2A1D]/80",
                  "opacity-0 group-hover:opacity-100",
                  isEnd ? "cursor-not-allowed" : "cursor-pointer"
                )}
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
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                slidesPerView={1.2}
                spaceBetween={20}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 3.4,
                    spaceBetween: 32,
                  },
                }}
                className="w-full !overflow-visible xl-padding-right px-8"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx} className="h-auto">
                    <div className="flex flex-col gap-4">
                      <div className="relative w-full aspect-[4/5] bg-gray-200">
                        <Image
                          src={img.src}
                          alt={img.alt || ""}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      {(img.heading || img.content) && (
                        <div className="flex flex-col gap-2">
                          {img.heading && (
                            <p className="text-[18px] font-medium text-[#012219CC]">
                              {img.heading}
                            </p>
                          )}
                          {img.content && (
                            <p className="text-[16px] font-medium text-[#012219CC] leading-relaxed">
                              {img.content}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}

      {/* CENTERED VARIANT */}
      {variant === "centered" && (
        <div className="w-full   py-12 pb-22">
          {/* SWIPER CONTAINER */}
          <div className="relative group w-full">
            {/* Custom Navigation Buttons */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={clsx(
                "hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 z-20 w-12 h-12 items-center justify-center transition-all duration-300",
                "bg-[#7d7d7d]/50 border border-[#0F2A1D]/10 text-white backdrop-blur-[2px] hover:bg-[#0F2A1D]/80",
                "opacity-0 group-hover:opacity-100",
                isBeginning ? "cursor-not-allowed" : "cursor-pointer"
              )}
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
              className={clsx(
                "hidden lg:flex absolute top-1/2 -translate-y-1/2 right-0 z-20 w-12 h-12 items-center justify-center transition-all duration-300",
                "bg-[#7d7d7d]/50 border border-[#0F2A1D]/10 text-white backdrop-blur-[2px] hover:bg-[#0F2A1D]/80",
                "opacity-0 group-hover:opacity-100",
                isEnd ? "cursor-not-allowed" : "cursor-pointer"
              )}
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
              modules={[Navigation]}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 1.5,
                  spaceBetween: 32,
                },
              }}
              className="w-full !overflow-visible"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="flex flex-col gap-4">
                    <div className="relative w-full aspect-[14/10] bg-gray-200 overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt || ""}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    {(img.heading || img.content) && (
                      <div className="flex flex-col gap-2">
                        {img.heading && (
                          <p className="text-[18px] font-medium text-[#012219CC]">
                            {img.heading}
                          </p>
                        )}
                        {img.content && (
                          <p className="text-[16px] font-medium text-[#012219CC] leading-relaxed">
                            {img.content}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}
