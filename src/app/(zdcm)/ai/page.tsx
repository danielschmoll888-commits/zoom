import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("ai");

export default function AIPage() {
  return renderMarketingPage("ai");
}
