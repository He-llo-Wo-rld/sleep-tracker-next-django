"use server";
import { db } from "@/lib/db";
import { verifyJwt } from "@/lib/jwt";
import { Record } from "@/types";
import { cookies } from "next/headers";

async function getUserIdFromCookies(): Promise<string | null> {
  const token = cookies().get("token")?.value;
  if (!token) return null;
  const payload = verifyJwt(token);
  return payload?.userId || null;
}

async function getRecords(): Promise<{
  records?: Record[];
  error?: string;
}> {
  const userId = await getUserIdFromCookies();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const records = await db.record.findMany({
      where: { userId },
      orderBy: { date: "desc" },
      take: 10,
    });

    return { records };
  } catch (error) {
    console.error("Error fetching records:", error);
    return { error: "Database error" };
  }
}

export default getRecords;
