import React from "react";
import Image from "next/image";

interface HalfHeroSectionProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

export default function HalfHeroSection({
    title,
    subtitle,
    backgroundImage = "/half-hero.png",
}: HalfHeroSectionProps) {
    return (
        <section className="relative md:h-[70vh] h-[50vh]  flex flex-col justify-end items-start  overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={`${title} Background`}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for text readability */}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}
            </div>

            <div className="  relative z-10 md:px-16 px-10 py-28">
                <div className="flex flex-col gap-2 mb-12">
                    {/* Breadcrumb or label if needed */}
                </div>
                <h1 className="font-serif font-semibold text-5xl md:text-7xl mb-8 text-[#F9F2E8]">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-[#F9F2E8]/80 text-lg uppercase tracking-widest font-light">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
