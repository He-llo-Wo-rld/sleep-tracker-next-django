"use server";
import { db } from "@/lib/db";
import { verifyJwt } from "@/lib/jwt";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

async function getUserIdFromCookies(): Promise<string | null> {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) return null;
  const payload = verifyJwt(token);
  return typeof payload?.userId === "string" ? payload.userId : null;
}

async function deleteRecord(recordId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const userId = await getUserIdFromCookies();

  if (!userId) {
    return { error: "User not found" };
  }

  try {
    await db.record.delete({
      where: {
        id: recordId,
        userId,
      },
    });

    revalidatePath("/");

    return { message: "Record deleted" };
  } catch (error) {
    console.error("Error deleting record:", error);
    return { error: "Database error" };
  }
}

export default deleteRecord;
