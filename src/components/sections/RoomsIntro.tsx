import React from "react";
import TextSection from "../ui/TextSection";
import { cn } from "@/lib/utils";

const RoomsIntro = () => {
    return (
        <div className="bg-[#F9F5EC] pb-10">
            <div className=" mx-auto px-4 md:px-20 md:mb-12 mb-6  ">
                <TextSection
                    as="h1"
                    heading="Comfortable Rooms in Puttur for a Relaxed Stay"
                    description=""
                    className="!bg-transparent !pt-10 md:!pt-16 md:!py-0"
                />
                <p className="text-center max-w-6xl mx-auto text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#012219CC] leading-relaxed">
                    Finding reliable rooms in Puttur shouldn’t be a risk,
                    and at The Padival Grand, we ensure exactly that with clean,
                    well-maintained spaces and fully functional amenities
                    you can trust. Recognized among the best hotels
                    in Puttur, Karnataka, we bring proven experience in
                    delivering comfortable stays with essentials like AC,
                    WiFi, parking, and hygiene that consistently meet expectations. Designed for
                    families and travelers alike, our hotel rooms in Puttur focus
                    on safety, convenience, and genuine value without hidden compromises.
                    Located near Puttur Main Road, we offer a dependable stay in
                    Puttur where accessibility, comfort, and service come together seamlessly every time.
                </p>
            </div>
        </div>
    );
};

export default RoomsIntro;
