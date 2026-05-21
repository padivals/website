"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";


interface HeroProps {
  bgImg?: string;
  mobileBgImg?: string;
  videoSrc?: string;
  posterImg?: string;
  children?: React.ReactNode;
}

const Hero = ({ bgImg = "/hero-bg.png", mobileBgImg, videoSrc, posterImg, children }: HeroProps) => {
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
        {/* Desktop Image */}
        <Image
          src={posterImg || bgImg}
          alt="Hero Background"
          fill
          priority
          className={`object-cover object-center ${mobileBgImg ? "hidden md:block" : ""}`}
          quality={85}
        />
        {/* Mobile Image */}
        {mobileBgImg && (
          <Image
            src={mobileBgImg}
            alt="Hero Background Mobile"
            fill
            priority
            className="block md:hidden object-cover object-center"
            quality={85}
          />
        )}
      </div>

      {/* Video overlay — fades in once ready (hidden on mobile) */}
      {videoSrc && (
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out hidden md:block"
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
    </div>
  );
};

export default Hero;
