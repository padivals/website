"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#052216] text-white pt-16 pb-10 font-serif">

      {/* === TOP SECTION === */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 mb-16">

          {/* Logo + Desc */}
          <div>
            <Image
              src="/logo.svg"
              alt="The Padival Grand Hotel"
              width={280}
              height={100}
              className="mb-6 mx-auto md:mx-0"
            />
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-sm mx-auto md:mx-0">
              The Padival Grand Hotel offers warm, reliable and refined
              hospitality, creating meaningful spaces for celebrations, stays
              and memorable moments.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-[#EAB361] text-lg md:text-xl font-semibold uppercase tracking-wide mb-4">
              Get In Touch
            </h4>

            <div className="flex flex-col space-y-3 text-[#F9F2E8CC] font-sans text-base md:text-lg">
              <p>
                Call:{" "}
                <a href="tel:9686804784" className="underline hover:text-white">
                  96868 04784
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@padival-grand-hotel.com"
                  className="underline hover:text-white"
                >
                  info@padival-grand-hotel.com
                </a>
              </p>
              <a href="#" className="underline hover:text-white w-fit">
                WhatsApp
              </a>
              <a href="#" className="underline hover:text-white w-fit">
                Instagram
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-[#EAB361] text-lg md:text-xl font-semibold uppercase tracking-wide mb-4">
              Address
            </h4>

            <p className="text-[#F9F2E8CC] font-sans text-base md:text-lg leading-relaxed">
              Mahaveer Mall, Main Road,
              <br />
              Above Reliance Trendz, Bolwar, Puttur,
              <br />
              Karnataka 574201
            </p>

            <a href="#" className="underline hover:text-white mt-3 block w-fit">
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* === DIVIDER 1 === */}
      <div className="w-full h-px bg-[#165F41] opacity-70 mb-10"></div>

      {/* === MIDDLE LINKS SECTION === */}
      <div className="px-6 md:px-12 lg:px-20 mb-10">
        <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-6 text-gray-300 text-base md:text-lg font-sans font-medium">
          <a href="#" className="hover:text-[#EAB361]">Bookings</a>
          <a href="#" className="hover:text-[#EAB361]">Dining</a>
          <a href="#" className="hover:text-[#EAB361]">Events</a>
          <a href="#" className="hover:text-[#EAB361]">Leisure</a>
          <a href="#" className="hover:text-[#EAB361]">Contact Us</a>
        </div>
      </div>

      {/* === DIVIDER 2 === */}
      <div className="w-full h-px bg-[#165F41] opacity-70 mb-8"></div>

      {/* === BOTTOM SECTION === */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-4 text-[#165F41] font-sans text-sm md:text-base">

          <p>A Company of Mahaveer Ventures</p>

          <div className="flex justify-center gap-3">
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>

          <p className="text-center md:text-right">
            All Rights Reserved. The Grand Padival Hotel 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
