"use client";

import React from "react";
import CarouselSection from "../ui/CarouselSection";

const MomentsSection = () => {
    const moments = [
        { color: "bg-red-100" },
        { color: "bg-blue-100" },
        { color: "bg-green-100" },
        { color: "bg-yellow-100" },
        { color: "bg-purple-100" },
        { color: "bg-pink-100" },
    ];

    return (
        <CarouselSection
            items={moments}
            keyExtractor={(_, index) => index}
            title="Discover Moments at The Padival Grand Hotel"
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
            renderItem={(moment, isActive) => (
                <div
                    className={`relative w-full aspect-[3/4] ${moment.color
                        } overflow-hidden transition-transform duration-500 ${isActive ? "scale-100" : "scale-90 opacity-80"
                        }`}
                >
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        Moment
                    </div>
                    {/* Overlay for non-active slides */}
                    {!isActive && (
                        <div className="absolute inset-0 bg-black/20"></div>
                    )}
                </div>
            )}
        />
    );
};

export default MomentsSection;
