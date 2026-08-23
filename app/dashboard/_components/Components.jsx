"use client";

import React from "react";
import { Puzzle, Plus, ArrowRight } from "lucide-react";

const components = [
  { id: 1, name: "Code Editor", description: "Embedded Monaco editor with syntax highlighting", used: 45 },
  { id: 2, name: "Timer Widget", description: "Countdown timer for timed assessments", used: 128 },
  { id: 3, name: "Drawing Canvas", description: "Whiteboard for system design interviews", used: 34 },
  { id: 4, name: "Video Recorder", description: "Browser-based video response capture", used: 89 },
  { id: 5, name: "MCQ Builder", description: "Multiple choice question constructor", used: 156 },
  { id: 6, name: "File Uploader", description: "Drag-and-drop file submission", used: 67 },
];

export default function Components() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">MANAGE</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">Components</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1e1f24] text-white text-[13px] font-medium hover:bg-[#004ae0] transition-colors">
            <Plus size={15} /> Add Component
          </button>
        </div>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          Reusable building blocks for your assessments and workflows.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {components.map(c => (
            <div key={c.id} className="group bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="h-10 w-10 rounded-xl bg-[#1e1f24] flex items-center justify-center">
                <Puzzle size={18} className="text-white" />
              </div>
              <h3 className="mt-3 text-[14px] font-semibold text-[#1e1f24]">{c.name}</h3>
              <p className="mt-1 text-[12px] text-[#67676f] leading-relaxed">{c.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">Used {c.used} times</span>
                <button className="text-[11px] font-medium text-[#004ae0] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">Configure <ArrowRight size={12} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}