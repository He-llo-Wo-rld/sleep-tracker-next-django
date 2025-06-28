"use server";
import { db } from "@/lib/db";
import { verifyJwt } from "@/lib/jwt";
import { cookies } from "next/headers";

async function getUserIdFromCookies(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;
  const payload = verifyJwt(token) as { userId?: string } | null;
  return typeof payload?.userId === "string" ? payload.userId : null;
}

async function getUserRecord(): Promise<{
  record?: number;
  daysWithRecords?: number;
  error?: string;
}> {
  const userId = await getUserIdFromCookies();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const records = await db.record.findMany({
      where: { userId },
    });

    const record = records.reduce((sum, record) => sum + record.amount, 0);

    const daysWithRecords = records.filter(
      (record) => record.amount > 0
    ).length;

    return { record, daysWithRecords };
  } catch (error) {
    console.error("Error fetching user record:", error);
    return { error: "Database error" };
  }
}

export default getUserRecord;
