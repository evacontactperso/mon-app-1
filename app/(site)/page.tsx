import type { Metadata } from "next";
import MethodologiePage from "@/app/components/site/MethodologiePage";
import { methodologieMeta } from "@/app/data/content/methodologie";

export const metadata: Metadata = {
  title: methodologieMeta.title,
  description: methodologieMeta.description,
};

export default function AccueilPage() {
  return <MethodologiePage />;
}
