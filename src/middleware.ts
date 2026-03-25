import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  // ── Security Headers ──
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Content-Security-Policy", "frame-ancestors 'none'");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
  );
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  );

  // ── Allow API routes through ──
  if (pathname.startsWith("/api/")) {
    return response;
  }

  // ── Block sensitive paths ──
  if (
    pathname.includes("/.") ||
    pathname.endsWith(".map") ||
    pathname.includes("/_next/static/development") ||
    pathname.includes(".next")
  ) {
    return new NextResponse("Not found", { status: 404 });
  }

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
    "/((?!_next/static|_next/image|favicon.ico|icon-|apple-icon).*)",
  ],
};
