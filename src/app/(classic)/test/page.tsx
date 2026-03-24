import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("test");

export default function TestPage() {
  return renderMarketingPage("test");
}
