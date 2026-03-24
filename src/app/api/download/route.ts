import { NextResponse } from "next/server";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";

const ALLOWED_EXTENSIONS = new Set([".exe", ".msi", ".pkg", ".dmg"]);
const DOWNLOADS_DIR = join(process.cwd(), "public", "downloads");

export async function GET() {
  try {
    const files = await readdir(DOWNLOADS_DIR);

    // Only allow known installer extensions — prevent serving arbitrary files
    const installer = files.find((f) => {
      const ext = extname(f).toLowerCase();
      // Block dotfiles, hidden files, directory traversal
      if (f.startsWith(".") || f.includes("..") || f.includes("/") || f.includes("\\")) return false;
      return ALLOWED_EXTENSIONS.has(ext);
    });

    if (!installer) {
      return new NextResponse("Not found", { status: 404 });
    }

    // Verify it's actually a file (not a directory or symlink)
    const fileStat = await stat(join(DOWNLOADS_DIR, installer));
    if (!fileStat.isFile()) {
      return new NextResponse("Not found", { status: 404 });
    }

    // Construct redirect URL safely
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
