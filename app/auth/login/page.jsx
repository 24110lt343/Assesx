"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import Image from "next/image";
import GoogleLogo from "@/public/google.svg";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import axios from "axios";
import Popup from "@/components/Alert";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [popup, setPopup] = useState({});

  async function handleLogin() {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:9000/auth/emailPasswordLogin",
        {
          email: email,
          password: password,
        }
      );

      if (response && response.data.success === false) {
        setPopup({
          open: true,
          type: "error",
          title: "Login Failed",
          message: response.data.message,
        });
        setIsLoading(false);
      } else {
        setPopup({
          open: true,
          type: "success",
          title: "Login Success",
          message: response.data.message,
        });
        setEmail("");
        setPassword("");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
  }

  return (
    <>
      <Header />
      <Popup
        open={popup.open}
        type={popup.type}
        title={popup.title}
        message={popup.message}
        onClose={() => setPopup((prev) => ({ ...prev, open: false }))}
      />
      <div className="min-h-screen bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)] bg-[#f2f2f2] bg-size-[auto,22px_22px]">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          {/* Hero */}
          <div className="flex flex-col items-center justify-center text-center pt-12 sm:pt-16 pb-8 sm:pb-10">
            <h1 className="text-2xl sm:text-3xl md:text-[36px] font-semibold tracking-tight text-[#1e1f24] leading-[1.15]">
              Login to your{" "}
              <DiaTextReveal
                repeat
                repeatDelay={1.2}
                text={["Account.", "Profile."]}
              />
            </h1>
            <p className="text-sm sm:text-[15px] text-[#67676f] mt-4 leading-relaxed max-w-md">
              Sign in to create assessments, run live interviews, and evaluate
              candidates with AI.
            </p>
          </div>

          {/* Login Card */}
          <div className="relative w-full max-w-md mb-20 sm:mb-24">
            {/* Ambient glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#004ae0]/[0.06] blur-[100px] pointer-events-none" />
            
            <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(0,74,224,0.10)] bg-[#f7f8fb] transition-all duration-300 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_40px_-8px_rgba(0,74,224,0.14)]">
              <StripedPattern width={6} height={6} color="#d4d4d4" />
              
              <div className="relative z-10 border border-gray-200 bg-white bg-[radial-gradient(rgba(0,0,0,.2)_1.2px,transparent_1px)] bg-size-[14px_14px] shadow-sm rounded-xl p-6 sm:p-8 flex flex-col">
                
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-black/5 flex items-center justify-center">
                    <Lock className="h-4 w-4 text-black" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-medium leading-tight text-black">
                      Welcome back
                    </span>
                    <span className="text-[13px] text-gray-500 leading-tight">
                      Enter your details to continue
                    </span>
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col mb-4">
                  <span className="text-[13px] font-medium text-gray-700 mb-1.5">
                    Email Address
                  </span>
                  <div
                    className={`flex items-center gap-3 rounded-lg border px-3.5 transition-all bg-white ${
                      emailFocused
                        ? "border-black ring-[3px] ring-black/10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Mail
                      className="h-4 w-4 text-gray-400 shrink-0"
                      strokeWidth={2}
                    />
                    <input
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setEmailFocused(true)}
                      onBlur={() => setEmailFocused(false)}
                      className="w-full text-[14px] py-2.5 outline-none placeholder:text-gray-400 bg-transparent"
                      placeholder="Enter your email address here."
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="flex flex-col mb-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[13px] font-medium text-gray-700">
                      Password
                    </span>
                    <span className="text-[12px] text-[#004AE0] font-medium cursor-pointer hover:underline underline-offset-2">
                      Forgot password?
                    </span>
                  </div>
                  <div
                    className={`flex items-center gap-3 rounded-lg border px-3.5 transition-all bg-white ${
                      passwordFocused
                        ? "border-black ring-[3px] ring-black/10"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Lock
                      className="h-4 w-4 text-gray-400 shrink-0"
                      strokeWidth={2}
                    />
                    <input
                      value={password}
                      type={showPassword ? "text" : "password"}
                      onFocus={() => setPasswordFocused(true)}
                      onBlur={() => setPasswordFocused(false)}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full text-[14px] py-2.5 outline-none placeholder:text-gray-400 bg-transparent"
                      placeholder="Enter your secure password here."
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" strokeWidth={2} />
                      ) : (
                        <Eye className="h-4 w-4" strokeWidth={2} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className="group bg-[#0a0a0a] hover:bg-[#004AE0] disabled:opacity-70 rounded-lg py-3 mt-5 text-white text-[14px] font-medium transition-colors flex items-center justify-center gap-2 hover:cursor-pointer"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center py-1 gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: "0s" }} />
                      <div className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="h-1.5 w-1.5 rounded-full bg-white animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      Let&apos;s Get Started
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        strokeWidth={2}
                      />
                    </div>
                  )}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-[12px] text-gray-400 font-medium">OR</span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Google Sign In */}
                <button className="flex w-full justify-center py-2.5 items-center gap-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors text-[14px] font-medium text-gray-700">
                  <Image src={GoogleLogo} alt="Google" width={18} height={18} />
                  Sign In With Google
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}