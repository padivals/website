"use client";

import React from "react";

const EventsSection = () => {
  const events = [
    { title: "Leisure", image: "/images/carddd.png" },
    { title: "Celebration", image: "/images/cardd.png" },
    { title: "Dining", image: "/images/card.png" },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-[6vw]">
        
        {/* Top Divider */}
        <div className="w-full h-px bg-[#165F41] opacity-50 mb-12"></div>

        {/* TOP TEXT ROW */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[6vw] mb-18">

          {/* LEFT LABEL fixed width like screenshot (≈ 470px) */}
          <div className="lg:w-[12vw]">
            <span className="block text-[#165F41CC] uppercase text-lg font-semibold">
              EVENTS
            </span>
          </div>

          {/* RIGHT DESCRIPTION — aligned exactly like screenshot */}
          <div className="lg:flex-1 max-w-[90vw]">
            <p className="text-[#012219CC] text-lg leading-relaxed mb-6 font-light">
              Celebrate life&apos;s special moments or host purposeful corporate
              gatherings with ease and elegance. Our thoughtfully designed
              spaces adapt seamlessly to your occasion.
            </p>

            <a
              href="#"
              className="text-[#1B4D3E] underline underline-offset-4 hover:text-[#143a2f] font-medium"
            >
              Discover Our Spaces
            </a>
          </div>
        </div>

        {/* IMAGE CARDS ROW with exact spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-[17vw]  ">
          {events.map((event, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">

              <div
                className="w-full aspect-[5/3]  overflow-hidden relative bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              <h4 className="text-[#0F2A1D] font-medium text-lg mt-4">
                {event.title}
              </h4>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
