import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("feedback");

export default function FeedbackPage() {
  return renderMarketingPage("feedback");
}
