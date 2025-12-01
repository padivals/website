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
        <label className="text-[#165F41] text-lg font-medium uppercase tracking-wider mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`w-full bg-transparent border border-[#165F41] p-4 text-[#165F41B2] appearance-none ${className}`}
          {...props}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="absolute right-0 top-0 bottom-0 w-14 flex items-center justify-center border-l border-[#165F41] pointer-events-none">
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
