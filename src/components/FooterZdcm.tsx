import Link from "next/link";

const linkColumns = [
  {
    title: "About",
    items: [
      "Zoom Blog", "Customers", "Our Team", "Careers", "Integrations", "Partners",
      "Investors", "Press", "Sustainability & ESG", "Zoom Cares", "Media Kit",
      "How To Videos", "Developer Platform", "Zoom Ventures", "Zoom Merchandise Store",
    ],
  },
  {
    title: "Download",
    items: [
      "Zoom Workplace App", "Zoom Rooms App", "Zoom Rooms Controller",
      "Browser Extension", "Outlook Plug-in", "iPhone/iPad App", "Android App",
      "Zoom Virtual Backgrounds",
    ],
  },
  {
    title: "Sales",
    items: [
      "1.888.799.9666", "Contact Sales", "Plans & Pricing", "Request a Demo",
      "Webinars and Events", "Zoom Experience Center",
    ],
  },
  {
    title: "Support",
    items: [
      "Test Zoom", "Account", "Support Center", "Learning Center", "Zoom Community",
      "Technical Content Library", "Feedback", "Contact Us", "Accessibility",
      "Developer Support", "Privacy, Security, Legal Policies, and Modern Slavery Act Transparency Statement",
    ],
  },
];

const legalLinks = [
  "Terms", "Privacy", "Trust Center", "Acceptable Use Guidelines", "Legal & Compliance",
];

const socials = [
  { label: "LinkedIn", d: "M18.52 0H1.48C.66 0 0 .64 0 1.44v17.12C0 19.36.66 20 1.48 20h17.04C19.34 20 20 19.36 20 18.56V1.44C20 .64 19.34 0 18.52 0zM5.93 17.04H2.97V7.5h2.97v9.55zM4.45 6.2a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zM17.04 17.04h-2.97v-4.64c0-1.11-.02-2.53-1.54-2.53s-1.78 1.2-1.78 2.45v4.72H7.79V7.5h2.85v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.56 1.98 3.56 4.55v5.24z" },
  { label: "X", d: "M11.9 8.47L19.35 0h-1.76l-6.47 7.35L5.96 0H0l7.81 11.12L0 20h1.76l6.83-7.77L14.05 20H20L11.9 8.47zm-2.42 2.75l-.79-1.11L2.4 1.3h2.71l5.08 7.11.79 1.11 6.61 9.25h-2.71l-5.39-7.55z" },
  { label: "YouTube", d: "M19.62 3.18A2.51 2.51 0 0017.85 1.42C16.27 1 10 1 10 1S3.74 1 2.15 1.42A2.51 2.51 0 00.39 3.18C0 4.77 0 10 0 10s0 5.23.39 6.82A2.51 2.51 0 002.15 18.58C3.74 19 10 19 10 19s6.27 0 7.85-.42a2.51 2.51 0 001.77-1.76C20 15.23 20 10 20 10s0-5.23-.38-6.82zM8 13.5V6.5l5.2 3.5L8 13.5z" },
  { label: "Facebook", d: "M20 10c0-5.52-4.48-10-10-10S0 4.48 0 10c0 4.99 3.66 9.13 8.44 9.88v-6.99h-2.54V10h2.54V7.8c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V10h2.77l-.44 2.89h-2.33v6.99C16.34 19.13 20 14.99 20 10z" },
  { label: "Instagram", d: "M10 1.8c2.67 0 2.99.01 4.04.06 2.71.12 3.97 1.4 4.1 4.1.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.12 2.69-1.39 3.97-4.1 4.1-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-2.72-.12-3.97-1.41-4.1-4.1C1.81 12.99 1.8 12.67 1.8 10s.01-2.99.06-4.04c.12-2.69 1.39-3.97 4.1-4.1C7.01 1.81 7.33 1.8 10 1.8zM10 0C7.28 0 6.94.01 5.88.06 2.25.23.23 2.24.06 5.88.01 6.94 0 7.28 0 10s.01 3.06.06 4.12c.17 3.63 2.18 5.65 5.82 5.82C6.94 19.99 7.28 20 10 20s3.06-.01 4.12-.06c3.63-.17 5.65-2.19 5.82-5.82.05-1.07.06-1.41.06-4.12s-.01-3.06-.06-4.12C19.78 2.25 17.76.23 14.12.06 13.06.01 12.72 0 10 0zm0 4.87a5.14 5.14 0 100 10.27 5.14 5.14 0 000-10.27zm0 8.47A3.33 3.33 0 1110 6.67a3.33 3.33 0 010 6.67zm5.34-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" },
];

export default function FooterZdcm() {
  return (
    <footer id="global-footer" className="bg-[#00053d] text-white">
      <div className="mx-auto max-w-[1400px] px-5 pt-[60px] pb-0">
        {/* Top row: logo + download center + selectors on left | link columns on right */}
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Left column */}
          <div className="w-full shrink-0 lg:w-[280px]">
            {/* Logo */}
            <Link href="/" className="text-[28px] font-bold tracking-[-0.04em] text-white">
              zoom
            </Link>

            {/* Download Center */}
            <Link href="/download" className="mt-8 flex items-center gap-3">
              <span className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#0B5CFF] text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </span>
              <div>
                <p className="text-[14px] font-semibold text-white">Download Center</p>
                <p className="text-[13px] text-white/60">Get the most out of Zoom</p>
              </div>
            </Link>

            {/* Language selector */}
            <button type="button" className="mt-8 flex w-full items-center justify-between rounded-[8px] border border-white/20 bg-transparent px-4 py-3 text-[14px] text-white">
              <span>English</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/img/caret-down.svg" alt="" className="h-3 w-3 brightness-0 invert" />
            </button>

            {/* Currency selector */}
            <button type="button" className="mt-3 flex w-full items-center justify-between rounded-[8px] border border-white/20 bg-transparent px-4 py-3 text-[14px] text-white">
              <span>US Dollar $</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/img/caret-down.svg" alt="" className="h-3 w-3 brightness-0 invert" />
            </button>
          </div>

          {/* Right: 5 link columns */}
          <div className="grid flex-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {linkColumns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-[14px] font-semibold text-white">{col.title}</p>
                <ul className="space-y-2">
                  {col.items.map((label) => (
                    <li key={label}>
                      <Link href="/about" className="text-[14px] leading-[1.5] text-white/70 hover:text-white">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Get in touch + social */}
        <div className="mt-12 border-t border-white/10 pt-8 pb-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[14px] text-white/60">Get in touch</p>
              <p className="mt-1 text-[24px] font-bold text-white">1.888.799.9666</p>
            </div>
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <Link key={s.label} href="/about" aria-label={s.label} className="text-white/70 hover:text-white">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22"><path d={s.d} /></svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal bottom bar */}
      <div className="border-t border-white/10 bg-[#00053d]">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-5 text-[13px] text-white/50">
          <span>Copyright &copy;{new Date().getFullYear()} Zoom Communications, Inc. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            {legalLinks.map((label) => (
              <Link key={label} href="/trust" className="hover:text-white">{label}</Link>
            ))}
            <span className="inline-flex items-center gap-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/img/privacyoptions.png" alt="" className="h-3 w-auto" />
              Your Privacy Choices
            </span>
            <span>Cookies Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
