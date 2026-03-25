"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { detectPlatform, platformLabels } from "@/lib/platform";
import type { Platform } from "@/lib/platform";
import { sanitizeMeetingId } from "@/lib/sanitize";
import { trackClientEvent } from "@/lib/track-client";

type AvailableFiles = {
  platforms: { windows: boolean; mac: boolean };
  files: { platform: string; file: string; name: string }[];
};

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
      <path d="M3 8l3 3 7-7" stroke="#0B5CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Mobile block ── */
function MobileBlock({ meetingId }: { meetingId: string }) {
  return (
    <div className="w-[480px] px-5 text-center">
      <div className="mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-[16px] bg-[#FEF3C7]">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
          <path d="M12 9v4m0 4h.01M4.93 19h14.14c1.34 0 2.18-1.46 1.5-2.63L13.5 4.01c-.67-1.17-2.33-1.17-3 0L3.43 16.37C2.75 17.54 3.59 19 4.93 19z" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="text-[24px] font-semibold text-[#222325]">Desktop Only</h1>
      <p className="mt-4 max-w-[360px] mx-auto text-[15px] leading-[1.6] text-[#6e7680]">
        Zoom Workplace is a desktop application. You can only join meetings from a Windows or Mac computer.
      </p>
      {meetingId && (
        <div className="mx-auto mt-6 max-w-[340px] rounded-[12px] border border-[#e8ecf0] bg-[#f8fafb] p-4 text-[14px] text-[#6e7680]">
          Your meeting code: <span className="font-semibold text-[#222325]">{meetingId}</span>
          <p className="mt-2 text-[12px]">Open this link on your computer to join.</p>
        </div>
      )}
      <Link href="/" className="mt-6 inline-flex h-[44px] items-center rounded-[12px] border border-[#0B5CFF] px-6 text-[14px] font-semibold text-[#0B5CFF] hover:bg-[#0B5CFF]/5">
        Go to Homepage
      </Link>
    </div>
  );
}

