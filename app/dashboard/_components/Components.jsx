"use client";

import React, { useState, useEffect } from "react";
import {
  Puzzle,
  Plus,
  ArrowRight,
  GitBranch,
  CheckCircle2,
  Code2,
  MessageSquare,
  PenTool,
  Mic,
  Upload,
  Timer,
  BarChart3,
  GripVertical,
  Zap,
  Layers,
} from "lucide-react";

const categories = ["All", "Technical", "Interview", "Media", "Logic"];

const blocks = [
  {
    id: 1,
    name: "MCQ Test",
    description: "Multiple choice questions with auto-grading and time limits",
    category: "Technical",
    icon: CheckCircle2,
    iconBg: "bg-[#004ae0]/10",
    iconColor: "text-[#004ae0]",
    inputs: 0,
    outputs: 2,
    used: 156,
    tags: ["Auto-graded", "Timed"],
  },
  {
    id: 2,
    name: "DSA Challenge",
    description: "Coding problems with test case validation and runtime analysis",
    category: "Technical",
    icon: Code2,
    iconBg: "bg-[#1e1f24]/10",
    iconColor: "text-[#1e1f24]",
    inputs: 1,
    outputs: 2,
    used: 89,
    tags: ["Code", "Test Cases"],
  },
  {
    id: 3,
    name: "System Design",
    description: "Whiteboard canvas for architecture diagrams and design discussions",
    category: "Technical",
    icon: PenTool,
    iconBg: "bg-[#004ae0]/10",
    iconColor: "text-[#004ae0]",
    inputs: 1,
    outputs: 1,
    used: 34,
    tags: ["Whiteboard", "Live"],
  },
  {
    id: 4,
    name: "API Test",
    description: "REST/GraphQL endpoint testing with request/response validation",
    category: "Technical",
    icon: Zap,
    iconBg: "bg-[#1e1f24]/10",
    iconColor: "text-[#1e1f24]",
    inputs: 1,
    outputs: 2,
    used: 45,
    tags: ["HTTP", "Validation"],
  },
  {
    id: 5,
    name: "Verbal Interview",
    description: "Live or recorded video interview with structured question flow",
    category: "Interview",
    icon: MessageSquare,
    iconBg: "bg-gray-100",
    iconColor: "text-[#67676f]",
    inputs: 0,
    outputs: 1,
    used: 128,
    tags: ["Video", "Structured"],
  },
  {
    id: 6,
    name: "Video Response",
    description: "Candidate records answers to pre-set questions asynchronously",
    category: "Media",
    icon: Mic,
    iconBg: "bg-gray-100",
    iconColor: "text-[#67676f]",
    inputs: 0,
    outputs: 1,
    used: 67,
    tags: ["Async", "Recorded"],
  },
  {
    id: 7,
    name: "File Upload",
    description: "Drag-and-drop submission for resumes, portfolios, or code files",
    category: "Media",
    icon: Upload,
    iconBg: "bg-gray-100",
    iconColor: "text-[#67676f]",
    inputs: 0,
    outputs: 1,
    used: 92,
    tags: ["Resume", "Portfolio"],
  },
  {
    id: 8,
    name: "Timer Block",
    description: "Countdown widget that gates progression to the next stage",
    category: "Logic",
    icon: Timer,
    iconBg: "bg-[#004ae0]/10",
    iconColor: "text-[#004ae0]",
    inputs: 1,
    outputs: 1,
    used: 203,
    tags: ["Gate", "Countdown"],
  },
  {
    id: 9,
    name: "Custom Block",
    description: "Build your own evaluation step with custom logic and branding",
    category: "Logic",
    icon: Layers,
    iconBg: "bg-[#1e1f24]/10",
    iconColor: "text-[#1e1f24]",
    inputs: 2,
    outputs: 3,
    used: 12,
    tags: ["Custom", "Branded"],
  },
];

