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
        <Link
            href={`/rooms/${slug}`}
            className="flex flex-col snap-center shrink-0 w-[72vw] max-w-[360px] md:w-auto overflow-hidden group"
        >
            {/* Image Container */}
            <div className={`relative w-full aspect-3/4 mb-6 overflow-hidden ${imageColor || 'bg-gray-200'}`}>
                <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col grow">
                <p className="text-xl font-medium text-[#0F2A1D] mb-3">
                    {title}
                </p>
                <p className="text-sm font-medium text-[#012219CC] leading-relaxed mb-6 grow">
                    {description}
                </p>

                <div>
                    <span
                        className="inline-block border border-[#4A6741] text-[#165F41] px-5 py-3 text-xs font-extrabold uppercase tracking-wider group-hover:bg-[#1B4D3E] group-hover:text-white transition-colors"
                    >
                        Learn More
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default RoomCard;
