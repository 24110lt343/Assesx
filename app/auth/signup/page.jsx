"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import {
  BadgeCheck,
  Building2,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Check,
  Camera,
  Calendar,
  Phone,
} from "lucide-react";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import Image from "next/image";
import GoogleLogo from "@/public/google.svg";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Register() {
  const router = useRouter();
  const [accountType, setAccountType] = useState("individual");
  const [organizationName, setOrganizationName] = useState("");
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);
  const [focusedField, setFocusedField] = useState(null);
  const [agreed, setAgreed] = useState(false);

  const isOrganization = accountType === "organization";
  const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setProfileImage(reader.result);
    reader.readAsDataURL(file);
  };

  const fieldWrapperClass = (name) =>
    `flex items-center gap-3 rounded-lg border px-3.5 transition-all bg-white ${
      focusedField === name
        ? "border-black ring-[3px] ring-black/10"
        : "border-gray-200 hover:border-gray-300"
    }`;

  const inputProps = (name) => ({
    onFocus: () => setFocusedField(name),
    onBlur: () => setFocusedField((f) => (f === name ? null : f)),
    className: "w-full text-[14px] py-2.5 outline-none placeholder:text-gray-400 bg-transparent",
  });

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)] bg-[#f2f2f2] bg-size-[auto,22px_22px]">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          {/* Hero */}
          <div className="flex flex-col items-center justify-center text-center pt-12 sm:pt-16 pb-8 sm:pb-10">
            <h1 className="text-2xl sm:text-3xl md:text-[36px] font-semibold tracking-tight text-[#1e1f24] leading-[1.15]">
              Create your{" "}
              <DiaTextReveal
                repeat
                repeatDelay={1.2}
                text={["Account.", "Profile."]}
              />
            </h1>
            <p className="text-sm sm:text-[15px] text-[#67676f] mt-4 leading-relaxed max-w-md">
              Sign up to create assessments, run live interviews, and evaluate candidates with AI.
            </p>
          </div>

          {/* Signup Card */}
          <div className="relative w-full max-w-lg mb-20 sm:mb-24">
            {/* Ambient glow */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#004ae0]/[0.06] blur-[100px] pointer-events-none" />
            
            <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(0,74,224,0.10)] bg-[#f7f8fb] transition-all duration-300 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_16px_40px_-8px_rgba(0,74,224,0.14)]">
              <StripedPattern width={6} height={6} color="#d4d4d4" />
              
              <div className="relative z-10 border border-gray-200 bg-white bg-[radial-gradient(rgba(0,0,0,.2)_1.2px,transparent_1px)] bg-size-[14px_14px] shadow-sm rounded-xl p-6 sm:p-8 flex flex-col">
                
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-lg bg-black/5 flex items-center justify-center">
                    <BadgeCheck className="h-4 w-4 text-black" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-medium leading-tight text-black">Create your account</span>
                    <span className="text-[13px] text-gray-500 leading-tight">Tell us a bit about yourself to get started</span>
                  </div>
                </div>

                {/* Account type toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1 mb-5">
                  <button
                    type="button"
                    onClick={() => setAccountType("individual")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-[13px] font-medium transition-all ${
                      !isOrganization
                        ? "bg-white text-black shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <User className="h-4 w-4" strokeWidth={2} />
                    Individual
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType("organization")}
                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-[13px] font-medium transition-all ${
                      isOrganization
                        ? "bg-white text-black shadow-sm"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <Building2 className="h-4 w-4" strokeWidth={2} />
                    Organization
                  </button>
                </div>

                {/* Profile picture / logo upload */}
                <div className="flex items-center gap-4 mb-5">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="relative h-14 w-14 shrink-0 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden hover:border-gray-300 transition-colors group"
                  >
                    {profileImage ? (
                      <img src={profileImage} alt="Preview" className="h-full w-full object-cover" />
                    ) : isOrganization ? (
                      <Building2 className="h-6 w-6 text-gray-300" strokeWidth={1.5} />
                    ) : (
                      <User className="h-6 w-6 text-gray-300" strokeWidth={1.5} />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Camera className="h-4 w-4 text-white" strokeWidth={2} />
                    </div>
                  </button>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-medium text-gray-700">
                      {isOrganization ? "Organization logo" : "Profile picture"}
                    </span>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[12px] text-black font-medium text-left hover:underline underline-offset-2 w-fit"
                    >
                      {profileImage ? "Change image" : "Upload image"}
                    </button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Organization name (org only) */}
                {isOrganization && (
                  <div className="flex flex-col mb-4">
                    <span className="text-[13px] font-medium text-gray-700 mb-1.5">Organization Name</span>
                    <div className={fieldWrapperClass("organizationName")}>
                      <Building2 className="h-4 w-4 text-gray-400 shrink-0" strokeWidth={2} />
                      <input
                        type="text"
                        value={organizationName}
                        onChange={(e) => setOrganizationName(e.target.value)}
                        placeholder="Acme Corporation"
                        {...inputProps("organizationName")}
                      />
                    </div>
                  </div>
                )}

                {/* Full Name (individual only) */}
                {!isOrganization && (
                  <div className="flex flex-col mb-4">
                    <span className="text-[13px] font-medium text-gray-700 mb-1.5">Full Name</span>
                    <div className={fieldWrapperClass("fullName")}>
                      <User className="h-4 w-4 text-gray-400 shrink-0" strokeWidth={2} />
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name here."
                        {...inputProps("fullName")}
                      />
                    </div>
                  </div>
                )}

                {/* DOB + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {!isOrganization && (
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium text-gray-700 mb-1.5">Date of Birth</span>
                      <div className={fieldWrapperClass("dob")}>
                        <Calendar className="h-4 w-4 text-gray-400 shrink-0" strokeWidth={2} />
                        <input
                          type="date"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          {...inputProps("dob")}
                          className="w-full text-[14px] py-2.5 outline-none bg-transparent text-gray-700"
                        />
                      </div>
                    </div>
                  )}
                  <div className={`flex flex-col ${isOrganization ? "sm:col-span-2" : ""}`}>
                    <span className="text-[13px] font-medium text-gray-700 mb-1.5">Phone Number</span>
                    <div className={fieldWrapperClass("phone")}>
                      <Phone className="h-4 w-4 text-gray-400 shrink-0" strokeWidth={2} />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 6388079XXX"
                        {...inputProps("phone")}
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col mb-4">
                  <span className="text-[13px] font-medium text-gray-700 mb-1.5">
                    {isOrganization ? "Work Email" : "Email Address"}
                  </span>
                  <div className={fieldWrapperClass("email")}>
                    <Mail className="h-4 w-4 text-gray-400 shrink-0" strokeWidth={2} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address here."
                      {...inputProps("email")}
                    />
                  </div>
                </div>

                {/* Password + Confirm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-gray-700 mb-1.5">Password</span>
                    <div className={fieldWrapperClass("password")}>
                      <Lock className="h-4 w-4 text-gray-400 shrink-0" strokeWidth={2} />
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••"
                        {...inputProps("password")}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" strokeWidth={2} /> : <Eye className="h-4 w-4" strokeWidth={2} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-gray-700 mb-1.5">Confirm Password</span>
                    <div
                      className={`flex items-center gap-3 rounded-lg border px-3.5 transition-all bg-white ${
                        passwordsMismatch
                          ? "border-red-300 ring-[3px] ring-red-100"
                          : focusedField === "confirmPassword"
                          ? "border-black ring-[3px] ring-black/10"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <Lock className="h-4 w-4 text-gray-400 shrink-0" strokeWidth={2} />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••••"
                        {...inputProps("confirmPassword")}
                      />
                      {passwordsMatch && <Check className="h-4 w-4 text-green-500 shrink-0" strokeWidth={2} />}
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((v) => !v)}
                        className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" strokeWidth={2} /> : <Eye className="h-4 w-4" strokeWidth={2} />}
                      </button>
                    </div>
                  </div>
                </div>

                {passwordsMismatch && (
                  <span className="text-[13px] text-red-500 mb-2">Passwords don&apos;t match</span>
                )}

                {/* Terms checkbox */}
                <label className="flex items-start gap-2 mt-3 mb-1 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-black"
                  />
                  <span className="text-[13px] text-gray-500 leading-snug">
                    I agree to the <span className="text-black font-medium hover:underline underline-offset-2">Terms of Service</span> and{" "}
                    <span className="text-black font-medium hover:underline underline-offset-2">Privacy Policy</span>
                  </span>
                </label>

                {/* Submit */}
                <button className="group bg-[#0a0a0a] hover:bg-[#004AE0] rounded-lg py-3 mt-4 text-white text-[14px] font-medium transition-colors flex items-center justify-center gap-2 hover:cursor-pointer">
                  Create Account
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-[12px] text-gray-400 font-medium">OR</span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Google */}
                <button className="flex w-full justify-center py-2.5 items-center gap-2 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors text-[14px] font-medium text-gray-700">
                  <Image src={GoogleLogo} alt="Google" width={18} height={18} />
                  Sign Up With Google
                </button>

                {/* Login link */}
                <p className="text-center text-[13px] text-gray-500 mt-5">
                  Already have an account?{" "}
                  <button onClick={() => router.replace("/auth/login")} className="text-[#004AE0] font-medium cursor-pointer hover:underline underline-offset-2">Log in</button>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}