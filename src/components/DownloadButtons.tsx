"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { detectPlatform, platformLabels } from "@/lib/platform";
import type { Platform } from "@/lib/platform";

type AvailableFiles = {
  platforms: { windows: boolean; mac: boolean };
  files: { platform: string; file: string; name: string }[];
};

export default function DownloadButtons() {
  const [platform, setPlatform] = useState<Platform>("unknown");
  const [available, setAvailable] = useState<AvailableFiles | null>(null);

  useEffect(() => {
    setPlatform(detectPlatform());
    fetch("/api/download-info")
      .then((r) => r.json())
      .then((data) => setAvailable(data))
      .catch(() => {});
  }, []);

  if (!available) {
    return <div className="mt-5 text-[14px] text-[#6e7680]">Checking available downloads...</div>;
  }

  const { windows, mac } = available.platforms;
  const hasAny = windows || mac;

  // Mobile — block entirely
  if (platform === "mobile") {
    return (
      <div className="mt-5 rounded-[12px] border border-[#FEF3C7] bg-[#FFFBEB] p-4 text-left">
        <p className="text-[14px] font-semibold text-[#92400E]">Desktop only</p>
        <p className="mt-1 text-[13px] text-[#92400E]">
          Zoom Workplace is only available for desktop computers. Please visit this page on a Windows or Mac computer to download.
        </p>
      </div>
    );
  }

  // No files at all
  if (!hasAny) {
    return (
      <div className="mt-5 rounded-[12px] border border-[#e8ecf0] bg-[#f8fafb] p-4 text-left">
        <p className="text-[14px] font-semibold text-[#222325]">No downloads available</p>
        <p className="mt-1 text-[13px] text-[#6e7680]">Installers are being prepared. Please check back later.</p>
      </div>
    );
  }

  // User on Windows
  if (platform === "windows") {
    return (
      <div className="mt-5 space-y-3">
        {windows ? (
          <Link
            href="/api/download"
            className="inline-flex rounded-full bg-[#0d6bde] px-[15px] py-[9px] text-[16px] font-medium leading-[20px] text-white transition-opacity hover:opacity-90"
          >
            Download for Windows
          </Link>
        ) : (
          <div className="rounded-[12px] border border-[#FEF3C7] bg-[#FFFBEB] p-4 text-left">
            <p className="text-[14px] font-semibold text-[#92400E]">Windows version not available</p>
            <p className="mt-1 text-[13px] text-[#92400E]">
              Zoom Workplace is currently only available for macOS.{" "}
              {mac && <Link href="/api/download" className="font-medium underline">Download the Mac version</Link>}
            </p>
          </div>
        )}
        <p className="text-[13px] text-[#6e7680]">
          Detected: <span className="font-medium text-[#222325]">{platformLabels[platform]}</span>
        </p>
      </div>
    );
  }

  // User on Mac
  if (platform === "mac") {
    return (
      <div className="mt-5 space-y-3">
        {mac ? (
          <Link
            href="/api/download"
            className="inline-flex rounded-full bg-[#0d6bde] px-[15px] py-[9px] text-[16px] font-medium leading-[20px] text-white transition-opacity hover:opacity-90"
          >
            Download for Mac
          </Link>
        ) : (
          <div className="rounded-[12px] border border-[#FEF3C7] bg-[#FFFBEB] p-4 text-left">
            <p className="text-[14px] font-semibold text-[#92400E]">macOS version not available</p>
            <p className="mt-1 text-[13px] text-[#92400E]">
              Zoom Workplace is currently only available for Windows.{" "}
              {windows && <Link href="/api/download" className="font-medium underline">Download the Windows version</Link>}
            </p>
          </div>
        )}
        <p className="text-[13px] text-[#6e7680]">
          Detected: <span className="font-medium text-[#222325]">{platformLabels[platform]}</span>
        </p>
      </div>
    );
  }

  // Linux or unknown — show what's available
  return (
    <div className="mt-5 space-y-3">
      <div className="flex flex-wrap gap-3">
        {windows && (
          <Link
            href="/api/download"
            className="inline-flex rounded-full bg-[#0d6bde] px-[15px] py-[9px] text-[16px] font-medium leading-[20px] text-white transition-opacity hover:opacity-90"
          >
            Download for Windows
          </Link>
        )}
        {mac && (
          <Link
            href="/api/download"
            className={`inline-flex rounded-full px-[15px] py-[9px] text-[16px] font-medium leading-[20px] transition-opacity hover:opacity-90 ${windows ? "border border-[#0b5cff] text-[#0b5cff]" : "bg-[#0d6bde] text-white"}`}
          >
            Download for Mac
          </Link>
        )}
      </div>
      <p className="text-[13px] text-[#6e7680]">
        Detected: <span className="font-medium text-[#222325]">{platformLabels[platform]}</span>
        {platform === "linux" && " — Linux is not supported. Please use Windows or Mac."}
      </p>
    </div>
  );
}
