import React from "react";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: string[];
    containerClassName?: string;
}

const Select: React.FC<SelectProps> = ({
    label,
    options,
    className = "",
    containerClassName = "",
    ...props
}) => {
    return (
        <div className={`flex flex-col ${containerClassName}`}>
            {label && (
                <label className="text-[#4A6741] text-xs font-bold uppercase tracking-wider mb-2">
                    {label}
                </label>
            )}
            <div className="relative">
                <select
                    className={`w-full bg-transparent border border-[#A3B19C] p-4 text-[#0F2A1D] appearance-none focus:outline-none focus:border-[#1B4D3E] ${className}`}
                    {...props}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-gray-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Select;
