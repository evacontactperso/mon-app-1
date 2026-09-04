import type { Metadata } from "next";
import AccompagnementPersonnaliseCopiePage from "@/app/components/site/AccompagnementPersonnaliseCopiePage";
import { accompagnementPersonnaliseCopieMeta } from "@/app/data/content/accompagnement-personnalise-copie";

export const metadata: Metadata = {
  title: `${accompagnementPersonnaliseCopieMeta.title} (copie)`,
  description: accompagnementPersonnaliseCopieMeta.description,
};

export default function AccompagnementPersonnaliseCopieRoute() {
  return <AccompagnementPersonnaliseCopiePage />;
}
