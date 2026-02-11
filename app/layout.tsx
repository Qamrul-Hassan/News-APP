import "./styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ThemeLayout from "@/app/components/ThemeLayout";
import ThemeToggle from "@/app/components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Latest News - Stay Updated",
  description: "Get the latest breaking news, articles, and headlines.",
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col bg-[var(--background)] text-[color:var(--foreground)] font-sans antialiased">
        <ThemeLayout>
          <Navbar />
          <main id="main-content" className="mx-auto flex w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            {children}
          </main>
          <Footer />
          <div className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6">
            <ThemeToggle />
          </div>
        </ThemeLayout>
      </body>
    </html>
  );
}
