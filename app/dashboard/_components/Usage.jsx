"use client";

import React from "react";
import { BarChart3, Users, ClipboardList, Database } from "lucide-react";

const metrics = [
  { label: "Assessments Used", value: "142", limit: "Unlimited", percent: 65, icon: ClipboardList },
  { label: "Team Members", value: "6", limit: "10", percent: 60, icon: Users },
  { label: "Storage Used", value: "4.2 GB", limit: "50 GB", percent: 8, icon: Database },
  { label: "API Calls", value: "12.4K", limit: "100K", percent: 12, icon: BarChart3 },
];

export default function Usage() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">BILLING</span>
        </div>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">Usage</h2>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          Monitor your resource consumption and plan limits.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {metrics.map(m => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">{m.label}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-[#1e1f24]">{m.value}</span>
                      <span className="text-[11px] text-gray-400">/ {m.limit}</span>
                    </div>
                  </div>
                  <div className="h-9 w-9 rounded-xl bg-gray-100 flex items-center justify-center">
                    <Icon size={16} className="text-[#67676f]" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full rounded-full bg-[#004ae0] transition-all" style={{ width: `${m.percent}%` }} />
                  </div>
                  <p className="mt-1.5 text-[11px] text-gray-400">{m.percent}% used</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}