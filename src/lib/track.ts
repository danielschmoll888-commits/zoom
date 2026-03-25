import { getRedis } from "./redis";

export type EventType =
  | "join_attempt"
  | "join_mobile_blocked"
  | "download_click"
  | "download_platform_mismatch"
  | "download_page_view"
  | "update_page_view"
  | "signin_attempt"
  | "signin_fail"
  | "signup_attempt"
  | "security_block";

type EventData = {
  event: EventType;
  meetingId?: string;
  platform?: string;
  ip?: string;
  userAgent?: string;
  fileDownloaded?: string;
  availablePlatforms?: string;
  path?: string;
  detail?: string;
  timestamp?: number;
};

/**
 * Track an event to Upstash Redis.
 * Stores in two structures:
 * 1. A sorted set per event type (for counting/querying)
 * 2. A list of recent events (capped at 1000)
 * 3. Meeting-specific tracking (per meeting ID)
 */
export async function trackEvent(data: EventData): Promise<void> {
  const redis = getRedis();
  if (!redis) return; // Graceful fallback if Redis not configured

  const now = data.timestamp || Date.now();
  const entry = JSON.stringify({ ...data, timestamp: now });
  const dateKey = new Date(now).toISOString().slice(0, 10); // YYYY-MM-DD

  try {
    const pipe = redis.pipeline();

    // 1. Increment daily counter for this event type
    pipe.hincrby(`stats:daily:${dateKey}`, data.event, 1);

    // 2. Increment total counter
    pipe.hincrby("stats:totals", data.event, 1);

    // 3. Push to recent events list (capped)
    pipe.lpush("events:recent", entry);
    pipe.ltrim("events:recent", 0, 999);

    // 4. Track per-meeting if meeting ID provided
    if (data.meetingId) {
      pipe.hincrby("stats:meetings", data.meetingId, 1);
      pipe.lpush(`events:meeting:${data.meetingId}`, entry);
      pipe.ltrim(`events:meeting:${data.meetingId}`, 0, 99);
    }

    // 5. Track downloads separately
    if (data.event === "download_click") {
      pipe.hincrby(`stats:downloads:${dateKey}`, data.platform || "unknown", 1);
      pipe.hincrby("stats:downloads:total", data.platform || "unknown", 1);
    }

    await pipe.exec();
  } catch {
    // Silent fail — tracking should never break the app
  }
}

/**
 * Get analytics summary
 */
export async function getAnalytics() {
  const redis = getRedis();
  if (!redis) return null;

  try {
    const [totals, meetings, downloads, recentRaw] = await Promise.all([
      redis.hgetall("stats:totals"),
      redis.hgetall("stats:meetings"),
      redis.hgetall("stats:downloads:total"),
      redis.lrange("events:recent", 0, 49),
    ]);

    return {
      totals: totals || {},
      topMeetings: meetings || {},
      downloads: downloads || {},
      recentEvents: (recentRaw || []).map((e) => {
        try { return JSON.parse(e as string); } catch { return e; }
      }),
    };
  } catch {
    return null;
  }
}
