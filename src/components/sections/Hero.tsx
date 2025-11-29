"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ReservationBar from "./ReservationBar";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    const updateScrollY = () => setScrollY(window.scrollY);
    const updateHeroHeight = () => {
      const heroElement = document.getElementById("hero-section");
      if (heroElement) {
        setHeroHeight(heroElement.offsetHeight);
      }
    };

    window.addEventListener("scroll", updateScrollY);
    window.addEventListener("resize", updateHeroHeight);
    updateHeroHeight();

    return () => {
      window.removeEventListener("scroll", updateScrollY);
      window.removeEventListener("resize", updateHeroHeight);
    };
  }, []);

  // Calculate opacity based on scroll position
  const scrollProgress =
    heroHeight > 0 ? Math.min(scrollY / (heroHeight * 0.6), 1) : 0;
  const reservationBarOpacity = Math.max(1 - scrollProgress, 0);

  return (
    <div
      id="hero-section"
      className="sticky top-0 w-full h-screen min-h-[800px] overflow-hidden -z-10"
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
      <div
        className="absolute bottom-0 left-0 right-0 z-20 transition-all duration-300 ease-out hidden lg:block"
        style={{
          opacity: reservationBarOpacity,
          transform: `translateY(${(1 - reservationBarOpacity) * 20}px)`,
          visibility: reservationBarOpacity > 0 ? "visible" : "hidden",
        }}
      >
        <ReservationBar />
      </div>
    </div>
  );
};

export default Hero;
