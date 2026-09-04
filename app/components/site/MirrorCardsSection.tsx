import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type MirrorSide = { title: string; items: string[] };

type MirrorCardsSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  parent: MirrorSide;
  student: MirrorSide;
  transition?: string;
  tone?: SectionTone;
  size?: SectionSize;
};

export default function MirrorCardsSection({
  eyebrow,
  title,
  subtitle,
  parent,
  student,
  transition,
  tone = "alt",
  size = "immersive",
}: MirrorCardsSectionProps) {
  return (
    <PageSection tone={tone} size={size}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        align="center"
        accent="warm"
      />
      <div className="mt-14">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <article className="group rounded-[28px] border border-[#f58529]/25 bg-gradient-to-br from-[#fef3e8]/80 via-white to-[#fff8e7]/50 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(245,133,41,0.15)]">
            <h3 className="text-xl font-bold text-[#c2410c]">{parent.title}</h3>
            <ul className="mt-6 space-y-4">
              {parent.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-[#515154] md:text-lg">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f58529] text-xs font-bold text-white">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="group rounded-[28px] border border-emerald-300/40 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/30 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(16,185,129,0.15)]">
            <h3 className="text-xl font-bold text-emerald-700">{student.title}</h3>
            <ul className="mt-6 space-y-4">
              {student.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-[#515154] md:text-lg">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
      {transition && (
        <p className="mx-auto mt-10 max-w-2xl rounded-2xl bg-slate-50 px-6 py-5 text-center text-xl font-semibold leading-relaxed text-[#0B0B0B]">
          {transition}
        </p>
      )}
    </PageSection>
  );
}
