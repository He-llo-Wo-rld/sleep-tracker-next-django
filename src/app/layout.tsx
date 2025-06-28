import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import ScrollTop from "@/components/ScrollTop";
import { UserContextProvider } from "@/context/UserContext";
import { db } from "@/lib/db";
import { verifyJwt } from "@/lib/jwt";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import ThemeRegistry from "./theme/ThemeRegistry";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sleep Tracker",
  description: "Track your sleep patterns and improve your rest",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // SSR user
  let user = null;
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (token) {
    const payload = verifyJwt(token);
    if (payload?.userId) {
      const dbUser = await db.user.findUnique({
        where: { id: String(payload.userId) },
        select: { id: true, email: true, name: true },
      });
      if (dbUser) {
        user = {
          id: dbUser.id,
          email: dbUser.email,
          name: dbUser.name ?? undefined,
        };
      }
    }
  }
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <UserContextProvider user={user}>
          <ThemeRegistry>
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
            <ScrollTop />
          </ThemeRegistry>
        </UserContextProvider>
      </body>
    </html>
  );
}
