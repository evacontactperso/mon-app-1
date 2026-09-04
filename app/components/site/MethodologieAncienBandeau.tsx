import PageSection from "./PageSection";

type MethodologieAncienBandeauProps = {
  eyebrow?: string;
  line1: string;
  line2: string;
  subtext: string;
};

function renderLine2(line2: string) {
  const highlight = "mode d'emploi";
  if (!line2.includes(highlight)) return line2;
  const [before, after] = line2.split(highlight);
  return (
    <>
      {before}
      <span className="bg-gradient-to-r from-[#fcd34d] via-[#f9a8d4] to-[#c4b5fd] bg-clip-text text-transparent">
        {highlight}
      </span>
      {after}
    </>
  );
}

const headlineClass =
  "text-2xl font-bold leading-tight text-white md:text-4xl lg:text-[2.75rem] xl:text-5xl lg:whitespace-nowrap";

export default function MethodologieAncienBandeau({
  eyebrow,
  line1,
  line2,
  subtext,
}: MethodologieAncienBandeauProps) {
  return (
    <PageSection
      tone="dark"
      size="immersive"
      innerClassName="mx-auto max-w-6xl px-4 text-center md:px-6 lg:max-w-7xl"
      overlay={
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(245,133,41,0.12)_0%,_transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(129,52,175,0.12)_0%,_transparent_50%)]" />
        </>
      }
    >
      {eyebrow && (
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/90">
          {eyebrow}
        </span>
      )}
      <h2 className={`${headlineClass} ${eyebrow ? "mt-6" : ""}`}>{line1}</h2>
      <h2 className={`mt-5 md:mt-6 ${headlineClass}`}>{renderLine2(line2)}</h2>
      <p className="mx-auto mt-8 max-w-2xl font-body text-lg leading-relaxed text-white/80 md:text-xl">
        {subtext}
      </p>
    </PageSection>
  );
}
