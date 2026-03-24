import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("accessibility");

export default function AccessibilityPage() {
  return renderMarketingPage("accessibility");
}
