import type { ReactNode } from "react";

export type SectionTone =
  | "white"
  | "alt"
  | "pink"
  | "indigo"
  | "purple"
  | "warm"
  | "dark";

export type SectionSize = "immersive" | "comfortable" | "compact";

export const sectionToneClasses: Record<SectionTone, string> = {
  white: "bg-white",
  alt: "bg-[#F9F9FB]",
  pink: "bg-gradient-to-br from-[#fde8e8]/50 via-white to-[#fef3e8]/30",
  indigo: "bg-gradient-to-br from-[#EEF2FF]/60 via-white to-[#f8f9ff]",
  purple: "bg-gradient-to-br from-[#f3e5f5]/50 via-white to-[#faf8fc]",
  warm: "bg-gradient-to-br from-[#fff5f0] via-white to-[#F9F9FB]",
  dark: "bg-[#0B0B0B] text-white",
};

const toneGlows: Record<SectionTone, string | null> = {
  white: "bg-[radial-gradient(ellipse_at_80%_20%,rgba(238,107,110,0.06)_0%,transparent_55%)]",
  alt: "bg-[radial-gradient(ellipse_at_20%_80%,rgba(99,102,241,0.05)_0%,transparent_55%)]",
  pink: "bg-[radial-gradient(ellipse_at_top_right,rgba(238,107,110,0.1)_0%,transparent_50%)]",
  indigo: "bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.12)_0%,transparent_50%)]",
  purple: "bg-[radial-gradient(ellipse_at_bottom_right,rgba(129,52,175,0.1)_0%,transparent_50%)]",
  warm: "bg-[radial-gradient(ellipse_at_70%_30%,rgba(245,133,41,0.08)_0%,transparent_50%)]",
  dark: null,
};

export const sectionSizeClasses: Record<SectionSize, string> = {
  immersive:
    "relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden py-16 md:py-24",
  comfortable: "relative w-full overflow-hidden py-12 sm:py-16 md:py-24",
  compact: "relative w-full overflow-hidden py-10 sm:py-12 md:py-16",
};

/** @deprecated Use sectionSizeClasses.immersive */
export const sectionFullHeight = sectionSizeClasses.immersive;

type PageSectionProps = {
  tone?: SectionTone;
  size?: SectionSize;
  id?: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
  overlay?: ReactNode;
};

export default function PageSection({
  tone = "white",
  size = "immersive",
  id,
  className = "",
  innerClassName,
  children,
  overlay,
}: PageSectionProps) {
  const containerClass = innerClassName ?? "mx-auto max-w-6xl px-4 md:px-6";
  const glow = toneGlows[tone];

  return (
    <section
      id={id}
      className={`${sectionSizeClasses[size]} ${sectionToneClasses[tone]} ${className}`}
    >
      {glow && (
        <div className={`pointer-events-none absolute inset-0 ${glow}`} aria-hidden />
      )}
      {overlay}
      <div className={`relative w-full ${containerClass}`}>{children}</div>
    </section>
  );
}
