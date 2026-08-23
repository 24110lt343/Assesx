"use client";

import React, { useState } from "react";
import { FileText, Plus, Search, MoreHorizontal, ArrowRight, Copy, Trash2 } from "lucide-react";

const templates = [
  { id: 1, name: "JavaScript Fundamentals", category: "Technical", questions: 24, used: 156, updated: "2 days ago" },
  { id: 2, name: "React Advanced Patterns", category: "Frontend", questions: 18, used: 89, updated: "1 week ago" },
  { id: 3, name: "System Design Basics", category: "Architecture", questions: 12, used: 67, updated: "3 days ago" },
  { id: 4, name: "Python Data Structures", category: "Backend", questions: 20, used: 134, updated: "Yesterday" },
  { id: 5, name: "Behavioral Interview", category: "General", questions: 15, used: 245, updated: "2 weeks ago" },
  { id: 6, name: "DevOps CI/CD Pipeline", category: "DevOps", questions: 10, used: 45, updated: "5 days ago" },
];

export default function Templates() {
  const [search, setSearch] = useState("");
  const filtered = templates.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">MANAGE</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">Templates</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1e1f24] text-white text-[13px] font-medium hover:bg-[#004ae0] transition-colors">
            <Plus size={15} /> New Template
          </button>
        </div>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          Create and manage reusable assessment templates for consistent evaluation.
        </p>

        <div className="mt-6 relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search templates..." value={search} onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-80 pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-[13px] focus:outline-none focus:border-[#004ae0] focus:ring-1 focus:ring-[#004ae0]" />
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map(t => (
            <div key={t.id} className="group bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-xl bg-[#004ae0]/10 flex items-center justify-center">
                  <FileText size={18} className="text-[#004ae0]" />
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 rounded-lg hover:bg-gray-100"><Copy size={13} className="text-gray-400" /></button>
                  <button className="p-1.5 rounded-lg hover:bg-gray-100"><Trash2 size={13} className="text-gray-400" /></button>
                </div>
              </div>
              <h3 className="mt-3 text-[14px] font-semibold text-[#1e1f24]">{t.name}</h3>
              <span className="mt-1 inline-block px-2 py-0.5 rounded-md bg-gray-100 text-[10px] font-medium text-[#67676f]">{t.category}</span>
              <div className="mt-3 flex items-center gap-4 text-[11px] text-[#67676f]">
                <span>{t.questions} questions</span>
                <span>{t.used} uses</span>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-gray-400">Updated {t.updated}</span>
                <button className="text-[11px] font-medium text-[#004ae0] flex items-center gap-1 hover:underline">Edit <ArrowRight size={12} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}