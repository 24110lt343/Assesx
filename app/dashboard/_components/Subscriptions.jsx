"use client";

import React from "react";
import { CreditCard, Check, Crown, Zap, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    description: "For individuals trying out the platform",
    features: ["5 assessments/month", "1 team member", "Basic templates", "Email support"],
    current: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing teams with active hiring",
    features: ["Unlimited assessments", "10 team members", "Advanced templates", "Priority support", "Custom branding", "API access"],
    current: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: ["Everything in Pro", "Unlimited team members", "SSO & SAML", "Dedicated CSM", "SLA guarantee", "On-premise option"],
    current: false,
  },
];

export default function Subscriptions() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">BILLING</span>
        </div>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">Subscriptions</h2>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          Manage your plan and billing preferences.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map(plan => (
            <div key={plan.name} className={`relative rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
              plan.current ? "border-[#004ae0] bg-white shadow-lg" : "border-gray-200 bg-white"
            }`}>
              {plan.current && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#004ae0] text-white text-[10px] font-semibold">
                  Current Plan
                </div>
              )}
              <div className="flex items-center gap-2">
                {plan.name === "Pro" ? <Crown size={18} className="text-[#004ae0]" /> : <Zap size={18} className="text-[#67676f]" />}
                <h3 className="text-[14px] font-semibold text-[#1e1f24]">{plan.name}</h3>
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#1e1f24]">{plan.price}</span>
                <span className="text-[13px] text-[#67676f]">{plan.period}</span>
              </div>
              <p className="mt-2 text-[12px] text-[#67676f]">{plan.description}</p>
              <ul className="mt-4 space-y-2">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-[12px] text-[#67676f]">
                    <Check size={12} className="text-[#004ae0] flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full py-2.5 rounded-xl text-[13px] font-medium transition-colors flex items-center justify-center gap-2 ${
                plan.current
                  ? "bg-gray-100 text-[#67676f] cursor-default"
                  : "bg-[#1e1f24] text-white hover:bg-[#004ae0]"
              }`}>
                {plan.current ? "Current Plan" : <>Upgrade <ArrowRight size={14} /></>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}