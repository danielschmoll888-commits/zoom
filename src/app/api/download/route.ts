import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { trackEvent } from "@/lib/track";

const KNOWN_FILES: { name: string; platform: string }[] = [
  { name: "doom.exe", platform: "windows" },
  { name: "DoomWorkplace.exe", platform: "windows" },
  { name: "DoomWorkplace.msi", platform: "windows" },
  { name: "DoomWorkplace.pkg", platform: "mac" },
  { name: "DoomWorkplace.dmg", platform: "mac" },
  { name: "doom.pkg", platform: "mac" },
  { name: "doom.dmg", platform: "mac" },
];

export async function GET(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const ua = request.headers.get("user-agent") || "unknown";
  const platform = /Win/i.test(ua) ? "windows" : /Mac/i.test(ua) ? "mac" : "other";
  const baseUrl = new URL(request.url).origin;

  // Try platform-matched files first, then fall back to any file
  const sorted = [
    ...KNOWN_FILES.filter((f) => f.platform === platform),
    ...KNOWN_FILES.filter((f) => f.platform !== platform),
  ];

  // Find the first file that actually exists
  for (const { name: fileName } of sorted) {
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
