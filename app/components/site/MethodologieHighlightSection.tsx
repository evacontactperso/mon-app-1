import PageSection, { type SectionSize } from "./PageSection";

type MethodologieHighlightSectionProps = {
  line1: string;
  highlightWord: string;
  line2: string;
  size?: SectionSize;
};

function renderLine2(line2: string, highlightWord: string) {
  if (!line2.includes(highlightWord)) return line2;
  const [before, after] = line2.split(highlightWord);
  return (
    <>
      {before}
      <span className="bg-gradient-to-r from-[#f58529] via-[#EE6B6E] to-[#8134af] bg-clip-text text-transparent">
        {highlightWord}
      </span>
      {after}
    </>
  );
}

const headlineClass =
  "text-3xl font-bold leading-[1.1] tracking-tight text-[#0B0B0B] md:text-4xl lg:text-[2.85rem]";

export default function MethodologieHighlightSection({
  line1,
  highlightWord,
  line2,
  size = "immersive",
}: MethodologieHighlightSectionProps) {
  return (
    <PageSection
      tone="white"
      size={size}
      innerClassName="mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-center md:px-6"
      overlay={
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,133,41,0.07)_0%,_transparent_70%)]" />
      }
    >
      <h2 className={headlineClass}>{line1}</h2>
      <h2 className={`mt-4 md:mt-6 ${headlineClass}`}>
        {renderLine2(line2, highlightWord)}
      </h2>
    </PageSection>
  );
}
