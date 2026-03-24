import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("learning-center");

export default function LearningCenterPage() {
  return renderMarketingPage("learning-center");
}
