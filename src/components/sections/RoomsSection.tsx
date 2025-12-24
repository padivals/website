"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Button from "../ui/Button";

import { rooms } from "@/data/rooms";
import { useBookingModal } from "../providers/BookingModalContext";
import Typography from "../ui/Typography";

const RoomsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openModal } = useBookingModal();
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleDotClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  return (
   <section className="relative h-screen flex flex-col bg-[#f6f6f6]">
      {/* Dark Overlay for better text readability if needed, matching the photo's look */}
      <div className="absolute top-0 h-84  inset-0 bg-linear-to-b from-black/70 to-transparent z-100 pointer-events-none  "></div>




      {/* Static Header Overlay */}
     <div className="absolute top-0 left-0 w-full z-20 pt-20 sm:pt-24 lg:pt-20 px-6 md:px-12 lg:px-16 rooms-responsive-padding">

        <div className="container mx-auto  ">
          {/* Top Divider */}
          <div className="w-full h-px bg-[#FFFFFF] mb-8 lg:mb-12"></div>

          <div className="flex flex-col lg:flex-row justify-between text-white text-start lg:text-left gap-8 lg:gap-28 z-100000000000">
            {/* OUR ROOMS Label */}
            <div className="flex-shrink-0">
              <Typography variant="description" className="block font-sans uppercase text-xl text-white lg:text-xl font-semibold whitespace-nowrap">
                OUR ROOMS
              </Typography>
            </div>

            {/* Description */}
            <div className="flex-1">
              <Typography variant="description" className="text-lg lg:text-xl font-medium text-white leading-relaxed mb-4 lg:mb-6">
                {rooms[activeIndex].description}
              </Typography>
              <a
                href={`/rooms/${rooms[activeIndex].slug}`}
                className="inline-block border-b border-white pb-1 text-sm lg:text-lg font-medium uppercase tracking-wider hover:text-gray-200 transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Book Now Button */}
            <div className="flex-shrink-0"> 
              <Button
                variant="primary"
                className=" z-999999999999999999 bg-[#165F41] hover:bg-[#143a2f] text-[#F9F2E8] px-[31px] py-[18px] rounded-none uppercase text-sm lg:text-sm tracking-wider"
                onClick={openModal}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
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
        <div className="container mx-auto ">
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

                <div
                  className="absolute top-0 left-0 h-[2px] bg-white"
                  style={{
                    width: index < activeIndex ? "100%" : "0%",
                    animation:
                      activeIndex === index
                        ? "grow 5000ms linear forwards"
                        : "none",
                  }}
                ></div>

                {/* Hover Line (for non-active items) */}
                <div
                  className={`absolute top-0 left-0 h-[2px] bg-white/50 transition-all duration-300 ${
                    activeIndex !== index ? "w-0 group-hover:w-full" : "w-0"
                  }`}
                ></div>

                <span
                  className={`text-xl font-light tracking-wide block mt-4 transition-colors duration-300 ${
                    activeIndex === index ? "text-white" : "text-white"
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
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? "bg-white" : "bg-white/40"
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
