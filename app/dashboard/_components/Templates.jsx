"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  Plus,
  Search,
  ArrowRight,
  Copy,
  Trash2,
  Play,
  Layers,
  Clock,
  Users,
  CheckCircle2,
  MoreHorizontal,
  Eye,
  Zap,
  Filter,
} from "lucide-react";

const categories = ["All", "Technical", "Frontend", "Backend", "Architecture", "DevOps", "General"];

const templates = [
  { id: 1, name: "JavaScript Fundamentals", category: "Technical", questions: 24, used: 156, updated: "2 days ago", author: "Sarah Chen", blocks: ["MCQ Test", "Code Challenge", "Video Response"], duration: "45 min" },
  { id: 2, name: "React Advanced Patterns", category: "Frontend", questions: 18, used: 89, updated: "1 week ago", author: "Marcus Johnson", blocks: ["MCQ Test", "System Design", "File Upload"], duration: "60 min" },
  { id: 3, name: "System Design Basics", category: "Architecture", questions: 12, used: 67, updated: "3 days ago", author: "Emily Davis", blocks: ["Whiteboard", "Verbal Interview"], duration: "90 min" },
  { id: 4, name: "Python Data Structures", category: "Backend", questions: 20, used: 134, updated: "Yesterday", author: "Alex Kim", blocks: ["MCQ Test", "DSA Challenge", "API Test"], duration: "50 min" },
  { id: 5, name: "Behavioral Interview", category: "General", questions: 15, used: 245, updated: "2 weeks ago", author: "Jordan Lee", blocks: ["Video Response", "File Upload"], duration: "30 min" },
  { id: 6, name: "DevOps CI/CD Pipeline", category: "DevOps", questions: 10, used: 45, updated: "5 days ago", author: "Priya Sharma", blocks: ["MCQ Test", "Code Challenge"], duration: "40 min" },
  { id: 7, name: "Mobile Architecture", category: "Architecture", questions: 14, used: 34, updated: "1 week ago", author: "David Park", blocks: ["System Design", "Verbal Interview"], duration: "75 min" },
  { id: 8, name: "SQL Optimization", category: "Backend", questions: 16, used: 78, updated: "3 days ago", author: "Lisa Wong", blocks: ["MCQ Test", "Code Challenge", "Timer Block"], duration: "55 min" },
];

const categoryColors = {
  Technical: "bg-[#004ae0]/10 text-[#004ae0]",
  Frontend: "bg-[#1e1f24]/10 text-[#1e1f24]",
  Backend: "bg-gray-100 text-[#67676f]",
  Architecture: "bg-[#004ae0]/10 text-[#004ae0]",
  DevOps: "bg-[#1e1f24]/10 text-[#1e1f24]",
  General: "bg-gray-100 text-[#67676f]",
};

