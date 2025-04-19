"use client";

import { Lora } from "next/font/google";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; 
import { AnimatePresence, motion } from "framer-motion"; 
import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import LenisProvider from "./components/LenisProvider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "./providers/AuthProvider";
import { ThemeProvider } from "@/components/theme-provider";
import TopHeader from "./components/TopHeader";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lora",
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); 
  const [isMounted, setIsMounted] = useState(false);
  const authRoutes = [
    "/admin",
    "/admin/forget-password",
    "/admin/reset-password",
    "/admin/verify-otp",
    "/auth/signin",
  ];

  const isAuthRoute = authRoutes.includes(pathname);
  const isAdminDashboard = pathname.startsWith("/admin/") && !isAuthRoute;
  const showHeaderAndFooter = !isAuthRoute && !isAdminDashboard ;;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" sizes="32x32" />
          <link rel="icon" href="/favicon.ico" sizes="16x16" />
        </head>
        <body
          className={`${lora.variable} ${inter.variable} antialiased`}
        ></body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
      </head>
      <body className={`${lora.variable} ${inter.variable} antialiased`}>
        <AuthProvider>
          {isAuthRoute ? (
            <>
              {children}
              <Toaster />
            </>
          ) : isAdminDashboard ? (
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  {children}
                  <Toaster position="top-center" />
                </SidebarInset>
              </SidebarProvider>
            </ThemeProvider>
          ) : (
            <LenisProvider>
              {showHeaderAndFooter && ( <><TopHeader/> <Header /></>)}
              <AnimatePresence mode="wait">
                <motion.div key={pathname}>
                  <Provider store={store}>{children}</Provider>
                </motion.div>
              </AnimatePresence>
              {showHeaderAndFooter && <Footer />}
            </LenisProvider>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
