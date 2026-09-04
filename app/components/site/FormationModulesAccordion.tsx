"use client";

import { useState } from "react";
import { ChevronDown, MODULE_THEME } from "./formation/FormationDesign";

type ModuleItem = {
  number: number;
  question: string;
  title: string;
  problem: string;
  learns: string[];
  supports: string[];
};

export default function FormationModulesAccordion({ items }: { items: ModuleItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((mod, index) => {
        const theme = MODULE_THEME[(mod.number - 1) % MODULE_THEME.length];
        const isOpen = openIndex === index;

        return (
          <article
            key={mod.number}
            className="overflow-hidden rounded-[28px] bg-white shadow-[0_16px_50px_rgba(0,0,0,0.15)]"
          >
            <button
              type="button"
              className="flex w-full items-stretch text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <div
                className={`flex w-28 shrink-0 flex-col justify-between p-5 md:w-36 ${theme.bg}`}
              >
                <span className="text-3xl font-extrabold font-heading text-white/40 md:text-4xl">
                  0{mod.number}
                </span>
                <p className="text-xs font-bold leading-snug text-white md:text-sm">{mod.title}</p>
              </div>
              <div className="flex flex-1 items-center justify-between gap-4 p-5 md:p-6">
                <p className="text-sm font-medium text-[#515154] md:text-base">{mod.question}</p>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F9F9FB] text-[#6366F1] transition-transform ${isOpen ? "rotate-180" : ""}`}
                >
                  <ChevronDown />
                </span>
              </div>
            </button>

            {isOpen && (
              <div className="border-t border-slate-100 px-5 pb-6 pt-4 md:px-6">
                <p className="rounded-2xl bg-[#FAF8F5] px-4 py-3 text-sm italic text-[#515154]">
                  {mod.problem}
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className={`rounded-2xl border-2 p-5 ${theme.light} ${theme.border}`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0B0B0B]">
                      L&apos;élève apprend à
                    </p>
                    <ul className="mt-3 space-y-2">
                      {mod.learns.map((item) => (
                        <li key={item} className="text-sm font-medium text-[#0B0B0B]">
                          → {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-2xl border-2 p-5 ${theme.light} ${theme.border}`}>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#0B0B0B]">
                      Supports inclus
                    </p>
                    <ul className="mt-3 space-y-2">
                      {mod.supports.map((item) => (
                        <li key={item} className="text-sm font-medium text-[#0B0B0B]">
                          ✓ {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
