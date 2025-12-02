import React from "react";
import Image from "next/image";

interface PageHeroProps {
    title?: string;
    subtitle?: string;
    image?: string;
    underlineClass?: string | boolean;
}

const PageHero = ({ title, subtitle, image = "/roomsImg/bgImg1.png", underlineClass = false }: PageHeroProps) => {
    return (
        <div className="relative w-full h-[100vh] min-h-[400px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src= {image}
                    alt='{title}'
                    fill
                    priority
                    className="object-cover object-center"
                    quality={100}
                />
                {/* Overlay */}
              <div
  className="
    absolute inset-0 
    bg-gradient-to-b 
    from-black/70 
    via-black/30 
    to-transparent
    h-64
  "
></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto h-full flex flex-col justify-end items-start text-white text-left  px-6 md:px-16 py-6 md:py-14">
                <h1 className="font-serif text-3xl md:text-6xl lg:text-7xl  drop-shadow-lg">
                    {title}
                </h1>
                <div className={` h-px bg-[#FFFFFF] w-full my-4 ${underlineClass} `}> </div>
                {subtitle && (
                    <p className="text-md md:text-xl font-light tracking-widest uppercase drop-shadow-md">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
};

export default PageHero;
