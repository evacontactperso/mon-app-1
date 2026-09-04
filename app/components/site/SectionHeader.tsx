export const sectionSubtitleClass =
  "mt-5 text-lg leading-relaxed text-[#515154] md:text-xl";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  highlight?: string;
  align?: "left" | "center";
  dark?: boolean;
  accent?: "indigo" | "pink" | "purple" | "warm";
};

export function SectionSubtitle({
  children,
  dark = false,
  align = "left",
  className = "",
}: {
  children: React.ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  const alignClass = align === "center" ? "mx-auto text-center max-w-3xl" : "max-w-3xl";
  return (
    <p
      className={`${sectionSubtitleClass} ${alignClass} ${
        dark ? "text-white/75" : "text-[#515154]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

const accentColors = {
  indigo: { eyebrow: "bg-[#EEF2FF] text-[#6366F1]", line: "from-[#6366F1] to-[#8134af]" },
  pink: { eyebrow: "bg-[#fde8e8] text-[#EE6B6E]", line: "from-[#EE6B6E] to-[#f58529]" },
  purple: { eyebrow: "bg-[#f3e5f5] text-[#8134af]", line: "from-[#8134af] to-[#6366F1]" },
  warm: { eyebrow: "bg-[#fef3e8] text-[#c2410c]", line: "from-[#f58529] via-[#EE6B6E] to-[#8134af]" },
};

const highlightPillClass = {
  indigo: "mx-1 inline-block rounded-full bg-[#6366F1] px-3 py-0.5 font-extrabold text-white md:px-4 md:py-1",
  pink: "mx-1 inline-block rounded-full bg-[#EE6B6E] px-3 py-0.5 font-extrabold text-white md:px-4 md:py-1",
  purple: "mx-1 inline-block rounded-full bg-[#8134af] px-3 py-0.5 font-extrabold text-white md:px-4 md:py-1",
  warm: "mx-1 inline-block rounded-full bg-[#fcaf45] px-3 py-0.5 font-extrabold text-white md:px-4 md:py-1",
};

function normalizeApostrophes(value: string) {
  return value.replace(/[\u2019\u2018\u02BC]/g, "'");
}

function renderTitleWithHighlight(
  title: string,
  highlight: string | undefined,
  accent: keyof typeof highlightPillClass
) {
  if (!highlight) return title;

  const normalizedTitle = normalizeApostrophes(title);
  const normalizedHighlight = normalizeApostrophes(highlight);
  const index = normalizedTitle.indexOf(normalizedHighlight);
  if (index === -1) return title;

  const matched = title.slice(index, index + highlight.length);

  return (
    <>
      {title.slice(0, index)}
      <span className={`${highlightPillClass[accent]} whitespace-nowrap`}>{matched}</span>
      {title.slice(index + matched.length)}
    </>
  );
}

function renderTitle(
  title: string,
  highlight: string | undefined,
  accent: keyof typeof highlightPillClass
) {
  if (!title.includes("\n")) {
    return renderTitleWithHighlight(title, highlight, accent);
  }

  return title.split("\n").map((line, index) => (
    <span key={index} className="block">
      {renderTitleWithHighlight(line, highlight, accent)}
    </span>
  ));
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  highlight,
  align = "left",
  dark = false,
  accent = "indigo",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto text-center max-w-3xl" : "max-w-3xl";
  const colors = accentColors[accent];
  const isMultiline = title.includes("\n");

  return (
    <div className={alignClass}>
      {eyebrow && (
        <span
          className={`inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest ${
            dark ? "border border-white/20 bg-white/10 text-white/90" : colors.eyebrow
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl lg:text-[2.85rem] ${
          dark ? "text-white" : "text-[#0B0B0B]"
        } ${isMultiline ? "whitespace-normal" : ""}`}
      >
        {renderTitle(title, highlight, accent)}
      </h2>
      {subtitle && (
        <SectionSubtitle dark={dark} align={align}>
          {subtitle}
        </SectionSubtitle>
      )}
    </div>
  );
}
