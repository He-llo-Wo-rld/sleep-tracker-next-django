import { db } from "@/lib/db";
import { signJwt } from "@/lib/jwt";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = await db.user.findUnique({
    where: { email },
    select: { id: true, email: true, name: true, password: true }
  });
  if (!user || !user.password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Створюємо JWT
  const token = signJwt({ userId: user.id });

  // Відповідь з Set-Cookie (HTTP-only, Secure)
  const response = NextResponse.json({
    user: { id: user.id, email: user.email, name: user.name },
  });
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 днів
  });
  return response;
}
