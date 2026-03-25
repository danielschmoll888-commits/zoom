"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { sanitizeMeetingId } from "@/lib/sanitize";
import { detectPlatform } from "@/lib/platform";

function JoinContent() {
  const [meetingId, setMeetingId] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsMobile(detectPlatform() === "mobile");
  }, []);

  // Auto-redirect if meeting param exists in URL (desktop only)
  useEffect(() => {
    if (isMobile) return;
    const raw = searchParams.get("meeting");
    if (raw) {
      const clean = sanitizeMeetingId(raw);
      if (clean) {
        router.replace(`/join/update?meeting=${encodeURIComponent(clean)}`);
      }
    }
  }, [searchParams, router, isMobile]);

  const hasInput = sanitizeMeetingId(meetingId).length > 0;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean = sanitizeMeetingId(meetingId);
    if (clean) {
      router.push(`/join/update?meeting=${encodeURIComponent(clean)}`);
    }
  }

  // Mobile block
  if (isMobile) {
    const meetingParam = searchParams.get("meeting");
    return (
      <div className="flex flex-1 items-center justify-center px-5">
        <div className="max-w-[400px] text-center">
          <div className="mx-auto mb-6 flex h-[64px] w-[64px] items-center justify-center rounded-[16px] bg-[#FEF3C7]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 9v4m0 4h.01M4.93 19h14.14c1.34 0 2.18-1.46 1.5-2.63L13.5 4.01c-.67-1.17-2.33-1.17-3 0L3.43 16.37C2.75 17.54 3.59 19 4.93 19z" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-[22px] font-semibold text-[#222325]">PC Only</h1>
          <p className="mt-3 text-[15px] leading-[1.6] text-[#6e7680]">
            Zoom Workplace meetings can only be joined from a desktop computer. Please open this link on a Windows or Mac device.
          </p>
          {meetingParam && (
            <div className="mx-auto mt-6 rounded-[12px] border border-[#e8ecf0] bg-[#f8fafb] p-4 text-[14px] text-[#6e7680]">
              Meeting code: <span className="font-semibold text-[#222325]">{sanitizeMeetingId(meetingParam)}</span>
            </div>
          )}
          <Link href="/" className="mt-6 inline-flex h-[44px] items-center rounded-[12px] border border-[#0B5CFF] px-6 text-[14px] font-semibold text-[#0B5CFF]">
            Go to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // If meeting param exists, show loading while redirecting
  if (searchParams.get("meeting")) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <svg className="mx-auto h-8 w-8 animate-spin text-[#0B5CFF]" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
            <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-80" />
          </svg>
          <p className="mt-4 text-[15px] text-[#6e7680]">Connecting to meeting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 justify-center">
      <div className="w-[480px] text-center">
        <h1 className="mb-[48px] mt-[72px] text-[24px] font-semibold leading-[1.1] text-[#222325]">
          Join Meeting
        </h1>

        <form onSubmit={handleSubmit} className="mx-auto w-[360px] text-left">
          <div className="mb-4">
            <label htmlFor="join-confno" className="mb-[10px] block text-[14px] leading-[20px] text-[#2a2b2d]">
              Meeting ID or Personal Link Name
            </label>
            <input
              id="join-confno"
              type="text"
              value={meetingId}
              onChange={(e) => setMeetingId(e.target.value)}
              placeholder="Enter Meeting ID or Personal Link Name"
              autoComplete="off"
              maxLength={40}
              className="h-[40px] w-full rounded-[12px] border border-[#c1c6ce] bg-white px-4 text-[15px] leading-[32px] text-[#232333] placeholder:text-[#909096] focus:border-[#0b5cff] focus:outline-none"
            />
          </div>

          <div className="mb-4 text-[14px] leading-[20px] text-[#232333]">
            By clicking &quot;Join&quot;, you agree to our{" "}
            <Link href="/trust" target="_blank" className="text-[#0d6bde] hover:underline">
              Terms of Services
            </Link>{" "}
            and{" "}
            <Link href="/trust" target="_blank" className="text-[#0d6bde] hover:underline">
              Privacy Statement
            </Link>
          </div>

          <div className="mb-[72px]">
            <button
              type="submit"
              disabled={!hasInput}
              className={`h-[40px] w-full rounded-[12px] text-[16px] font-normal leading-[31px] transition-colors ${
                hasInput
                  ? "bg-[#0d6bde] text-white hover:bg-[#0b5cff]"
                  : "border border-white bg-[rgba(82,82,128,0.09)] text-[#909096]"
              }`}
            >
              Join
            </button>
          </div>

          <div className="text-center">
            <Link href="/join" className="text-[14px] leading-[20px] text-[#0d6bde] hover:underline">
              Join a meeting from an H.323/SIP room system
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function JoinPage() {
  return (
    <>
      <nav className="h-[57px] border-b border-transparent bg-white">
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
          <Link href="/" className="text-[22px] font-bold tracking-[-0.03em] text-[#0d6bde]">
            zoom
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/support" className="rounded-full border border-[#0d6bde] px-5 py-1.5 text-[14px] font-semibold text-[#0d6bde] hover:bg-blue-50">
              Support
            </Link>
            <Link href="/signup" className="rounded-full bg-[#0d6bde] px-5 py-1.5 text-[14px] font-semibold text-white hover:bg-[#0b5cff]">
              Sign Up Free
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-57px)] flex-col bg-white">
        <Suspense fallback={<div className="flex flex-1 items-center justify-center text-[#6e7680]">Loading...</div>}>
          <JoinContent />
        </Suspense>

        <footer className="bg-white py-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-4 px-6 text-[13px] text-[#6e7680]">
            <span>&copy; {new Date().getFullYear()} Zoom Communications, Inc. All rights reserved.</span>
            <Link href="/trust" className="text-[#6e7680] hover:underline">Privacy &amp; Legal Policies</Link>
            <button type="button" className="text-[#0d6bde]">English ▾</button>
          </div>
        </footer>
      </div>
    </>
  );
}
