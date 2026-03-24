import { getMarketingMetadata, renderMarketingPage } from "@/lib/marketing-page-helpers";

export const metadata = getMarketingMetadata("account");

export default function AccountPage() {
  return renderMarketingPage("account");
}
