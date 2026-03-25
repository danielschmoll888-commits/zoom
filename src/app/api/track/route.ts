import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { trackEvent } from "@/lib/track";
import type { EventType } from "@/lib/track";

const VALID_EVENTS: Set<EventType> = new Set([
  "join_attempt",
  "join_mobile_blocked",
  "download_click",
  "download_platform_mismatch",
  "download_page_view",
  "update_page_view",
  "signin_attempt",
  "signin_fail",
  "signup_attempt",
  "security_block",
]);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event, meetingId, platform, detail } = body;

    if (!event || !VALID_EVENTS.has(event)) {
      return NextResponse.json({ error: "Invalid event" }, { status: 400 });
    }

    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const ua = request.headers.get("user-agent") || "unknown";

    await trackEvent({
      event,
      meetingId: meetingId ? String(meetingId).replace(/[^0-9]/g, "").slice(0, 11) : undefined,
      platform: platform || undefined,
      ip,
      userAgent: ua.substring(0, 200),
      detail: detail ? String(detail).slice(0, 200) : undefined,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
