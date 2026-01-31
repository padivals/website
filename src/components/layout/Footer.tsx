"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";



const Footer = () => {
  return (
    <footer className="bg-[#052216] text-white pt-16 pb-10 font-serif ">
 {/* <style>{`
        @media (min-width: 2100px) {
          .xl-faq-padding {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
        }
      `}</style> */}
      <div className="container mx-auto md:px-16 px-6 xl-faq-padding">
      {/* === TOP SECTION === */}
      <div className="">
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
            <p className="text-[#F9F2E8CC] text-sm md:text-base md:text-start text-center leading-relaxed font-sans max-w-sm mx-auto md:mx-0">
              The Padival Grand Hotel offers warm, reliable and refined
              hospitality, creating meaningful spaces for celebrations, stays
              and memorable moments.
            </p>
          </div>
<div className="w-full h-px bg-[#165F41] opacity-70 md:hidden"></div>

          {/* Get In Touch */}
          <div>
            <p className="text-[#EAB361] text-lg md:text-xl font-semibold font-sans uppercase tracking-wide mb-4">
              Get In Touch
            </p>

            <div className="flex flex-col space-y-3 text-[#F9F2E8] font-sans text-base md:text-lg">
              <p>
                Call:{" "}
                <a href="tel:9686804784" className="border-b hover:text-[#aa8616] transition-all duration-200">
                  96868 04784
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@padival-grand-hotel.com"
                  className="border-b hover:text-[#aa8616] transition-all duration-200"
                >
                  info@padival-grand-hotel.com
                </a>
              </p>
              <a href="#" className="border-b hover:text-[#aa8616] transition-all duration-200 w-fit">
                WhatsApp
              </a>
              <Link href="https://www.instagram.com/padivalspalara" target="_blank" className="border-b hover:text-[#aa8616] transition-all duration-200 w-fit">
                Instagram
              </Link>
            </div>
          </div>
          {/* Address */}
          <div>
            <p className="text-[#EAB361] text-lg md:text-xl font-semibold font-sans uppercase tracking-wide mb-4">
              Address
            </p >

            <p className="text-[#F9F2E8] font-sans text-base md:text-lg leading-relaxed">
              Mahaveer Mall, Main Road,
              <br />
              Above Reliance Trendz, Bolwar, Puttur,
              <br />
              Karnataka 574201
            </p>

            <a target="_blank" href="https://maps.app.goo.gl/t6pdJoL1R8tTRo8f9" className=" border-b font-sans text-[#F9F2E8] hover:text-[#aa8616] transition-all duration-200 mt-3  block w-fit">
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* === DIVIDER 1 === */}
      <div className="w-full h-px bg-[#165F41] opacity-70 mb-10"></div>

      {/* === MIDDLE LINKS SECTION === */}
      <div className="px-0c md:px-12 lg:px-38 mb-10">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4 md:gap-6 text-[#F9F2E8] text-base md:text-lg font-sans font-medium">
          <Link href="/dining" className="hover:text-[#EAB361]">Dine with us</Link>
          <Link href="/events" className="hover:text-[#EAB361]">Celeberate with us</Link>
          <Link href="/rooms" className="hover:text-[#EAB361]">Stay with us</Link>
          <Link href="/contact" className="hover:text-[#EAB361]">Contact Us</Link>
        </div>
      </div>

      {/* === DIVIDER 2 === */}
      <div className="w-full h-px bg-[#165F41] opacity-70 mb-8"></div>

      {/* === BOTTOM SECTION === */}
      <div className="px-0 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-4 text-[#165F41] font-sans text-sm md:text-sm">

          <p>A Company of unit</p>

          <div className="flex justify-center gap-3">
            <a href="/privacy-policy" className="hover:text-[#aa8616] transition-all duration-200">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-conditions" className="hover:text-[#aa8616] transition-all duration-200">Terms of Service</a>
          </div>

          <p className="text-center md:text-right whitespace-nowrap">
            All Rights Reserved. The Grand Padival Hotel 2025
          </p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
