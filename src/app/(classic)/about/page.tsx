import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("about");

export default function AboutPage() {
  return renderMarketingPage("about");
}
