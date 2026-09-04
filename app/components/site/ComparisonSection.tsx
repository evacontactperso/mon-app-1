import PageSection, { type SectionSize, type SectionTone } from "./PageSection";
import SectionHeader from "./SectionHeader";
import TableCellContent from "./TableCellContent";
import {
  FormationSectionTitle,
  TintedPageSection,
  sectionColorAt,
  type BrandSectionColor,
  type SitePage,
} from "./formation/FormationDesign";

type Row = { problem: string; consequence: string };

type ComparisonSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  text?: string;
  rows: Row[];
  problemLabel: string;
  consequenceLabel: string;
  closing?: string;
  tone?: SectionTone;
  size?: SectionSize;
  align?: "left" | "center";
  page?: SitePage;
  sectionIndex?: number;
  highlight?: string;
  themeColor?: BrandSectionColor;
};

function renderDemandTitle(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span
          key={index}
          className="box-decoration-clone rounded-xl bg-[#f26e6e] px-2 py-0.5 font-semibold text-white"
        >
          {part.slice(1, -1)}
        </span>
      );
    }

    return part;
  });
}

const badgePosition =
  "absolute left-0 top-0 z-10 -translate-x-[40%] -translate-y-[40%]";

function CrossBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex h-7 w-7 items-center justify-center rounded-md bg-[#f26e6e] shadow-sm ${className}`}
      aria-hidden
    >
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white">
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-[#f26e6e]" aria-hidden>
          <path
            d="M2.5 2.5l7 7M9.5 2.5l-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </span>
  );
}

function CheckBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`flex h-7 w-7 items-center justify-center rounded-md bg-[#059669] shadow-sm ${className}`}
      aria-hidden
    >
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white">
        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-[#059669]" aria-hidden>
          <path
            d="M2.5 6l2.5 2.5L9.5 3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </span>
    </span>
  );
}

export default function ComparisonSection({
  eyebrow,
  title,
  subtitle,
  text,
  rows,
  problemLabel,
  consequenceLabel,
  closing,
  tone = "white",
  size = "immersive",
  align = "left",
  page,
  sectionIndex = 1,
  highlight,
  themeColor,
}: ComparisonSectionProps) {
  const sectionColor =
    themeColor ?? (page ? sectionColorAt(page, sectionIndex) : null);

  const content = (
    <>
      {sectionColor ? (
        <div className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : ""}`}>
          <FormationSectionTitle highlight={highlight} pill={sectionColor}>
            {title}
          </FormationSectionTitle>
          {subtitle && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#515154] md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      ) : (
        <SectionHeader
          title={title}
          subtitle={subtitle ?? text}
          accent="indigo"
          align={align}
        />
      )}
      <div className="mt-14 grid gap-4 pt-3 pl-5 md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-6 md:gap-y-4">
        {rows.map((row) => (
          <div key={row.problem} className="contents group">
            <div className="relative w-full rounded-2xl border border-slate-200/60 bg-gradient-to-br from-red-50/80 to-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)] md:p-6">
              <CrossBadge className={badgePosition} />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#f26e6e]">
                  {problemLabel}
                </p>
                <p className="mt-1 text-base leading-relaxed text-[#0B0B0B]">
                  {renderDemandTitle(row.problem)}
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl border border-[#c8e6c9]/80 bg-gradient-to-br from-[#ecfdf5] via-[#f4faf0] to-[#fefcf3] p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_40px_rgba(15,23,42,0.1)] md:p-6">
              <CheckBadge className={badgePosition} />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#047857]">
                  {consequenceLabel}
                </p>
                <p className="mt-1 text-[#515154]">
                  <TableCellContent
                    text={row.consequence}
                    bulletClassName="bg-[#059669]"
                    emphasisClassName="font-semibold text-[#047857]"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {closing && (
        <p className="mt-10 text-center text-lg font-bold text-[#0B0B0B]">{closing}</p>
      )}
    </>
  );

  if (sectionColor) {
    return (
      <TintedPageSection pillColor={sectionColor} size={size}>
        {content}
      </TintedPageSection>
    );
  }

  return (
    <PageSection tone={tone} size={size}>
      {content}
    </PageSection>
  );
}
