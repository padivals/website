import React from "react";
import Image from "next/image";

interface RoomImagesSectionProps {
    images: string[];
}

const RoomImagesSection = ({ images }: RoomImagesSectionProps) => {
    if (!images || images.length < 2) return null;

    return (
        <section className="container mx-auto px-6 py-12">
            <div className="flex gap-6">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                        src={images[0]}
                        alt="Room View 1"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
                <div className="relative w-3/5 aspect-[4/3] overflow-hidden">
                    <Image
                        src={images[1]}
                        alt="Room View 2"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </section>
    );
};

export default RoomImagesSection;
