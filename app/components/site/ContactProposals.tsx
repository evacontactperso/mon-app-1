"use client";

import SectionHeader from "./SectionHeader";

const WHATSAPP = {
  label: "+33 6 51 85 32 75",
  href: "https://wa.me/33651853275",
};

const EMAIL = {
  label: "eva.methodescolaire@gmail.com",
  href: "mailto:eva.methodescolaire@gmail.com",
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChannelChip({
  label,
  value,
  href,
  cta,
  external,
  icon,
  iconClassName,
  ctaClassName,
}: {
  label: string;
  value: string;
  href: string;
  cta: string;
  external?: boolean;
  icon: React.ReactNode;
  iconClassName: string;
  ctaClassName: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-[0_8px_24px_rgba(15,23,42,0.06)] transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.1)]"
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${iconClassName}`}
      >
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8E8E93]">{label}</p>
        <p className="mt-0.5 truncate text-sm font-semibold text-[#0B0B0B]">{value}</p>
        <p
          className={`mt-1.5 inline-flex items-center gap-1 text-sm font-bold transition group-hover:gap-2 ${ctaClassName}`}
        >
          {cta}
          <span aria-hidden>→</span>
        </p>
      </div>
    </a>
  );
}

export function ContactProposalContactLeft() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(238,107,110,0.08)_0%,_transparent_55%)]" />
      <div className="relative mx-auto max-w-xl px-6">
        <SectionHeader
          title="Contact"
          subtitle="Une question ? Écrivez-moi, je vous réponds rapidement."
          align="center"
          accent="pink"
        />

        <div className="mx-auto mt-10 grid max-w-md gap-3 sm:grid-cols-1">
          <ChannelChip
            label="WhatsApp"
            value={WHATSAPP.label}
            href={WHATSAPP.href}
            cta="Écrire sur WhatsApp"
            external
            iconClassName="bg-[#ecfdf5] text-[#059669] ring-1 ring-emerald-300/40"
            ctaClassName="text-[#059669]"
            icon={<WhatsAppIcon className="h-5 w-5" />}
          />
          <ChannelChip
            label="E-mail"
            value={EMAIL.label}
            href={EMAIL.href}
            cta="Envoyer un e-mail"
            iconClassName="bg-[#EEF2FF] text-[#6366F1] ring-1 ring-[#6366F1]/20"
            ctaClassName="text-[#6366F1]"
            icon={<MailIcon className="h-5 w-5" />}
          />
        </div>
      </div>
    </section>
  );
}
