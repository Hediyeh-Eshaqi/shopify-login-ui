import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HelpLinkProps {
  text: string;
  href: string;
  linkText: string;
}

export function HelpLink({ text, href, linkText }: HelpLinkProps) {
  const isInternal = href.startsWith("/");

  const linkClasses = `
    inline-flex items-center gap-1 
    text-[#005bd3] 
    transition-colors group
  `;

  const iconClasses = `
    translate-x-0 group-hover:translate-x-1
    transition-transform duration-300
  `;

  return (
    <div className="flex gap-1 text-sm mt-6">
      <span className="text-[#303030]">{text}</span>

      {isInternal ? (
        <Link href={href} className={linkClasses}>
          {linkText}
          <ArrowRight size={18} className={iconClasses} />
        </Link>
      ) : (
        <a
          href={href}
          className={linkClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
          <ArrowRight size={18} className={iconClasses} />
        </a>
      )}
    </div>
  );
}
