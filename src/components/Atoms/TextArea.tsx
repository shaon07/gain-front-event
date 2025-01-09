
interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  rootClassName?: string;
  required?: boolean;
  onChange?: (data: any) => void;
}

export default function TextArea({
  label,
  className = "",
  rootClassName = "",
  value,
  required = false,
  onChange = () => {},
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

      <textarea
        id="description"
        className={`mt-2 p-3 border border-gray-300 rounded-md w-full ${className}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </div>
  );
}
