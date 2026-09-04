import type { Metadata } from "next";
import { notFound } from "next/navigation";
import OfferPage from "@/app/components/site/OfferPage";
import FormationEnLignePage from "@/app/components/site/FormationEnLignePage";
import CoursHebdomadairesPage from "@/app/components/site/CoursHebdomadairesPage";
import StageVacancesPage from "@/app/components/site/StageVacancesPage";
import AccompagnementPersonnalisePage from "@/app/components/site/AccompagnementPersonnalisePage";
import { formationEnLigneMeta } from "@/app/data/content/formation-en-ligne";
import { coursHebdomadairesMeta } from "@/app/data/content/cours-hebdomadaires";
import { stageVacancesMeta } from "@/app/data/content/stage-vacances";
import { accompagnementPersonnaliseMeta } from "@/app/data/content/accompagnement-personnalise";
import { getOfferBySlug, OFFER_SLUGS } from "@/app/data/content/offres";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return OFFER_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "formation-en-ligne") {
    return {
      title: formationEnLigneMeta.title,
      description: formationEnLigneMeta.description,
    };
  }
  if (slug === "cours-hebdomadaires") {
    return {
      title: coursHebdomadairesMeta.title,
      description: coursHebdomadairesMeta.description,
    };
  }
  if (slug === "stage-vacances") {
    return {
      title: stageVacancesMeta.title,
      description: stageVacancesMeta.description,
    };
  }
  if (slug === "accompagnement-personnalise") {
    return {
      title: accompagnementPersonnaliseMeta.title,
      description: accompagnementPersonnaliseMeta.description,
    };
  }
  const offer = getOfferBySlug(slug);
  if (!offer) return {};
  return {
    title: offer.meta.title,
    description: offer.meta.description,
  };
}

export default async function OffreRoutePage({ params }: Props) {
  const { slug } = await params;
  if (slug === "formation-en-ligne") {
    return <FormationEnLignePage />;
  }
  if (slug === "cours-hebdomadaires") {
    return <CoursHebdomadairesPage />;
  }
  if (slug === "stage-vacances") {
    return <StageVacancesPage />;
  }
  if (slug === "accompagnement-personnalise") {
    return <AccompagnementPersonnalisePage />;
  }
  const offer = getOfferBySlug(slug);
  if (!offer) notFound();
  return <OfferPage offer={offer} />;
}
