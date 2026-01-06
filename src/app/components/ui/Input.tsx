import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export function Input({
  label,
  error,
  hint,
  id,
  className,
  ...props
}: InputProps) {
  const inputId = id ?? `input-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="space-y-1">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        style={{ direction: "ltr" }}
        id={inputId}
        className={clsx(
          "ltr block w-full rounded-(--radius) border border-gray-700 px-3 py-2 text-sm shadow-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600",
          error && "border-red-500 focus:border-red-600 focus:ring-red-600",
          className
        )}
        {...props}
      />
      {hint && !error && <p className="text-xs text-gray-500">{hint}</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
