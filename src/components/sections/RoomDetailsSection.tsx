"use client";

import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { useBookingModal } from "../providers/BookingModalContext";

interface RoomDetailsSectionProps {
    title: string;
    description: string;
    features: string[];
    image: string;
}

const RoomDetailsSection = ({ title, description, features, image }: RoomDetailsSectionProps) => {
    const { openModal } = useBookingModal();
    return (

 <>

          
        <section className=" md:px-0 px-6 mx-auto md:pl-16 md:py-20  py-10 padding-left ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Details */}
                <div className="flex flex-col">
                    <p className={`text-3xl  font-semibold  text-[#012219CC] mb-6  md:max-w-none${title.length > 12 ? "md:max-w-xs" : "md:max-w-none"}`}>
                        {title}
                    </p>
                    <p className="text-lg text-[#012219CC] font-medium leading-relaxed mb-8">
                        {description}
                    </p>

                    <div className="mb-12">
                        <Button variant="primary" className=" z-999999999999 text-white py-4 px-6 uppercase tracking-widest text-sm transition-colors" onClick={openModal}>
                            Book Now
                        </Button>
                    </div>

                    <div className="w-full h-px bg-[#165F41] mb-8"></div>

                    <p className="text-2xl  font-medium text-[#012219CC] mb-4">
                        Accommodation details
                    </p>
                    <ul className="">
                        {features.map((feature, index) => (
                            <li key={index} className="text-[#012219CC] font-medium">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Image */}
                <div className="relative w-full aspect-[4/5] lg:aspect-square bg-gray-100">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section>
    </>
    );
};

export default RoomDetailsSection;
