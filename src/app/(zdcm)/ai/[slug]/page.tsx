import type { Metadata } from "next";
import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  return getMarketingMetadata(`ai/${slug}`);
}

export default async function AIDetailPage({ params }: RouteProps) {
  const { slug } = await params;
  return renderMarketingPage(`ai/${slug}`);
}
