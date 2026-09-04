import type { Metadata } from "next";
import FormationEnLigneAncienPage from "@/app/components/site/FormationEnLigneAncienPage";
import { formationEnLigneMeta } from "@/app/data/content/formation-en-ligne";

export const metadata: Metadata = {
  title: `${formationEnLigneMeta.title} (ancien)`,
  description: formationEnLigneMeta.description,
};

export default function FormationEnLigneAncienRoute() {
  return <FormationEnLigneAncienPage />;
}
