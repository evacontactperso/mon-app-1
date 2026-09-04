"use client";

import FadeIn from "@/app/components/site/FadeIn";
import { ContactProposalContactLeft } from "@/app/components/site/ContactProposals";

export default function ContactPage() {
  return (
    <div className="overflow-x-hidden bg-[#FAF8F5]">
      <FadeIn eager>
        <ContactProposalContactLeft />
      </FadeIn>
    </div>
  );
}
