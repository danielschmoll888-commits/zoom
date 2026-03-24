import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("products");

export default function ProductsPage() {
  return renderMarketingPage("products");
}
