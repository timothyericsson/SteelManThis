import { NextRequest, NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const WAITLIST_TABLE = "steelman_waitlist";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getString(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : null;
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const payload = body && typeof body === "object" ? body : {};
  const email = getString((payload as { email?: unknown }).email, 320)?.toLowerCase();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 }
    );
  }

  try {
    const supabase = createSupabaseAdmin();
    const { error } = await supabase.from(WAITLIST_TABLE).upsert(
      {
        email,
        source: "homepage",
        referrer: getString(request.headers.get("referer"), 500),
        user_agent: getString(request.headers.get("user-agent"), 500)
      },
      { onConflict: "email" }
    );

    if (error) {
      console.error("Waitlist insert failed", {
        code: error.code,
        message: error.message
      });

      const tableMissing = error.code === "42P01" || error.code === "PGRST205";
      return NextResponse.json(
        {
          error: tableMissing
            ? "The waitlist table has not been created yet."
            : "Could not join the waitlist yet."
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Waitlist route failed", error);
    return NextResponse.json(
      { error: "Supabase is not configured yet." },
      { status: 500 }
    );
  }
}
