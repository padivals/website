import React from "react";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="sticky top-0 w-full h-screen min-h-[800px] overflow-hidden -z-10">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-bg.png"
                    alt="Hotel Lobby"
                    fill
                    priority
                    className="object-cover object-center"
                    quality={100}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 drop-shadow-lg">
                    The Padival Grand
                </h1>
                <p className="text-lg md:text-2xl font-light tracking-widest uppercase drop-shadow-md">
                    Luxury Redefined in Puttur
                </p>
            </div>
        </div>
    );
};

export default Hero;
