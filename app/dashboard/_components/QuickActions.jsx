"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  ClipboardList,
  CheckCheck,
  Crown,
  ArrowRight,
  ArrowUpRight,
  Plus,
  UserPlus,
  BarChart3,
  Settings,
  TrendingUp,
} from "lucide-react";
import AssessmentStatusList from "@/components/AssessmentStatusList.jsx";

const quickActions = [
  { label: "New Assessment", icon: Plus, color: "bg-[#1e1f24] text-white hover:bg-[#004ae0]" },
  { label: "Invite Team", icon: UserPlus, color: "bg-white text-[#1e1f24] border border-gray-200 hover:border-gray-300 hover:bg-gray-50" },
  { label: "View Reports", icon: BarChart3, color: "bg-white text-[#1e1f24] border border-gray-200 hover:border-gray-300 hover:bg-gray-50" },
  { label: "Settings", icon: Settings, color: "bg-white text-[#1e1f24] border border-gray-200 hover:border-gray-300 hover:bg-gray-50" },
];

const statsCards = [
  {
    id: "students",
    label: "Total Students",
    value: "2,847",
    change: "8.2%",
    changeUp: true,
    icon: Users,
    iconBg: "bg-[#004ae0]/10",
    iconColor: "text-[#004ae0]",
    borderAccent: "border-l-4 border-l-[#004ae0]",
    progress: 72,
    progressColor: "bg-[#004ae0]",
  },
  {
    id: "ongoing",
    label: "Ongoing Assessments",
    value: "14",
    change: "3 new",
    changeUp: true,
    icon: ClipboardList,
    iconBg: "bg-white",
    iconColor: "text-white",
    dark: true,
    borderAccent: "",
    dotGrid: true,
  },
  {
    id: "completed",
    label: "Completed Assessments",
    value: "1,203",
    change: "12.5%",
    changeUp: true,
    icon: CheckCheck,
    iconBg: "bg-[#004ae0]",
    iconColor: "text-white",
    borderAccent: "border-l-4 border-l-[#004ae0]",
  },
  {
    id: "subscription",
    label: "Subscription",
    value: "Pro",
    change: "Renews in 12 days",
    changeUp: null,
    icon: Crown,
    iconBg: "bg-[#004ae0]/10",
    iconColor: "text-[#004ae0]",
    borderAccent: "border-t-4 border-t-[#004ae0]",
    badge: "Active",
  },
];

export default function QuickActions() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">
            QUICKER
          </span>
        </div>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">
          Quick Actions
        </h2>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          Perform common tasks faster with shortcuts to create assessments, manage members, and organize your hiring workflows from one place.
        </p>

        {/* Quick Launch Bar */}
        <div className="mt-6 flex flex-wrap gap-2">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <button
                key={i}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${action.color}`}
              >
                <Icon size={15} strokeWidth={2} />
                {action.label}
                <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">

          {/* Card 1 - Total Students */}
          <div
            className={`group relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.12)] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } ${statsCards[0].borderAccent}`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  {statsCards[0].label}
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#1e1f24] tracking-tight">
                    {statsCards[0].value}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full bg-[#1e1f24] px-2 py-0.5 text-[10px] font-medium text-white">
                    <ArrowUpRight size={10} strokeWidth={2.3} />
                    {statsCards[0].change}
                  </span>
                  <span className="text-[11px] text-gray-400">vs last month</span>
                </div>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${statsCards[0].iconBg} transition-transform duration-300 group-hover:scale-110`}>
                <Users size={18} className={statsCards[0].iconColor} />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-[10px] text-gray-400 mb-1.5">
                <span>Capacity</span>
                <span className="font-medium text-[#1e1f24]">{statsCards[0].progress}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                <div
                  className={`h-full rounded-full ${statsCards[0].progressColor} transition-all duration-1000 ease-out`}
                  style={{ width: mounted ? `${statsCards[0].progress}%` : "0%", transitionDelay: "400ms" }}
                />
              </div>
            </div>
          </div>

          {/* Card 2 - Ongoing Assessments (Dark) */}
          <div
            className={`group relative w-full overflow-hidden rounded-2xl bg-[#1e1f24] p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.25)] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {statsCards[1].dotGrid && (
              <div className="absolute top-4 right-4 opacity-10">
                <div className="grid grid-cols-4 gap-1.5">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="h-1 w-1 rounded-full bg-white" />
                  ))}
                </div>
              </div>
            )}
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                  {statsCards[1].label}
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white tracking-tight">
                    {statsCards[1].value}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white">
                    <TrendingUp size={10} strokeWidth={2.3} />
                    {statsCards[1].change}
                  </span>
                  <span className="text-[11px] text-gray-500">this week</span>
                </div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white transition-transform duration-300 group-hover:scale-110">
                <ClipboardList size={18} className="text-[#1e1f24]" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1,2,3].map((_, i) => (
                  <div key={i} className="h-6 w-6 rounded-full border-2 border-[#1e1f24] bg-gray-700 flex items-center justify-center">
                    <span className="text-[8px] text-white font-medium">{String.fromCharCode(65+i)}</span>
                  </div>
                ))}
              </div>
              <span className="text-[11px] text-gray-500">+11 active</span>
              <div className="ml-auto h-2 w-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>

          {/* Card 3 - Completed Assessments */}
          <div
            className={`group relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.12)] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } ${statsCards[2].borderAccent}`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  {statsCards[2].label}
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#1e1f24] tracking-tight">
                    {statsCards[2].value}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full bg-[#004ae0] px-2 py-0.5 text-[10px] font-medium text-white">
                    <ArrowUpRight size={10} strokeWidth={2.3} />
                    {statsCards[2].change}
                  </span>
                  <span className="text-[11px] text-gray-400">vs last month</span>
                </div>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${statsCards[2].iconBg} transition-transform duration-300 group-hover:scale-110`}>
                <CheckCheck size={18} className={statsCards[2].iconColor} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1 h-1 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full w-3/4 bg-[#004ae0] rounded-full" />
              </div>
              <span className="text-[10px] text-gray-400 font-medium">75% pass rate</span>
            </div>
          </div>

          {/* Card 4 - Subscription */}
          <div
            className={`group relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.12)] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } ${statsCards[3].borderAccent}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  {statsCards[3].label}
                </p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#1e1f24] tracking-tight">
                    {statsCards[3].value}
                  </span>
                </div>
                <div className="mt-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#004ae0]/10 px-2.5 py-1 text-[10px] font-semibold text-[#004ae0]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0] animate-pulse" />
                    {statsCards[3].badge}
                  </span>
                </div>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${statsCards[3].iconBg} transition-transform duration-300 group-hover:scale-110`}>
                <Crown size={18} className={statsCards[3].iconColor} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[11px] text-gray-400">{statsCards[3].change}</p>
              <div className="mt-2 h-1 w-full rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#004ae0] transition-all duration-1000 ease-out"
                  style={{ width: mounted ? "65%" : "0%", transitionDelay: "600ms" }}
                />
              </div>
              <div className="mt-1.5 flex justify-between text-[10px] text-gray-400">
                <span>Billing cycle</span>
                <span>65%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Status List */}
        <div className="mt-8">
          <AssessmentStatusList />
        </div>
      </div>
    </div>
  );
}