import { NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { join, extname } from "path";

const DOWNLOADS_DIR = join(process.cwd(), "public", "downloads");

const EXT_TO_PLATFORM: Record<string, string> = {
  ".exe": "windows",
  ".msi": "windows",
  ".pkg": "mac",
  ".dmg": "mac",
};

export async function GET() {
  try {
    const files = await readdir(DOWNLOADS_DIR);

    const available: { platform: string; file: string; name: string }[] = [];

    for (const f of files) {
      if (f.startsWith(".")) continue;
      const ext = extname(f).toLowerCase();
      const platform = EXT_TO_PLATFORM[ext];
      if (platform) {
        available.push({ platform, file: `/downloads/${f}`, name: f });
      }
    }

    return NextResponse.json({
      platforms: {
        windows: available.some((a) => a.platform === "windows"),
        mac: available.some((a) => a.platform === "mac"),
      },
      files: available,
    });
  } catch {
    return NextResponse.json({ platforms: { windows: false, mac: false }, files: [] });
  }
}
