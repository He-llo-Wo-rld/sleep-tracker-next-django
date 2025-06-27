import { cookies } from "next/headers";
import { verifyJwt } from "@/lib/jwt";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const token = cookies().get("token")?.value;
  if (!token) return NextResponse.json({ user: null }, { status: 401 });

  const payload = verifyJwt(token);
  if (!payload?.userId) return NextResponse.json({ user: null }, { status: 401 });

  const user = await db.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, email: true, name: true }
  });

  if (!user) return NextResponse.json({ user: null }, { status: 404 });

  return NextResponse.json({ user });
}