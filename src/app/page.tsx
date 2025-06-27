
import Dashboard from "@/components/Dashboard";
import Guest from "@/components/Guest";
import { cookies } from "next/headers";
import { verifyJwt } from "@/lib/jwt";
import { db } from "@/lib/db";

export default async function HomePage() {
  const token = cookies().get("token")?.value;
  let user = null;
  if (token) {
    const payload = verifyJwt(token);
    if (payload?.userId) {
      user = await db.user.findUnique({ where: { id: payload.userId } });
    }
  }
  return <div>{user ? <Dashboard user={user} /> : <Guest />}</div>;
}