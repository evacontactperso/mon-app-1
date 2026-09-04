import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type Format = { title: string; duration: string; bestFor: string };

type FormatCardsProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  formats: Format[];
  variant?: "school" | "parent";
  tone?: SectionTone;
};

export default function FormatCards({
  id,
  eyebrow,
  title,
  subtitle,
  formats,
  variant = "school",
  tone = "alt",
}: FormatCardsProps) {
  const numBg =
    variant === "parent" ? "bg-[#EE6B6E] text-white" : "bg-[#6366F1] text-white";
  const accent = variant === "parent" ? "pink" : "indigo";

  return (
    <PageSection id={id} tone={tone}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        align="center"
        accent={accent}
      />
      <div className="relative mt-14">
        <div
          className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-[#6366F1]/30 via-[#EE6B6E]/30 to-transparent md:block"
          aria-hidden
        />
        <div className="flex flex-col gap-4">
          {formats.map((format, i) => (
            <article
              key={format.title}
              className={`group relative flex flex-col gap-4 rounded-3xl border bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)] md:flex-row md:items-center md:gap-6 md:pl-10 ${
                i === 0
                  ? "border-[#6366F1]/30 ring-2 ring-[#6366F1]/10"
                  : "border-slate-200/60"
              }`}
            >
              <div className="flex items-center gap-4 md:min-w-[280px]">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold shadow-md transition-transform group-hover:scale-110 ${numBg}`}
                >
                  {i + 1}
                </span>
                <h3 className="text-lg font-bold text-[#0B0B0B]">{format.title}</h3>
              </div>
              <span className="inline-flex w-fit rounded-full bg-gradient-to-r from-[#fde8e8] to-[#fdf0f0] px-4 py-2 text-sm font-bold text-[#EE6B6E]">
                {format.duration}
              </span>
              <p className="flex-1 text-sm leading-relaxed text-[#515154] md:text-right">
                {format.bestFor}
              </p>
            </article>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
