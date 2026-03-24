import Link from "next/link";
import { footerColumns, legalLinks } from "@/lib/site-structure";

const socials = [
  {
    label: "Blog",
    href: "/about/blog",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "/community",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
        <path d="M18.52 0H1.477C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.477 20h17.042C19.34 20 20 19.355 20 18.56V1.44C20 .645 19.34 0 18.52 0zM5.934 17.043H2.965V7.496h2.969v9.547zM4.449 6.195a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zM17.043 17.043h-2.968v-4.64c0-1.107-.02-2.532-1.543-2.532-1.543 0-1.78 1.207-1.78 2.452v4.72H7.785V7.496h2.848v1.305h.04c.397-.75 1.364-1.543 2.808-1.543 3.004 0 3.56 1.976 3.56 4.547v5.238z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "/about/press",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
        <path d="M11.903 8.465L19.35 0h-1.764l-6.468 7.35L5.955 0H0l7.808 11.12L0 20h1.764l6.828-7.765L14.045 20H20L11.903 8.465zm-2.417 2.747l-.791-1.108L2.4 1.3h2.71l5.08 7.114.792 1.108 6.607 9.248h-2.71l-5.393-7.548z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "/events",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
        <path d="M19.615 3.184A2.513 2.513 0 0017.85 1.42C16.265 1 10 1 10 1S3.735 1 2.15 1.42A2.513 2.513 0 00.385 3.184C0 4.77 0 10 0 10s0 5.23.385 6.816A2.513 2.513 0 002.15 18.58C3.735 19 10 19 10 19s6.265 0 7.85-.42a2.513 2.513 0 001.765-1.764C20 15.23 20 10 20 10s0-5.23-.385-6.816zM8 13.5V6.5l5.196 3.5L8 13.5z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "/about",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
        <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "/contact",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18">
        <path d="M10 1.802c2.67 0 2.987.01 4.042.058 2.71.124 3.973 1.405 4.097 4.098.048 1.054.058 1.37.058 4.042 0 2.672-.01 2.988-.058 4.042-.124 2.69-1.385 3.974-4.097 4.098-1.055.048-1.37.058-4.042.058-2.67 0-2.987-.01-4.042-.058-2.717-.124-3.974-1.41-4.097-4.098C1.812 12.988 1.802 12.672 1.802 10c0-2.672.01-2.988.058-4.042.124-2.694 1.385-3.974 4.097-4.098C7.013 1.812 7.33 1.802 10 1.802zM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.06 5.877.012 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.63 2.182 5.65 5.817 5.817C6.944 19.988 7.284 20 10 20s3.057-.012 4.123-.06c3.63-.167 5.653-2.186 5.817-5.817.048-1.066.06-1.407.06-4.123s-.012-3.056-.06-4.123C19.777 2.249 17.76.228 14.123.06 13.057.012 12.716 0 10 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468A3.334 3.334 0 1110 6.667a3.334 3.334 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [aboutColumn, downloadColumn, salesColumn, supportColumn] = footerColumns;

  return (
    <footer className="bg-[#39394d] text-white/88">
      <div className="px-14 py-9 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.15fr_1.05fr_1.2fr_0.92fr]">
          {[aboutColumn, downloadColumn, salesColumn, supportColumn].map((column) => (
            <div key={column.title}>
              <h2 className="text-[16px] font-semibold leading-[1.1] text-[#666666]">{column.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[14px] leading-[24px] text-white transition-colors hover:text-white/80">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-[16px] font-semibold leading-[1.1] text-[#666666]">Language</h2>
            <button
              type="button"
              className="mt-4 inline-flex min-w-[110px] items-center justify-between gap-3 rounded-md border border-white/25 px-4 py-2.5 text-[14px] text-white"
            >
              <span>English</span>
              <span className="text-[11px]">▼</span>
            </button>

            <h2 className="mt-8 text-[16px] font-semibold leading-[1.1] text-[#666666]">Currency</h2>
            <button
              type="button"
              className="mt-4 inline-flex min-w-[148px] items-center justify-between gap-3 rounded-md border border-white/25 px-4 py-2.5 text-[14px] text-white"
            >
              <span>US Dollars $</span>
              <span className="text-[11px]">▼</span>
            </button>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={`Zoom on ${social.label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(34,61,163,0.55)] text-white transition-colors hover:bg-[rgba(34,61,163,0.75)]"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-[14px] leading-[22px] text-white">
          <span>Copyright &copy; {new Date().getFullYear()} Zoom Communications, Inc. All rights reserved.</span>
          {legalLinks.map((link) => (
            <Link key={link.href} href={link.href} className="ml-1 transition-colors hover:text-white/80">
              {link.label}
            </Link>
          ))}
          <span className="ml-1">Your Privacy Choices</span>
          <span className="ml-1">Cookie Preferences</span>
        </div>
      </div>
    </footer>
  );
}
