import { SignedIn, SignedOut } from "@clerk/nextjs";
import Guest from "@/components/Guest";
import Dashboard from "@/components/Dashboard";

export default function HomePage() {
  return (
    <div>
      <SignedOut>
        <Guest />
      </SignedOut>

      <SignedIn>
        <Dashboard />
      </SignedIn>
    </div>
  );
}
