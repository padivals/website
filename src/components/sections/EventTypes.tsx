"use client";

import React from "react";
import Image from "next/image";
import CarouselSection from "@/components/ui/CarouselSection";

const EventTypes = () => {
    const eventTypes = [
        {
            id: 1,
            title: "Engagement and Pre-Wedding Rituals",
            description: "Neat, welcoming spaces suited for meaningful ceremonies held with care and simplicity.",
            image: "/hero-bg.png", // Placeholder
        },
        {
            id: 2,
            title: "Naming Ceremonies",
            description: "A peaceful space for families to celebrate their special milestone in a calm and supportive setting.",
            image: "/hero-bg.png", // Placeholder
        },
        {
            id: 3,
            title: "Small Corporate Meetings",
            description: "Quiet, well-kept rooms ideal for discussions, training sessions, and professional gatherings.",
            image: "/hero-bg.png", // Placeholder
        },
        {
            id: 4,
            title: "Birthday Celebrations",
            description: "Intimate spaces perfect for celebrating another year of life with close friends and family.",
            image: "/hero-bg.png", // Placeholder
        },
    ];

    return (
        <CarouselSection
            items={eventTypes}
            keyExtractor={(item) => item.id}
            variant="split"
            label="TYPES OF EVENTS WE CATER TO"
            description="We offer well-kept event spaces so guests can gather, celebrate, and host meaningful moments in a setting that feels comfortable and thoughtfully managed."
            backgroundColor="bg-white"
            slidesPerView={1.2}
            spaceBetween={24}
            centeredSlides={false}
            loop={false}
            showProgressBar={false}
            showNavigation={true}
            navigationTop="top-[40%]"
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
            renderItem={(item) => (
                <div className="flex flex-col h-full group cursor-pointer">
                    <div className="relative w-full aspect-[3/4] overflow-hidden mb-6">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <p className="text-xl font-medium text-[#012219CC] mb-3 group-hover:text-[#4A6741] transition-colors">
                        {item.title}
                    </p>
                    <p className="text-[#012219CC] text-sm font-medium leading-relaxed">
                        {item.description}
                    </p>
                </div>
            )}
        />
    );
};

export default EventTypes;
