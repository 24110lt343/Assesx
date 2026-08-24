"use client";

import React, { useState, useEffect } from "react";
import {
  Globe,
  Eye,
  Link2,
  Copy,
  MoreHorizontal,
  ArrowUpRight,
  Search,
  Plus,
  FileText,
  Code2,
  MessageSquare,
  Check,
  Trash2,
  BarChart3,
  ExternalLink,
  Filter,
} from "lucide-react";

const allItems = [
  { id: 1, title: "Frontend Engineer - Round 1", type: "Assessment", views: 124, status: "Live", url: "ax.io/a/frontend-r1", created: "Aug 20" },
  { id: 2, title: "System Design Challenge", type: "Challenge", views: 89, status: "Live", url: "ax.io/a/system-design", created: "Aug 18" },
  { id: 3, title: "Behavioral Screening", type: "Interview", views: 256, status: "Live", url: "ax.io/a/behavioral", created: "Aug 15" },
  { id: 4, title: "Backend API Test", type: "Assessment", views: 67, status: "Draft", url: "ax.io/a/backend-api", created: "Aug 12" },
  { id: 5, title: "DevOps Pipeline Quiz", type: "Challenge", views: 45, status: "Live", url: "ax.io/a/devops-quiz", created: "Aug 10" },
  { id: 6, title: "React Advanced Patterns", type: "Assessment", views: 178, status: "Live", url: "ax.io/a/react-adv", created: "Aug 8" },
  { id: 7, title: "Mobile Architecture Review", type: "Interview", views: 34, status: "Draft", url: "ax.io/a/mobile-arch", created: "Aug 5" },
  { id: 8, title: "SQL Optimization Test", type: "Challenge", views: 92, status: "Live", url: "ax.io/a/sql-opt", created: "Aug 3" },
];

const typeConfig = {
  Assessment: { icon: FileText, bg: "bg-[#004ae0]/10", color: "text-[#004ae0]" },
  Challenge: { icon: Code2, bg: "bg-[#1e1f24]/10", color: "text-[#1e1f24]" },
  Interview: { icon: MessageSquare, bg: "bg-gray-100", color: "text-[#67676f]" },
};

const filters = ["All", "Live", "Draft", "Assessment", "Challenge", "Interview"];

