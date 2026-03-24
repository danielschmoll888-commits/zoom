"use client";

import Link from "next/link";
import { useState } from "react";

/* ── Top bar (dark) ── */
const utilityLeft = [
  { label: "Search", href: "/resources/technical-library", isSearch: true },
  { label: "Support", href: "/support" },
  { label: "1.888.799.9666", href: "/contact" },
  { label: "Request a Demo", href: "/demo" },
];

const utilityRight = [
  { label: "Join", href: "/join" },
  { label: "Host", href: "/products/meetings", hasDropdown: true },
  { label: "Sign In", href: "/signin" },
];

/* ── Main nav ── */
const primaryNav = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
];

function SearchIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-[14px] w-[14px]">
      <path d="m8.368 16.736c-4.614 0-8.368-3.754-8.368-8.368s3.754-8.368 8.368-8.368 8.368 3.754 8.368 8.368-3.754 8.368-8.368 8.368m0-14.161c-3.195 0-5.793 2.599-5.793 5.793s2.599 5.793 5.793 5.793 5.793-2.599 5.793-5.793-2.599-5.793-5.793-5.793" />
      <path d="m18.713 20c-.329 0-.659-.126-.91-.377l-4.552-4.551c-.503-.503-.503-1.318 0-1.82.503-.503 1.318-.503 1.82 0l4.552 4.551c.503.503.503 1.318 0 1.82-.252.251-.581.377-.91.377" />
    </svg>
  );
}

function ArrowDown() {
  return (
    <img alt="" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none'%3e%3cpath fill='%23fff' d='M5 6L0 0h10z'/%3e%3c/svg%3e" className="ml-1 inline h-[6px] w-[10px] opacity-60" />
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* ── Top utility bar ── bg: #00031f, h:40px ── */}
      <nav className="hidden h-[40px] bg-[#00031f] lg:block" aria-label="Resources">
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-end px-[20px]">
          <ul className="flex items-center">
            {utilityLeft.map((link) => (
              <li key={link.label} className="px-[10px]">
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-[6px] text-[14px] font-light leading-[40px] text-white hover:text-white/80"
                >
                  {link.isSearch && <SearchIcon />}
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Separator */}
            <li className="mx-[10px]">
              <span className="inline-block h-[16px] w-px bg-white/25" />
            </li>

            {utilityRight.map((link) => (
              <li key={link.label} className="px-[10px]">
                {link.hasDropdown ? (
                  <button type="button" className="text-[14px] font-light leading-[40px] text-white hover:text-white/80">
                    {link.label} <ArrowDown />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[14px] font-light leading-[40px] text-white hover:text-white/80"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Main navbar ── h:64px, white bg ── */}
      <div className="border-b border-[rgba(0,5,61,0.08)] bg-white">
        <div className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between px-[20px]">
          {/* Left: logo + nav */}
          <div className="flex items-center">
            <Link
              href="/"
              className="mr-[20px] text-[32px] font-bold tracking-[-0.06em] text-[#0d6bde]"
              aria-label="Zoom home"
            >
              zoom
            </Link>

            <nav className="hidden items-center lg:flex" aria-label="product information">
              {primaryNav.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  className="rounded-t-[20px] px-[15px] text-[16px] font-medium leading-[52px] text-[#666484] hover:text-[#232333]"
                >
                  <Link href={link.href}>
                    {link.label}
                  </Link>
                </button>
              ))}
              <Link
                href="/pricing"
                className="px-[15px] text-[16px] font-medium leading-[20px] text-[#666484] hover:text-[#232333]"
              >
                Plans &amp; Pricing
              </Link>
            </nav>
          </div>

          {/* Right: CTA buttons */}
          <div className="hidden items-center gap-[8px] lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[20px] border border-[#0b5cff] bg-white px-[20px] py-[10px] text-[16px] font-normal leading-[20px] text-[#0b5cff] hover:bg-blue-50"
            >
              Contact Sales
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-[20px] border border-[#0b5cff] bg-[#0b5cff] px-[20px] py-[10px] text-[16px] font-normal leading-[20px] text-white hover:opacity-90"
            >
              Sign Up Free
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e0e0e0] text-[#232333] lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Menu</span>
            <span className="text-[18px]">{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-[rgba(0,5,61,0.08)] bg-white lg:hidden">
            <div className="px-6 py-5">
              <div className="grid gap-2">
                {[...primaryNav, { label: "Plans & Pricing", href: "/pricing" }, ...utilityLeft.filter(l => !l.isSearch), ...utilityRight].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-xl border border-[#e0e0e0] px-4 py-3 text-[15px] font-medium text-[#232333]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-3 grid gap-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#0b5cff] px-6 py-3 text-[14px] font-medium text-[#0b5cff]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Contact Sales
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full bg-[#0b5cff] px-6 py-3 text-[14px] font-medium text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign Up Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
