import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}
export default function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  loading = false,
  onClick = () => {},
}: ButtonProps) {
  const handleButtonVariant = () => {
    switch (variant) {
      case "primary":
        return "bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300";
      case "secondary":
        return "bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-300";
      default:
        return "bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300";
    }
  };

  return (
    <button
      type={type}
      disabled={loading}
      onClick={onClick}
      className={` ${handleButtonVariant()} ${loading && "opacity-50 cursor-not-allowed"} ${className}`}
    >
      {children}
    </button>
  );
}
