"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  useEffect(() => {
    document.title = "Reset Password - Seglko Admin";
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
        <div className="bg-white backdrop-blur-md p-8 rounded-xl shadow-lg max-w-md w-full">
          <h2 className="text-center text-2xl font-semibold mb-2">
            Reset your password
          </h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Create a strong password and confirm it to reset your account
            access.
          </p>

          <form className="space-y-5 mt-5">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "password" : "text"}
                  required
                  className="outline-none"
                />
                <div className="absolute right-0 top-0">
                  <Button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    variant="outline"
                    size="icon"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "password" : "text"}
                  required
                  className="outline-none"
                />
                <div className="absolute right-0 top-0">
                  <Button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    variant="outline"
                    size="icon"
                  >
                    {showConfirmPassword ? <EyeOff /> : <Eye />}
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
