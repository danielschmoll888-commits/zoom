import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("store");

export default function StorePage() {
  return renderMarketingPage("store");
}
