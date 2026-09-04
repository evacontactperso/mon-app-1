import PageSection from "./PageSection";
import SectionHeader from "./SectionHeader";

export type SolutionRow = { problem: string; solution: string };

export type SolutionsProposalProps = {
  title: string;
  subtitle: string;
  problemLabel: string;
  solutionLabel: string;
  rows: SolutionRow[];
};

function Emph({
  text,
  emphasisClassName,
}: {
  text: string;
  emphasisClassName: string;
}) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <span key={i} className={emphasisClassName}>
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

/** Découpe le wording exact en phrases (bullet points) */
function solutionBullets(text: string): string[] {
  return text
    .split(/(?<=\.)\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

/** Deux colonnes inspirées de « Les changements après le stage » */
export function SolutionsProposalTickets({
  title,
  subtitle,
  problemLabel,
  solutionLabel,
  rows,
}: SolutionsProposalProps) {
  return (
    <PageSection tone="white" size="comfortable" innerClassName="mx-auto max-w-5xl px-4 md:px-6">
      <SectionHeader
        title={title}
        subtitle={subtitle}
        highlight="méthodes concrètes"
        align="center"
        accent="warm"
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
        <div className="rounded-[28px] border border-[#E5E5EA] bg-white p-6 md:p-8">
          <h3 className="text-center text-lg font-normal text-[#0B0B0B]">{problemLabel}</h3>
          <ul className="mt-6 space-y-4">
            {rows.map((row) => (
              <li
                key={row.problem}
                className="flex items-start gap-3 text-sm leading-relaxed text-[#0B0B0B] md:text-base"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B0B0B]"
                  aria-hidden
                />
                <span>
                  <Emph text={row.problem} emphasisClassName="font-normal text-[#0B0B0B]" />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="rounded-[28px] bg-[#fffdf5] p-6 md:p-8"
          style={{
            boxShadow:
              "0 0 0 1px rgba(252,175,69,0.15), 0 0 24px rgba(252,175,69,0.28), 0 0 48px rgba(252,175,69,0.12)",
          }}
        >
          <h3 className="text-center text-lg font-bold text-[#fcaf45]">{solutionLabel}</h3>
          <ul className="mt-6 space-y-5">
            {rows.map((row) => (
              <li key={row.solution} className="flex items-start gap-3">
                <span
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fcaf45] shadow-[0_4px_12px_rgba(252,175,69,0.45)]"
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 12 12"
                    className="h-2.5 w-2.5"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2.5 6.5L5 9l4.5-5.5" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1 space-y-1.5 text-sm leading-relaxed text-[#0B0B0B] md:text-base">
                  {solutionBullets(row.solution).map((item) => (
                    <p key={item}>
                      <Emph text={item} emphasisClassName="font-bold text-[#0B0B0B]" />
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}
