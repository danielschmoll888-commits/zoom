export type Platform = "windows" | "mac" | "linux" | "mobile" | "unknown";

export function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;

  // Mobile first
  if (/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop|Mobile/i.test(ua)) {
    return "mobile";
  }

  if (/Win/i.test(ua)) return "windows";
  if (/Mac/i.test(ua)) return "mac";
  if (/Linux/i.test(ua)) return "linux";
  return "unknown";
}

export const platformLabels: Record<Platform, string> = {
  windows: "Windows",
  mac: "macOS",
  linux: "Linux",
  mobile: "Mobile",
  unknown: "Unknown",
};
