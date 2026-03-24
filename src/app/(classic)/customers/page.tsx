import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("customers");

export default function CustomersPage() {
  return renderMarketingPage("customers");
}
