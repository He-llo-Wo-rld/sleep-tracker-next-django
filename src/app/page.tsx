import Dashboard from "@/components/Dashboard";
import Guest from "@/components/Guest";
import { db } from "@/lib/db";
import { verifyJwt } from "@/lib/jwt";
import { cookies } from "next/headers";

export default async function HomePage() {
  const token = (await cookies()).get("token")?.value;
  let user = null;
  if (token) {
    const payload = verifyJwt(token);
    if (payload?.userId && typeof payload.userId === "string") {
      user = await db.user.findUnique({ where: { id: payload.userId } });
    }
  }
  return <div>{user ? <Dashboard /> : <Guest />}</div>;
}
