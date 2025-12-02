"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {

  return (
    <div
      id="hero-section"
      className="sticky top-0 w-full h-screen overflow-hidden -z-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Hotel Lobby"
          fill
          priority
          className="object-cover object-[center_25%]"
          quality={100}
        />
      </div>
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 h-64 pointer-events-none bg-gradient-to-b from-[#000000a0] via-[#23222217]  to-transparent"></div>
      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 drop-shadow-lg">
          The Padival Grand
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-widest uppercase drop-shadow-md">
          Luxury Redefined in Puttur
        </p>
      </div>

      {/* Reservation Bar - Positioned at bottom of hero */}
      {/* <div
        className="absolute bottom-0 left-0 right-0 z-20 transition-all duration-300 ease-out hidden lg:block"
        style={{
          opacity: reservationBarOpacity,
          transform: `translateY(${(1 - reservationBarOpacity) * 20}px)`,
          visibility: reservationBarOpacity > 0 ? "visible" : "hidden",
        }}
      >
        <ReservationBar />
      </div> */}
    </div>
  );
};

export default Hero;
