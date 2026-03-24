import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("developers");

export default function DevelopersPage() {
  return renderMarketingPage("developers");
}
