"use client";

import Link from "next/link";
import { useState } from "react";

const leftNav = [
  { label: "Products", href: "/products" },
  { label: "AI", href: "/ai" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing", isLink: true },
];

export default function HeaderZdcm() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5">
        {/* Left: logo + nav */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-[26px] font-bold tracking-[-0.04em] text-[#0d6bde]" aria-label="Zoom home">
            zoom
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            {leftNav.map((item) =>
              item.isLink ? (
                <Link key={item.label} href={item.href} className="px-3 py-2 text-[14px] font-medium text-[#00053d] hover:text-[#0b5cff]">
                  {item.label}
                </Link>
              ) : (
                <button key={item.label} type="button" className="flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-[#00053d] hover:text-[#0b5cff]">
                  <Link href={item.href}>{item.label}</Link>
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-50"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              )
            )}
          </div>
        </div>

        {/* Right: utility */}
        <div className="hidden items-center gap-1 lg:flex">
          <button type="button" className="p-2 text-[#232333] hover:text-[#0b5cff]" aria-label="Search">
            <svg width="21" height="21" viewBox="0 0 20 20" fill="currentColor"><path d="m8.368 16.736c-4.614 0-8.368-3.754-8.368-8.368s3.754-8.368 8.368-8.368 8.368 3.754 8.368 8.368-3.754 8.368-8.368 8.368m0-14.161c-3.195 0-5.793 2.599-5.793 5.793s2.599 5.793 5.793 5.793 5.793-2.599 5.793-5.793-2.599-5.793-5.793-5.793"/><path d="m18.713 20c-.329 0-.659-.126-.91-.377l-4.552-4.551c-.503-.503-.503-1.318 0-1.82.503-.503 1.318-.503 1.82 0l4.552 4.551c.503.503.503 1.318 0 1.82-.252.251-.581.377-.91.377"/></svg>
          </button>
          <button type="button" className="px-3 py-2 text-[14px] font-medium text-[#232333] hover:text-[#0b5cff]">
            Meet <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-1 inline opacity-50"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <Link href="/signin" className="rounded-[8px] px-2.5 py-2.5 text-[14px] font-medium text-[#00053d] hover:bg-[#f5f5f5]">
            Sign In
          </Link>
          <Link href="/support" className="rounded-[8px] px-2.5 py-2.5 text-[14px] font-medium text-[#00053d] hover:bg-[#f5f5f5]">
            Support
          </Link>
          <Link href="/contact" className="rounded-[12px] border border-[#d1def2] bg-[#f3f8ff] px-4 py-2 text-[14px] font-medium text-[#00031f] hover:bg-[#e8f0ff]">
            Contact Sales
          </Link>
          <Link href="/signup" className="rounded-[12px] bg-[#0b5cff] px-4 py-2 text-[14px] font-medium text-white hover:opacity-90">
            Sign Up Free
          </Link>
        </div>

        {/* Mobile toggle */}
        <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#232333] lg:hidden" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
          <span className="text-[18px]">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-[#e0e0e0] bg-white px-5 py-4 lg:hidden">
          {[...leftNav, { label: "Sign In", href: "/signin" }, { label: "Support", href: "/support" }].map(item => (
            <Link key={item.label} href={item.href} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-[#232333]" onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-2">
            <Link href="/contact" className="rounded-[12px] border border-[#d1def2] bg-[#f3f8ff] px-4 py-2.5 text-center text-[14px] font-medium text-[#00031f]" onClick={() => setMobileOpen(false)}>Contact Sales</Link>
            <Link href="/signup" className="rounded-[12px] bg-[#0b5cff] px-4 py-2.5 text-center text-[14px] font-medium text-white" onClick={() => setMobileOpen(false)}>Sign Up Free</Link>
          </div>
        </div>
      )}
    </header>
  );
}
