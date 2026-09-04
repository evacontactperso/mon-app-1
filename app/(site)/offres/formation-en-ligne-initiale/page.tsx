import type { Metadata } from "next";
import FormationEnLigneInitialePage from "@/app/components/site/FormationEnLigneInitialePage";
import { formationEnLigneInitialeMeta } from "@/app/data/content/formation-en-ligne-initiale";

export const metadata: Metadata = {
  title: `${formationEnLigneInitialeMeta.title} (initiale)`,
  description: formationEnLigneInitialeMeta.description,
};

export default function FormationEnLigneInitialeRoute() {
  return <FormationEnLigneInitialePage />;
}
