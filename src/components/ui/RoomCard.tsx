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
        // Mobile slide behaviour: become a fixed-width snap slide on small screens.
        // On `md` and larger the card keeps its original flex layout.
        <div className="inline-block snap-center flex-shrink-0 w-[72vw] max-w-[360px] md:inline-block md:w-auto md:flex md:flex-col h-full">
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
                <p className="text-xl font-medium text-[#0F2A1D] mb-3">
                    {title}
                </p>
                <p className="text-sm font-medium text-[#012219CC] leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <div>
                    <Link
                        href={`/rooms/${slug}`}
                        className="inline-block border border-[#4A6741] text-[#165F41] px-5 py-3 text-xs font-extrabold uppercase tracking-wider hover:bg-[#1B4D3E] hover:text-white transition-colors"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
