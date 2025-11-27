"use client";

import React from "react";
import CarouselSection from "../ui/CarouselSection";

const NearbyAttractions = () => {
    const attractions = [
        {
            id: 1,
            name: "Puttur Shree Mahalingeshwara Temple",
            description:
                "A historic Shiva temple known for its serene ambience and deep cultural roots.",
            imageColor: "bg-gray-300",
        },
        {
            id: 2,
            name: "Shivarama Karantha Balavana",
            description:
                "A peaceful cultural park with a museum, greenery and quiet spaces to unwind.",
            imageColor: "bg-gray-400",
        },
        {
            id: 3,
            name: "Beeramale Hill",
            description:
                "A scenic hilltop offering panoramic views of Puttur's landscapes.",
            imageColor: "bg-gray-500",
        },
        {
            id: 4,
            name: "Bendru Theertha",
            description: "A natural hot water spring located in a serene environment.",
            imageColor: "bg-gray-600",
        },
    ];

    return (
        <CarouselSection
            items={attractions}
            keyExtractor={(item) => item.id}
            variant="split"
            label="WHAT'S NEARBY"
            description="You can book rooms, event halls and restaurant tables, each supported by attentive service and well-prepared spaces."
            backgroundColor="bg-white"
            slidesPerView={1.2}
            spaceBetween={30}
            centeredSlides={false}
            loop={false}
            showProgressBar={false}
            showNavigation={false}
            breakpoints={{
                640: {
                    slidesPerView: 2.2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            renderItem={(attraction) => (
                <div className="group cursor-pointer">
                    <div
                        className={`w-full aspect-[3/4] ${attraction.imageColor} mb-6 relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                    <h3 className="text-xl font-serif text-[#0F2A1D] mb-3 group-hover:text-[#D4AF37] transition-colors">
                        {attraction.name}
                    </h3>
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                        {attraction.description}
                    </p>
                </div>
            )}
        />
    );
};

export default NearbyAttractions;
