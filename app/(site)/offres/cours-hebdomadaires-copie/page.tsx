import type { Metadata } from "next";
import CoursHebdomadairesCopiePage from "@/app/components/site/CoursHebdomadairesCopiePage";
import { coursHebdomadairesCopieMeta } from "@/app/data/content/cours-hebdomadaires-copie";

export const metadata: Metadata = {
  title: `${coursHebdomadairesCopieMeta.title} (copie)`,
  description: coursHebdomadairesCopieMeta.description,
};

export default function CoursHebdomadairesCopieRoute() {
  return <CoursHebdomadairesCopiePage />;
}
