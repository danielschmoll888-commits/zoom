import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAnalytics } from "@/lib/track";

export async function GET(request: NextRequest) {
  // Simple auth — require secret key in header
  const authKey = request.headers.get("x-admin-key");
  if (!authKey || authKey !== process.env.ADMIN_SECRET_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const data = await getAnalytics();
  if (!data) {
    return NextResponse.json({ error: "Redis not configured" }, { status: 503 });
  }

  return NextResponse.json(data);
}