export default function Published() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [copiedId, setCopiedId] = useState(null);
  const [menuOpenId, setMenuOpenId] = useState(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 60);
  }, []);

  const maxViews = Math.max(...allItems.map((i) => i.views));

  const filteredItems = allItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.url.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      item.status === activeFilter ||
      item.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleCopy = (url, id) => {
    navigator.clipboard?.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
                MANAGE
              </span>
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#1e1f24]">
              Published
            </h2>
            <p className="mt-2 text-[13px] text-[#67676f] leading-relaxed max-w-lg">
              Everything live and accessible to candidates. Manage links, track views, and control visibility.
            </p>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e1f24] text-white text-[13px] font-medium hover:bg-[#004ae0] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 self-start sm:self-auto">
            <Plus size={15} strokeWidth={2.5} />
            Publish New
          </button>
        </div>

        {/* Search + Filters */}
        <div
          className={`mt-8 flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="relative flex-1 max-w-md">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search published items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[13px] text-[#1e1f24] placeholder:text-gray-400 focus:outline-none focus:border-[#004ae0] focus:ring-1 focus:ring-[#004ae0] transition-all"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <Filter size={14} className="text-gray-400 flex-shrink-0" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-[#1e1f24] text-white"
                    : "bg-white text-[#67676f] border border-gray-200 hover:border-gray-300"
                }`}
              >
                {f}
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
              <Globe size={14} className="text-[#004ae0]" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#1e1f24] leading-none">{allItems.filter((i) => i.status === "Live").length}</p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-400 mt-0.5">Live</p>
            </div>
          </div>
          <div className="h-6 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gray-100 flex items-center justify-center">
              <Eye size={14} className="text-[#67676f]" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#1e1f24] leading-none">
                {allItems.reduce((a, b) => a + b.views, 0).toLocaleString()}
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-400 mt-0.5">Total Views</p>
            </div>
          </div>
          <div className="h-6 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-[#1e1f24]/10 flex items-center justify-center">
              <FileText size={14} className="text-[#1e1f24]" />
            </div>
            <div>
              <p className="text-[15px] font-bold text-[#1e1f24] leading-none">{allItems.length}</p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-400 mt-0.5">Items</p>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item, i) => {
            const config = typeConfig[item.type];
            const TypeIcon = config.icon;
            const isLive = item.status === "Live";
            const viewPercent = (item.views / maxViews) * 100;

            return (
              <div
                key={item.id}
                className={`group relative bg-white rounded-2xl border border-gray-200 p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:border-gray-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${200 + i * 70}ms` }}
              >
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <div
                    className={`h-10 w-10 rounded-xl ${config.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    <TypeIcon size={18} className={config.color} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                        isLive
                          ? "bg-[#004ae0]/10 text-[#004ae0]"
                          : "bg-gray-100 text-[#67676f]"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isLive ? "bg-[#004ae0] animate-pulse" : "bg-gray-400"
                        }`}
                      />
                      {item.status}
                    </span>
                    <div className="relative">
                      <button
                        onClick={() =>
                          setMenuOpenId(menuOpenId === item.id ? null : item.id)
                        }
                        className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <MoreHorizontal size={14} className="text-gray-400" />
                      </button>
                      {menuOpenId === item.id && (
                        <div className="absolute right-0 top-8 z-20 w-36 bg-white rounded-xl border border-gray-200 shadow-xl py-1 animate-in fade-in zoom-in-95 duration-150">
                          <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-[#1e1f24] hover:bg-gray-50">
                            <BarChart3 size={13} /> Analytics
                          </button>
                          <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-[#1e1f24] hover:bg-gray-50">
                            <ExternalLink size={13} /> Open
                          </button>
                          <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-red-600 hover:bg-red-50">
                            <Trash2 size={13} /> Unpublish
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-4 text-[14px] font-semibold text-[#1e1f24] leading-snug line-clamp-2 group-hover:text-[#004ae0] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11px] text-gray-400">{item.type}</p>

                {/* URL + Copy */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-50 border border-gray-100">
                    <Link2 size={11} className="text-gray-400 flex-shrink-0" />
                    <span className="text-[11px] text-[#67676f] truncate font-mono">
                      {item.url}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(item.url, item.id)}
                    className={`p-1.5 rounded-lg transition-all duration-200 ${
                      copiedId === item.id
                        ? "bg-[#004ae0] text-white"
                        : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-[#1e1f24]"
                    }`}
                  >
                    {copiedId === item.id ? (
                      <Check size={14} />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                {/* Views Bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#67676f]">
                      <Eye size={12} />
                      <span className="font-medium text-[#1e1f24]">{item.views}</span>
                      <span className="text-gray-400">views</span>
                    </div>
                    <span className="text-[10px] text-gray-400">{item.created}</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#004ae0] transition-all duration-1000 ease-out"
                      style={{
                        width: mounted ? `${viewPercent}%` : "0%",
                        transitionDelay: `${400 + i * 70}ms`,
                      }}
                    />
                  </div>
                </div>

                {/* Hover Action Overlay */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex items-center gap-1 text-[11px] font-medium text-[#004ae0] hover:underline">
                    Open <ArrowUpRight size={11} />
                  </button>
                  <button className="flex items-center gap-1 text-[11px] font-medium text-[#67676f] hover:text-[#1e1f24] transition-colors">
                    <BarChart3 size={12} /> Stats
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="mt-12 text-center py-16">
            <div className="h-14 w-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto">
              <Search size={24} className="text-gray-300" />
            </div>
            <p className="mt-4 text-[14px] font-medium text-[#1e1f24]">No items found</p>
            <p className="mt-1 text-[12px] text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}