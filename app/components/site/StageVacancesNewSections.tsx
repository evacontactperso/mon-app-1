import PageSection from "./PageSection";
import SectionHeader from "./SectionHeader";
import TableCellContent from "./TableCellContent";

type DayColor = "indigo" | "pink" | "blue" | "yellow" | "green";

type ProgramDay = {
  day: number;
  theme: string;
  skills: string;
  activities: string;
  deliverable: string;
  color: DayColor;
};

type RowLabels = {
  theme: string;
  skills: string;
  activities: string;
  deliverable: string;
};

type StageProgramTableSectionProps = {
  id?: string;
  title: string;
  subtitle: string;
  rowLabels: RowLabels;
  days: ProgramDay[];
};

const rowKeys = ["theme", "skills", "activities", "deliverable"] as const;
type RowKey = (typeof rowKeys)[number];

const rowIcons: Record<Exclude<RowKey, "theme">, string> = {
  skills: "🧠",
  activities: "✏️",
  deliverable: "📦",
};

/** Une couleur par colonne — palette marque */
const columnColorPalette = [
  {
    header: "from-[#6366F1]/90 to-[#818cf8]",
    badge: "bg-[#6366F1]",
    cell: "bg-[#EEF2FF]/95 border-[#6366F1]/20 text-[#0B0B0B] shadow-[0_4px_20px_rgba(99,102,241,0.12)]",
    mobileBlock: "border-[#6366F1]/25 bg-[#EEF2FF]/90",
    dot: "bg-[#6366F1]",
    emphasis: "font-bold text-[#6366F1]",
  },
  {
    header: "from-[#EE6B6E]/90 to-[#F58A8D]",
    badge: "bg-[#EE6B6E]",
    cell: "bg-[#fde8e8]/95 border-[#EE6B6E]/20 text-[#0B0B0B] shadow-[0_4px_20px_rgba(238,107,110,0.12)]",
    mobileBlock: "border-[#EE6B6E]/25 bg-[#fde8e8]/90",
    dot: "bg-[#EE6B6E]",
    emphasis: "font-bold text-[#EE6B6E]",
  },
  {
    header: "from-[#2ec8dc]/90 to-[#5dd9e8]",
    badge: "bg-[#2ec8dc]",
    cell: "bg-[#ddf6f8]/95 border-[#2ec8dc]/25 text-[#0B0B0B] shadow-[0_4px_20px_rgba(46,200,220,0.12)]",
    mobileBlock: "border-[#2ec8dc]/30 bg-[#ddf6f8]/90",
    dot: "bg-[#2ec8dc]",
    emphasis: "font-bold text-[#0891b2]",
  },
  {
    header: "from-[#fcaf45]/90 to-[#fbbf24]",
    badge: "bg-[#fcaf45]",
    cell: "bg-[#fff8e7]/95 border-[#fcaf45]/25 text-[#0B0B0B] shadow-[0_4px_20px_rgba(252,175,69,0.12)]",
    mobileBlock: "border-[#fcaf45]/30 bg-[#fff8e7]/90",
    dot: "bg-[#fcaf45]",
    emphasis: "font-bold text-[#b45309]",
  },
  {
    header: "from-[#10b981]/90 to-[#34d399]",
    badge: "bg-[#10b981]",
    cell: "bg-[#ecfdf5]/95 border-emerald-300/40 text-[#0B0B0B] shadow-[0_4px_20px_rgba(16,185,129,0.12)]",
    mobileBlock: "border-emerald-300/40 bg-[#ecfdf5]/90",
    dot: "bg-emerald-500",
    emphasis: "font-bold text-[#059669]",
  },
];

const rowLabelStyle =
  "border border-white/15 bg-white/[0.08] text-white backdrop-blur-sm";

const rowLabelTextClass =
  "text-xs font-extrabold uppercase leading-tight tracking-wide text-white lg:text-sm";

const themeCellStyle = "bg-transparent";

function RowLabelCell({
  label,
  icon,
}: {
  label: string;
  icon: string;
}) {
  return (
    <div
      className={`flex min-h-[5.5rem] flex-col items-center justify-center gap-2 rounded-2xl px-2 py-3 text-center ${rowLabelStyle}`}
    >
      <span className="text-2xl leading-none" aria-hidden>
        {icon}
      </span>
      <span className={rowLabelTextClass}>{label}</span>
    </div>
  );
}

