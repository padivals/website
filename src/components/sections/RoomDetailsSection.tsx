import React from "react";
import Button from "../ui/Button";

interface RoomDetailsSectionProps {
    title: string;
    description: string;
    features: string[];
    image: string;
}

const RoomDetailsSection = ({ title, description, features, image }: RoomDetailsSectionProps) => {
    return (
        <section className="container md:px-0 px-6 mx-auto md:pl-16 md:py-20  py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left: Details */}
                <div className="flex flex-col">
                    <p className="text-3xl  font-semibold  text-[#012219CC] mb-6">
                        {title}
                    </p>
                    <p className="text-lg text-[#012219CC] font-medium leading-relaxed mb-8">
                        {description}
                    </p>

                    <div className="mb-12">
                        <Button variant="primary"  className=" text-white py-4 px-6 uppercase tracking-widest text-sm transition-colors">
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
