import React from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  className?: string;
  align?: "left" | "center";
  textColor?: string;
  labelColor?: string;
  containerClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  heading,
  className = "",
  align = "left",
  textColor = "text-[#012219]",
  labelColor = "text-[#165F41CC]",
  containerClassName = "text-center max-w-3xl",
}) => {
  const alignmentClasses =
    align === "center" ? "items-center md:text-center text-start " : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignmentClasses} ${className}`}>
      {label && (
        <span
          className={`block ${labelColor}  uppercase text-lg font-semibold mb-4`}
        >
          {label}
        </span>
      )}
      {/* <h2
        className={`text-4xl md:text-5xl lg2:text-6xl font-serif ${textColor} leading-tight font-semibold max-w-3xl`}
      >
        {heading}
      </h2> */}

             <div className="">
        <ScrollReveal
          scrollContainerRef={undefined}
          enableBlur={false}
          baseOpacity={0}
          baseRotation={0}
          rotationEnd="top center"
          wordAnimationEnd="top 40%"
          containerClassName={containerClassName}
          textClassName="text-4xl md:text-5xl  lg2:text-6xl  font-serif leading-tight text-[#0F2A1D] font-semibold " 
          blurStrength={10}
        >
          {heading}

        </ScrollReveal>
      </div>
    </div>
  );
};

export default SectionHeader;
