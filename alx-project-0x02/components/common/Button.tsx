import React from "react";
import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, size, shape, onClick }) => {
  const sizeClasses: Record<ButtonProps["size"], string> = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const baseStyles =
    "bg-blue-600 text-white font-semibold hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <button
      type="button"
      onClick={onClick ? onClick : undefined}
      className={`${baseStyles} ${sizeClasses[size]} ${shape}`}
    >
      {title}
    </button>
  );
};

export default Button;

