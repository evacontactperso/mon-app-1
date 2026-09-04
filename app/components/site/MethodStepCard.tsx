type MethodStepCardProps = {
  step: number;
  title: string;
  text: string;
};

export default function MethodStepCard({ step, title, text }: MethodStepCardProps) {
  return (
    <article className="group relative flex gap-4 overflow-hidden rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#EE6B6E]/20 hover:shadow-[0_12px_30px_rgba(238,107,110,0.08)]">
      <div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f58529] via-[#EE6B6E] to-[#8134af] opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#EE6B6E] to-[#8134af] text-sm font-bold text-white shadow-md transition-transform group-hover:scale-110">
        {step}
      </span>
      <div>
        <h3 className="font-bold text-[#0B0B0B]">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[#515154]">{text}</p>
      </div>
    </article>
  );
}
