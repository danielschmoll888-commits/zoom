import { NextResponse } from "next/server";
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

export async function GET() {
  const downloadsDir = path.join(process.cwd(), "public", "downloads");

  const available: { platform: string; file: string; name: string }[] = [];

  try {
    const files = fs.readdirSync(downloadsDir);
    for (const name of files) {
      const platform = getPlatform(name);
      if (platform) {
        available.push({ platform, file: `/downloads/${name}`, name });
      }
    }
  } catch {
    // directory doesn't exist or can't be read
  }

  return NextResponse.json({
    platforms: {
      windows: available.some((a) => a.platform === "windows"),
      mac: available.some((a) => a.platform === "mac"),
    },
    files: available,
  });
}
