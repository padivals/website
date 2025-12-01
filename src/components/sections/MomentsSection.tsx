"use client";

import React from "react";
import CarouselSection from "../ui/CarouselSection";

const MomentsSection = () => {
  const moments = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1571896349842-6e53ce41e887?q=80&w=2071&auto=format&fit=crop",
      title: "Poolside Relaxation",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      title: "Luxury Dining",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      title: "Ocean Views",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
      title: "Spa & Wellness",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      title: "Elegant Suites",
    },
  ];

  return (
    <CarouselSection
      items={moments}
      keyExtractor={(item) => item.id}
      title="Discover Moments at The Padival Grand Hotel"
      variant="centered"
      slidesPerView={1.2}
      spaceBetween={20}
      centeredSlides={true}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1.25,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.5, // Shows center + small peek of sides (approx 15% visible)
          spaceBetween: 30,
        },
      }}
      renderItem={(moment, isActive) => (
        <div
          className={`relative w-full aspect-[3/4] overflow-hidden transition-all duration-500 ease-out 
                        ${
                          isActive
                            ? "scale-100 z-10 shadow-2xl"
                            : "scale-90 opacity-60 grayscale-[30%] z-0"
                        }
                    `}
        >
          <img
            src={moment.image}
            alt={moment.title}
            className="w-full h-full object-cover"
          />

          {/* Content Overlay - Only visible on active slide or always? 
                        Usually always visible but maybe dimmer on inactive. 
                        Let's keep it simple as per request "image must replace existing image".
                    */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-4xl font-serif font-semibold tracking-wide">
                {moment.title}
              </h3>
            </div>
          </div>

          {/* Dark overlay for inactive slides to make them "less brighter" */}
          {!isActive && (
            <div className="absolute inset-0 bg-black/40 transition-colors duration-500" />
          )}
        </div>
      )}
    />
  );
};

export default MomentsSection;
