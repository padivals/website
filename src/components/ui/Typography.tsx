import React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
  variant: "title" | "subtitle" | "description" | "swipercontent" | "title2";
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  htmlFor?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  as,
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "text-[#165F41]";
  let variantStyles = "";
  let DefaultTag: React.ElementType = "div";

  switch (variant) {
    case "title":
      variantStyles =
        "text-[28px] sm:text-[34px] md:text-[40px] lg:text-[48px] leading-tight font-serif";
      DefaultTag = "h1";
      break;
         case "title2":
      variantStyles =
        "text-[18px] sm:text-[24px] md:text-[30px] lg:text-[38px] leading-tight font-serif";
      DefaultTag = "h1";
      break;

    case "subtitle":
      variantStyles =
        "text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-medium uppercase tracking-wider";
      DefaultTag = "h3";
      break;

    case "description":
      variantStyles =
        "text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#012219CC] leading-relaxed";
      DefaultTag = "p";
      break;

      case "swipercontent":
      variantStyles =
        "text-[14px] sm:text-[16px] md:text-[17px] lg:text-[16px]  leading-relaxed";
      DefaultTag = "p";
      break;
  }

  const Tag = as || DefaultTag;

  return (
    <Tag className={cn(baseStyles, variantStyles, className)} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;
