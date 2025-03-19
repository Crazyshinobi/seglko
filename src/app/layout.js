"use client";

import { Geist, Geist_Mono, Lora } from "next/font/google";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname for current path
import { AnimatePresence, motion } from "framer-motion"; // For page transitions
import "./globals.css";
import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Curve from "./components/Curves/Curve"; // Page transition wrapper
import LenisProvider from "./components/LenisProvider";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import TopHeader from "./components/TopHeader";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lora",
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get current path
  const [isMounted, setIsMounted] = useState(false);
  const isAdminRoute = pathname.startsWith("/admin");
  const isAuthRoute = [
    "/admin",
    "/admin/forget-password",
    "/admin/reset-password",
    "/admin/verify-otp",
  ].includes(pathname);
  
  useEffect(() => {
    setIsMounted(true); 
  }, []);

  if (!isMounted) {
    return (
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" sizes="32x32" />
          <link rel="icon" href="/favicon.ico" sizes="16x16" />
        </head>
        <body className={`${lora.variable} ${inter.variable} antialiased`}>
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
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        {isAuthRoute ? (
          <>{children}</>
        ) : isAdminRoute ? (
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>{children}</SidebarInset>
          </SidebarProvider>
        ) : (
          <LenisProvider>
            <TopHeader/>
            <Header />
            <AnimatePresence mode="wait">
              <motion.div key={pathname}>
            <Provider store={store}>{children}</Provider>
                {/* {children} */}
              </motion.div>
            </AnimatePresence>
            <Footer />
          </LenisProvider>
        )}
      </body>
    </html>
  );
}
