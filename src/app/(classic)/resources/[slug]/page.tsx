import type { Metadata } from "next";
import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  return getMarketingMetadata(`resources/${slug}`);
}

export default async function ResourcesDetailPage({ params }: RouteProps) {
  const { slug } = await params;
  return renderMarketingPage(`resources/${slug}`);
}
