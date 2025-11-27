"use client";

import React from "react";
import Image from "next/image";
import CarouselSection from "../ui/CarouselSection";

const DiningCarousel = () => {
    const diningImages = [
        { id: 1, src: "/hero-bg.png", alt: "Dining Experience 1" },
        { id: 2, src: "/hero-bg.png", alt: "Dining Experience 2" },
        { id: 3, src: "/hero-bg.png", alt: "Dining Experience 3" },
        { id: 4, src: "/hero-bg.png", alt: "Dining Experience 4" },
        { id: 5, src: "/hero-bg.png", alt: "Dining Experience 5" },
    ];

    return (
        <CarouselSection
            items={diningImages}
            keyExtractor={(item) => item.id}
            title="A Calm, Homely Dining Experience"
            variant="centered"
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
            renderItem={(item, isActive) => (
                <div
                    className={`relative w-full aspect-[3/4] overflow-hidden transition-transform duration-500 ${isActive ? "scale-100" : "scale-90 opacity-80"
                        }`}
                >
                    <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                    />
                    {/* Overlay for non-active slides */}
                    {!isActive && (
                        <div className="absolute inset-0 bg-black/20"></div>
                    )}
                </div>
            )}
        />
    );
};

export default DiningCarousel;
