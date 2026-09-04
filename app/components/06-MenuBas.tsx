"use client";

/** Section Menu du bas : mentions légales, confidentialité, contact. */
export default function MenuBas() {
  return (
    <section
      className="border-t border-[#E5E5EA] bg-white py-12 lg:py-14"
      aria-label="Menu du bas"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <footer className="mt-0 border-0 pt-0 text-sm text-[#8E8E93]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Mon App. Tous droits réservés.</p>
            <div className="flex flex-wrap gap-6">
              <button
                type="button"
                className="text-sm text-[#8E8E93] transition hover:text-[#1D1D1F]"
              >
                Mentions légales
              </button>
              <button
                type="button"
                className="text-sm text-[#8E8E93] transition hover:text-[#1D1D1F]"
              >
                Confidentialité
              </button>
              <button
                type="button"
                className="text-sm text-[#8E8E93] transition hover:text-[#1D1D1F]"
              >
                Contact
              </button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
