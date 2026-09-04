import PageSection, { type SectionTone } from "./PageSection";

type QuoteBlockProps = {
  quote: string;
  author: string;
  role: string;
  placeholderLabel: string;
  tone?: SectionTone;
};

export default function QuoteBlock({
  quote,
  author,
  role,
  placeholderLabel,
  tone = "purple",
}: QuoteBlockProps) {
  return (
    <PageSection tone={tone} innerClassName="mx-auto max-w-4xl px-4 md:px-6">
      <div className="relative rounded-[32px] border border-[#8134af]/15 bg-white/80 p-10 text-center shadow-[0_20px_60px_rgba(129,52,175,0.1)] backdrop-blur-sm md:p-14">
        <span
          className="pointer-events-none absolute left-6 top-4 text-8xl font-serif leading-none text-[#8134af]/15 md:left-10 md:text-9xl"
          aria-hidden
        >
          "
        </span>
        <span className="inline-block rounded-full border border-dashed border-[#EE6B6E]/40 bg-[#fde8e8]/50 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#EE6B6E]">
          {placeholderLabel}
        </span>
        <blockquote className="relative mt-8 text-2xl font-medium leading-relaxed text-[#0B0B0B] md:text-3xl">
          {quote}
        </blockquote>
        <footer className="mt-8 flex flex-col items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#6366F1] to-[#8134af] text-lg font-bold text-white">
            {author.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-[#0B0B0B]">{author}</p>
            <p className="text-sm text-[#515154]">{role}</p>
          </div>
        </footer>
      </div>
    </PageSection>
  );
}
