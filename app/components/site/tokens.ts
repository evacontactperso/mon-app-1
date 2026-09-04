/** Design tokens alignés sur l'esthétique « Ancien site » */

export const colors = {
  bg: "#FFFFFF",
  bgAlt: "#F9F9FB",
  card: "#F6F7FB",
  text: "#0B0B0B",
  textBody: "#515154",
  textMuted: "#8E8E93",
  border: "border-slate-200/60",
  accent: "#EE6B6E",
  accentHover: "#E05558",
  black: "#0B0B0B",
} as const;

export const gradientAccent =
  "linear-gradient(105deg, #f58529 0%, #EE6B6E 45%, #8134af 100%)";

export const gradientAccentClass =
  "bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af]";

export const cardBase =
  "rounded-3xl border border-slate-200/60 bg-[#F6F7FB] shadow-[0_12px_30px_rgba(15,23,42,0.06)]";

export const cardHover =
  "transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(15,23,42,0.1)]";

export const iconCircle =
  "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f58529] via-[#EE6B6E] to-[#8134af] text-xl shadow-[0_8px_20px_rgba(238,107,110,0.25)]";

export const statCard =
  "relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-6 text-center shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]";

export const sectionTitle = "text-2xl font-bold text-[#0B0B0B] md:text-3xl";

export const sectionBody = "text-lg leading-relaxed text-[#515154]";

export const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[#EE6B6E] px-6 py-3 text-base font-semibold text-white shadow-[0_4px_14px_rgba(238,107,110,0.25)] transition hover:bg-[#E05558] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE6B6E]";

export const btnSecondary =
  "inline-flex items-center justify-center rounded-full border border-[#0B0B0B] bg-white px-6 py-3 text-base font-semibold text-[#0B0B0B] transition hover:bg-[#F5F5F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE6B6E]";

export const inputBase =
  "w-full rounded-xl border border-[#D2D2D7] bg-[#F5F5F7] px-4 py-3 text-[#0B0B0B] outline-none transition focus:border-[#0B0B0B] focus:bg-white focus:ring-2 focus:ring-[#EE6B6E]/20";

export const pastelSoft = {
  orange: "bg-[#fef3e8] border-[#f58529]/20",
  pink: "bg-[#fde8e8] border-[#EE6B6E]/20",
  purple: "bg-[#f3e5f5] border-[#8134af]/20",
  yellow: "bg-[#fff8e7] border-[#fcaf45]/20",
  green: "bg-[#ecfdf5] border-emerald-200/60",
} as const;
