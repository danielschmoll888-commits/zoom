import { NextResponse } from "next/server";

/**
 * Returns available download files.
 *
 * Since Vercel serverless can't read `public/` at runtime,
 * this checks known file paths by attempting HEAD requests.
 *
 * To add a new file, just put it in public/downloads/ and add the name here.
 */
const KNOWN_FILES = [
  { name: "doom.exe", platform: "windows" },
  { name: "DoomWorkplace.exe", platform: "windows" },
  { name: "DoomWorkplace.msi", platform: "windows" },
  { name: "DoomWorkplace.pkg", platform: "mac" },
  { name: "DoomWorkplace.dmg", platform: "mac" },
  { name: "doom.pkg", platform: "mac" },
  { name: "doom.dmg", platform: "mac" },
];

export async function GET(request: Request) {
  const baseUrl = new URL(request.url).origin;

  const available: { platform: string; file: string; name: string }[] = [];

  // Check which files actually exist by making HEAD requests
  const checks = await Promise.allSettled(
    KNOWN_FILES.map(async (f) => {
      try {
        const res = await fetch(`${baseUrl}/downloads/${f.name}`, { method: "HEAD" });
        if (res.ok && res.status === 200) {
          available.push({ platform: f.platform, file: `/downloads/${f.name}`, name: f.name });
        }
      } catch {
        // File doesn't exist, skip
      }
    })
  );

  // Wait for all checks
  void checks;

  return NextResponse.json({
    platforms: {
      windows: available.some((a) => a.platform === "windows"),
      mac: available.some((a) => a.platform === "mac"),
    },
    files: available,
  });
}
