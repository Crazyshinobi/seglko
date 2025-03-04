"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function LoginForm({ className, ...props }) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <form className={cn("flex flex-col gap-6 bg-white", className)} {...props}>
      <div className="flex justify-center">
        <Image src="/seglogo.png" height={200} width={120} alt="SEG Logo" />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1> 
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>  
      </div>
      <div className="grid gap-8">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/admin/forget-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
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
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
    </form>
  );
}
