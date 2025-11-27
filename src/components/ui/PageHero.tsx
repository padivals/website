import React from "react";
import Image from "next/image";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image?: string;
}

const PageHero = ({ title, subtitle, image = "/hero-bg.png" }: PageHeroProps) => {
    return (
        <div className="relative w-full h-[100vh] min-h-[400px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="object-cover object-center"
                    quality={100}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-4 drop-shadow-lg">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl font-light tracking-widest uppercase drop-shadow-md">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PageHero;
