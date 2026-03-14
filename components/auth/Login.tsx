"use client";

import { Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import SocialLogin from "../shared/social-login/social-login";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col items-center justify-center px-8 pt-16 pb-8 min-h-screen">
      {/* Logo */}

      <Link href="/" className="mb-8">
        <Image
          src={require("@/public/logo.png")}
          width={300}
          height={150}
          alt="Roadtripeado Logo"
          className="w-72"
        />
      </Link>

      {/* Welcome Text */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
          Welcome to Roadtripeado
        </h2>
        <p className="text-sm text-[#757575]">
          Sign in to continue your adventure
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-5">
        {/* Email */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-[#424242] ml-1">
            Email
          </Label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9E9E9E]" />
            <Input
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              className="w-full pl-12 pr-4 py-4 bg-white border border-[#E0E0E0] rounded-2xl text-sm focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-[#424242] ml-1">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9E9E9E]" />
            <Input
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className="w-full pl-12 pr-4 py-4 bg-white border border-[#E0E0E0] rounded-2xl text-sm focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <Link
            href={"/"}
            className="text-xs font-bold text-[#424242] cursor-pointer"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <Button
          type="submit"
          className="w-full py-4 bg-[#FFC107] text-white font-bold rounded-2xl shadow-[0_8px_20px_rgba(255,193,7,0.3)] hover:bg-[#FFB300] transition-all mt-4"
        >
          Login
        </Button>
      </form>

      {/* Divider */}
      <div className="w-full flex items-center my-8">
        <div className="flex-1 h-px bg-[#EEEEEE]"></div>
        <span className="px-4 text-[10px] font-medium text-[#9E9E9E] uppercase tracking-wider">
          Or continue with
        </span>
        <div className="flex-1 h-px bg-[#EEEEEE]"></div>
      </div>

      {/* Social Login */}
      <SocialLogin />

      {/* Footer */}
      <div className="text-sm">
        <span className="text-[#0A0A0A]">Don't have an account? </span>
        <Link href="/signup" className="font-bold text-[#1A1A1A]">
          Sign Up
        </Link>
      </div>
    </div>
  );
};
