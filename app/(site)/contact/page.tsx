import type { Metadata } from "next";
import ContactPage from "@/app/components/site/ContactPage";
import { contactMeta } from "@/app/data/content/contact";

export const metadata: Metadata = {
  title: contactMeta.title,
  description: contactMeta.description,
};

export default function Page() {
  return <ContactPage />;
}
