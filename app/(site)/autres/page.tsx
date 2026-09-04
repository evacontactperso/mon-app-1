import type { Metadata } from "next";
import AutresPage from "@/app/components/site/AutresPage";

export const metadata: Metadata = {
  title: "Autres",
  description: "Sections archivées — séances adaptées et inscription coaching.",
};

export default function AutresRoute() {
  return <AutresPage />;
}
