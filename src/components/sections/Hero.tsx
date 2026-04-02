"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";


interface HeroProps {
  bgImg?: string;
  videoSrc?: string;
  posterImg?: string;
  children?: React.ReactNode;
}

const Hero = ({ bgImg = "/hero-bg.png", videoSrc, posterImg, children }: HeroProps) => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    // If the video is already ready (cached), set immediately
    if (video.readyState >= 3) {
      setIsVideoReady(true);
    }

    video.addEventListener("canplaythrough", handleCanPlay);
    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
    };
  }, [videoSrc]);

  return (
    <div
      id="hero-section"
      className="sticky top-0 w-full h-screen overflow-hidden -z-10"
    >
      {/* Background Image — always visible as fallback/poster */}
      <div className="absolute inset-0">
        <Image
          src={posterImg || bgImg}
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center"
          quality={85}
        />
      </div>

      {/* Video overlay — fades in once ready */}
      {videoSrc && (
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: isVideoReady ? 1 : 0 }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="object-cover w-full h-full"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 h-64 pointer-events-none bg-gradient-to-b from-[#000000a0] via-[#23222217]  to-transparent"></div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end items-start px-6 md:px-16 py-28 pointer-events-none">
        <div className="pointer-events-auto w-full">
            {children}
        </div>
      </div>
      {/* Content Container */}
      {/* <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 drop-shadow-lg">
          The Padival Grand
        </h1>
        <p className="text-lg md:text-2xl font-light tracking-widest uppercase drop-shadow-md">
          Luxury Redefined in Puttur
        </p>
      </div> */}

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
