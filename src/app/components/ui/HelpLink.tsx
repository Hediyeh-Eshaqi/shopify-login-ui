import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface HelpLinkProps {
  text: string;
  href: string;
  linkText: string;
  disabled?: boolean;
}

export function HelpLink({
  text,
  href,
  linkText,
  disabled = false,
}: HelpLinkProps) {
  const isInternal = href.startsWith("/");

  const linkClasses = `
    inline-flex items-center gap-1 
    ${
      disabled
        ? "text-gray-400 pointer-events-none cursor-default"
        : "text-[#005bd3] transition-colors group"
    }
  `;

  const iconClasses = `
    translate-x-0 
    ${disabled ? "" : "group-hover:-translate-x-1"} 
    transition-transform duration-300
  `;

  return (
    <div className="flex gap-1 text-sm mt-6">
      <span className="text-[#303030]">{text}</span>

      {disabled ? (
        <span className={linkClasses}>
          {linkText}
          <ArrowLeft size={18} className={iconClasses} />
        </span>
      ) : isInternal ? (
        <Link href={href} className={linkClasses}>
          {linkText}
          <ArrowLeft size={18} className={iconClasses} />
        </Link>
      ) : (
        <a
          href={href}
          className={linkClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
          <ArrowLeft size={18} className={iconClasses} />
        </a>
      )}
    </div>
  );
}
