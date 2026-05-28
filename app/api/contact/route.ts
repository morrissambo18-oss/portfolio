import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { sendContactEmail } from "@/lib/email";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  await db.message.create({ data: { name: name.trim(), email: email.trim(), message: message.trim() } });

  await sendContactEmail({ name, email, message }).catch(() => {});

  return NextResponse.json({ ok: true });
}
