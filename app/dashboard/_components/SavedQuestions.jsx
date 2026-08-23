"use client";

import React, { useState } from "react";
import { Bookmark, Plus, Search, Tag, ArrowRight } from "lucide-react";

const questions = [
  { id: 1, text: "Explain event delegation in JavaScript and provide a real-world example.", tags: ["JavaScript", "Frontend"], difficulty: "Medium", used: 45 },
  { id: 2, text: "Design a URL shortener service. Discuss database schema, scaling, and collision handling.", tags: ["System Design", "Backend"], difficulty: "Hard", used: 32 },
  { id: 3, text: "What is the difference between useEffect and useLayoutEffect in React?", tags: ["React", "Frontend"], difficulty: "Medium", used: 67 },
  { id: 4, text: "Describe how you would implement authentication in a microservices architecture.", tags: ["Architecture", "Security"], difficulty: "Hard", used: 28 },
  { id: 5, text: "Write a function to debounce user input in a search field.", tags: ["JavaScript", "Coding"], difficulty: "Easy", used: 89 },
];

const diffStyles = {
  Easy: "bg-gray-100 text-[#67676f]",
  Medium: "bg-[#004ae0]/10 text-[#004ae0]",
  Hard: "bg-[#1e1f24] text-white",
};

export default function SavedQuestions() {
  const [search, setSearch] = useState("");
  const filtered = questions.filter(q => q.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">SAVED</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">Saved Questions</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1e1f24] text-white text-[13px] font-medium hover:bg-[#004ae0] transition-colors">
            <Plus size={15} /> Add Question
          </button>
        </div>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          Your curated library of interview and assessment questions.
        </p>

        <div className="mt-6 relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search questions..." value={search} onChange={e => setSearch(e.target.value)}
            className="w-full sm:w-80 pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-[13px] focus:outline-none focus:border-[#004ae0]" />
        </div>

        <div className="mt-6 space-y-3">
          {filtered.map(q => (
            <div key={q.id} className="group bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#004ae0]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Bookmark size={14} className="text-[#004ae0]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#1e1f24] leading-relaxed">{q.text}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {q.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gray-100 text-[10px] font-medium text-[#67676f]">
                        <Tag size={9} /> {tag}
                      </span>
                    ))}
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${diffStyles[q.difficulty]}`}>{q.difficulty}</span>
                    <span className="text-[11px] text-gray-400">Used {q.used} times</span>
                  </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg hover:bg-gray-100">
                  <ArrowRight size={14} className="text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}