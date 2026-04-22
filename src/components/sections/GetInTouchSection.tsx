"use client";

import React from "react";
import Image from "next/image";

export default function ContactAndLocationSection() {
  return (
    <section className="bg-[#F9F5EC] py-12 md:py-20 2xl:py-32">
      {/* Container: 
         - Added 'max-w-screen-2xl' to prevent it from stretching too wide on ultra-wide monitors.
         - '2xl:px-24' adds extra breathing room on large screens.
      */}
      <div className="container mx-auto px-6 md:px-12 lg:px-16 2xl:px-16 xl-faq-padding max-w-screen-2xl">
        
        {/* Main Grid:
           - Stacks on mobile (grid-cols-1)
           - 2 columns on laptop+ (lg:grid-cols-2)
           - Tuned gaps for different screen sizes to avoid massive whitespace on tablets.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 md:gap-y-24 lg:gap-y-32 xl:gap-x-24 2xl:gap-x-40">

          {/* ───────────── TOP LEFT : GET IN TOUCH ───────────── */}
          <div className="flex flex-col justify-center">
            <div className="w-full h-0.5 bg-[#165F41] mb-8 md:mb-12" />

            <h2 className="text-2xl md:text-3xl lg:text-3xl 2xl:text-5xl font-serif font-semibold text-[#0F2A1D] mb-4 2xl:mb-6">
               Get in Touch - Best Hotel in Puttur, The Padival Grand
            </h2>

            <p className="text-[#4A5568] text-base md:text-lg 2xl:text-lg font-medium mb-8 md:mb-12">
              Get in touch with The Padival Grand, a trusted hotel in Puttur Karnataka. Reach out for bookings, directions, or any assistance. We’re here to make your stay smooth and hassle-free. 
            </p>

            {/* Contact Grid Info */}
            <div className="grid grid-cols-[70px_1fr] md:grid-cols-[90px_1fr] gap-y-6 md:gap-y-8 gap-x-2 md:gap-x-4 items-baseline">
              <span className="text-[#4A6C58] text-xs md:text-sm 2xl:text-base font-bold uppercase tracking-wider">
                Call
              </span>
              <a
                target="_blank"
                href="tel:+919686804784"
                className="text-[#0F2A1D] text-md md:text-lg 2xl:text-lg font-medium underline underline-offset-4 decoration-[#A3B19C] hover:text-[#1B4D3E] transition-colors"
              >
                +91 96868 04784
              </a>

              <span className="text-[#4A6C58] text-xs md:text-sm 2xl:text-base font-bold uppercase tracking-wider">
                Email
              </span>
              <a
                target="_blank"
                href="mailto:info@padival-grand-hotel.com"
                className="text-[#0F2A1D] text-md md:text-lg 2xl:text-lg font-medium underline underline-offset-4 decoration-[#A3B19C] hover:text-[#1B4D3E] transition-colors break-all sm:break-normal"
              >
                info@padival-grand-hotel.com
              </a>
            </div>
          </div>

          {/* ───────────── TOP RIGHT : IMAGE ───────────── */}
          <div className="w-full flex items-center">
            {/* Aspect ratio tweaked for mobile (4/3) vs desktop (16/9) */}
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/9] overflow-hidden rounded-sm shadow-sm">
              <Image
                src="/images/get-in-touch.png"
                alt="Reception area of Padival Grand Hotel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* ───────────── BOTTOM LEFT : MAP ───────────── */}
          {/* Order changes visually on desktop if needed, but standard flow works well here */}
          <div className="w-full h-[300px] md:h-[400px] lg:h-full min-h-[300px] overflow-hidden rounded-sm shadow-sm relative">
             {/* Note: Ensure you use the real Google Maps Embed link in production */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945.5954406281046!2d75.19544434381521!3d12.766112565209873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4bd76d5b945e7%3A0x958f1a6d4734c9ce!2sMahaveer%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1776843395472!5m2!1sen!2sin"
              className="w-full h-full border-0 absolute inset-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Padival Grand Hotel Location Map"
            />a
          </div>

          {/* ───────────── BOTTOM RIGHT : HOW TO GET HERE ───────────── */}
          <div className="flex flex-col justify-center">
            <div className="w-full h-0.5 bg-[#165F41] mb-8 md:mb-12" />

            <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-serif font-semibold text-[#0F2A1D] mb-4 2xl:mb-6">
              Easy Directions to <br /> The Padival Grand
            </h2>

            <p className="text-[#4A5568] text-base md:text-lg 2xl:text-xl font-medium leading-relaxed mb-8 max-w-full lg:max-w-[90%]">
              The Padival Grand is conveniently located near Puttur’s main road,
              just minutes from the central market and key transport points,
              making your arrival quick and hassle-free. 
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-[90px_1fr] gap-y-4 gap-x-4">
              <span className="text-[#4A6C58] text-xs md:text-sm 2xl:text-base font-bold uppercase tracking-wider pt-1.5">
                Address
              </span>

              <div>
                <p className="text-[#0F2A1D] text-base md:text-lg 2xl:text-xl font-light leading-relaxed mb-4 max-w-full lg:max-w-[90%]">
                  Mahaveer Mall, Main Road, Above Reliance Trendz, Bolwar, Puttur,
                  Karnataka 574201
                </p>

                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/uVHMKg3wqXF9csrU9" 
                  className="inline-block text-[#4A6C58] text-sm 2xl:text-base underline underline-offset-4 font-medium hover:text-[#1B4D3E] transition-colors"
                >
                  View on Google Maps &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}