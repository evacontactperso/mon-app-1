import { cardBase, cardHover } from "./tokens";

type ProgramModuleCardProps = {
  number: number;
  title: string;
  details: string;
  deliverable: string;
};

export default function ProgramModuleCard({
  number,
  title,
  details,
  deliverable,
}: ProgramModuleCardProps) {
  return (
    <article className={`${cardBase} flex flex-col p-6 ${cardHover}`}>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3e5f5] text-sm font-bold text-[#8134af]">
          {number}
        </span>
        <h3 className="text-lg font-semibold text-[#0B0B0B]">Module {number} — {title}</h3>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-[#515154]">{details}</p>
      <div className="mt-4 rounded-xl border border-slate-200/50 bg-white px-4 py-2">
        <p className="text-xs font-medium text-[#515154]">
          Livrable : <span className="font-semibold text-[#0B0B0B]">{deliverable}</span>
        </p>
      </div>
    </article>
  );
}
