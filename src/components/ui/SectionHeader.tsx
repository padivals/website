import React from "react";

interface SectionHeaderProps {
    label?: string;
    heading: string;
    className?: string;
    align?: "left" | "center";
    textColor?: string;
    labelColor?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    label,
    heading,
    className = "",
    align = "left",
    textColor = "text-[#012219]",
    labelColor = "text-[#165F41CC]",
}) => {
    const alignmentClasses =
        align === "center" ? "items-center text-center" : "items-start text-left";

    return (
        <div className={`flex flex-col ${alignmentClasses} ${className}`}>
            {label && (
                <span
                    className={`block ${labelColor}  uppercase text-sm font-semibold mb-4`}
                >
                    {label}
                </span>
            )}
            <h2
                className={`text-4xl md:text-5xl font-serif ${textColor} leading-tight font-semibold max-w-3xl`}
            >
                {heading}
            </h2>
        </div>
    );
};

export default SectionHeader;
