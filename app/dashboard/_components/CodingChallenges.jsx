"use client";

import React from "react";
import { Code2, Plus, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const challenges = [
  { id: 1, title: "Two Sum", difficulty: "Easy", language: "JavaScript", submissions: 234, passRate: 78 },
  { id: 2, title: "Merge K Sorted Lists", difficulty: "Hard", language: "Python", submissions: 156, passRate: 42 },
  { id: 3, title: "LRU Cache", difficulty: "Medium", language: "Java", submissions: 189, passRate: 65 },
  { id: 4, title: "Binary Tree Level Order", difficulty: "Medium", language: "JavaScript", submissions: 312, passRate: 71 },
  { id: 5, title: "Valid Parentheses", difficulty: "Easy", language: "Python", submissions: 445, passRate: 89 },
];

const diffStyles = {
  Easy: "bg-gray-100 text-[#67676f]",
  Medium: "bg-[#004ae0]/10 text-[#004ae0]",
  Hard: "bg-[#1e1f24] text-white",
};

export default function CodingChallenges() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">SAVED</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">Coding Challenges</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1e1f24] text-white text-[13px] font-medium hover:bg-[#004ae0] transition-colors">
            <Plus size={15} /> New Challenge
          </button>
        </div>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          Technical coding problems for candidate evaluation.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {challenges.map(c => (
            <div key={c.id} className="group bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-xl bg-[#1e1f24] flex items-center justify-center">
                  <Code2 size={18} className="text-white" />
                </div>
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${diffStyles[c.difficulty]}`}>{c.difficulty}</span>
              </div>
              <h3 className="mt-3 text-[14px] font-semibold text-[#1e1f24]">{c.title}</h3>
              <p className="mt-1 text-[11px] text-[#67676f]">{c.language}</p>
              <div className="mt-4 flex items-center gap-4 text-[11px] text-[#67676f]">
                <span className="flex items-center gap-1"><Clock size={12} /> {c.submissions} subs</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={12} /> {c.passRate}% pass</span>
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full bg-[#004ae0] transition-all" style={{ width: `${c.passRate}%` }} />
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                <button className="text-[11px] font-medium text-[#004ae0] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">Preview <ArrowRight size={12} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}