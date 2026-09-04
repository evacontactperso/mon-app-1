import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type Module = {
  number: number;
  title: string;
  details: string;
  deliverable: string;
};

type ModuleTimelineProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  deliverableLabel: string;
  modules: Module[];
  tone?: SectionTone;
};

export default function ModuleTimeline({
  id,
  eyebrow,
  title,
  subtitle,
  deliverableLabel,
  modules,
  tone = "dark",
}: ModuleTimelineProps) {
  return (
    <PageSection
      id={id}
      tone={tone}
      overlay={
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.15)_0%,_transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(238,107,110,0.1)_0%,_transparent_50%)]" />
        </>
      }
    >
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        dark
        align="center"
        accent="purple"
      />
      <div className="relative mt-14">
        <div
          className="absolute bottom-4 left-6 top-4 hidden w-0.5 bg-gradient-to-b from-[#6366F1] via-[#EE6B6E] to-[#8134af] md:block"
          aria-hidden
        />
        <div className="space-y-4">
          {modules.map((mod) => (
            <article
              key={mod.number}
              className="group relative grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_16px_40px_rgba(0,0,0,0.25)] md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6 md:pl-10"
            >
              <div className="absolute -left-0.5 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8134af] ring-4 ring-[#0B0B0B] md:block" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6366F1] to-[#8134af] text-lg font-bold shadow-lg transition-transform group-hover:scale-110">
                {mod.number}
              </div>
              <div>
                <h3 className="text-lg font-bold">{mod.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/70">{mod.details}</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-center md:min-w-[200px]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/50">
                  {deliverableLabel}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{mod.deliverable}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
