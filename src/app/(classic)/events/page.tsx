import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("events");

export default function EventsPage() {
  return renderMarketingPage("events");
}
