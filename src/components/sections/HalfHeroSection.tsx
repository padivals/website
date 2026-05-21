import React from "react";
import Image from "next/image";

interface HalfHeroSectionProps {
    title: string | React.ReactNode;
    subtitle?: string;
    backgroundImage?: string;
    alt?: string;
}

export default function HalfHeroSection({
    title,
    subtitle,
    backgroundImage = "/half-hero.png",
    alt,
}: HalfHeroSectionProps) {
    return (
        <section className="relative md:h-[70vh] min-h-[50vh]  flex flex-col justify-end items-start  overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={typeof title === "string" ? title : alt || "Hero Background"}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for text readability */}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}
            </div>

            <div className="  relative z-10 md:px-16 px-6 py-12 sm:py-20 md:py-28 textpadding-left w-full">
                <div className="flex flex-col gap-2 mb-2 md:mb-12">
                    {/* Breadcrumb or label if needed */}
                </div>
                <h1 className="font-serif font-semibold text-3xl sm:text-5xl md:text-7xl mb-4 md:mb-8 text-[#F9F2E8] break-words">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-[#F9F2E8]/80 text-sm sm:text-lg uppercase tracking-widest font-light">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
