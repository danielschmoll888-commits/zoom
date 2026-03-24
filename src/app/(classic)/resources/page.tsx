import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("resources");

export default function ResourcesPage() {
  return renderMarketingPage("resources");
}
