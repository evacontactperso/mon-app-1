import Link from "next/link";
import Button from "./Button";
import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type DecisionOption = {
  question: string;
  answer: string;
  href: string;
};

type DecisionLinksSectionProps = {
  eyebrow?: string;
  title: string;
  options: DecisionOption[];
  cta: { label: string; href: string };
  tone?: SectionTone;
  size?: SectionSize;
};

export default function DecisionLinksSection({
  eyebrow,
  title,
  options,
  cta,
  tone = "white",
  size = "immersive",
}: DecisionLinksSectionProps) {
  return (
    <PageSection tone={tone} size={size}>
      <SectionHeader eyebrow={eyebrow} title={title} align="center" accent="warm" />
      <div className="relative mx-auto mt-14 max-w-2xl">
        <div
          className="absolute bottom-8 left-5 top-8 hidden w-px bg-gradient-to-b from-[#6366F1]/30 via-[#EE6B6E]/30 to-transparent md:block"
          aria-hidden
        />
        <div className="flex flex-col gap-4">
          {options.map((opt, i) => (
            <Link
              key={opt.question}
              href={opt.href}
              className="group relative flex flex-col gap-2 rounded-3xl border border-slate-200/60 bg-white p-5 pl-6 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EE6B6E]/30 hover:shadow-[0_16px_40px_rgba(238,107,110,0.1)] md:pl-10"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EE6B6E] text-sm font-bold text-white shadow-md transition-transform group-hover:scale-110">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm text-[#515154]">{opt.question}</p>
                  <p className="mt-2 font-bold text-[#EE6B6E]">→ {opt.answer}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <Button href={cta.href} variant="parent">
          {cta.label}
        </Button>
      </div>
    </PageSection>
  );
}
