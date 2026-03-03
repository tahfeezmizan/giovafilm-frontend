"use client";

import { ArrowLeft, Lock } from "lucide-react";
import { useForm } from "react-hook-form";

import SocialLogin from "../shared/social-login/social-login";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export const SignupScreen = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary px-6 pt-8 pb-8 flex items-start gap-4">
        <button className="mt-1">
          <ArrowLeft className="w-6 h-6 text-white" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Create Account</h1>
          <p className="text-sm text-white">
            Join roadtripeado and start your journey
          </p>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-8 pt-8 pb-6 space-y-5"
      >
        {/* Full Name */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-[#424242] ml-1">
            Full Name
          </Label>
          <Input
            placeholder="John Doe"
            {...register("fullName")}
            className="w-full px-4 py-4 bg-white border border-[#E0E0E0] rounded-2xl text-sm focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:border-transparent transition-all"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-[#424242] ml-1">
            Email
          </Label>
          <Input
            type="email"
            placeholder="example@gmail.com"
            {...register("email")}
            className="w-full px-4 py-4 bg-white border border-[#E0E0E0] rounded-2xl text-sm focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:border-transparent transition-all"
          />
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

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label className="text-sm font-semibold text-[#424242] ml-1">
            Confirm Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9E9E9E]" />
            <Input
              type="password"
              placeholder="••••••••"
              {...register("confirmPassword")}
              className="w-full pl-12 pr-4 py-4 bg-white border border-[#E0E0E0] rounded-2xl text-sm focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3 py-2">
          <div className="mt-1">
            <Checkbox
              onCheckedChange={(checked) => setValue("terms", Boolean(checked))}
              className="w-5 h-5 border-[#E0E0E0] data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
          </div>
          <p className="leading-relaxed text-[#757575]">
            I agree to the{" "}
            <span className="text-[#1A1A1A] font-semibold">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="text-[#1A1A1A] font-semibold">Privacy Policy</span>
          </p>
        </div>

        <Button
          type="submit"
          className="w-full font-inter bg-[#FFC107] text-white font-bold rounded-2xl shadow-[0_8px_20px_rgba(255,193,7,0.3)] hover:bg-[#FFB300] transition-all mt-4"
        >
          Sign up
        </Button>

        {/* Divider */}
        <div className="w-full flex items-center my-6">
          <div className="flex-1 h-px bg-[#EEEEEE]"></div>
          <span className="px-4 text-[10px] font-medium text-[#9E9E9E] uppercase tracking-wider">
            Or Sign up with
          </span>
          <div className="flex-1 h-px bg-[#EEEEEE]"></div>
        </div>

        {/* Social Login */}
        <SocialLogin />

        {/* Footer */}
        <div className="text-center">
          <span className="text-[#0A0A0A]">Already have an account? </span>
          <button type="button" className="font-bold text-[#1A1A1A]">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
