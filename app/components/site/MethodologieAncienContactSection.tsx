import Button from "./Button";
import PageSection, { type SectionSize, type SectionTone } from "./PageSection";

type MethodologieAncienContactSectionProps = {
  title: string;
  text: string;
  cta: { label: string; href: string };
  tone?: SectionTone;
  size?: SectionSize;
};

export default function MethodologieAncienContactSection({
  title,
  text,
  cta,
  tone = "indigo",
  size = "comfortable",
}: MethodologieAncienContactSectionProps) {
  return (
    <PageSection
      tone={tone}
      size={size}
      innerClassName="mx-auto max-w-3xl px-4 text-center md:px-6"
      overlay={
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.08)_0%,_transparent_70%)]" />
      }
    >
      <h2 className="text-3xl font-bold leading-tight text-[#0B0B0B] md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-xl font-body text-lg leading-relaxed text-[#515154]">
        {text}
      </p>
      <div className="mt-8 flex justify-center">
        <Button href={cta.href} variant="parent">
          {cta.label}
        </Button>
      </div>
    </PageSection>
  );
}
