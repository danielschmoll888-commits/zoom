import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("community");

export default function CommunityPage() {
  return renderMarketingPage("community");
}
