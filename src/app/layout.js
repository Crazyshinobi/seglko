"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname for current path
import { AnimatePresence, motion } from "framer-motion"; // For page transitions
import "./globals.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Curve from "./components/Curves/Curve"; // Page transition wrapper

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get current path
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure layout only renders after mount
  }, []);

  if (!isMounted) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" sizes="32x32" />
          <link rel="icon" href="/favicon.ico" sizes="16x16" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <Footer />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname} // This triggers page transition when the pathname changes
          >
            <Curve backgroundColor="#B0AD98">{children}</Curve>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
