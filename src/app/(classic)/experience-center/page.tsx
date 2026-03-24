import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("experience-center");

export default function ExperienceCenterPage() {
  return renderMarketingPage("experience-center");
}
