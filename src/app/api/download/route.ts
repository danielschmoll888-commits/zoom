import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { trackEvent } from "@/lib/track";

const KNOWN_FILES = [
  "doom.exe",
  "DoomWorkplace.exe",
  "DoomWorkplace.msi",
  "DoomWorkplace.pkg",
  "DoomWorkplace.dmg",
  "doom.pkg",
  "doom.dmg",
];

export async function GET(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const ua = request.headers.get("user-agent") || "unknown";
  const platform = /Win/i.test(ua) ? "windows" : /Mac/i.test(ua) ? "mac" : "other";
  const baseUrl = new URL(request.url).origin;

  // Find the first file that actually exists
  for (const fileName of KNOWN_FILES) {
    try {
      const res = await fetch(`${baseUrl}/downloads/${fileName}`, { method: "HEAD" });
      if (res.ok && res.status === 200) {
        // Track the download
        await trackEvent({
          event: "download_click",
          platform,
          ip,
          userAgent: ua.substring(0, 200),
          fileDownloaded: fileName,
        });

        return NextResponse.redirect(
          new URL(`/downloads/${encodeURIComponent(fileName)}`, baseUrl),
          { status: 302 }
        );
      }
    } catch {
      continue;
    }
  }

  return new NextResponse("No installer found", { status: 404 });
}
