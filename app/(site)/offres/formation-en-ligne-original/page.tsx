import type { Metadata } from "next";
import FormationEnLigneOriginalPage from "@/app/components/site/FormationEnLigneOriginalPage";
import { formationEnLigneMeta } from "@/app/data/content/formation-en-ligne";

export const metadata: Metadata = {
  title: `${formationEnLigneMeta.title} (original)`,
  description: formationEnLigneMeta.description,
};

export default function FormationEnLigneOriginalRoute() {
  return <FormationEnLigneOriginalPage />;
}
