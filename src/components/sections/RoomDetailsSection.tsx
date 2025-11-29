import React from "react";

interface RoomDetailsSectionProps {
    title: string;
    description: string;
    features: string[];
    image: string;
}

const RoomDetailsSection = ({ title, description, features, image }: RoomDetailsSectionProps) => {
    return (
        <section className="container mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Details */}
                <div className="flex flex-col">
                    <p className="text-3xl  font-semibold  text-[#0F2A1D] mb-6">
                        {title}
                    </p>
                    <p className="text-lg text-gray-700 font-medium leading-relaxed mb-8">
                        {description}
                    </p>

                    <div className="mb-12">
                        <button className="bg-[#1B4D3E] text-white py-3 px-8 uppercase tracking-widest text-sm hover:bg-[#143a2f] transition-colors">
                            Book Now
                        </button>
                    </div>

                    <div className="w-full h-px bg-[#A3B19C]/50 mb-12"></div>

                    <p className="text-2xl  font-medium text-[#0F2A1D] mb-4">
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
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default RoomDetailsSection;