export default function Templates() {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedId, setCopiedId] = useState(null);
  const [menuOpenId, setMenuOpenId] = useState(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 60);
  }, []);

  const filtered = templates.filter((t) => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === "All" || t.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const handleDuplicate = (id) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-[#f8f9fb]">
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .thin-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .thin-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .thin-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 3px; }
        .thin-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
      `}</style>

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
                WORKFLOWS
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#1e1f24]">
              Templates
            </h2>
            <p className="mt-2 text-[13px] text-[#67676f] leading-relaxed max-w-lg">
              Reusable assessment blueprints your team can duplicate, customize, and deploy in one click.
            </p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e1f24] text-white text-[13px] font-medium hover:bg-[#004ae0] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 self-start sm:self-auto">
            <Plus size={15} strokeWidth={2.5} />
            New Template
          </button>
        </div>

        {/* Search + Categories */}
        <div
          className={`mt-8 flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[13px] text-[#1e1f24] placeholder:text-gray-400 focus:outline-none focus:border-[#004ae0] focus:ring-1 focus:ring-[#004ae0] transition-all"
            />
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 hide-scrollbar">
            <Filter size={14} className="text-gray-400 flex-shrink-0" />
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
        </div>

        {/* Stats Strip */}
        <div
          className={`mt-6 flex items-center gap-6 transition-all duration-700 delay-150 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#004ae0]/10 flex items-center justify-center">
              <Layers size={14} className="text-[#004ae0]" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#1e1f24] leading-none">{templates.length}</p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-400 mt-0.5">Templates</p>
            </div>
          </div>
          <div className="h-6 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#1e1f24]/10 flex items-center justify-center">
              <Zap size={14} className="text-[#1e1f24]" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#1e1f24] leading-none">
                {templates.reduce((a, b) => a + b.used, 0).toLocaleString()}
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-400 mt-0.5">Total Uses</p>
            </div>
          </div>
          <div className="h-6 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gray-100 flex items-center justify-center">
              <Users size={14} className="text-[#67676f]" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#1e1f24] leading-none">{new Set(templates.map((t) => t.author)).size}</p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-400 mt-0.5">Contributors</p>
            </div>
          </div>
        </div>

        {/* Template Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((t, i) => (
            <div
              key={t.id}
              className={`group relative bg-white rounded-2xl border border-gray-200 p-5 flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:border-gray-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${200 + i * 60}ms` }}
            >
              {/* Top actions */}
              <div className="absolute top-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={() => handleDuplicate(t.id)}
                  className={`p-1.5 rounded-lg transition-all ${
                    copiedId === t.id ? "bg-[#004ae0] text-white" : "hover:bg-gray-100 text-gray-400"
                  }`}
                  title="Duplicate"
                >
                  {copiedId === t.id ? <CheckCircle2 size={13} /> : <Copy size={13} />}
                </button>
                <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                  <Trash2 size={13} />
                </button>
                <button
                  onClick={() => setMenuOpenId(menuOpenId === t.id ? null : t.id)}
                  className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"
                >
                  <MoreHorizontal size={13} />
                </button>
              </div>

              {/* Icon + Category */}
              <div className="flex items-start justify-between">
                <div className="h-11 w-11 rounded-xl bg-[#004ae0]/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <FileText size={20} className="text-[#004ae0]" />
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                    categoryColors[t.category] || "bg-gray-100 text-[#67676f]"
                  }`}
                >
                  {t.category}
                </span>
              </div>

              {/* Name */}
              <h3 className="mt-4 text-[15px] font-semibold text-[#1e1f24] group-hover:text-[#004ae0] transition-colors duration-300 truncate">
                {t.name}
              </h3>

              {/* Block Flow Preview */}
              <div className="mt-3 flex flex-wrap items-center gap-1">
                {t.blocks.map((block, idx) => (
                  <React.Fragment key={block}>
                    <span className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-100 text-[9px] font-medium text-[#67676f]">
                      {block}
                    </span>
                    {idx < t.blocks.length - 1 && (
                      <ArrowRight size={9} className="text-gray-300" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Meta */}
              <div className="mt-4 flex items-center gap-3 text-[11px] text-[#67676f]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={11} /> {t.questions} Qs
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {t.duration}
                </span>
              </div>

              {/* Author + Usage */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="h-5 w-5 rounded-full bg-[#1e1f24] flex items-center justify-center text-white text-[8px] font-bold">
                    {t.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span className="text-[10px] text-gray-400">{t.author}</span>
                </div>
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.1em]">
                  {t.used}x used
                </span>
              </div>

              {/* Spacer to push actions to bottom */}
              <div className="flex-1 min-h-[8px]" />

              {/* Bottom Actions */}
              <div className="mt-4 pt-3.5 border-t border-gray-100 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center gap-1 text-[11px] font-medium text-[#67676f] hover:text-[#1e1f24] transition-colors">
                  <Eye size={12} /> Preview
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1e1f24] text-white text-[11px] font-medium hover:bg-[#004ae0] transition-colors">
                  <Play size={11} /> Use Template
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty */}
        {filtered.length === 0 && (
          <div className="mt-12 text-center py-16">
            <div className="h-14 w-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto">
              <Search size={24} className="text-gray-300" />
            </div>
            <p className="mt-4 text-[14px] font-medium text-[#1e1f24]">No templates found</p>
            <p className="mt-1 text-[12px] text-gray-400">Try adjusting your search or category</p>
          </div>
        )}
      </div>
    </div>
  );
}