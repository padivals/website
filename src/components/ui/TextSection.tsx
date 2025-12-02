import React from "react";
import SectionHeader from "./SectionHeader";

interface TextSectionProps {
    label?: string;
    heading: string;
    description: string;
    align?: "left" | "center";
    className?: string;
}

const TextSection: React.FC<TextSectionProps> = ({
    label,
    heading,
    description,
    align = "center",
    className = "",
}) => {
    return (
        <section className={`relative bg-white  py-8 md:py-22 ${className}`}>
            <div className="container mx-auto px-6 md:text-center text-start">
                <SectionHeader
                    label={label}
                    heading={heading}
                    align={align}
                    className="mb-8"
                />
                <p className="max-w-4xl xl:max-w-5xl mx-auto text-[#012219CC] text-lg md:text-lg font-medium leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
};

export default TextSection;
