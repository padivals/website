import React from "react";
import SectionHeader from "./SectionHeader";
import Typography from "./Typography";

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
        <section className={`relative bg-white  py-3 md:py-22 ${className}`}>
            <div className="container mx-auto px-8 md:text-center text-center">
                <SectionHeader
                    
                    label={label}
                    heading={heading}
                    align={align}
                    className="mb-8"
                />
                <Typography variant="description"  className="max-w-4xl xl:max-w-5xl mx-auto   font-medium leading-relaxed">
                    {description}
                </Typography>
            </div>
        </section>
    );
};

export default TextSection;
