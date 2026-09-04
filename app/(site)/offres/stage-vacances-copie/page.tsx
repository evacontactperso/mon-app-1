import type { Metadata } from "next";
import StageVacancesCopiePage from "@/app/components/site/StageVacancesCopiePage";
import { stageVacancesCopieMeta } from "@/app/data/content/stage-vacances-copie";

export const metadata: Metadata = {
  title: `${stageVacancesCopieMeta.title} (copie)`,
  description: stageVacancesCopieMeta.description,
};

export default function StageVacancesCopieRoute() {
  return <StageVacancesCopiePage />;
}
