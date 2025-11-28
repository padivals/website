import React from "react";
import Image from "next/image";

interface ContentSectionProps {
    title: string;
    description: string | React.ReactNode;
    image: string;
    imagePosition?: "left" | "right";
    bgColor?: string;
    textColor?: string;
}

const ContentSection = ({
    title,
    description,
    image,
    imagePosition = "right",
    bgColor = "bg-[#F9F5EC]",
    textColor = "text-[#012219]",
}: ContentSectionProps) => {
    return (
        <section className={`${bgColor} py-20`}>
            <div className="container mx-auto ">
                <div className={`flex flex-col lg:flex-row gap-12 items-center ${imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <h2 className={`text-3xl md:text-4xl font-semibold ${textColor} mb-6`}>
                            {title}
                        </h2>
                        <div className={`text-lg ${textColor} font-medium leading-relaxed opacity-90`}>
                            {typeof description === "string" ? <p>{description}</p> : description}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-sm">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
