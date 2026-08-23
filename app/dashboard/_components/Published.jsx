"use client";

import React, { useState } from "react";
import { Globe, Eye, Link2, Copy, MoreHorizontal, ArrowUpRight } from "lucide-react";

const publishedItems = [
  { id: 1, title: "Frontend Engineer - Round 1", type: "Assessment", views: 124, status: "Live", url: "ax.io/a/frontend-r1" },
  { id: 2, title: "System Design Challenge", type: "Challenge", views: 89, status: "Live", url: "ax.io/a/system-design" },
  { id: 3, title: "Behavioral Screening", type: "Interview", views: 256, status: "Live", url: "ax.io/a/behavioral" },
  { id: 4, title: "Backend API Test", type: "Assessment", views: 67, status: "Draft", url: "ax.io/a/backend-api" },
  { id: 5, title: "DevOps Pipeline Quiz", type: "Challenge", views: 45, status: "Live", url: "ax.io/a/devops-quiz" },
];

export default function Published() {
  const [items] = useState(publishedItems);

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">MANAGE</span>
        </div>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">Published</h2>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          All live assessments and challenges accessible to candidates.
        </p>

        <div className="mt-6 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-gray-100 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
            <div className="col-span-5 sm:col-span-4">Title</div>
            <div className="col-span-3 sm:col-span-2">Type</div>
            <div className="col-span-2 sm:col-span-2">Views</div>
            <div className="col-span-2 sm:col-span-2">Status</div>
            <div className="hidden sm:block sm:col-span-2 text-right">Actions</div>
          </div>
          {items.map(item => (
            <div key={item.id} className="grid grid-cols-12 gap-4 px-5 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors items-center">
              <div className="col-span-5 sm:col-span-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-[#004ae0]/10 flex items-center justify-center flex-shrink-0">
                  <Globe size={14} className="text-[#004ae0]" />
                </div>
                <span className="text-[13px] font-medium text-[#1e1f24] truncate">{item.title}</span>
              </div>
              <div className="col-span-3 sm:col-span-2">
                <span className="text-[11px] text-[#67676f]">{item.type}</span>
              </div>
              <div className="col-span-2 sm:col-span-2 flex items-center gap-1.5 text-[11px] text-[#67676f]">
                <Eye size={12} /> {item.views}
              </div>
              <div className="col-span-2 sm:col-span-2">
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold ${item.status === "Live" ? "bg-[#004ae0]/10 text-[#004ae0]" : "bg-gray-100 text-[#67676f]"}`}>
                  {item.status}
                </span>
              </div>
              <div className="hidden sm:flex sm:col-span-2 justify-end gap-1">
                <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"><Copy size={13} className="text-gray-400" /></button>
                <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"><Link2 size={13} className="text-gray-400" /></button>
                <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"><MoreHorizontal size={13} className="text-gray-400" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}