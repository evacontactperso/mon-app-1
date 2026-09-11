import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "school"
  | "schoolOutline"
  | "parent"
  | "parentOutline";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#EE6B6E] text-white hover:bg-[#E05558] shadow-[0_4px_14px_rgba(238,107,110,0.25)]",
  secondary:
    "bg-white text-[#0B0B0B] border border-slate-200/60 hover:border-[#EE6B6E] hover:bg-[#fde8e8]/30",
  accent:
    "bg-[#EE6B6E] text-white hover:bg-[#E05558] shadow-[0_4px_14px_rgba(238,107,110,0.25)]",
  outline:
    "bg-transparent text-[#0B0B0B] border border-slate-200/60 hover:border-[#EE6B6E] hover:bg-[#fde8e8]/20",
  school:
    "bg-[#6366F1] text-white hover:bg-[#4F46E5] shadow-[0_4px_14px_rgba(99,102,241,0.3)]",
  schoolOutline:
    "bg-white text-[#6366F1] border-2 border-[#6366F1]/40 hover:bg-[#EEF2FF]",
  parent:
    "bg-[#EE6B6E] text-white hover:bg-[#E05558] shadow-[0_4px_14px_rgba(238,107,110,0.25)]",
  parentOutline:
    "bg-white text-[#EE6B6E] border-2 border-[#EE6B6E]/40 hover:bg-[#fde8e8]/40",
};

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  style?: CSSProperties;
};

export default function Button({
  href,
  variant = "accent",
  children,
  className = "",
  type = "button",
  onClick,
  style,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE6B6E]";

  if (href) {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`} style={style}>
      {children}
    </button>
  );
}
