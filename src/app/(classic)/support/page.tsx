import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("support");

export default function SupportPage() {
  return renderMarketingPage("support");
}
