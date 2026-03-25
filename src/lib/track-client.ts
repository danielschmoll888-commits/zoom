/**
 * Client-side event tracking — sends events to /api/track
 */
export function trackClientEvent(data: {
  event: string;
  meetingId?: string;
  platform?: string;
  detail?: string;
}): void {
  // Fire and forget — never block the UI
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).catch(() => {});
}
