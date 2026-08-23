"use client";
import {
  ShieldCheck,
  Check,
  MoveRight,
} from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const plans = [
  {
    badge: "STARTER",
    badgeTone: "blue",
    label: "Free Trial",
    name: "Free Trial",
    price: "₹0",
    period: "/month",
    desc: "Everything you need to start creating technical assessments and evaluate candidates for free.",
    cta: "Start Free Trial",
    features: [
      "1 active evaluation workflow.",
      "Up to 25 Participants.",
      "Coding Assessments.",
      "Live Coding Room.",
      "System Design Room.",
      "Data Collection Forms.",
      "Basic Candidate Reports.",
      "Question Library Access.",
      "Email support",
    ],
  },
  {
    badge: "MOST POPULAR",
    badgeTone: "indigo",
    label: "Professional",
    name: "Pro",
    price: "₹2499",
    period: "/month",
    desc: "Everything you need to automate technical evaluations and collaborate with your team.",
    cta: "Choose Plan",
    features: [
      "25 active evaluation workflow.",
      "Up to 1000 Participants.",
      "Advanced AI evaluations.",
      "Advanced team management.",
      "SSO authentication.",
      "API & ATS integrations.",
      "Custom branding.",
      "Dedicated success manager.",
      "24/7 priority support.",
    ],
  },
  {
    badge: "ENTERPRISE",
    badgeTone: "slate",
    label: "Industry Grade",
    name: "Enterprise",
    price: "₹9999",
    period: "/month",
    desc: "Everything you need to manage large-scale evaluations with enterprise-grade security.",
    cta: "Contact Sales",
    features: [
      "Unlimited workflows.",
      "Unlimited participants.",
      "Unlimited AI evaluations.",
      "Advanced team management.",
      "Role-based access control.",
      "SSO authentication.",
      "API & ATS integrations.",
      "Custom branding.",
      "24/7 priority support.",
    ],
  },
];

const perks = [
  {
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    title: "Transparent Pricing",
    desc: "No hidden charges—just clear, predictable pricing for every plan.",
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    title: "Cancel Anytime",
    desc: "Change or cancel your subscription whenever your needs evolve.",
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    title: "Enterprise Security",
    desc: "Your data is protected with trusted enterprise-grade security.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)] bg-[#f2f2f2] bg-size-[auto,22px_22px]">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
          
          {/* Hero */}
          <div className="flex flex-col items-center justify-center text-center py-8 sm:py-10">
            <h1 className="text-2xl sm:text-3xl md:text-[36px] font-semibold tracking-tight text-[#1e1f24] leading-[1.15] max-w-2xl">
              Simple, Transparent Pricing <br className="hidden sm:block" /> for every{" "}
              <DiaTextReveal
                repeat
                repeatDelay={1.2}
                text={[
                  "team.",
                  "startup.",
                  "business.",
                  "organization.",
                  "enterprise.",
                  "company.",
                ]}
              />
            </h1>
            <p className="text-sm sm:text-[15px] text-[#67676f] mt-4 leading-relaxed max-w-lg">
              Transparent pricing with powerful assessment tools, built to
              support teams at every stage of growth.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl border border-neutral-200 bg-linear-to-b from-neutral-50 via-white to-neutral-100 p-2.5 shadow-sm ${
                  plan.badge === "MOST POPULAR" ? "lg:-translate-y-2" : ""
                }`}
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <StripedPattern color="#d4d4d4" width={6} height={6} />
                  <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[90px]" />

                  <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">
                    
                    {/* Badge Row */}
                    <div className="flex justify-between items-center">
                      <span className={`rounded-full border px-3 py-0.5 text-[11px] font-semibold tracking-wider ${
                        plan.badge === "MOST POPULAR"
                          ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                          : plan.badgeTone === "blue"
                          ? "border-blue-200 bg-blue-50 text-blue-700"
                          : "border-slate-200 bg-slate-50 text-slate-700"
                      }`}>
                        {plan.badge}
                      </span>
                      <span className="text-[12px] font-medium text-neutral-500">
                        {plan.label}
                      </span>
                    </div>

                    {/* Plan Name */}
                    <div className="mt-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                        {plan.name}
                      </h2>
                      <p className="mt-2 text-[13px] text-neutral-500 leading-relaxed">
                        {plan.desc}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mt-5 flex items-end gap-2">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-900">
                        {plan.price}
                      </span>
                      <span className="mb-1 text-[12px] text-neutral-500">
                        {plan.period}
                      </span>
                    </div>

                    <button className="mt-5 w-full rounded-lg bg-black py-2.5 text-[13px] font-semibold text-white transition hover:cursor-pointer hover:bg-blue-600">
                      {plan.cta}
                    </button>

                    <div className="my-3 h-px bg-neutral-200" />

                    {/* Features */}
                    <div className="space-y-3.5 flex-1">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 shrink-0">
                            <Check size={12} className="text-blue-600" />
                          </div>
                          <span className="text-[13px] text-neutral-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 text-center text-[11px] text-neutral-400">
                      No hidden fees • Cancel anytime
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full flex items-center gap-3 mt-14 sm:mt-16 mb-8 overflow-hidden">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="shrink-0 text-[12px] tracking-[0.2em] text-gray-400 uppercase font-medium">
              We Offer To You
            </span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Perks Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="relative transition-all ease-in-out hover:scale-[1.01] hover:cursor-pointer flex items-center justify-center overflow-hidden rounded-xl border-2 bg-gray-50 p-2.5"
              >
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-md border bg-white shadow-sm">
                  <StripedPattern width={6} height={6} color="#d4d4d4" />
                  <div className="z-10 p-4 w-full h-full flex flex-col">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-black ring-1 ring-gray-200 shrink-0">
                        <span className="text-white">{perk.icon}</span>
                      </div>
                      <p className="text-[14px] sm:text-[15px] text-black font-medium leading-snug">
                        {perk.title}
                      </p>
                    </div>
                    <div className="mt-2 flex flex-col flex-1 justify-between">
                      <p className="text-black/50 text-[13px] leading-relaxed">
                        {perk.desc}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-black text-[12px]">AI Description</span>
                        <RainbowButton
                          variant="outline"
                          className="flex items-center gap-1.5 rounded-sm border-2 px-3 py-1.5 text-[12px] text-white transition-all bg-transparent duration-200 hover:scale-105 hover:bg-[#004ae0]"
                        >
                          <MoveRight className="h-3 w-3" color="black" />
                        </RainbowButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}