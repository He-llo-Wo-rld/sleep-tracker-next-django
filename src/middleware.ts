// src/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { verifyJwtEdge } from "./lib/jwt";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  console.log("middleware: token from cookie:", token);

  let userId: string | null = null;

  if (token) {
    const payload = await verifyJwtEdge(token);
    console.log("middleware: payload from verifyJwtEdge:", payload);
    userId = payload?.userId || null;
  }

  if (!userId) {
    console.log("middleware: no userId, redirecting to /sign-in");
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  console.log("middleware: userId found, access granted");
  return NextResponse.next();
}

export const config = {
  matcher: ["/api/users/:path*"],
};
