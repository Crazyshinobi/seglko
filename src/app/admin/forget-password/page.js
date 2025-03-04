"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function ForgetPasswordPage() {
  useEffect(() => {
    document.title = "Forget Password - Seglko Admin";
  }, []);
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <Image
        src="/futuristic3.jpg"
        alt="Futuristic Background"
        fill
        className="absolute inset-0 object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-center text-2xl font-semibold mb-2">
            Forgot your password?
          </h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            No worries! Enter your email below to receive an OTP.
          </p>

          <form className="space-y-8 mt-10">
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <Link href="/admin/verify-otp">
                <Button type="submit" className="w-full">
                  Send OTP
                </Button>
              </Link>
            </div>
          </form>
          <Link href="/admin">
            <Button className="w-full my-3" variant="secondary">
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