/* ── Main update content ── */
function UpdateContent() {
  const searchParams = useSearchParams();
  const meetingId = sanitizeMeetingId(searchParams.get("meeting") || "");
  const [platform, setPlatform] = useState<Platform>("unknown");
  const [available, setAvailable] = useState<AvailableFiles | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [tracked, setTracked] = useState(false);

  useEffect(() => {
    setPlatform(detectPlatform());
    fetch("/api/download-info")
      .then((r) => r.json())
      .then((data) => setAvailable(data))
      .catch(() => {});
  }, []);

  // Track mobile block (once)
  useEffect(() => {
    if (platform === "mobile") {
      trackClientEvent({ event: "join_mobile_blocked", meetingId, platform: "mobile" });
    }
  }, [platform, meetingId]);

  // Track page view + mismatch (once when data loads)
  useEffect(() => {
    if (!available || tracked) return;
    const windows = available.platforms.windows;
    const mac = available.platforms.mac;
    const hasFile = (platform === "windows" && windows) || (platform === "mac" && mac);
    const availName = windows && mac ? "Windows and macOS" : windows ? "Windows" : mac ? "macOS" : "none";
    setTracked(true);
    trackClientEvent({ event: "update_page_view", meetingId, platform });
    if (!hasFile && (platform === "windows" || platform === "mac")) {
      trackClientEvent({ event: "download_platform_mismatch", meetingId, platform, detail: `Available: ${availName}` });
    }
  }, [available, tracked, meetingId, platform]);

  // Mobile — block
  if (platform === "mobile") {
    return <MobileBlock meetingId={meetingId} />;
  }

  // Loading
  if (!available) {
    return (
      <div className="w-[480px] pt-20 text-center">
        <svg className="mx-auto h-8 w-8 animate-spin text-[#0B5CFF]" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-80" />
        </svg>
        <p className="mt-4 text-[15px] text-[#6e7680]">Connecting to meeting...</p>
      </div>
    );
  }

  const { windows, mac } = available.platforms;
  const userPlatformName = platformLabels[platform];
  const hasFileForUser = (platform === "windows" && windows) || (platform === "mac" && mac);
  const availablePlatformName = windows && mac ? "Windows and macOS" : windows ? "Windows" : mac ? "macOS" : "none";

  function handleDownload() {
    setDownloading(true);
    trackClientEvent({ event: "download_click", meetingId, platform });
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      const link = document.createElement("a");
      link.href = "/api/download";
      link.download = "";
      link.click();
    }, 2000);
  }

  return (
    <div className="w-[480px] px-5 text-center">
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] bg-[#0B5CFF]">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v10M12 15l-4-4M12 15l4-4" />
          <path d="M5 19h14" />
        </svg>
      </div>

      <h1 className="text-[24px] font-semibold text-[#222325]">Update Zoom Workplace</h1>

      {meetingId && (
        <p className="mt-3 text-[15px] text-[#6e7680]">
          To join meeting <span className="font-semibold text-[#222325]">{meetingId}</span>, please download the latest version.
        </p>
      )}

      {/* Platform mismatch warning */}
      {!hasFileForUser && (platform === "windows" || platform === "mac") && (
        <div className="mx-auto mt-6 w-[360px] rounded-[12px] border border-[#FEF3C7] bg-[#FFFBEB] p-4 text-left">
          <p className="text-[14px] font-semibold text-[#92400E]">
            {userPlatformName} version not available
          </p>
          <p className="mt-1 text-[13px] text-[#92400E]">
            Zoom Workplace is currently only available for {availablePlatformName}.
            {(windows || mac) && " You can still download it for a supported device."}
          </p>
        </div>
      )}

      {/* Version card */}
      <div className="mx-auto mt-6 w-[360px] rounded-[16px] border border-[#e8ecf0] bg-[#f8fafb] p-5 text-left">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-semibold text-[#222325]">Zoom Workplace</span>
          <span className="rounded-full bg-[#0B5CFF]/10 px-3 py-1 text-[12px] font-semibold text-[#0B5CFF]">
            Update available
          </span>
        </div>
        <div className="mt-3 text-[13px] text-[#6e7680]">
          <p className="font-medium text-[#222325]">Version 7.2.0 (15120)</p>
          <p className="mt-1">Available for: <span className="font-medium text-[#222325]">{availablePlatformName}</span></p>
          <ul className="mt-2 space-y-1">
            <li className="flex items-start gap-2"><CheckIcon />Improved AI Companion with faster summaries</li>
            <li className="flex items-start gap-2"><CheckIcon />Enhanced meeting security and encryption</li>
            <li className="flex items-start gap-2"><CheckIcon />Bug fixes and performance improvements</li>
          </ul>
        </div>
      </div>

      {/* Download area */}
      <div className="mx-auto mt-6 w-[360px] space-y-3">
        {!downloaded ? (
          <>
            {(windows || mac) && (
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloading}
                className={`h-[48px] w-full rounded-[12px] text-[16px] font-semibold transition-colors disabled:opacity-70 ${
                  hasFileForUser
                    ? "bg-[#0B5CFF] text-white hover:bg-[#094FE0]"
                    : "border border-[#0B5CFF] bg-white text-[#0B5CFF] hover:bg-[#f5f8ff]"
                }`}
              >
                {downloading ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                    </svg>
                    Downloading...
                  </span>
                ) : hasFileForUser ? (
                  `Download for ${userPlatformName}`
                ) : (
                  `Download for ${availablePlatformName} anyway`
                )}
              </button>
            )}
            <Link href="/download" className="block text-center text-[14px] text-[#0B5CFF] hover:underline">
              Go to Download Center
            </Link>
          </>
        ) : (
          <div className="space-y-3">
            <div className="flex h-[48px] items-center justify-center gap-2 rounded-[12px] border border-green-200 bg-green-50 text-[16px] font-semibold text-green-700">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10L8.5 13.5L15 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download complete
            </div>
            <p className="text-[13px] text-[#6e7680]">
              Open the downloaded file to install, then{" "}
              <Link href={`/join?meeting=${encodeURIComponent(meetingId)}`} className="font-medium text-[#0B5CFF] hover:underline">
                rejoin the meeting
              </Link>.
            </p>
          </div>
        )}
      </div>

      {/* Detected platform */}
      <p className="mx-auto mt-4 w-[360px] text-left text-[12px] text-[#9CA3AF]">
        Detected: {userPlatformName}
      </p>
    </div>
  );
}

export default function UpdatePage() {
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
        <div className="flex flex-1 justify-center pt-[60px]">
          <Suspense fallback={<div className="pt-20 text-center text-[#6e7680]">Loading...</div>}>
            <UpdateContent />
          </Suspense>
        </div>

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
