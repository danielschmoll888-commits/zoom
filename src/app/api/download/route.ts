import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";
import { trackEvent } from "@/lib/track";

const ALLOWED_EXTENSIONS = new Set([".exe", ".msi", ".pkg", ".dmg"]);
const DOWNLOADS_DIR = join(process.cwd(), "public", "downloads");

export async function GET(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  const ua = request.headers.get("user-agent") || "unknown";
  const platform = /Win/i.test(ua) ? "windows" : /Mac/i.test(ua) ? "mac" : "other";

  try {
    const files = await readdir(DOWNLOADS_DIR);

    const installer = files.find((f) => {
      const ext = extname(f).toLowerCase();
      if (f.startsWith(".") || f.includes("..") || f.includes("/") || f.includes("\\")) return false;
      return ALLOWED_EXTENSIONS.has(ext);
    });

    if (!installer) {
      return new NextResponse("Not found", { status: 404 });
    }

    const fileStat = await stat(join(DOWNLOADS_DIR, installer));
    if (!fileStat.isFile()) {
      return new NextResponse("Not found", { status: 404 });
    }

    // Track the download
    await trackEvent({
      event: "download_click",
      platform,
      ip,
      userAgent: ua.substring(0, 200),
      fileDownloaded: installer,
    });

    const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    return NextResponse.redirect(
      new URL(`/downloads/${encodeURIComponent(installer)}`, baseUrl),
      { status: 302 }
    );
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
