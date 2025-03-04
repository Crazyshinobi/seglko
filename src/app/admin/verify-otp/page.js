"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function VerifyOTPPage() {
  useEffect(() => {
    document.title = "Verify OTP - Seglko Admin";
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
            Verify OTP
          </h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Please verify OTP send to your email address.
          </p>

          <form className="space-y-8 mt-10">
            <div className="flex justify-center">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div>
              <Link href="/admin/reset-password">
                <Button type="submit" className="w-full">
                  Verify OTP
                </Button>
              </Link>
            </div>
          </form>
          <Link href="/admin/forget-password">
            <Button className="w-full my-3" variant="secondary">
              Go Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
