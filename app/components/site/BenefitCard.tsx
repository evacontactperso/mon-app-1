import { cardBase, cardHover } from "./tokens";

type BenefitCardProps = {
  title: string;
  text: string;
};

export default function BenefitCard({ title, text }: BenefitCardProps) {
  return (
    <article className={`${cardBase} p-6 ${cardHover}`}>
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f58529] via-[#EE6B6E] to-[#8134af] text-white text-sm">
        ★
      </div>
      <h3 className="text-lg font-semibold text-[#0B0B0B]">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[#515154]">{text}</p>
    </article>
  );
}
