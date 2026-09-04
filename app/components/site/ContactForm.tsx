"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  contactContent,
  OFFRE_TO_MOTIF,
  type ContactMotifId,
} from "@/app/data/content/contact";
import { btnPrimary, inputBase } from "./tokens";

function requiredLabel(label: string) {
  return `${label} *`;
}

function resolveMotifFromParams(
  motifParam: string | null,
  offreParam: string | null,
): ContactMotifId | "" {
  if (motifParam && contactContent.form.motifs.some((m) => m.value === motifParam)) {
    return motifParam as ContactMotifId;
  }
  if (offreParam && OFFRE_TO_MOTIF[offreParam]) {
    return OFFRE_TO_MOTIF[offreParam];
  }
  return "";
}

// TODO: brancher l'envoi vers un service de formulaire (Formspree, Resend, API route, etc.)
export default function ContactForm() {
  const searchParams = useSearchParams();
  const f = contactContent.form;

  const motifParam = searchParams.get("motif");
  const offreParam = searchParams.get("offre");
  const formuleParam = searchParams.get("formule");

  const initialMotif = resolveMotifFromParams(motifParam, offreParam);

  const [motif, setMotif] = useState<ContactMotifId | "">(initialMotif);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const resolved = resolveMotifFromParams(motifParam, offreParam);
    if (resolved) setMotif(resolved);
  }, [motifParam, offreParam]);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: Record<string, string> = {};

    if (!data.get("prenom")) newErrors.prenom = "Le prénom est requis.";
    if (!data.get("nom")) newErrors.nom = "Le nom est requis.";

    const email = String(data.get("email") ?? "");
    if (!email) newErrors.email = "L'email est requis.";
    else if (!validateEmail(email)) newErrors.email = "Adresse email invalide.";

    if (!motif) newErrors.motif = "Veuillez sélectionner un motif.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    form.reset();
    setMotif("");
  }

  const labelClass = "mb-1.5 block text-sm font-medium text-[#0B0B0B]";
  const errorClass = "mt-1 text-xs text-red-600";
  const groupTitleClass =
    "mb-4 border-b border-slate-200/60 pb-2 text-sm font-bold uppercase tracking-widest text-[#6366F1]";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#EE6B6E]/30 bg-[#fde8e8] p-6 text-center">
        <p className="font-semibold text-[#0B0B0B]">Merci pour votre message.</p>
        <p className="mt-2 text-sm text-[#515154]">{f.footerNote}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
      {formuleParam && (
        <input type="hidden" name="formule" value={formuleParam} />
      )}

      <fieldset>
        <legend className={groupTitleClass}>{f.groups.parent}</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="prenom" className={labelClass}>
              {requiredLabel(f.fields.prenom)}
            </label>
            <input id="prenom" name="prenom" className={inputBase} autoComplete="given-name" />
            {errors.prenom && <p className={errorClass}>{errors.prenom}</p>}
          </div>
          <div>
            <label htmlFor="nom" className={labelClass}>
              {requiredLabel(f.fields.nom)}
            </label>
            <input id="nom" name="nom" className={inputBase} autoComplete="family-name" />
            {errors.nom && <p className={errorClass}>{errors.nom}</p>}
          </div>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelClass}>
              {requiredLabel(f.fields.email)}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={inputBase}
              autoComplete="email"
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="telephone" className={labelClass}>
              {f.fields.telephone}
            </label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              className={inputBase}
              autoComplete="tel"
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className={groupTitleClass}>{f.groups.child}</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="niveau" className={labelClass}>
              {f.fields.niveau}
            </label>
            <select id="niveau" name="niveau" className={inputBase} defaultValue="">
              {f.niveaux.map((n) => (
                <option key={n.value || "empty"} value={n.value}>
                  {n.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="etablissement" className={labelClass}>
              {f.fields.etablissement}
            </label>
            <select id="etablissement" name="etablissement" className={inputBase} defaultValue="">
              {f.etablissements.map((e) => (
                <option key={e.value || "empty"} value={e.value}>
                  {e.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className={groupTitleClass}>{f.groups.request}</legend>
        <div>
          <label htmlFor="motif" className={labelClass}>
            {requiredLabel(f.fields.motif)}
          </label>
          <select
            id="motif"
            name="motif"
            className={inputBase}
            value={motif}
            onChange={(e) => setMotif(e.target.value as ContactMotifId | "")}
          >
            {f.motifs.map((m) => (
              <option key={m.value || "empty"} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
          {errors.motif && <p className={errorClass}>{errors.motif}</p>}
        </div>

        <div className="mt-5">
          <p className={labelClass}>{f.fields.difficultes}</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {f.difficultes.map((d) => (
              <label
                key={d.value}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200/60 bg-[#F9F9FB] px-4 py-3 text-sm text-[#0B0B0B] transition hover:border-[#EE6B6E]/30 hover:bg-white"
              >
                <input
                  type="checkbox"
                  name="difficultes"
                  value={d.value}
                  className="h-4 w-4 rounded border-[#D2D2D7] text-[#EE6B6E] focus:ring-[#EE6B6E]/20"
                />
                {d.label}
              </label>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="message" className={labelClass}>
            {f.fields.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={inputBase}
            placeholder={f.placeholders.message}
            defaultValue={
              formuleParam
                ? `Formule envisagée : ${formuleParam}\n\n`
                : undefined
            }
          />
        </div>
      </fieldset>

      <div>
        <button type="submit" className={`${btnPrimary} w-full sm:w-auto`}>
          {f.fields.submit}
        </button>
        <p className="mt-4 text-xs leading-relaxed text-[#8E8E93]">{f.footerNote}</p>
      </div>
    </form>
  );
}
