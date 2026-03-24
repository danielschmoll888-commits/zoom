import type { Metadata } from "next";
import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

type RouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  return getMarketingMetadata(`products/${slug}`);
}

export default async function ProductDetailPage({ params }: RouteProps) {
  const { slug } = await params;
  return renderMarketingPage(`products/${slug}`);
}
