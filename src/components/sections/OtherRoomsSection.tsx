"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Room {
    id: number;
    slug: string;
    title: string;
    heroImage: string;
}

interface OtherRoomsSectionProps {
    rooms: Room[];
    currentSlug: string;
}

const OtherRoomsSection = ({ rooms, currentSlug }: OtherRoomsSectionProps) => {
    // Filter out the current room and take up to 3 rooms
    const otherRooms = rooms.filter((r) => r.slug !== currentSlug).slice(0, 3);

    return (
        <section className="bg-[#F9F5EC] py-20">
            <div className="container mx-auto px-6">
                {/* Top Divider Line */}
                <div className="w-full h-px bg-[#A3B19C] mb-12 opacity-50"></div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Label */}
                    <div className="lg:w-1/4">
                        <span className="text-[#4A6C58] uppercase tracking-widest text-sm font-medium">
                            OUR OTHER ROOMS
                        </span>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {otherRooms.map((room) => (
                            <Link key={room.id} href={`/rooms/${room.slug}`} className="group block">
                                <div className="relative w-full aspect-square mb-6 overflow-hidden bg-gray-200">
                                    <Image
                                        src={room.heroImage}
                                        alt={room.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="text-lg font-serif text-[#0F2A1D] group-hover:text-[#1B4D3E] transition-colors">
                                    {room.title}
                                </h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtherRoomsSection;
