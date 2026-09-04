import PageSection, { type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";

type DeliverablesGridProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: string[];
  tone?: SectionTone;
};

export default function DeliverablesGrid({
  eyebrow,
  title,
  subtitle,
  items,
  tone = "white",
}: DeliverablesGridProps) {
  return (
    <PageSection tone={tone}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        align="center"
        accent="indigo"
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <div
            key={item}
            className="group flex items-start gap-3 rounded-2xl border border-[#6366F1]/15 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1]/30 hover:shadow-[0_12px_30px_rgba(99,102,241,0.1)]"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8134af] text-xs font-bold text-white shadow-md transition-transform group-hover:scale-110">
              {i + 1}
            </span>
            <span className="pt-1 text-sm font-semibold leading-snug text-[#0B0B0B]">{item}</span>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
