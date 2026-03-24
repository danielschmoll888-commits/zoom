import HeaderZdcm from "@/components/HeaderZdcm";
import FooterZdcm from "@/components/FooterZdcm";

export default function ZdcmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderZdcm />
      <main>{children}</main>
      <FooterZdcm />
    </>
  );
}
