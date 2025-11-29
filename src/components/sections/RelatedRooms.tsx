"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import RoomCard from "../ui/RoomCard";

interface Room {
    id: number;
    title: string;
    description: string;
    slug: string;
    heroImage: string;
    imageColor?: string;
}

interface RelatedRoomsProps {
    rooms: Room[];
}

const RelatedRooms = ({ rooms }: RelatedRoomsProps) => {
    return (
        <>
            {/* Mobile Carousel */}
            <div className="block md:hidden">
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: true }}
                    className="pb-12" // Add padding for pagination dots
                >
                    {rooms.map((room) => (
                        <SwiperSlide key={room.id} className="h-auto">
                            <RoomCard
                                id={room.id}
                                title={room.title}
                                description={room.description}
                                slug={room.slug}
                                heroImage={room.heroImage}
                                imageColor={room.imageColor}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {rooms.map((room) => (
                    <RoomCard
                        key={room.id}
                        id={room.id}
                        title={room.title}
                        description={room.description}
                        slug={room.slug}
                        heroImage={room.heroImage}
                        imageColor={room.imageColor}
                    />
                ))}
            </div>
        </>
    );
};

export default RelatedRooms;
