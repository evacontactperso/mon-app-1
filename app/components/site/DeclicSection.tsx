import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type DeclicSectionProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  questions: string[];
  text: string;
  tone?: SectionTone;
  size?: SectionSize;
};

export default function DeclicSection({
  eyebrow,
  title,
  lead = "Un élève autonome sait répondre à :",
  questions,
  text,
  tone = "white",
  size = "immersive",
}: DeclicSectionProps) {
  return (
    <PageSection tone={tone} size={size} innerClassName="mx-auto max-w-4xl px-4 md:px-6">
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="purple" />
      <div className="relative mt-12 rounded-[36px] p-[2px] shadow-[0_24px_70px_rgba(129,52,175,0.1)]">
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af] opacity-70" />
        <div className="relative rounded-[34px] bg-white px-6 py-10 md:px-10 md:py-12">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-wide text-[#515154]">
            {lead}
          </p>
          <div className="relative">
            <div
              className="absolute bottom-4 left-5 top-4 w-0.5 bg-gradient-to-b from-[#f58529] via-[#EE6B6E] to-[#8134af] opacity-30"
              aria-hidden
            />
            <ol className="space-y-4">
              {questions.map((q, i) => (
                <li key={q} className="relative flex items-start gap-4 pl-2">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#EE6B6E] to-[#8134af] text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </span>
                  <span className="flex-1 rounded-2xl border border-slate-200/60 bg-[#F9F9FB] px-5 py-4 text-base font-medium text-[#0B0B0B] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EE6B6E]/20 hover:bg-white hover:shadow-md">
                    {q}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-10 text-center text-base leading-relaxed text-[#515154]">{text}</p>
        </div>
      </div>
    </PageSection>
  );
}
