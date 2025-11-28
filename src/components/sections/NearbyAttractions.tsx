"use client";

import React from "react";
import CarouselSection from "../ui/CarouselSection";
import Image from "next/image";

const NearbyAttractions = () => {
    const attractions = [
        {
            id: 1,
            name: "Puttur Shree Mahalingeshwara Temple",
            description:
                "A historic Shiva temple known for its serene ambience and deep cultural roots.",
            imagesrc: "/hospitalityImg/img1.png",
        },
        {
            id: 2,
            name: "Shivarama Karantha Balavana",
            description:
                "A peaceful cultural park with a museum, greenery and quiet spaces to unwind.",
            imagesrc: "/hospitalityImg/img2.png",
        },
        {
            id: 3,
            name: "Beeramale Hill",
            description:
                "A scenic hilltop offering panoramic views of Puttur's landscapes.",
            imagesrc: "/hospitalityImg/img3.png",
        },
        {
            id: 4,
            name: "Bendru Theertha",
            description: "A natural hot water spring located in a serene environment.",
            imagesrc: "/hospitalityImg/img1.png",
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
                    slidesPerView: 2.8,
                },
            }}
            renderItem={(attraction) => (
                <div className="group cursor-pointer ">
                    <Image
                         src={attraction.imagesrc} width={100} height={100} alt={attraction.name} className={`w-full aspect-[3/4] mb-6 relative overflow-hidden`}
                    >
                        
                    </Image>         
                                  {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div> */}

                    <h3 className="text-xl f text-[#012219CC] mb-3  transition-colors">
                        {attraction.name}
                    </h3>
                    <p className="text-[#012219CC] text-sm font-light leading-relaxed">
                        {attraction.description}
                    </p>
                </div>
            )}
        />
    );
};

export default NearbyAttractions;
