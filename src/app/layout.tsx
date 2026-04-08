import type { Metadata, Viewport } from "next";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zoom - One Platform to Connect",
    template: "%s | Zoom",
  },
  description: "Meetings, chat, phone, whiteboard, and more — unified in one AI-powered platform.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Zoom - One Platform to Connect",
    description: "Meetings, chat, phone, whiteboard, and more — unified in one AI-powered platform.",
    url: "https://zoom.com",
    siteName: "Zoom",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoom - One Platform to Connect",
    description: "Meetings, chat, phone, whiteboard, and more — unified in one AI-powered platform.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B5CFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
