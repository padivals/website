"use client";

import React from "react";
import Image from "next/image";

export default function ContactAndLocationSection() {
  return (
    <section className="bg-[#F9F5EC] md:py-20">
      <div className="container mx-auto px-6 md:px-16 xl-faq-padding">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-y-40 gap-y-20 gap-x-20">

          {/* ───────────── TOP LEFT : GET IN TOUCH ───────────── */}
          <div className="">
            <div className="w-full h-0.5 bg-[#165F41] mb-12" />

            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0F2A1D] mb-4">
              Get in Touch
            </h2>

            <p className="text-[#4A5568] md:text-xl text-md font-medium mb-12">
              Plan your Padival experience.
            </p>

            <div className="grid grid-cols-[80px_1fr] gap-y-8 gap-x-4 items-baseline">
              <span className="text-[#4A6C58] text-sm md:text-md font-bold uppercase tracking-wider">
                Call
              </span>
              <a
              target="_blank"
                href="tel:+919686804784"
                className="text-[#0F2A1D] md:text-xl text-md font-medium underline underline-offset-4 decoration-[#A3B19C] hover:text-[#1B4D3E]"
              >
                +91 96868 04784
              </a>

              <span className="text-[#4A6C58] text-sm md:text-md font-bold uppercase tracking-wider">
                Email
              </span>
              <a
              target="_blank"
                href="mailto:info@padival-grand-hotel.com"
                className="text-[#0F2A1D] md:text-xl text-md font-medium underline underline-offset-4 decoration-[#A3B19C] hover:text-[#1B4D3E]"
              >
                info@padival-grand-hotel.com
              </a>
            </div>
          </div>

          {/* ───────────── TOP RIGHT : IMAGE ───────────── */}
          <div className="w-full">
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src="/images/get-in-touch.png"
                alt="Reception"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ───────────── BOTTOM LEFT : MAP ───────────── */}
          <div className="w-full h-[280px] sm:h-[340px] lg:h-[320px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.193579366762!2d75.19388537587785!3d12.765937219352285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4bd11b23b38bf%3A0x29973ec88814e99b!2sMahaveer%20Ventures%20Hotel%20and%20Resort%20-%20The%20Padival%20Grand!5e0!3m2!1sen!2sin!4v1766124232524!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* ───────────── BOTTOM RIGHT : HOW TO GET HERE ───────────── */}
          <div>
            <div className="w-full h-0.5 bg-[#165F41] mb-12" />

            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0F2A1D] mb-4">
              How to Get Here
            </h2>

            <p className="text-[#4A5568] text-base sm:text-lg font-medium leading-relaxed mb-8 max-w-[90%]">
              The Padival Grand Hotel sits close to Puttur&apos;s central routes,
              only a few minutes from the main market and local transport points.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-y-6 gap-x-4">
              <span className="text-[#4A6C58] text-sm font-bold uppercase tracking-wider pt-1">
                Address
              </span>

              <div>
                <p className="text-[#0F2A1D] text-base sm:text-lg font-light leading-relaxed mb-4 max-w-[90%]">
                  Mahaveer Mall, Main Road, Above Reliance Trendz, Bolwar, Puttur,
                  Karnataka 574201
                </p>

                <a
                target="_blank"
                  href="https://maps.app.goo.gl/t6pdJoL1R8tTRo8f9"
                  className="text-[#4A6C58] text-sm underline underline-offset-4 font-medium hover:text-[#1B4D3E]"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
