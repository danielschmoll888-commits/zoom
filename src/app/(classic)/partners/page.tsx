import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("partners");

export default function PartnersPage() {
  return renderMarketingPage("partners");
}
