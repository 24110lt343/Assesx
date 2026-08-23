"use client";

import React, { useState } from "react";
import {
  Activity,
  Filter,
  UserPlus,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  Zap,
  ChevronRight,
  Calendar,
  TrendingUp,
  MoreHorizontal,
  ArrowUpRight,
  Users,
  Briefcase,
  ShieldCheck,
  Mail,
} from "lucide-react";

const FILTERS = ["All Activity", "Assessments", "Team", "Billing", "System"];

const ACTIVITY_STATS = [
  {
    label: "Total Actions",
    value: "1,284",
    change: "+12%",
    icon: Activity,
    accent: "border-b-[3px] border-b-[#004ae0]",
  },
  {
    label: "This Week",
    value: "86",
    change: "+5.3%",
    icon: TrendingUp,
    accent: "border-b-[3px] border-b-[#1e1f24]",
  },
  {
    label: "Active Users",
    value: "24",
    change: "2 new",
    icon: Users,
    accent: "border-b-[3px] border-b-[#004ae0]",
  },
  {
    label: "System Logs",
    value: "4,092",
    change: "Stable",
    icon: ShieldCheck,
    accent: "border-b-[3px] border-b-[#1e1f24]",
  },
];

const ACTIVITY_FEED = [
  {
    id: 1,
    type: "assessment",
    title: "Published 'Cloud Security Fundamentals'",
    description: "Assessment is now live with 47 enrolled participants",
    time: "2 minutes ago",
    icon: FileText,
    iconBg: "bg-[#f0f4ff]",
    iconColor: "text-[#004ae0]",
    badge: "Published",
    badgeBg: "bg-[#f0f4ff]",
    badgeColor: "text-[#004ae0]",
    user: "You",
    meta: "Engineering track",
  },
  {
    id: 2,
    type: "team",
    title: "Arjun Mehta joined the workspace",
    description: "Assigned role: Evaluator · Access level: Standard",
    time: "14 minutes ago",
    icon: UserPlus,
    iconBg: "bg-gray-100",
    iconColor: "text-[#1e1f24]",
    badge: "Team",
    badgeBg: "bg-gray-100",
    badgeColor: "text-[#67676f]",
    user: "System",
    meta: "Team Management",
  },
  {
    id: 3,
    type: "assessment",
    title: "Results finalized for 'Data Structures Midterm'",
    description: "128 participants evaluated · Average score: 74%",
    time: "1 hour ago",
    icon: CheckCircle2,
    iconBg: "bg-[#f0f4ff]",
    iconColor: "text-[#004ae0]",
    badge: "Completed",
    badgeBg: "bg-[#f0f4ff]",
    badgeColor: "text-[#004ae0]",
    user: "You",
    meta: "Batch 2024",
  },
  {
    id: 4,
    type: "billing",
    title: "Invoice #INV-2026-0812 generated",
    description: "Pro Plan · ₹2,499 · Due 20 Aug 2026",
    time: "3 hours ago",
    icon: FileText,
    iconBg: "bg-gray-100",
    iconColor: "text-[#1e1f24]",
    badge: "Billing",
    badgeBg: "bg-gray-100",
    badgeColor: "text-[#67676f]",
    user: "System",
    meta: "Auto-generated",
  },
  {
    id: 5,
    type: "system",
    title: "Security alert: New login from Mumbai, IN",
    description: "IP: 103.21.45.xx · Device: Chrome on macOS",
    time: "5 hours ago",
    icon: AlertCircle,
    iconBg: "bg-[#f2f2f2]",
    iconColor: "text-[#1e1f24]",
    badge: "Security",
    badgeBg: "bg-[#f2f2f2]",
    badgeColor: "text-[#1e1f24]",
    user: "System",
    meta: "Verified",
  },
  {
    id: 6,
    type: "assessment",
    title: "Reminder: 'UX Research Certification' ends in 6h",
    description: "34 participants · 12 submissions pending",
    time: "6 hours ago",
    icon: Clock,
    iconBg: "bg-[#fff8f0]",
    iconColor: "text-[#1e1f24]",
    badge: "Reminder",
    badgeBg: "bg-gray-100",
    badgeColor: "text-[#67676f]",
    user: "You",
    meta: "Level 3",
  },
  {
    id: 7,
    type: "team",
    title: "Riya Sharma updated workspace settings",
    description: "Changed branding color · Updated email template",
    time: "8 hours ago",
    icon: Zap,
    iconBg: "bg-gray-100",
    iconColor: "text-[#1e1f24]",
    badge: "Settings",
    badgeBg: "bg-gray-100",
    badgeColor: "text-[#67676f]",
    user: "Riya S.",
    meta: "Admin",
  },
  {
    id: 8,
    type: "assessment",
    title: "Coding challenge 'Binary Tree DFS' added to library",
    description: "Difficulty: Medium · Language: Python, C++",
    time: "12 hours ago",
    icon: Briefcase,
    iconBg: "bg-[#f0f4ff]",
    iconColor: "text-[#004ae0]",
    badge: "Library",
    badgeBg: "bg-[#f0f4ff]",
    badgeColor: "text-[#004ae0]",
    user: "You",
    meta: "Public",
  },
  {
    id: 9,
    type: "system",
    title: "Weekly report delivered to your inbox",
    description: "Summary: 6 assessments · 312 evaluations · 4 new members",
    time: "1 day ago",
    icon: Mail,
    iconBg: "bg-gray-100",
    iconColor: "text-[#1e1f24]",
    badge: "Report",
    badgeBg: "bg-gray-100",
    badgeColor: "text-[#67676f]",
    user: "System",
    meta: "Weekly digest",
  },
  {
    id: 10,
    type: "billing",
    title: "Payment successful for Pro Plan",
    description: "₹2,499 charged · Transaction ID: txn_8x2k9m",
    time: "2 days ago",
    icon: CheckCircle2,
    iconBg: "bg-[#f0f4ff]",
    iconColor: "text-[#004ae0]",
    badge: "Payment",
    badgeBg: "bg-[#f0f4ff]",
    badgeColor: "text-[#004ae0]",
    user: "System",
    meta: "Auto-pay",
  },
];

