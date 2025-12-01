import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
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
      <input
        className={`bg-transparent border border-[#165F41] p-4 text-[#0F2A1D] placeholder-gray-500 focus:outline-none focus:border-[#1B4D3E] ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
