import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // ── Security Headers ──
  // Prevent clickjacking
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Content-Security-Policy", "frame-ancestors 'none'");

  // Prevent MIME type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // XSS protection (legacy browsers)
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Referrer policy — don't leak full URLs
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Permissions policy — disable unnecessary browser features
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
  );

  // Strict transport security (HTTPS only)
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );

  // ── Block access to sensitive paths ──
  const pathname = request.nextUrl.pathname;

  // Block dotfiles, source maps, internal paths
  if (
    pathname.includes("/.") ||
    pathname.endsWith(".map") ||
    pathname.includes("/_next/static/development") ||
    pathname.startsWith("/api/") && request.method !== "GET"
  ) {
    return new NextResponse("Not found", { status: 404 });
  }

  // Block access to any .next directories that might leak
  if (pathname.includes(".next")) {
    return new NextResponse("Not found", { status: 404 });
  }

  // Block access to config/source files
  if (
    pathname.endsWith(".ts") ||
    pathname.endsWith(".tsx") ||
    pathname.endsWith(".env") ||
    pathname.endsWith(".log") ||
    pathname === "/package.json" ||
    pathname === "/tsconfig.json" ||
    pathname === "/next.config.ts"
  ) {
    return new NextResponse("Not found", { status: 404 });
  }

  return response;
}

export const config = {
  matcher: [
    // Run on all routes except static assets
    "/((?!_next/static|_next/image|favicon.ico|icon-|apple-icon).*)",
  ],
};
