import Button from "./Button";
import PageSection from "./PageSection";
import SectionHeader from "./SectionHeader";
import TableCellContent from "./TableCellContent";

/* ── Tableau agenda (fond noir, même design que le programme stage) ── */

type AgendaWeek = {
  weekend: string;
  theme: string;
  skills: string;
  activities: string;
  deliverable: string;
};

type RowLabels = {
  theme: string;
  skills: string;
  activities: string;
  deliverable: string;
};

const rowKeys = ["theme", "skills", "activities", "deliverable"] as const;
type RowKey = (typeof rowKeys)[number];

const rowIcons: Record<Exclude<RowKey, "theme">, string> = {
  skills: "🧠",
  activities: "✏️",
  deliverable: "📦",
};

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

const monthAbbr: Record<string, string> = {
  janvier: "janv.",
  février: "févr.",
  mars: "mars",
  avril: "avr.",
  mai: "mai",
  juin: "juin",
  juillet: "juil.",
  août: "août",
  septembre: "sept.",
  octobre: "oct.",
  novembre: "nov.",
  décembre: "déc.",
};

function parseWeekend(weekend: string) {
  const match = weekend.match(/(?:WK du\s+)?(\d{1,2}-\d{1,2})\s+(\S+)/i);
  const dates = match?.[1] ?? weekend;
  const monthRaw = match?.[2]?.toLowerCase() ?? "";
  const month = monthAbbr[monthRaw] ?? match?.[2] ?? "";
  return { dates, month };
}

