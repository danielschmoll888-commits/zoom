import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { trackEvent } from "@/lib/track";
import fs from "fs";
import path from "path";

const WINDOWS_EXTENSIONS = [".exe", ".msi"];
const MAC_EXTENSIONS = [".pkg", ".dmg"];

function getPlatform(fileName: string): string | null {
  const ext = path.extname(fileName).toLowerCase();
  if (WINDOWS_EXTENSIONS.includes(ext)) return "windows";
  if (MAC_EXTENSIONS.includes(ext)) return "mac";
  return null;
}

export async function GET(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const ua = request.headers.get("user-agent") || "unknown";
  const userPlatform = /Win/i.test(ua) ? "windows" : /Mac/i.test(ua) ? "mac" : "other";
  const baseUrl = new URL(request.url).origin;
  const downloadsDir = path.join(process.cwd(), "public", "downloads");

  let allFiles: { name: string; platform: string }[] = [];
  try {
    const entries = fs.readdirSync(downloadsDir);
    for (const name of entries) {
      const plat = getPlatform(name);
      if (plat) allFiles.push({ name, platform: plat });
    }
  } catch {
    return new NextResponse("No installer found", { status: 404 });
  }

  // Try platform-matched files first, then fall back to any file
  const sorted = [
    ...allFiles.filter((f) => f.platform === userPlatform),
    ...allFiles.filter((f) => f.platform !== userPlatform),
  ];

  if (sorted.length > 0) {
    const fileName = sorted[0].name;

    await trackEvent({
      event: "download_click",
      platform: userPlatform,
      ip,
      userAgent: ua.substring(0, 200),
      fileDownloaded: fileName,
    });

    return NextResponse.redirect(
      new URL(`/downloads/${encodeURIComponent(fileName)}`, baseUrl),
      { status: 302 }
    );
  }

  return new NextResponse("No installer found", { status: 404 });
}
