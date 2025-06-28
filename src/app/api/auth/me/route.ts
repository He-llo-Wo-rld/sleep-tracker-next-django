import { db } from "@/lib/db";
import { verifyJwt } from "@/lib/jwt";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return NextResponse.json({ user: null });
  }
  const payload = verifyJwt(token);
  if (!payload?.userId) {
    return NextResponse.json({ user: null });
  }
  const userId = typeof payload.userId === "string" ? payload.userId : undefined;
  if (!userId) {
    return NextResponse.json({ user: null });
  }
  const user = await db.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!user) {
    return NextResponse.json({ user: null });
  }
  return NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      name: user.name ?? undefined,
      createdAt: user.createdAt ? new Date(user.createdAt).toISOString() : null,
      updatedAt: user.updatedAt ? new Date(user.updatedAt).toISOString() : null,
    },
  });
}
