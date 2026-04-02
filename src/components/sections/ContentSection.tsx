import React from "react";
import Image from "next/image";
import Typography from "../ui/Typography";

interface ContentSectionProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    image: string;
    imagePosition?: "left" | "right";
    bgColor?: string;
    textColor?: string;
    alt?: string;
}

const ContentSection = ({
    title,
    description,
    image,
    imagePosition = "right",
    bgColor = "bg-[#F9F5EC]",
    textColor = "text-[#012219]",
    alt,
}: ContentSectionProps) => {
    return (
        <section className={`${bgColor} py-20`}>
            <div className="container mx-auto ">
                <div className={`flex flex-col lg:flex-row gap-32 justify-between items-center ${imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>
                    {/* Text Content */}
                    <div className="lg:max-w-xl ">
                        <Typography variant="title2" className={`text-3xl md:text-4xl font-semibold ${textColor} mb-6`}>
                            {title}
                        </Typography>
                        <div className={`text-lg ${textColor} font-medium leading-relaxed opacity-90`}>
                            {typeof description === "string" ? <Typography variant="description">{description}</Typography> : description}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative w-full aspect-[4/4] overflow-hidden  shadow-sm">
                            <Image
                                src={image}
                                alt={typeof title === "string" ? title : alt || "Section Image"}
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
