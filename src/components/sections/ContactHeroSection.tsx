import React from "react";
import Image from "next/image";

export default function ContactHeroSection() {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex flex-col justify-center px-6 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/half-hero.png"
                    alt="Privacy Policy Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for text readability */}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}
            </div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col gap-2 mb-12">
                    {/* Breadcrumb or label if needed */}
                </div>
                <h1 className="font-serif text-5xl md:text-7xl mb-8 text-[#F9F2E8]">
                    Get in Touch
                </h1>
            </div>
        </section>
    );
}
