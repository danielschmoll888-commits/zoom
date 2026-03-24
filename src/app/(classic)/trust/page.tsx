import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("trust");

export default function TrustPage() {
  return renderMarketingPage("trust");
}
