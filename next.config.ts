import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Disable source maps in production — prevents reverse engineering
  productionBrowserSourceMaps: false,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st1.zoom.us",
      },
    ],
  },

  turbopack: {
    root: process.cwd(),
  },

  // Prevent leaking server-side info in headers
  poweredByHeader: false,

  headers: async () => [
    {
      source: "/downloads/:path*",
      headers: [
        { key: "X-Robots-Tag", value: "noindex, nofollow" },
      ],
    },
  ],
};

export default nextConfig;
