"use server";
import { db } from "@/lib/db";
import { verifyJwt } from "@/lib/jwt";
import { cookies } from "next/headers";

async function getUserIdFromCookies(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;
  const payload = verifyJwt(token);
  return typeof payload?.userId === "string" ? payload.userId : null;
}

async function getBestWorstSleep(): Promise<{
  bestSleep?: number;
  worstSleep?: number;
  error?: string;
}> {
  const userId = await getUserIdFromCookies();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    const records = await db.record.findMany({
      where: { userId },
      select: { amount: true },
    });

    if (!records || records.length === 0) {
      return { bestSleep: 0, worstSleep: 0 };
    }

    const amounts = records.map((record) => record.amount);

    const bestSleep = Math.max(...amounts);
    const worstSleep = Math.min(...amounts);

    return { bestSleep, worstSleep };
  } catch (error) {
    console.error("Error fetching sleep amounts:", error);
    return { error: "Database error" };
  }
}

export default getBestWorstSleep;