function RowLabelCell({ label, icon }: { label: string; icon: string }) {
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
  let verb = spaceIndex === -1 ? title : title.slice(0, spaceIndex);
  let rest = spaceIndex === -1 ? "" : title.slice(spaceIndex + 1).trim();

  if (/^(se|s'|le|la|un|une|des|les)$/i.test(verb) && rest) {
    const nextSpace = rest.indexOf(" ");
    if (nextSpace === -1) {
      verb = `${verb} ${rest}`;
      rest = "";
    } else {
      verb = `${verb} ${rest.slice(0, nextSpace)}`;
      rest = rest.slice(nextSpace + 1).trim();
    }
  }

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

function WeekendHeaderCircle({
  weekend,
  headerClass,
  size = "lg",
}: {
  weekend: string;
  headerClass: string;
  size?: "lg" | "md" | "sm";
}) {
  const { dates, month } = parseWeekend(weekend);
  const box =
    size === "lg"
      ? "h-24 w-24"
      : size === "md"
        ? "h-20 w-20"
        : "h-16 w-16";
  const dateSize = size === "lg" ? "text-lg" : "text-base";
  const labelSize = size === "sm" ? "text-[7px]" : "text-[8px]";

  return (
    <div
      className={`flex ${box} flex-col items-center justify-center rounded-full border border-white/15 bg-gradient-to-br text-center shadow-[0_8px_32px_rgba(0,0,0,0.25)] ${headerClass}`}
    >
      <span className={`${labelSize} font-bold uppercase tracking-[0.18em] text-white/85`}>
        WK
      </span>
      <span className={`${dateSize} font-extrabold leading-none text-white`}>{dates}</span>
      {month ? (
        <span className={`${labelSize} mt-0.5 font-bold uppercase tracking-wide text-white/85`}>
          {month}
        </span>
      ) : null}
    </div>
  );
}

export function WeeklyAgendaTableSection({
  id,
  title,
  subtitle,
  highlight,
  rowLabels,
  weeks,
}: {
  id?: string;
  title: string;
  subtitle: string;
  highlight?: string;
  rowLabels: RowLabels;
  weeks: AgendaWeek[];
}) {
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
        highlight={highlight ?? "L'agenda"}
        dark
        align="center"
        accent="warm"
      />

      <div className="mt-12 hidden lg:block">
        <div
          className="grid gap-3 xl:gap-4"
          style={{
            gridTemplateColumns: "8rem repeat(5, minmax(0, 1fr))",
          }}
        >
          <div className="min-h-[3.5rem]" aria-hidden />
          {weeks.map((week, i) => {
            const col = columnColorPalette[i % columnColorPalette.length];
            return (
              <div key={week.weekend} className="flex items-center justify-center">
                <WeekendHeaderCircle weekend={week.weekend} headerClass={col.header} />
              </div>
            );
          })}

          {rowKeys.map((key) => (
            <div key={key} className="contents">
              {key === "theme" ? (
                <div className="min-h-[5.5rem]" aria-hidden />
              ) : (
                <RowLabelCell label={rowLabels[key]} icon={rowIcons[key]} />
              )}
              {weeks.map((week, colIndex) => {
                const col = columnColorPalette[colIndex % columnColorPalette.length];
                if (key === "theme") {
                  return (
                    <div
                      key={`${week.weekend}-${key}`}
                      className={`flex min-h-[5.5rem] items-center justify-center px-3 py-5 ${themeCellStyle}`}
                    >
                      <ThemeCellContent title={week.theme} badgeClass={col.badge} />
                    </div>
                  );
                }
                return (
                  <div
                    key={`${week.weekend}-${key}`}
                    className={`flex min-h-[5.5rem] items-start rounded-2xl border px-4 py-4 text-sm leading-relaxed transition duration-200 hover:-translate-y-0.5 hover:shadow-lg ${col.cell}`}
                  >
                    <TableCellContent
                      text={week[key]}
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

      <div className="mt-10 hidden overflow-x-auto pb-2 md:block lg:hidden">
        <div
          className="grid min-w-[880px] gap-3"
          style={{
            gridTemplateColumns: "8rem repeat(5, 12rem)",
          }}
        >
          <div aria-hidden />
          {weeks.map((week, i) => {
            const col = columnColorPalette[i % columnColorPalette.length];
            return (
              <div key={`md-${week.weekend}`} className="flex items-center justify-center">
                <WeekendHeaderCircle weekend={week.weekend} headerClass={col.header} size="md" />
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
              {weeks.map((week, colIndex) => {
                const col = columnColorPalette[colIndex % columnColorPalette.length];
                if (key === "theme") {
                  return (
                    <div
                      key={`md-${week.weekend}-${key}`}
                      className={`px-3 py-4 ${themeCellStyle}`}
                    >
                      <ThemeCellContent
                        title={week.theme}
                        badgeClass={col.badge}
                        compact
                      />
                    </div>
                  );
                }
                return (
                  <div
                    key={`md-${week.weekend}-${key}`}
                    className={`rounded-2xl border px-3 py-3 text-xs leading-relaxed ${col.cell}`}
                  >
                    <TableCellContent
                      text={week[key]}
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

      <div className="mt-10 space-y-5 md:hidden">
        {weeks.map((week, weekIndex) => {
          const col = columnColorPalette[weekIndex % columnColorPalette.length];
          return (
            <article
              key={week.weekend}
              className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <WeekendHeaderCircle weekend={week.weekend} headerClass={col.header} size="sm" />
              </div>
              <div className="space-y-3">
                <div className={`px-4 py-4 ${themeCellStyle}`}>
                  <ThemeCellContent title={week.theme} badgeClass={col.badge} />
                </div>
                {(rowKeys.slice(1) as Array<Exclude<RowKey, "theme">>).map((key) => (
                  <div key={key} className={`rounded-2xl border p-4 ${col.mobileBlock}`}>
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
                        text={week[key]}
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

/* ── 5 cartes (design format intensif) ── */

const cardAccents = [
  {
    icon: "bg-gradient-to-br from-[#fff8e7] to-[#fde68a] border-[#fcaf45]/25",
    bar: "bg-[#fcaf45]",
    emphasis: "font-extrabold text-[#b45309]",
  },
  {
    icon: "bg-gradient-to-br from-[#EEF2FF] to-[#C7D2FE] border-[#6366F1]/20",
    bar: "bg-[#6366F1]",
    emphasis: "font-extrabold text-[#6366F1]",
  },
  {
    icon: "bg-gradient-to-br from-[#ecfdf5] to-[#a7f3d0] border-emerald-300/40",
    bar: "bg-emerald-500",
    emphasis: "font-extrabold text-[#059669]",
  },
  {
    icon: "bg-gradient-to-br from-[#ddf6f8] to-[#a5f3fc] border-[#2ec8dc]/25",
    bar: "bg-[#2ec8dc]",
    emphasis: "font-extrabold text-[#0891b2]",
  },
  {
    icon: "bg-gradient-to-br from-[#fde8e8] to-[#fbcfe8] border-[#EE6B6E]/20",
    bar: "bg-[#EE6B6E]",
    emphasis: "font-extrabold text-[#EE6B6E]",
  },
] as const;

function renderCardTitle(title: string, emphasisClassName: string) {
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

export function WeeklyWhyCardsSection({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: { icon: string; title: string; text: string }[];
}) {
  return (
    <PageSection tone="white" size="comfortable" innerClassName="mx-auto w-full max-w-[100rem] px-2 md:px-3">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        highlight="habitudes"
        align="center"
        accent="pink"
      />

      <div className="mt-14 hidden gap-3 md:grid md:grid-cols-5 md:gap-4">
        {cards.map((card, i) => {
          const accent = cardAccents[i % cardAccents.length];
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
                  {renderCardTitle(card.title, accent.emphasis)}
                </h3>
                <p className="mt-2 flex-1 text-center text-xs leading-relaxed text-[#515154] lg:text-sm">
                  {card.text}
                </p>
              </article>
            </div>
          );
        })}
      </div>

      <div className="mt-12 md:hidden">
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 pt-7 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cards.map((card, i) => {
            const accent = cardAccents[i % cardAccents.length];
            return (
              <div key={card.title} className="relative w-[min(78vw,260px)] shrink-0 snap-center">
                <span
                  className={`absolute left-1/2 top-0 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-2xl shadow-[0_8px_24px_rgba(15,23,42,0.12)] ${accent.icon}`}
                  aria-hidden
                >
                  {card.icon}
                </span>
                <article className="rounded-2xl border border-slate-200/70 bg-white px-5 pb-5 pt-10 shadow-sm">
                  <div className={`mx-auto mb-4 h-1 w-10 rounded-full ${accent.bar}`} />
                  <h3 className="text-center text-base font-bold leading-snug text-[#0B0B0B]">
                    {renderCardTitle(card.title, accent.emphasis)}
                  </h3>
                  <p className="mt-2 text-center text-sm leading-relaxed text-[#515154]">
                    {card.text}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
        <p className="text-center text-xs text-[#515154]/60">Glissez pour voir les 5 atouts →</p>
      </div>
    </PageSection>
  );
}

export function WeeklyInscriptionSection({
  id,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
}: {
  id?: string;
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}) {
  const [line1, line2] = title.split("\n");

  return (
    <PageSection
      id={id}
      tone="alt"
      size="comfortable"
      innerClassName="mx-auto max-w-4xl px-4 text-center md:px-6"
      overlay={
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(46,200,220,0.08)_0%,_transparent_70%)]" />
      }
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mt-4 font-bold leading-[1.2] tracking-tight text-[#0B0B0B]">
          <span className="block whitespace-nowrap text-[clamp(1.05rem,4.1vw,2.65rem)]">
            <span className="mx-1 inline-block rounded-full bg-[#6366F1] px-2.5 py-0.5 font-extrabold text-white md:px-4 md:py-1">
              Inscription
            </span>{" "}
            {line1?.replace(/^Inscription\s*/, "") ?? ""}
          </span>
          {line2 ? (
            <span className="mt-1 block text-[clamp(1.05rem,4.1vw,2.65rem)]">{line2}</span>
          ) : null}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-[#515154] md:text-xl">
          {subtitle}
        </p>
      </div>
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <Button href={ctaPrimary.href} variant="parent">
          {ctaPrimary.label}
        </Button>
        <Button href={ctaSecondary.href} variant="parentOutline">
          {ctaSecondary.label}
        </Button>
      </div>
    </PageSection>
  );
}
