import React from "react";
import SectionHeader from "./SectionHeader";
import Typography from "./Typography";

interface TextSectionProps {
    label?: string;
    heading: string | React.ReactNode;
    description: string | React.ReactNode;
    align?: "left" | "center";
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
}

const TextSection: React.FC<TextSectionProps> = ({
    label,
    heading,
    description,
    align = "center",
    className = "",
    as = "h2",
}) => {
    return (
        <section className={`relative bg-white  py-3 md:py-22 ${className}`}>
            <div className="container mx-auto px-8 md:text-center text-center">
                <SectionHeader
                    
                    label={label}
                    heading={heading}
                    align={align}
                    className="mb-8"
                    as={as}
                />
                <Typography variant="description"  className="max-w-4xl xl:max-w-5xl mx-auto   font-medium leading-relaxed">
                    {description}
                </Typography>
            </div>
        </section>
    );
};

export default TextSection;
