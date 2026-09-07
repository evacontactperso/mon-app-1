import Link from "next/link";
import {
  CONTACT_PHONE,
  COPYRIGHT,
  FOOTER_LINKS,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/app/data/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-[#F9F9FB]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold text-[#0B0B0B]">{SITE_NAME}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#515154]">{SITE_TAGLINE}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#8E8E93]">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#515154] transition-colors hover:text-[#EE6B6E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#8E8E93]">Contact</p>
            <a
              href={CONTACT_PHONE.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-sm text-[#515154] transition-colors hover:text-[#EE6B6E]"
            >
              {CONTACT_PHONE.label}
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-slate-200/60 pt-6 text-center text-xs text-[#8E8E93]">
          {COPYRIGHT}
        </p>
      </div>
    </footer>
  );
}
