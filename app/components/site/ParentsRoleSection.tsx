import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

const blockColors = [
  "from-[#fef3e8] to-[#fff8e7] border-[#f58529]/25",
  "from-[#EEF2FF] to-[#e0e7ff] border-[#6366F1]/25",
  "from-[#fde8e8] to-[#fdf0f0] border-[#EE6B6E]/25",
  "from-[#f3e5f5] to-[#ede9fe] border-[#8134af]/25",
  "from-[#ecfdf5] to-[#f0fdf4] border-[#047857]/25",
  "from-[#fff5f0] to-[#fef3e8] border-[#c2410c]/25",
];

type ParentsRoleSectionProps = {
  eyebrow?: string;
  title: string;
  text: string;
  questions: string[];
  strong: string;
  tone?: SectionTone;
  size?: SectionSize;
};

export default function ParentsRoleSection({
  eyebrow,
  title,
  text,
  questions,
  strong,
  tone = "pink",
  size = "immersive",
}: ParentsRoleSectionProps) {
  return (
    <PageSection tone={tone} size={size}>
      <SectionHeader eyebrow={eyebrow} title={title} subtitle={text} accent="pink" />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {questions.map((q, i) => (
          <div
            key={q}
            className={`relative rounded-[28px] border bg-gradient-to-br p-5 pt-7 text-sm font-medium text-[#0B0B0B] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${blockColors[i % blockColors.length]}`}
          >
            <span
              className="absolute -left-1 -top-2 text-4xl font-serif leading-none text-[#EE6B6E]/25"
              aria-hidden
            >
              &ldquo;
            </span>
            <p className="relative leading-relaxed">{q}</p>
          </div>
        ))}
      </div>
      <div className="relative mx-auto mt-10 max-w-2xl rounded-[36px] p-[2px] shadow-[0_16px_50px_rgba(238,107,110,0.12)]">
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af] opacity-70" />
        <p className="relative rounded-[34px] bg-white px-6 py-5 text-center text-xl font-bold text-[#EE6B6E]">
          {strong}
        </p>
      </div>
    </PageSection>
  );
}
