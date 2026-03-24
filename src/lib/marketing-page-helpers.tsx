import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingPageTemplate from "@/components/MarketingPageTemplate";
import { getMarketingPage } from "@/lib/site-structure";

export function getMarketingMetadata(slug: string): Metadata {
  const page = getMarketingPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.label} | Zoom`,
    description: page.deck,
  };
}

export function renderMarketingPage(slug: string) {
  const page = getMarketingPage(slug);

  if (!page) {
    notFound();
  }

  return <MarketingPageTemplate page={page} />;
}
