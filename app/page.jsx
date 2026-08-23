"use client"
import {
  BadgeCheck,
  Building2,
  School,
  Brain,
  Workflow,
  GraduationCap,
  ChevronDown,
  Boxes,
  Plus,
  TextInitial,
  MoveRight,
  NotebookText,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { Globe } from "@/components/ui/globe";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import { useState } from "react";

const faqs = [
  {
    q: "How is Assesx different from tools like Google Forms?",
    a: "Assesx goes beyond simple data collection. It offers smart applicant filtering, multi-user access, reviewer workflows, and automated communication — all designed specifically for application and vetting processes.",
  },
  {
    q: "How secure is my data with Assesx?",
    a: "We use enterprise-grade encryption, SOC 2 Type II compliant infrastructure, and strict access controls. Your data is encrypted at rest and in transit with regular security audits.",
  },
  {
    q: "Is any technical skill required to use Assesx?",
    a: "Not at all. Assesx is built for hiring teams, not engineers. Our visual canvas and drag-and-drop builders let anyone create assessments and workflows in minutes.",
  },
  {
    q: "Can I use Assesx for multiple programs at once?",
    a: "Yes. You can run unlimited concurrent hiring programs, each with their own branding, workflows, and candidate pools — all managed from a single dashboard.",
  },
  {
    q: "Can I collaborate with my team on Assesx?",
    a: "Absolutely. Add unlimited team members with role-based permissions, shared evaluation notes, real-time interview collaboration, and consolidated feedback reports.",
  },
  {
    q: "Does Assesx support custom branding?",
    a: "Yes. White-label your assessments, emails, and candidate portals with your company logo, colors, and custom domains for a seamless brand experience.",
  },
];

const features = [
  {
    icon: Workflow,
    title: "Canvas Based Hiring Workflows",
    desc: "Design every stage of your hiring process on a visual canvas—from applications to final selection.",
    accent: "bg-[#004ae0]",
    iconColor: "text-white",
    iconBg: "bg-black",
    pattern: true,
  },
  {
    icon: TextInitial,
    title: "Custom Form Builder",
    desc: "Create intelligent forms with drag-and-drop, smart logic, and powerful workflows—without code.",
    accent: "bg-gray-800",
    iconColor: "text-gray-700",
    iconBg: "bg-gray-100",
    pattern: false,
  },
  {
    icon: NotebookText,
    title: "Advanced Coding & MCQ Assessments",
    desc: "Create MCQs, coding challenges, and DSA tests with custom test cases and automated evaluation.",
    accent: "bg-gray-800",
    iconColor: "text-gray-700",
    iconBg: "bg-gray-100",
    pattern: false,
  },
  {
    icon: Boxes,
    title: "Real-Time Coding Workspace",
    desc: "Write, collaborate, and execute code together in real time with support for 10+ programming languages.",
    accent: "bg-gray-800",
    iconColor: "text-gray-700",
    iconBg: "bg-gray-100",
    pattern: false,
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <Header />
      <div className="bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)] bg-[#fafafa] bg-size-[auto,22px_22px]">

        {/* ========== HERO SECTION ========== */}
        <section className="relative flex min-h-[85vh] flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#004ae0]/[0.06] blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] rounded-full bg-[#004ae0]/[0.05] blur-[90px] pointer-events-none" />

          <div className="relative z-10 mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-sm px-3.5 py-1.5 text-[11px] font-medium text-[#004ae0] shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#004ae0] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#004ae0]" />
            </span>
            New: AI-Powered Candidate Evaluation is now live
            <MoveRight size={11} className="ml-0.5" />
          </div>

          <h1 className="relative z-10 text-3xl sm:text-4xl md:text-[44px] font-bold text-center text-[#1e1f24] max-w-3xl leading-[1.15] tracking-tight">
            Hire exceptional engineers{" "}
            <span className="relative inline-block">
              with confidence
              <svg className="absolute -bottom-1.5 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                <path d="M2 4C50 1.5 150 1.5 198 4" stroke="#004ae0" strokeWidth="2.5" strokeLinecap="round" className="opacity-40" />
              </svg>
            </span>
          </h1>

          <p className="relative z-10 text-sm sm:text-[15px] md:text-base text-center mt-5 text-[#67676f] max-w-xl leading-relaxed">
            Assesx helps organizations screen, interview, assess, and hire top
            engineering talent through a unified platform built for modern
            technical hiring.
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 mt-7 text-sm w-full sm:w-auto">
            <RainbowButton className="border-2 px-6 py-2.5 bg-black text-white hover:bg-[#004ae0] text-sm rounded-lg transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-[#004ae0]/20 ease-in-out duration-200 hover:cursor-pointer w-full sm:w-auto font-medium">
              Get Started — It&apos;s Free
            </RainbowButton>
            <button className="border border-gray-300 hover:cursor-pointer hover:bg-gray-100 hover:border-gray-400 px-6 py-2.5 rounded-lg hover:scale-[1.03] transition-all duration-200 w-full sm:w-auto text-[#1e1f24] font-medium bg-white/80 backdrop-blur-sm text-sm">
              See How it Works
            </button>
          </div>

          <p className="relative z-10 mt-2.5 text-[11px] text-gray-400">
            No credit card required · 14-day free trial · Setup in 2 minutes
          </p>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 py-8 sm:py-10 mt-2">
            {[
              { label: "Live Coding Interviews", icon: <BadgeCheck size={14} fill="#004ae0" color="white" /> },
              { label: "Real Time Assessment", icon: <BadgeCheck size={14} fill="#004ae0" color="white" /> },
              { label: "Real Time Collaboration", icon: <BadgeCheck size={14} fill="#004ae0" color="white" /> },
              { label: "AI Evaluation", icon: <BadgeCheck size={14} fill="#004ae0" color="white" /> },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-white/70 backdrop-blur-sm text-xs text-[#1e1f24] shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-1 mb-6">
            {[
              { value: "10K+", label: "Engineers Hired" },
              { value: "500+", label: "Companies" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-lg font-bold text-[#1e1f24]">{stat.value}</div>
                <div className="text-[10px] text-gray-500 mt-0.5 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-400 animate-bounce">
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
            <ArrowDown size={12} />
          </div>
        </section>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-[#67676f]">

          {/* Section Divider - Features */}
          <div className="w-full flex items-center gap-3 mb-6 overflow-hidden">
            <span className="shrink-0 text-[12px] text-gray-400 tracking-wider">01</span>
            <div className="h-px w-8 shrink-0 bg-gray-300" />
            <span className="shrink-0 text-[12px] tracking-[0.15em] text-gray-400 uppercase">Features</span>
            <div className="h-px flex-1 min-w-6 bg-gray-300" />
            <span className="hidden sm:inline shrink-0 text-[12px] tracking-widest text-gray-400 uppercase whitespace-nowrap">
              That Assesx Provides
            </span>
          </div>

          <div className="py-5 sm:py-6">
            <h2 className="text-xl sm:text-2xl text-black font-semibold">
              Powerful Features, Built for Every Workflow
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14 sm:mb-16">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 hover:border-gray-300"
                >
                  <div className={`h-1 w-full ${f.accent} opacity-80`} />

                  {f.pattern && (
                    <div className="absolute inset-0 z-0 opacity-30">
                      <FlickeringGrid
                        className="absolute inset-0"
                        squareSize={4}
                        gridGap={6}
                        color="black"
                        maxOpacity={0.13}
                        flickerChance={1}
                      />
                    </div>
                  )}

                  {!f.pattern && (
                    <div className="absolute right-0 top-0 h-32 w-32 opacity-[0.03]" 
                         style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
                  )}

                  <div className="relative z-10 flex flex-col h-full p-5">
                    <div className={`mb-3.5 flex h-10 w-10 items-center justify-center rounded-lg ${f.iconBg} ring-1 ring-black/5 shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={20} className={f.iconColor} strokeWidth={1.8} />
                    </div>

                    <h3 className="mb-1.5 text-[15px] font-semibold text-[#1e1f24] leading-snug">
                      {f.title}
                    </h3>

                    <p className="text-[13px] text-gray-500 leading-relaxed flex-1">
                      {f.desc}
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-[12px] font-medium text-[#004ae0] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Learn more <ArrowUpRight size={13} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section Divider - Target */}
          <div className="w-full flex items-center gap-3 mb-6 overflow-hidden">
            <span className="shrink-0 text-[12px] text-gray-400 tracking-wider">02</span>
            <div className="h-px w-8 shrink-0 bg-gray-300" />
            <span className="shrink-0 text-[12px] tracking-[0.15em] text-gray-400 uppercase">Target</span>
            <div className="h-px flex-1 min-w-6 bg-gray-300" />
            <span className="hidden sm:inline shrink-0 text-[12px] tracking-widest text-gray-400 uppercase whitespace-nowrap">
              Organizations
            </span>
          </div>

          <div className="py-5 sm:py-6">
            <h2 className="text-xl sm:text-2xl text-black font-semibold">Who Assesx is built for</h2>
          </div>

          {/* Target Organizations - Bento Grid */}
          <div className="mb-14 sm:mb-16 grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-fr">
            <div className="flex flex-col gap-3">
              <TargetCard
                icon={<GraduationCap color="white" size={24} strokeWidth={1.5} />}
                iconW="w-[48px]"
                title="Colleges & Placement Cells"
                desc="Empower placement cells with secure technical assessments, live coding interviews, and detailed candidate evaluation."
              />
              <TargetCard
                icon={<Building2 color="white" size={24} strokeWidth={1.5} />}
                iconW="w-[60px]"
                title="Startups & Tech based Companies"
                desc="Find and hire skilled developers with fast, reliable technical assessments and live coding interviews."
              />
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-linear-to-b from-neutral-50 via-white to-neutral-100 p-3 shadow-sm min-h-[380px] md:min-h-0">
              <div className="relative flex h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <StripedPattern color="#d4d4d4" width={6} height={6} />
                <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[90px]" />
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-blue-200 bg-blue-100/40 backdrop-blur-xl" />
                <div className="absolute -left-10 bottom-8 h-20 w-20 rounded-full border border-neutral-200 bg-neutral-100/70 backdrop-blur-xl" />

                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 sm:px-8 text-center py-8">
                  <div className="mb-5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
                    Developer Platform
                  </div>
                  <h3 className="bg-linear-to-r from-neutral-900 via-neutral-800 to-blue-600 bg-clip-text text-3xl sm:text-4xl font-black tracking-tight text-transparent">
                    Assesx
                  </h3>
                  <p className="mt-3 text-base font-medium text-neutral-800">
                    The Future of Technical Hiring.
                  </p>
                  <p className="mt-4 max-w-sm text-[13px] leading-6 text-neutral-500">
                    Conduct coding assessments, collaborate in real time, and hire exceptional engineers from a single modern platform.
                  </p>
                  <button className="mt-7 rounded-md hover:cursor-pointer bg-black px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-blue-600">
                    Explore Assesx →
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <TargetCard
                icon={<School color="white" size={24} strokeWidth={1.5} />}
                iconW="w-[52px]"
                title="Universities & Training Centers"
                desc="Create interactive coding challenges, track learner progress, and measure technical skills with real-time assessments."
              />
              <TargetCard
                icon={<Brain color="white" size={24} strokeWidth={1.5} />}
                iconW="w-[64px]"
                title="Training & Upskilling Organizations"
                desc="Build engaging learning programs with practical coding exercises, skill assessments, and detailed performance analytics."
              />
            </div>
          </div>

          {/* Section Divider - FAQ */}
          <div className="w-full flex items-center gap-3 mb-6 overflow-hidden">
            <span className="shrink-0 text-[12px] text-gray-400 tracking-wider">03</span>
            <div className="h-px w-8 shrink-0 bg-gray-300" />
            <span className="shrink-0 text-[12px] tracking-[0.15em] text-gray-400 uppercase">FAQ&apos;s</span>
            <div className="h-px flex-1 min-w-6 bg-gray-300" />
            <span className="hidden sm:inline shrink-0 text-[12px] tracking-widest text-gray-400 uppercase whitespace-nowrap">
              Common Asked Questions!
            </span>
          </div>

          <div className="pt-5 sm:pt-6">
            <h2 className="text-xl sm:text-2xl text-black font-semibold">
              Frequently asked questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="py-5 select-none">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className={`flex flex-col bg-white text-black border-2 border-gray-300 transition-all ease-in-out duration-200 hover:cursor-pointer hover:bg-black/[0.02] ${
                    idx === 0 ? "rounded-t-sm" : ""
                  } ${idx === faqs.length - 1 ? "rounded-b-2xl mb-10" : "border-b-0"}`}
                >
                  <div className="flex justify-between items-center px-4 sm:px-5 py-4 gap-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Plus
                        size={16}
                        strokeWidth={1.8}
                        className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      />
                      <span className="text-sm font-medium">{faq.q}</span>
                    </div>
                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[12.5px] sm:text-[13px] text-gray-600 pl-8 sm:pl-11 pr-4 sm:pr-5 pb-4 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Section Divider - CTA */}
          <div className="w-full flex items-center gap-3 mb-6 overflow-hidden">
            <span className="shrink-0 text-[12px] text-gray-400 tracking-wider">04</span>
            <div className="h-px w-8 shrink-0 bg-gray-300" />
            <span className="hidden sm:inline shrink-0 text-[12px] tracking-widest text-gray-400 uppercase whitespace-nowrap">
              LET&apos;S BEGIN
            </span>
            <div className="h-px flex-1 min-w-6 bg-gray-300" />
            <span className="hidden sm:inline shrink-0 text-[12px] tracking-widest text-gray-400 uppercase whitespace-nowrap">
              Signup Now!
            </span>
          </div>

          {/* ========== CTA SECTION — REDESIGNED ========== */}
          <div className="relative mb-14 sm:mb-16 rounded-2xl border border-gray-200 bg-white overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 translate-x-1/4 rounded-full bg-[#004ae0]/[0.06] blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[200px] h-[200px] rounded-full bg-blue-400/[0.04] blur-[80px] pointer-events-none" />

            {/* Subtle striped pattern on left */}
            <div className="absolute left-0 top-0 h-full w-24 opacity-[0.04] hidden sm:block">
              <StripedPattern width={6} height={6} color="#000" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-10 sm:py-14 px-6 sm:px-10 lg:px-16">
              {/* Left: Text content */}
              <div className="flex-1 text-center lg:text-left max-w-lg">
                <div className="inline-flex items-center gap-1.5 mb-4 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[11px] font-medium text-gray-500">
                  <BadgeCheck size={12} className="text-[#004ae0]" />
                  Trusted by 500+ companies worldwide
                </div>

                <h2 className="text-2xl sm:text-3xl font-semibold leading-snug text-[#1e1f24]">
                  Get started with Assesx today
                </h2>

                <p className="mt-3 text-sm text-[#67676f] leading-relaxed max-w-md mx-auto lg:mx-0">
                  Whether you&apos;re launching a grant or running a global competition, 
                  Assesx gives you the control, speed, and tools you need.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
                  <RainbowButton className="px-6 py-2.5 bg-black text-white hover:bg-[#004ae0] text-sm rounded-lg transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-[#004ae0]/20 ease-in-out duration-200 hover:cursor-pointer w-full sm:w-auto font-medium">
                    Let&apos;s Get Started
                  </RainbowButton>
                  <button className="flex items-center gap-1.5 text-sm font-medium text-[#1e1f24] hover:text-[#004ae0] transition-colors group">
                    Talk to Sales 
                    <MoveRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>

              {/* Right: Globe visual */}
              <div className="relative flex items-center justify-center w-full lg:w-auto lg:max-w-sm">
                <div className="relative w-56 h-56 sm:w-64 sm:h-64">
                  {/* Decorative rings */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-gray-200 animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-3 rounded-full border border-gray-100" />

                  {/* Globe container */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="scale-75 sm:scale-90" />
                  </div>

                  {/* Floating badges */}
                  <div className="absolute top-2 right-4 flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[10px] font-medium text-gray-600 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Live
                  </div>
                  <div className="absolute bottom-6 left-2 flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[10px] font-medium text-gray-600 shadow-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
                    Global
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

/* Reusable Target Card Component */
function TargetCard({ icon, iconW, title, desc }) {
  return (
    <div className="rounded-xl border-2 bg-gray-50 p-3 flex-1">
      <div className="relative transition-all ease-in-out hover:scale-[1.01] hover:cursor-pointer flex h-full items-center justify-center overflow-hidden rounded-md border bg-white shadow-sm">
        <StripedPattern width={6} height={6} color="#d4d4d4" />
        <div className="z-10 p-3 sm:p-4 w-full h-full flex flex-col">
          <div className="flex items-center gap-3">
            <div className={`flex h-11 ${iconW} items-center justify-center rounded-md bg-black shrink-0`}>
              {icon}
            </div>
            <p className="text-[15px] text-black font-medium leading-snug">{title}</p>
          </div>
          <div className="mt-2.5 flex flex-col flex-1 justify-between">
            <p className="text-black/50 text-[13px] leading-relaxed">{desc}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-black text-[13px]">AI Description</span>
              <RainbowButton
                variant="outline"
                className="flex items-center gap-2 rounded-sm border-2 px-3.5 py-2 text-[13px] text-white transition-all bg-transparent duration-200 hover:scale-105 hover:bg-[#004ae0]"
              >
                <MoveRight className="h-3.5 w-3.5" color="black" />
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}