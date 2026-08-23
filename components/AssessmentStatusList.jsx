"use client";

import React, { useState } from "react";
import { Target, Play, Eye, AlertTriangle, CheckCircle2, Clock, Users } from "lucide-react";

const STATUS_STYLES = {
  scheduled: {
    label: "SCHEDULED",
    Icon: Target,
    color: "#67676f",
    bg: "#f6f6f6",
    border: "#d4d4d4",
    bar: "#d4d4d4",
  },
  "in-progress": {
    label: "IN PROGRESS",
    Icon: Play,
    color: "#004ae0",
    bg: "#f0f4ff",
    border: "#004ae0",
    bar: "#004ae0",
  },
  "under-review": {
    label: "UNDER REVIEW",
    Icon: Eye,
    color: "#1e1f24",
    bg: "#f6f6f6",
    border: "#1e1f24",
    bar: "#67676f",
  },
  overdue: {
    label: "OVERDUE",
    Icon: AlertTriangle,
    color: "#1e1f24",
    bg: "#f2f2f2",
    border: "#1e1f24",
    bar: "#1e1f24",
  },
  completed: {
    label: "COMPLETED",
    Icon: CheckCircle2,
    color: "#004ae0",
    bg: "#f0f4ff",
    border: "#004ae0",
    bar: "#004ae0",
  },
};

const ASSESSMENTS = [
  {
    id: "a1",
    title: "Data Structures Midterm",
    subtitle: "Class assessment for group division",
    status: "scheduled",
    progress: 0,
    due: "Opens Mon, 9:00 AM",
    participants: 128,
  },
  {
    id: "a2",
    title: "Cloud Security Fundamentals",
    subtitle: "Onboarding module · Engineering",
    status: "in-progress",
    progress: 68,
    due: "Due in 14h",
    participants: 47,
  },
  {
    id: "a3",
    title: "UX Research Certification",
    subtitle: "Level 3 practical submission",
    status: "under-review",
    progress: 100,
    due: "Submitted 6h ago",
    participants: 34,
  },
  {
    id: "a4",
    title: "Product Analytics Practicum",
    subtitle: "Cohort A · Growth track",
    status: "overdue",
    progress: 40,
    due: "Was due yesterday",
    participants: 19,
  },
  {
    id: "a5",
    title: "Financial Modeling Skills Check",
    subtitle: "Quarterly finance evaluation",
    status: "completed",
    progress: 100,
    due: "Closed Fri, 5:00 PM",
    participants: 61,
  },
];

function AssessmentCard({ item }) {
  const s = STATUS_STYLES[item.status];
  const { Icon } = s;
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="border bg-white px-4 py-3.5 border-l-[3px] rounded-xl cursor-pointer"
      style={{
        borderLeftColor: s.border,
        borderTopColor: "#e5e5e5",
        borderRightColor: "#e5e5e5",
        borderBottomColor: "#e5e5e5",
        boxShadow: hover ? "0 6px 18px -6px rgba(0,0,0,0.10)" : "0 1px 2px rgba(0,0,0,0.04)",
        transform: hover ? "translateY(-1px)" : "translateY(0)",
        transition: "all 180ms ease",
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md"
          style={{ backgroundColor: s.bg }}
        >
          <Icon size={13} color={s.color} strokeWidth={2.3} />
          <span className="text-[10px] font-semibold tracking-wider uppercase" style={{ color: s.color }}>
            {s.label}
          </span>
        </span>

        <span className="text-[11px] font-medium text-gray-400 whitespace-nowrap">
          {item.progress}% complete
        </span>
      </div>

      <div className="mt-2">
        <h3 className="text-[15px] font-semibold text-[#1e1f24]">{item.title}</h3>
        <p className="text-[13px] text-[#67676f] mt-0.5">{item.subtitle}</p>
      </div>

      <div className="mt-3">
        <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
          <div
            className="h-full rounded-full relative overflow-hidden"
            style={{
              width: `${item.progress}%`,
              backgroundColor: s.bar,
              transition: "width 500ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              className="absolute inset-y-0 w-1/4"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                animation: "barShimmer 2.4s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <span className="flex items-center gap-1.5 text-[12px] text-[#67676f]">
          <Clock size={12} />
          {item.due}
        </span>
        <span className="flex items-center gap-1.5 text-[12px] text-gray-400">
          <Users size={12} />
          {item.participants} participants
        </span>
      </div>
    </div>
  );
}

export default function OngoingAssessments() {
  const activeCount = ASSESSMENTS.filter(
    (a) => a.status === "in-progress" || a.status === "under-review"
  ).length;

  return (
    <div className="w-full max-w-full mx-auto  py-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase">
            AssesX
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1e1f24] mt-0.5">
            Ongoing Assessments
          </h2>
        </div>
        <span className="text-[12px] font-semibold text-[#67676f] bg-white border border-gray-200 px-3 py-1.5 rounded-full">
          {activeCount} active
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {ASSESSMENTS.map((item) => (
          <AssessmentCard key={item.id} item={item} />
        ))}
      </div>

      <style>{`
        @keyframes barShimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(420%); }
        }
      `}</style>
    </div>
  );
}