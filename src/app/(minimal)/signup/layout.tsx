export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="[&+footer]:hidden">{children}</div>;
}
