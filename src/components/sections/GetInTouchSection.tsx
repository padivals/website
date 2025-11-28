import React from "react";
import Image from "next/image";

export default function GetInTouchSection() {
    return (
        <section className="bg-[#F9F5EC] py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    {/* Left Content */}
                    <div className="lg:w-7/12 flex flex-col justify-center h-full pt-4">
                        <div className="w-full h-0.5 bg-[#165F41] mb-16"></div>
                        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#0F2A1D] mb-6">
                            Get in Touch
                        </h2>
                        <p className="text-[#4A5568] text-lg font-medium mb-12">
                            Plan your Padival experience.
                        </p>

                        <div className="grid grid-cols-[80px_1fr] gap-y-8 gap-x-4 items-baseline">
                            <span className="text-[#4A6C58] text-xs font-bold uppercase tracking-wider">
                                CALL
                            </span>
                            <a href="tel:+919686804784" className="text-[#0F2A1D] text-xl font-medium underline underline-offset-4 decoration-[#A3B19C] hover:text-[#1B4D3E]">
                                +91 96868 04784
                            </a>

                            <span className="text-[#4A6C58] text-xs font-bold uppercase tracking-wider">
                                EMAIL
                            </span>
                            <a href="mailto:info@padival-grand-hotel.com" className="text-[#0F2A1D] text-xl font-medium underline underline-offset-4 decoration-[#A3B19C] hover:text-[#1B4D3E]">
                                info@padival-grand-hotel.com
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-5/12 w-full">
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm shadow-sm">
                            <Image
                                src="/images/get-in-touch.png"
                                alt="Reception"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
