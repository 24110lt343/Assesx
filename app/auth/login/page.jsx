"use client";
import { useState } from "react";
import {
  BadgeCheck,
  Building2,
  School,
  Brain,
  ShieldCheck,
  Sparkles,
  Workflow,
  GraduationCap,
  ChevronDown,
  Boxes,
  Plus,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Radio,
  Check,
  TextInitial,
  MoveRight,
} from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import Image from "next/image";
import GoogleLogo from "@/public/google.svg";
import { Globe } from "@/components/ui/globe";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { NotebookText } from "lucide-react";
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
  const [popup,setPopup] = useState({})

  async function Login() {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:9000/auth/emailPasswordLogin",
        {
          email: email,
          password: password,
        }
      );

      if (response && response.data.success == false) {
        setPopup({
          open: true,
          type: "error",
          title: "Login Failed",
          message: response.data.message,
        })
        setIsLoading(false);
      } else {
        setPopup({
          open: true,
          type: "success",
          title: "Login Success",
          message: response.data.message,
        })
        setEmail("");
        setPassword("");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
    <Header/>
      <Popup
        open={popup.open}
        type={popup.type}
        title={popup.title}
        message={popup.message}
        onClose={() => setPopup((prev) => ({ ...prev, open: false }))}
      />
      <div className="bg-[#f2f2f2]  bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)]  bg-size-[auto,22px_22px]  top-0  xl:px-48 items-center justify-between px-3.5 py-6  border-gray-200/60 border-b shadow-[5px] flex flex-col">
        <div className="text-foreground flex flex-col  items-center justify-center p-8">
          <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl leading-15">
            Login to your{" "}
            <DiaTextReveal
              repeat
              repeatDelay={1.2}
              text={["Account.", "Profile."]}
            />
          </h1>
          <p className="text-center text-[19px] mt-5 leading-7">
            Sign in to create assessments, run live interviews, and evaluate
            candidates with AI.
          </p>
        </div>
        <div className="flex gap-5 mb-35">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 w-225 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(0,74,224,0.10)] bg-[#f7f8fb]">
            <StripedPattern width={6} height={6} color="#d4d4d4" />
            <div className="relative z-10 border border-gray-200 bg-white bg-[radial-gradient(rgba(0,0,0,.2)_1.2px,transparent_1px)] bg-size-[14px_14px] shadow-sm rounded-xl p-10 flex flex-col">
              <div className="flex items-center gap-3 mb-7">
                <div className="h-11 w-11 rounded-lg bg-black/5 flex items-center justify-center">
                  <Lock className="h-5 w-5 text-black" strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[17px] font-medium leading-tight text-black">
                    Welcome back
                  </span>
                  <span className="text-[14.5px] text-gray-500 leading-tight">
                    Enter your details to continue
                  </span>
                </div>
              </div>

              <div className="flex flex-col mb-5">
                <span className="text-[15px] font-medium text-gray-700 mb-2">
                  Email Address
                </span>
                <div
                  className={`flex items-center gap-3 rounded-lg border px-4 transition-colors bg-white ${
                    emailFocused
                      ? "border-black ring-[3px] ring-black/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Mail
                    className="h-4.5 w-4.5 text-gray-400 shrink-0"
                    strokeWidth={2}
                  />
                  <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                    className="w-full text-[15.5px] py-3 outline-none placeholder:text-gray-400 bg-transparent"
                    placeholder="Enter your email address here."
                  />
                </div>
              </div>
              <div className="flex flex-col mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[15px] font-medium text-gray-700">
                    Password
                  </span>
                  <span className="text-[14px] text-[#004AE0] font-medium cursor-pointer hover:underline underline-offset-2">
                    Forgot password?
                  </span>
                </div>
                <div
                  className={`flex items-center gap-3 rounded-lg border px-4 transition-colors bg-white ${
                    passwordFocused
                      ? "border-black ring-[3px] ring-black/10"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Lock
                    className="h-4.5 w-4.5 text-gray-400 shrink-0"
                    strokeWidth={2}
                  />
                  <input
                    value={password}
                    type={showPassword ? "text" : "password"}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full text-[15.5px] py-3 outline-none placeholder:text-gray-400 bg-transparent"
                    placeholder="Enter your secure password here."
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4.5 w-4.5" strokeWidth={2} />
                    ) : (
                      <Eye className="h-4.5 w-4.5" strokeWidth={2} />
                    )}
                  </button>
                </div>
              </div>
              <button
                onClick={Login}
                className="group bg-[#0a0a0a] hover:bg-[#004AE0] rounded-lg py-3.5 mt-6 text-white text-[15.5px] font-medium transition-colors flex hover:cursor-pointer items-center justify-center gap-2"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center py-1.5 gap-2">
                    <div
                      className="h-2 w-2 rounded-full bg-white animate-bounce"
                      style={{ animationDelay: "0s" }}
                    />
                    <div
                      className="h-2 w-2 rounded-full bg-white animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="h-2 w-2 rounded-full bg-white animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Let's Get Started
                    <ArrowRight
                      className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </div>
                )}
              </button>
              <div className="flex items-center gap-3 my-6">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-[13.5px] text-gray-400 font-medium">
                  OR
                </span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <button className="flex w-full justify-center py-3 items-center gap-2.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors text-[15.5px] font-medium text-gray-700">
                <Image src={GoogleLogo} alt="Logo" width={20} height={20} />
                Sign In With Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