export default function Components() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredBlock, setHoveredBlock] = useState(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 60);
  }, []);

  const filtered =
    activeCategory === "All"
      ? blocks
      : blocks.filter((b) => b.category === activeCategory);

  return (
    <div className="w-full h-full overflow-y-auto bg-[#f8f9fb]">
      <div className="max-w-full my-3 mx-5">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
              <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">
                BUILDER
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#1e1f24]">
              Block Library
            </h2>
            <p className="mt-2 text-[13px] text-[#67676f] leading-relaxed max-w-lg">
              Drag, drop, and connect modular blocks to design your perfect assessment workflow from scratch.
            </p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e1f24] text-white text-[13px] font-medium hover:bg-[#004ae0] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 self-start sm:self-auto">
            <Plus size={15} strokeWidth={2.5} />
            Create Custom Block
          </button>
        </div>

        {/* Category Filters */}
        <div
          className={`mt-8 flex items-center gap-2 overflow-x-auto pb-1 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Puzzle size={14} className="text-gray-400 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#1e1f24] text-white"
                  : "bg-white text-[#67676f] border border-gray-200 hover:border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Canvas Preview Strip */}
        <div
          className={`mt-6 bg-white rounded-2xl border border-gray-200 p-5 transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <GitBranch size={14} className="text-[#004ae0]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              How blocks connect
            </span>
          </div>
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            {["Start", "MCQ Test", "DSA Challenge", "System Design", "End"].map((step, i) => (
              <React.Fragment key={step}>
                <div
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-medium ${
                    i === 0 || i === 4
                      ? "bg-[#1e1f24] text-white"
                      : "bg-gray-50 text-[#1e1f24] border border-gray-200"
                  }`}
                >
                  {i > 0 && i < 4 && (
                    <div className="h-2 w-2 rounded-full bg-[#004ae0]" />
                  )}
                  {step}
                </div>
                {i < 4 && (
                  <div className="flex-shrink-0 flex items-center">
                    <div className="h-px w-6 bg-gray-300" />
                    <ArrowRight size={12} className="text-gray-300 -ml-0.5" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Block Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((block, i) => {
            const Icon = block.icon;
            const isHovered = hoveredBlock === block.id;

            return (
              <div
                key={block.id}
                onMouseEnter={() => setHoveredBlock(block.id)}
                onMouseLeave={() => setHoveredBlock(null)}
                className={`group relative bg-white rounded-2xl border border-gray-200 p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:border-gray-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${200 + i * 60}ms` }}
              >
                {/* Connection dots */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5">
                  <div
                    className={`h-3 w-3 rounded-full border-2 transition-colors duration-300 ${
                      isHovered ? "border-[#004ae0] bg-[#004ae0]" : "border-gray-200 bg-white"
                    }`}
                  />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5">
                  <div
                    className={`h-3 w-3 rounded-full border-2 transition-colors duration-300 ${
                      isHovered ? "border-[#004ae0] bg-[#004ae0]" : "border-gray-200 bg-white"
                    }`}
                  />
                </div>

                {/* Drag handle */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <GripVertical size={14} className="text-gray-300" />
                </div>

                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <div
                    className={`h-11 w-11 rounded-xl ${block.iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={20} className={block.iconColor} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    {block.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-gray-100 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#67676f]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-4 text-[15px] font-semibold text-[#1e1f24] group-hover:text-[#004ae0] transition-colors duration-300">
                  {block.name}
                </h3>
                <p className="mt-1 text-[12px] text-[#67676f] leading-relaxed">
                  {block.description}
                </p>

                {/* I/O + Usage */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                      <span>{block.inputs} in</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
                      <span>{block.outputs} out</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.1em]">
                    {block.used}x used
                  </span>
                </div>

                {/* Action Bar */}
                <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-1.5 text-[11px] font-medium text-[#004ae0] hover:underline">
                    <BarChart3 size={12} /> Preview
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1e1f24] text-white text-[11px] font-medium hover:bg-[#004ae0] transition-colors">
                    Add to Canvas <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty */}
        {filtered.length === 0 && (
          <div className="mt-12 text-center py-16">
            <div className="h-14 w-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto">
              <Puzzle size={24} className="text-gray-300" />
            </div>
            <p className="mt-4 text-[14px] font-medium text-[#1e1f24]">No blocks found</p>
            <p className="mt-1 text-[12px] text-gray-400">Try a different category</p>
          </div>
        )}
      </div>
    </div>
  );
}