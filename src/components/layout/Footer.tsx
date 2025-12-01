"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    // 1. Removed any padding from the main footer so lines touch edges
    <footer className="bg-[#052216] text-white pt-20 pb-10 font-serif">
      {/* === TOP SECTION === */}
      {/* Open a container just for the top content */}
      <div className="mx-6 md:mx-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 mb-16">
          {/* Logo & Description */}
          <div className="flex flex-col">
            <div className="flex flex-col items-start mb-6">
              <div className="flex flex-col items-center md:items-start">
                <Image
                  src="/logo.svg"
                  alt="The Padival Grand Hotel"
                  width={370}
                  height={100}
                  className="mb-6"
                />
              </div>
            </div>
            <p className="text-gray-400 text-base leading-relaxed font-sans font-light max-w-sm">
              The Padival Grand Hotel offers warm, reliable and refined
              hospitality, creating meaningful spaces for celebrations, stays
              and memorable moments.
            </p>
          </div>

          {/* Get In Touch */}
          <div className="flex flex-col">
            <h4 className="text-[#EAB361] text-xl font-semibold uppercase tracking-wider mb-6">
              Get In Touch
            </h4>
            <div className="flex flex-col space-y-4 text-[#F9F2E8CC] font-sans font-semibold text-xl">
              <p>
                Call:{" "}
                <a
                  href="tel:9686804784"
                  className="underline hover:text-white transition-colors"
                >
                  96868 04784
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@padival-grand-hotel.com"
                  className="underline hover:text-white transition-colors"
                >
                  info@padival-grand-hotel.com
                </a>
              </p>
              <a
                href="#"
                className="underline hover:text-white transition-colors w-fit"
              >
                WhatsApp
              </a>
              <a
                href="#"
                className="underline hover:text-white transition-colors w-fit"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <h4 className="text-[#EAB361] text-xl font-semibold uppercase tracking-wider mb-6">
              Address
            </h4>
            <div className="flex flex-col space-y-4 text-[#F9F2E8CC] font-sans font-semibold text-xl">
              <p className="leading-relaxed">
                Mahaveer Mall, Main Road,
                <br />
                Above Reliance Trendz, Bolwar, Puttur,
                <br />
                Karnataka 574201
              </p>
              <a
                href="#"
                className="underline hover:text-white mt-2 w-fit transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* CLose container here */}

      {/* === DIVIDER 1 === */}
      {/* This is now OUTSIDE the container, so it goes full width */}
      <div className="h-px bg-[#165F41] mb-10 mx-6 md:mx-15"></div>

      {/* === MIDDLE SECTION (LINKS) === */}
      <div className="mx-6 md:mx-30 px-6">
        <div className="flex flex-wrap justify-between items-center mb-10 text-gray-300 text-lg font-sans font-semibold">
          <a href="#" className="hover:text-[#EAB361] transition-colors">
            Bookings
          </a>
          <a href="#" className="hover:text-[#EAB361] transition-colors">
            Dining
          </a>
          <a href="#" className="hover:text-[#EAB361] transition-colors">
            Events
          </a>
          <a href="#" className="hover:text-[#EAB361] transition-colors">
            Leisure
          </a>
          <a href="#" className="hover:text-[#EAB361] transition-colors">
            Contact Us
          </a>
        </div>
      </div>

      {/* === DIVIDER 2 === */}
      {/* Full width again */}
      <div className="h-px bg-[#165F41] mb-8 mx-6 md:mx-15"></div>

      {/* === BOTTOM SECTION === */}
      <div className="mx-6 md:mx-15">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-base text-[#165F41] font-sans font-light gap-4">
          {/* Left Column */}
          <p className="text-center md:text-left ml-10">
            A Company of Mahaveer Ventures
          </p>

          {/* Center Column - "Privacy Policy" aligns with "Events" above */}
          <div className="flex justify-center gap-4">
            <a href="/privacy-policy">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
          </div>

          {/* Right Column */}
          <p className="text-center md:text-right mx-10">
            All Rights Reserved. The Grand Padival Hotel 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
