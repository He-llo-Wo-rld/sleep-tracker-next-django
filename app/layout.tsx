import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeRegistry from "./theme/ThemeRegistry";
import ScrollTop from "@/components/ScrollTop";
import PageTransition from "@/components/PageTransition";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeRegistry>
            <Navbar />
            <PageTransition>{children}</PageTransition>
            <Footer />
            <ScrollTop />
          </ThemeRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
