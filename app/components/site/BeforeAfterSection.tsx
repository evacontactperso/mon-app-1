import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type BeforeAfterSectionProps = {
  title: string;
  before: string[];
  after: string[];
  beforeLabel?: string;
  afterLabel?: string;
  tone?: SectionTone;
};

export default function BeforeAfterSection({
  title,
  before,
  after,
  beforeLabel = "Avant",
  afterLabel = "Après",
  tone = "alt",
}: BeforeAfterSectionProps) {
  return (
    <PageSection tone={tone}>
      <SectionHeader title={title} align="center" accent="warm" />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] border border-red-100 bg-gradient-to-br from-red-50/80 to-white p-8 shadow-sm">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-red-500">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">✕</span>
            {beforeLabel}
          </h3>
          <ul className="mt-6 space-y-3">
            {before.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#515154]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[28px] border border-[#6366F1]/20 bg-gradient-to-br from-[#EEF2FF]/80 to-white p-8 shadow-sm">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#6366F1]">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6366F1] text-white">
              ✓
            </span>
            {afterLabel}
          </h3>
          <ul className="mt-6 space-y-3">
            {after.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#515154]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}
