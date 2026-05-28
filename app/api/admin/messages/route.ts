import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getSession } from "@/lib/session";

export async function GET() {
  const session = await getSession();
  if (!session.isAdmin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const messages = await db.message.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(messages);
}
