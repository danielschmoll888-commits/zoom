import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("demo");

export default function DemoPage() {
  return renderMarketingPage("demo");
}
