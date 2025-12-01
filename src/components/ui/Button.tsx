import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    " text-sm font-bold  tracking-wider transition-colors duration-300 flex items-center justify-center";

  const variants = {
    primary: "bg-[#1B4D3E] hover:bg-[#143a2f] text-[#F9F2E8]",
    outline:
      "bg-transparent border border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E] hover:text-white",
    text: "bg-transparent text-[#1B4D3E] hover:text-[#143a2f] underline underline-offset-4 p-0",
  };

  const widthStyles = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
