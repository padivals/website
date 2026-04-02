import React from "react";
import TextSection from "../ui/TextSection";
import { cn } from "@/lib/utils";

const RoomsIntro = () => {
    return (
        <div className="bg-[#F9F5EC] pb-10">
            <div className=" mx-auto px-4 md:px-20 md:mb-12 mb-6  ">
                <TextSection
                    as="h1"
                    heading="Comfortable Rooms in Puttur for Family & Traveller Stays 
"
                    description=""
                    className="!bg-transparent !pt-10 md:!pt-16 md:!py-0"
                />
                <p className="text-center max-w-6xl mx-auto text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#012219CC] leading-relaxed">
                    Looking for reliable rooms in Puttur? The Padival Grand offers
                    clean, well-maintained
                    spaces designed for a comfortable and hassle-free stay.
                    Whether you’re travelling with family, visiting for a
                    short trip, or staying for work, our rooms are planned to give
                    you a smooth and convenient experience. Located on Main Road,
                    it’s an easy and accessible stay option.
                </p>
            </div>
        </div>
    );
};

export default RoomsIntro;