export default function RecentActivity() {
  const [activeFilter, setActiveFilter] = useState("All Activity");
  const [expandedId, setExpandedId] = useState(null);

  const filtered =
    activeFilter === "All Activity"
      ? ACTIVITY_FEED
      : ACTIVITY_FEED.filter((a) => {
          if (activeFilter === "Assessments") return a.type === "assessment";
          if (activeFilter === "Team") return a.type === "team";
          if (activeFilter === "Billing") return a.type === "billing";
          if (activeFilter === "System") return a.type === "system";
          return true;
        });

  return (
    <div className="w-full overflow-y-auto">
      <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-4 py-3 sm:py-4">
        
        {/* ─── Header ─── */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">
            Workspace
          </span>
        </div>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">
          Recent Activity
        </h2>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-xl">
          A complete timeline of everything happening across your organization — assessments, team changes, billing events, and system updates.
        </p>

        {/* ─── Stats Row ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
          {ACTIVITY_STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`group relative bg-white rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_-12px_rgba(0,0,0,0.12)] ${stat.accent}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                    {stat.label}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-[#004ae0] transition-colors duration-300">
                    <Icon size={14} className="text-[#67676f] group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-2xl sm:text-3xl font-semibold leading-none text-[#1e1f24]">
                    {stat.value}
                  </h3>
                  <p className="mt-1.5 text-[11px] font-medium text-[#004ae0]">
                    {stat.change}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Filters ─── */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <div className="flex items-center gap-1.5 mr-3 text-gray-400 shrink-0">
            <Filter size={13} />
            <span className="text-[11px] font-medium uppercase tracking-wider">Filter</span>
          </div>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-[12px] font-medium transition-all border ${
                activeFilter === f
                  ? "bg-[#1e1f24] text-white border-[#1e1f24]"
                  : "bg-white text-[#67676f] border-gray-200 hover:border-gray-300 hover:text-[#1e1f24]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ─── Activity Feed ─── */}
        <div className="mt-5 flex flex-col gap-3">
          {filtered.map((item) => {
            const Icon = item.icon;
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className="group relative bg-white rounded-xl border border-gray-200 px-4 py-3.5 cursor-pointer transition-all duration-200 hover:border-gray-300 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start gap-3">
                  {/* Icon */}
                  <div className={`shrink-0 flex h-9 w-9 items-center justify-center rounded-lg ${item.iconBg} mt-0.5`}>
                    <Icon size={16} className={item.iconColor} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-[14px] font-semibold text-[#1e1f24] truncate">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`hidden sm:inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider ${item.badgeBg} ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <ChevronRight
                          size={14}
                          className={`text-gray-300 transition-transform duration-200 ${isExpanded ? "rotate-90" : "group-hover:translate-x-0.5"}`}
                        />
                      </div>
                    </div>

                    <p className="text-[12.5px] text-[#67676f] mt-0.5 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Meta row */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-[11px] text-gray-400">
                          <Clock size={11} />
                          {item.time}
                        </span>
                        <span className="hidden sm:inline text-[11px] text-gray-300">·</span>
                        <span className="hidden sm:inline text-[11px] text-gray-400">
                          {item.user}
                        </span>
                      </div>
                      <span className="text-[11px] text-gray-400 font-medium">
                        {item.meta}
                      </span>
                    </div>

                    {/* Expanded detail */}
                    {isExpanded && (
                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-3 animate-in fade-in slide-in-from-top-1 duration-200">
                        <button className="flex items-center gap-1.5 text-[12px] font-medium text-[#004ae0] hover:text-[#0039b3] transition-colors">
                          View details
                          <ArrowUpRight size={12} />
                        </button>
                        <button className="flex items-center gap-1.5 text-[12px] font-medium text-[#67676f] hover:text-[#1e1f24] transition-colors">
                          <MoreHorizontal size={12} />
                          More actions
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── Load More ─── */}
        <div className="mt-6 flex justify-center">
          <button className="group flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 bg-white text-[13px] font-medium text-[#1e1f24] hover:border-gray-300 hover:shadow-sm transition-all">
            Load more activity
            <ChevronRight size={14} className="text-gray-400 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* ─── Bottom Summary ─── */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0f4ff]">
              <Calendar size={14} className="text-[#004ae0]" />
            </div>
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">Last 7 days</p>
              <p className="text-[13px] font-semibold text-[#1e1f24]">86 actions</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100">
              <Users size={14} className="text-[#67676f]" />
            </div>
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">Most active</p>
              <p className="text-[13px] font-semibold text-[#1e1f24]">You · 42 actions</p>
            </div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f0f4ff]">
              <Activity size={14} className="text-[#004ae0]" />
            </div>
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-medium">Peak hour</p>
              <p className="text-[13px] font-semibold text-[#1e1f24]">2:00 — 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}