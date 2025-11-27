import React from "react";
import Link from "next/link";
import Image from "next/image";

interface RoomCardProps {
    id: number;
    title: string;
    description: string;
    slug: string;
    heroImage: string;
    imageColor?: string;
}

const RoomCard = ({ title, description, slug, heroImage, imageColor }: RoomCardProps) => {
    return (
        <div className="flex flex-col h-full">
            {/* Image Container */}
            <div className={`relative w-full aspect-[3/4] mb-6 overflow-hidden ${imageColor || 'bg-gray-200'}`}>
                <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-[#0F2A1D] mb-3">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm font-light leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <div>
                    <Link
                        href={`/rooms/${slug}`}
                        className="inline-block border border-[#4A6741] text-[#1B4D3E] px-6 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#1B4D3E] hover:text-white transition-colors"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
