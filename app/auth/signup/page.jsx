"use client";
import {useRouter} from "next/navigation";
import { useState, useRef } from "react";
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
  User,
  Calendar,
  Phone,
  Camera,
} from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import Image from "next/image";
import GoogleLogo from "@/public/google.svg"

import { Globe } from "@/components/ui/globe";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { NotebookText } from "lucide-react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Register() {
  const router = useRouter();
  const [accountType, setAccountType] = useState("individual"); // "individual" | "organization"

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
    `flex items-center gap-3 rounded-lg border px-4 transition-colors bg-white ${
      focusedField === name
        ? "border-black ring-[3px] ring-black/10"
        : "border-gray-200 hover:border-gray-300"
    }`;

  const inputProps = (name) => ({
    onFocus: () => setFocusedField(name),
    onBlur: () => setFocusedField((f) => (f === name ? null : f)),
    className: "w-full text-[15.5px] py-3 outline-none placeholder:text-gray-400 bg-transparent",
  });

  return (
    <>
    <Header/>
      <div className="bg-[#f2f2f2]  bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)]  bg-size-[auto,22px_22px]  top-0  xl:px-48 items-center justify-between px-3.5 py-6  border-gray-200/60 border-b shadow-[5px] flex flex-col">

          <div className="text-foreground flex flex-col  items-center justify-center p-8">
            <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl leading-15">
              Create your{" "}
              <DiaTextReveal
                repeat
                repeatDelay={1.2}
                text={[
                  "Account.",
                  "Profile.",
                ]}
              />
            </h1>
            <p className="text-center text-[19px] mt-5 leading-7">
              Sign up to create assessments, run live interviews, and evaluate candidates with AI.
            </p>
          </div>

           <div className="flex gap-5">

            <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 w-225 p-2 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(0,74,224,0.10)] bg-[#f7f8fb]">

                <StripedPattern width={6} height={6} color="#d4d4d4" />

                <div className="relative z-10 border border-gray-200 bg-white bg-[radial-gradient(rgba(0,0,0,.2)_1.2px,transparent_1px)] bg-size-[14px_14px] shadow-sm rounded-xl p-10 flex flex-col">

                    <div className="flex items-center gap-3 mb-7">
                      <div className="h-11 w-11 rounded-lg bg-black/5 flex items-center justify-center">
                        <BadgeCheck className="h-5 w-5 text-black" strokeWidth={2} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[17px] font-medium leading-tight text-black">Create your account</span>
                        <span className="text-[14.5px] text-gray-500 leading-tight">Tell us a bit about yourself to get started</span>
                      </div>
                    </div>

                    {/* Account type toggle */}
                    <div className="flex bg-gray-100 rounded-lg p-1 mb-7">
                      <button
                        type="button"
                        onClick={() => setAccountType("individual")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-[14.5px] font-medium transition-all ${
                          !isOrganization
                            ? "bg-white text-black shadow-sm"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        <User className="h-4.5 w-4.5" strokeWidth={2} />
                        Individual
                      </button>
                      <button
                        type="button"
                        onClick={() => setAccountType("organization")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-[14.5px] font-medium transition-all ${
                          isOrganization
                            ? "bg-white text-black shadow-sm"
                            : "text-gray-500 hover:text-gray-700"
                        }`}
                      >
                        <Building2 className="h-4.5 w-4.5" strokeWidth={2} />
                        Organization
                      </button>
                    </div>

                    {/* Profile picture / logo upload */}
                    <div className="flex items-center gap-5 mb-6">
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="relative h-18 w-18 shrink-0 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden hover:border-gray-300 transition-colors group"
                      >
                        {profileImage ? (
                          <img src={profileImage} alt="Preview" className="h-full w-full object-cover" />
                        ) : isOrganization ? (
                          <Building2 className="h-7 w-7 text-gray-300" strokeWidth={1.5} />
                        ) : (
                          <User className="h-7 w-7 text-gray-300" strokeWidth={1.5} />
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Camera className="h-5 w-5 text-white" strokeWidth={2} />
                        </div>
                      </button>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[14.5px] font-medium text-gray-700">
                          {isOrganization ? "Organization logo" : "Profile picture"}
                        </span>
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-[14px] text-black font-medium text-left hover:underline underline-offset-2 w-fit"
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
                      <div className="flex flex-col mb-5">
                        <span className="text-[15px] font-medium text-gray-700 mb-2">Organization Name</span>
                        <div className={fieldWrapperClass("organizationName")}>
                          <Building2 className="h-4.5 w-4.5 text-gray-400 shrink-0" strokeWidth={2} />
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

                    {/* Individual fields */}
                    {!isOrganization && (
                      <div className="flex flex-col mb-5">
                        <span className="text-[15px] font-medium text-gray-700 mb-2">Full Name</span>
                        <div className={fieldWrapperClass("fullName")}>
                          <User className="h-4.5 w-4.5 text-gray-400 shrink-0" strokeWidth={2} />
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

                    <div className="grid grid-cols-2 gap-4 mb-5">
                      {!isOrganization && (
                        <div className="flex flex-col">
                          <span className="text-[15px] font-medium text-gray-700 mb-2">Date of Birth</span>
                          <div className={fieldWrapperClass("dob")}>
                            <Calendar className="h-4.5 w-4.5 text-gray-400 shrink-0" strokeWidth={2} />
                            <input
                              type="date"
                              value={dob}
                              onChange={(e) => setDob(e.target.value)}
                              {...inputProps("dob")}
                              className="w-full text-[15.5px] py-3 outline-none bg-transparent text-gray-700"
                            />
                          </div>
                        </div>
                      )}
                      <div className={`flex flex-col ${isOrganization ? "col-span-2" : ""}`}>
                        <span className="text-[15px] font-medium text-gray-700 mb-2">Phone Number</span>
                        <div className={fieldWrapperClass("phone")}>
                          <Phone className="h-4.5 w-4.5 text-gray-400 shrink-0" strokeWidth={2} />
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

                    <div className="flex flex-col mb-5">
                        <span className="text-[15px] font-medium text-gray-700 mb-2">
                          {isOrganization ? "Work Email" : "Email Address"}
                        </span>
                        <div className={fieldWrapperClass("email")}>
                          <Mail className="h-4.5 w-4.5 text-gray-400 shrink-0" strokeWidth={2} />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address here."
                            {...inputProps("email")}
                          />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="flex flex-col">
                          <span className="text-[15px] font-medium text-gray-700 mb-2">Password</span>
                          <div className={fieldWrapperClass("password")}>
                            <Lock className="h-4.5 w-4.5 text-gray-400 shrink-0" strokeWidth={2} />
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
                              aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                              {showPassword ? <EyeOff className="h-4.5 w-4.5" strokeWidth={2} /> : <Eye className="h-4.5 w-4.5" strokeWidth={2} />}
                            </button>
                          </div>
                      </div>

                      <div className="flex flex-col">
                          <span className="text-[15px] font-medium text-gray-700 mb-2">Confirm Password</span>
                          <div
                            className={`flex items-center gap-3 rounded-lg border px-4 transition-colors bg-white ${
                              passwordsMismatch
                                ? "border-red-300 ring-[3px] ring-red-100"
                                : focusedField === "confirmPassword"
                                ? "border-black ring-[3px] ring-black/10"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                          >
                            <Lock className="h-4.5 w-4.5 text-gray-400 shrink-0" strokeWidth={2} />
                            <input
                              type={showConfirmPassword ? "text" : "password"}
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              placeholder="••••••••••"
                              {...inputProps("confirmPassword")}
                            />
                            {passwordsMatch && <Check className="h-4.5 w-4.5 text-green-500 shrink-0" strokeWidth={2} />}
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword((v) => !v)}
                              className="shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                            >
                              {showConfirmPassword ? <EyeOff className="h-4.5 w-4.5" strokeWidth={2} /> : <Eye className="h-4.5 w-4.5" strokeWidth={2} />}
                            </button>
                          </div>
                      </div>
                    </div>
                    {passwordsMismatch && (
                      <span className="text-[13.5px] text-red-500 mb-2">Passwords don't match</span>
                    )}

                    <label className="flex items-start gap-2.5 mt-4 mb-1 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 h-4.5 w-4.5 rounded border-gray-300 accent-black"
                      />
                      <span className="text-[14px] text-gray-500 leading-snug">
                        I agree to the <span className="text-black font-medium hover:underline underline-offset-2">Terms of Service</span> and{" "}
                        <span className="text-black font-medium hover:underline underline-offset-2">Privacy Policy</span>
                      </span>
                    </label>

                    <button className="group bg-[#0a0a0a] hover:bg-[#004AE0] rounded-lg py-3.5 mt-5 text-white text-[15.5px] font-medium transition-colors flex hover:cursor-pointer items-center justify-center gap-2">
                        Create Account
                        <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                    </button>

                    <div className="flex items-center gap-3 my-6">
                      <div className="h-px flex-1 bg-gray-200" />
                      <span className="text-[13.5px] text-gray-400 font-medium">OR</span>
                      <div className="h-px flex-1 bg-gray-200" />
                    </div>

                    <button className="flex w-full justify-center py-3 items-center gap-2.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors text-[15.5px] font-medium text-gray-700">
                        <Image
                            src={GoogleLogo}
                            alt="Logo"
                            width={20}
                            height={20}
                        />
                        Sign Up With Google
                    </button>

                    <p className="text-center text-[14.5px] text-gray-500 mt-6">
                      Already have an account?{" "}
                      <button onClick={()=>router.replace("/auth/login")} className="text-[#004AE0] font-medium cursor-pointer hover:underline underline-offset-2">Log in</button>
                    </p>

                </div>

            </div>

         </div>

        </div>
        <Footer/>
    </>
  );
}