function ThemeCellContent({
  title,
  badgeClass,
  compact = false,
}: {
  title: string;
  badgeClass: string;
  compact?: boolean;
}) {
  const spaceIndex = title.indexOf(" ");
  const verb = spaceIndex === -1 ? title : title.slice(0, spaceIndex);
  const rest = spaceIndex === -1 ? "" : title.slice(spaceIndex + 1).trim();

  return (
    <div className="w-full text-center">
      <h3 className={`font-bold leading-snug ${compact ? "text-sm" : "text-base"}`}>
        <span
          className={`inline-block rounded-md px-1.5 py-0.5 font-semibold text-white ${badgeClass}`}
        >
          {verb}
        </span>
        {rest ? (
          <span
            className={`mt-1.5 block font-bold leading-snug text-white ${
              compact ? "text-sm" : "text-base"
            }`}
          >
            {rest}
          </span>
        ) : null}
      </h3>
    </div>
  );
}

export function StageProgramTableSection({
  id,
  title,
  subtitle,
  rowLabels,
  days,
}: StageProgramTableSectionProps) {
  return (
    <PageSection
      id={id}
      tone="dark"
      size="comfortable"
      innerClassName="mx-auto w-full max-w-[100rem] px-2 md:px-3"
      overlay={
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(238,107,110,0.14)_0%,_transparent_50%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(99,102,241,0.12)_0%,_transparent_50%)]" />
        </>
      }
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
        highlight="programme"
        dark
        align="center"
        accent="pink"
      />

      {/* Desktop : grille avec espacements */}
      <div className="mt-12 hidden lg:block">
        <div
          className="grid gap-3 xl:gap-4"
          style={{
            gridTemplateColumns: "8rem repeat(5, minmax(0, 1fr))",
          }}
        >
          {/* Coin vide */}
          <div className="min-h-[3.5rem]" aria-hidden />

          {/* En-têtes jours */}
          {days.map((day, i) => {
            const col = columnColorPalette[i % columnColorPalette.length];
            return (
            <div key={`header-${day.day}`} className="flex items-center justify-center">
              <div
                className={`flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/20 bg-gradient-to-br text-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] ${col.header}`}
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                  Jour
                </span>
                <span className="mt-0.5 text-2xl font-extrabold leading-none text-white">{day.day}</span>
              </div>
            </div>
            );
          })}

          {/* Lignes du programme */}
          {rowKeys.map((key) => (
              <div key={key} className="contents">
                {key === "theme" ? (
                  <div className="min-h-[5.5rem]" aria-hidden />
                ) : (
                  <RowLabelCell label={rowLabels[key]} icon={rowIcons[key]} />
                )}
                {days.map((day, colIndex) => {
                  const col = columnColorPalette[colIndex % columnColorPalette.length];
                  if (key === "theme") {
                    return (
                      <div
                        key={`${day.day}-${key}`}
                        className={`flex min-h-[5.5rem] items-center justify-center px-3 py-5 ${themeCellStyle}`}
                      >
                        <ThemeCellContent
                          title={day.theme}
                          badgeClass={col.badge}
                        />
                      </div>
                    );
                  }
                  return (
                  <div
                    key={`${day.day}-${key}`}
                    className={`flex min-h-[5.5rem] items-start rounded-2xl border px-4 py-4 text-sm leading-relaxed transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${col.cell}`}
                  >
                    <TableCellContent
                      text={day[key]}
                      bulletClassName={col.dot}
                      emphasisClassName={col.emphasis}
                      forceList={key === "deliverable"}
                    />
                  </div>
                  );
                })}
              </div>
          ))}
        </div>
      </div>

      {/* Tablette : scroll horizontal avec même grille */}
      <div className="mt-10 hidden overflow-x-auto pb-2 md:block lg:hidden">
        <div
          className="grid min-w-[880px] gap-3"
          style={{
            gridTemplateColumns: "8rem repeat(5, 12rem)",
          }}
        >
          <div aria-hidden />
          {days.map((day, i) => {
            const col = columnColorPalette[i % columnColorPalette.length];
            return (
            <div key={`header-md-${day.day}`} className="flex items-center justify-center">
              <div
                className={`flex h-20 w-20 flex-col items-center justify-center rounded-full border border-white/20 bg-gradient-to-br text-center ${col.header}`}
              >
                <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-white">
                  Jour
                </span>
                <span className="mt-0.5 text-xl font-extrabold leading-none text-white">{day.day}</span>
              </div>
            </div>
            );
          })}
          {rowKeys.map((key) => (
              <div key={`md-${key}`} className="contents">
                {key === "theme" ? (
                  <div aria-hidden />
                ) : (
                  <RowLabelCell label={rowLabels[key]} icon={rowIcons[key]} />
                )}
                {days.map((day, colIndex) => {
                  const col = columnColorPalette[colIndex % columnColorPalette.length];
                  if (key === "theme") {
                    return (
                      <div
                        key={`md-${day.day}-${key}`}
                        className={`px-3 py-4 ${themeCellStyle}`}
                      >
                        <ThemeCellContent
                          title={day.theme}
                          badgeClass={col.badge}
                          compact
                        />
                      </div>
                    );
                  }
                  return (
                  <div
                    key={`md-${day.day}-${key}`}
                    className={`rounded-2xl border px-3 py-3 text-xs leading-relaxed ${col.cell}`}
                  >
                    <TableCellContent
                      text={day[key]}
                      bulletClassName={col.dot}
                      emphasisClassName={col.emphasis}
                      forceList={key === "deliverable"}
                    />
                  </div>
                  );
                })}
              </div>
          ))}
        </div>
      </div>

      {/* Mobile : cartes par jour */}
      <div className="mt-10 space-y-5 md:hidden">
        {days.map((day, dayIndex) => {
          const col = columnColorPalette[dayIndex % columnColorPalette.length];
          return (
          <article
            key={day.day}
            className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <span
                className={`flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gradient-to-br text-white shadow-md ${col.header}`}
              >
                <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-white">
                  Jour
                </span>
                <span className="mt-0.5 text-lg font-extrabold leading-none">{day.day}</span>
              </span>
            </div>
            <div className="space-y-3">
              <div className={`px-4 py-4 ${themeCellStyle}`}>
                <ThemeCellContent
                  title={day.theme}
                  badgeClass={col.badge}
                />
              </div>
              {(rowKeys.slice(1) as Array<Exclude<RowKey, "theme">>).map((key) => (
                  <div
                    key={key}
                    className={`rounded-2xl border p-4 ${col.mobileBlock}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base leading-none" aria-hidden>
                        {rowIcons[key]}
                      </span>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#515154]">
                        {rowLabels[key]}
                      </p>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#0B0B0B]">
                      <TableCellContent
                        text={day[key]}
                        bulletClassName={col.dot}
                        emphasisClassName={col.emphasis}
                        forceList={key === "deliverable"}
                      />
                    </p>
                  </div>
              ))}
            </div>
          </article>
          );
        })}
      </div>
    </PageSection>
  );
}

type FormatCard = { icon: string; title: string; text: string };

const formatCardAccents = [
  {
    // ⚡ — jaune / énergie
    icon: "bg-gradient-to-br from-[#fff8e7] to-[#fde68a] border-[#fcaf45]/25",
    bar: "bg-[#fcaf45]",
    emphasis: "font-extrabold text-[#b45309]",
  },
  {
    // 👥 — indigo / collectif
    icon: "bg-gradient-to-br from-[#EEF2FF] to-[#C7D2FE] border-[#6366F1]/20",
    bar: "bg-[#6366F1]",
    emphasis: "font-extrabold text-[#6366F1]",
  },
  {
    // 🧰 — vert / outils concrets
    icon: "bg-gradient-to-br from-[#ecfdf5] to-[#a7f3d0] border-emerald-300/40",
    bar: "bg-emerald-500",
    emphasis: "font-extrabold text-[#059669]",
  },
  {
    // ✏️ — turquoise / pratique
    icon: "bg-gradient-to-br from-[#ddf6f8] to-[#a5f3fc] border-[#2ec8dc]/25",
    bar: "bg-[#2ec8dc]",
    emphasis: "font-extrabold text-[#0891b2]",
  },
  {
    // 🎒 — corail / rentrée
    icon: "bg-gradient-to-br from-[#fde8e8] to-[#fbcfe8] border-[#EE6B6E]/20",
    bar: "bg-[#EE6B6E]",
    emphasis: "font-extrabold text-[#EE6B6E]",
  },
] as const;

function renderFormatTitle(title: string, emphasisClassName: string) {
  const parts = title.split(/(\*[^*]+\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <span key={index} className={emphasisClassName}>
          {part.slice(1, -1)}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

export function StageFormatCardsSection({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: FormatCard[];
}) {
  return (
    <PageSection tone="white" size="comfortable" innerClassName="mx-auto w-full max-w-[100rem] px-4 md:px-3">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        highlight="format intensif"
        align="center"
        accent="indigo"
      />

      {/* Desktop : 5 cartes ; tablette : 2–3 colonnes */}
      <div className="mt-14 hidden gap-3 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((card, i) => {
          const accent = formatCardAccents[i % formatCardAccents.length];
          return (
            <div key={card.title} className="relative pt-7">
              <span
                className={`absolute left-1/2 top-7 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-2xl shadow-[0_8px_24px_rgba(15,23,42,0.12)] ${accent.icon}`}
                aria-hidden
              >
                {card.icon}
              </span>
              <article className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white px-4 pb-5 pt-10 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)] lg:px-5 lg:pb-6">
                <div className={`mx-auto mb-4 h-1 w-10 rounded-full ${accent.bar}`} />
                <h3 className="text-center text-sm font-bold leading-snug text-[#0B0B0B] lg:text-base">
                  {renderFormatTitle(card.title, accent.emphasis)}
                </h3>
                <p className="mt-2 flex-1 text-center text-xs leading-relaxed text-[#515154] lg:text-sm">
                  {card.text}
                </p>
              </article>
            </div>
          );
        })}
      </div>

      {/* Mobile : cartes empilées */}
      <div className="mt-12 space-y-8 md:hidden">
        {cards.map((card, i) => {
          const accent = formatCardAccents[i % formatCardAccents.length];
          return (
            <div key={card.title} className="relative pt-7">
              <span
                className={`absolute left-1/2 top-7 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-2xl shadow-[0_8px_24px_rgba(15,23,42,0.12)] ${accent.icon}`}
                aria-hidden
              >
                {card.icon}
              </span>
              <article className="rounded-2xl border border-slate-200/70 bg-white px-5 pb-5 pt-10 shadow-sm">
                <div className={`mx-auto mb-4 h-1 w-10 rounded-full ${accent.bar}`} />
                <h3 className="text-center text-base font-bold leading-snug text-[#0B0B0B]">
                  {renderFormatTitle(card.title, accent.emphasis)}
                </h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-[#515154]">
                  {card.text}
                </p>
              </article>
            </div>
          );
        })}
      </div>
    </PageSection>
  );
}

type GainRow = { before: string; after: string };

export function StageGainsSection({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle: string;
  rows: GainRow[];
}) {
  return (
    <PageSection tone="white" size="comfortable" innerClassName="mx-auto max-w-5xl px-4 md:px-6">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        highlight="changements"
        align="center"
        accent="warm"
      />
      <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
        <div className="rounded-[28px] border border-[#E5E5EA] bg-white p-6 md:p-8">
          <h3 className="text-center text-lg font-normal text-[#0B0B0B]">Avant le stage</h3>
          <p className="mt-4 text-center text-sm font-semibold text-[#515154]">L&apos;élève&nbsp;:</p>
          <ul className="mt-4 space-y-4">
            {rows.map((row) => (
              <li key={row.before} className="flex items-start gap-3 text-sm leading-relaxed text-[#0B0B0B] md:text-base">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B0B0B]"
                  aria-hidden
                />
                <span>{renderFormatTitle(row.before, "font-normal text-[#0B0B0B]")}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="rounded-[28px] bg-[#fffdf5] p-6 md:p-8"
          style={{
            boxShadow: "0 0 0 1px rgba(252,175,69,0.15), 0 0 24px rgba(252,175,69,0.28), 0 0 48px rgba(252,175,69,0.12)",
          }}
        >
          <h3 className="text-center text-lg font-bold text-[#fcaf45]">Après le stage</h3>
          <p className="mt-4 text-center text-sm font-semibold text-[#fcaf45]">L&apos;élève&nbsp;:</p>
          <ul className="mt-4 space-y-4">
            {rows.map((row) => (
              <li key={row.after} className="flex items-start gap-3 text-sm leading-relaxed text-[#0B0B0B] md:text-base">
                <span
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fcaf45] shadow-[0_4px_12px_rgba(252,175,69,0.45)]"
                  aria-hidden
                >
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 6.5L5 9l4.5-5.5" />
                  </svg>
                </span>
                <span>{renderFormatTitle(row.after, "font-bold text-[#0B0B0B]")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}
