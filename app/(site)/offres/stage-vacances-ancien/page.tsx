import type { Metadata } from "next";
import StageVacancesAncienPage from "@/app/components/site/StageVacancesAncienPage";
import { stageVacancesMeta } from "@/app/data/content/stage-vacances";

export const metadata: Metadata = {
  title: `${stageVacancesMeta.title} (ancienne version)`,
  description: stageVacancesMeta.description,
};

export default function StageVacancesAncienRoute() {
  return <StageVacancesAncienPage />;
}
