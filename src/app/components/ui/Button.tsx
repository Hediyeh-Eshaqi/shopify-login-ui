import React from "react";
import clsx from "clsx";

type Variant = "primary" | "secondary" | "shopify";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  hoverIcon?: React.ReactNode;
  text?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  hoverIcon,
  text,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "group relative inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer";

  const variantClasses: Record<Variant, string> = {
    primary:
      "bg-[#303030] text-[#F7F7F7] hover:bg-[#273030] focus-visible:ring-indigo-600 text-[14px] font-[500] leading-[20px] tracking-normal",
    secondary:
      "bg-[#F1F1F1] text-gray-700 hover:bg-[#e5e5e5] focus-visible:ring-gray-400",
    shopify: "bg-[#1a1a1a] text-white hover:bg-black focus-visible:ring-black",
  };

  const sizeClasses: Record<Size, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-base",
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {leftIcon && <span className="mr-2 shrink-0">{leftIcon}</span>}

      <span>{text ?? children}</span>

      {hoverIcon && (
        <span className="ml-2 translate-x-0 group-hover:-translate-x-1 transition-transform duration-300 shrink-0">
          {hoverIcon}
        </span>
      )}
    </button>
  );
}
