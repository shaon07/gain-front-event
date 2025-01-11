import { ChangeEvent } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  rootClassName?: string;
  required?: boolean;
  onChange?: (value: any, data?: any) => void;
  type?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "date"
    | "datetime"
    | "datetime-local"
    | "time"
    | "tel"
    | "url"
    | "color"
    | "file"
    | "range"
    | "search"
    | "checkbox"
    | "radio"
    | "hidden";
}

export default function Input({
  label,
  placeholder = "",
  className = "",
  rootClassName = "",
  value,
  required = false,
  onChange = () => {},
  type = "text",
}: InputProps) {
  return (
    <div className={`${rootClassName}`}>
      {label && (
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        id={label}
        className={`mt-2 p-3 border border-gray-300 rounded-md w-full ${className}`}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value, e);
        }}
        accept="image/*"
        required={required}
      />
    </div>
  );
}
