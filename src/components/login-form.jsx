"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeOff } from "lucide-react";
import { Eye } from "lucide-react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export function LoginForm({ className, ...props }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const rawCallbackUrl = searchParams.get("callbackUrl") ?? "/admin/dashboard";
  const callbackUrl = decodeURIComponent(
    rawCallbackUrl.split("?callbackUrl=")[0]
  );
  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: form.email,
        password: form.password,
        callbackUrl,
      });

      if (res?.error) {
        toast.error(res.error);
      } else if (res?.url) {
        toast.success("Login Successful");
        router.replace(res.url);
      }
    } catch (error) {
      console.error("❌ Error during login:", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className={cn("flex flex-col gap-6 bg-white", className)}
      {...props}
    >
      <div className="flex justify-center">
        <Link href={"/"}>
          <Image src="/seglogo.png" height={200} width={120} alt="SEG Logo" />
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-8">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
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
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={handleChange("password")}
            />
            <Button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              variant="outline"
              size="icon"
              className="absolute right-0 top-0"
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </Button>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password}</p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2" />
              Please wait
            </>
          ) : (
            "Login"
          )}
        </Button>
      </div>
    </form>
  );
}
