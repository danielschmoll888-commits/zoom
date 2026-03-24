import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("integrations");

export default function IntegrationsPage() {
  return renderMarketingPage("integrations");
}
