"use client";

import React, { useState } from "react";
import { GitBranch, Plus, MoreHorizontal, ArrowRight, CheckCircle2, Clock, Circle } from "lucide-react";

const stages = [
  { id: "screening", label: "Screening", count: 12 },
  { id: "assessment", label: "Assessment", count: 8 },
  { id: "interview", label: "Interview", count: 5 },
  { id: "review", label: "Review", count: 3 },
  { id: "offer", label: "Offer", count: 2 },
];

const workflows = [
  { id: 1, name: "Engineering Hiring Pipeline", stages: 5, candidates: 24, updated: "2 hours ago" },
  { id: 2, name: "Design Team Onboarding", stages: 4, candidates: 8, updated: "Yesterday" },
  { id: 3, name: "Product Manager Track", stages: 6, candidates: 15, updated: "3 days ago" },
  { id: 4, name: "Internship Program 2024", stages: 3, candidates: 42, updated: "1 week ago" },
];

export default function Workflow() {
  const [selectedStage, setSelectedStage] = useState("assessment");

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">MANAGE</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">Workflow</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1e1f24] text-white text-[13px] font-medium hover:bg-[#004ae0] transition-colors">
            <Plus size={15} /> New Workflow
          </button>
        </div>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          Manage your hiring pipelines and track candidates through every stage.
        </p>

        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-2">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[12px] font-medium whitespace-nowrap transition-all ${
                selectedStage === stage.id
                  ? "bg-[#1e1f24] text-white"
                  : "bg-white text-[#67676f] border border-gray-200 hover:border-gray-300"
              }`}
            >
              {selectedStage === stage.id ? <CheckCircle2 size={14} /> : <Circle size={14} />}
              {stage.label}
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${selectedStage === stage.id ? "bg-white/20" : "bg-gray-100"}`}>
                {stage.count}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {workflows.map((w, i) => (
            <div key={w.id} className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-xl bg-[#004ae0]/10 flex items-center justify-center">
                  <GitBranch size={18} className="text-[#004ae0]" />
                </div>
                <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                  <MoreHorizontal size={16} className="text-gray-400" />
                </button>
              </div>
              <h3 className="mt-3 text-[14px] font-semibold text-[#1e1f24]">{w.name}</h3>
              <div className="mt-3 flex items-center gap-4 text-[11px] text-[#67676f]">
                <span className="flex items-center gap-1"><GitBranch size={12} /> {w.stages} stages</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {w.candidates} candidates</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">Updated {w.updated}</span>
                <button className="text-[11px] font-medium text-[#004ae0] flex items-center gap-1 hover:underline">
                  Open <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}