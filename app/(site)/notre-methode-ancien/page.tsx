import type { Metadata } from "next";
import MethodologieAncienPage from "@/app/components/site/MethodologieAncienPage";
import { methodologieAncienMeta } from "@/app/data/content/methodologie-ancien";

export const metadata: Metadata = {
  title: `${methodologieAncienMeta.title} (ancienne version)`,
  description: methodologieAncienMeta.description,
};

export default function NotreMethodeAncienRoute() {
  return <MethodologieAncienPage />;
}
