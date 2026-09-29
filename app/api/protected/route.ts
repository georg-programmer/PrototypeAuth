import { auth } from "@/auth";
import { NextResponse } from "next/server";

// Geschützte API-Route: gibt User-Daten nur bei gültiger Session zurück
export const GET = auth(function GET(req) {
  // Kein Auth-Token → 401 Unauthorized
  if (!req.auth) {
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
  }

  return NextResponse.json({ user: req.auth.user });
});
