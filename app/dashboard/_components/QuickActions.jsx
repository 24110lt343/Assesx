

"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Plus,
  UserPlus,
  BarChart3,
  Settings,
  FileText,
  CreditCard,
  Calendar,
  Search,
  Zap,
  ArrowUpRight,
  Command,
  Clock,
  Bookmark,
  Globe,
  Code2,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Users,
  CheckCheck,
  Crown,
} from "lucide-react";

const bentoTiles = [
  {
    id: "new-assessment",
    label: "New Assessment",
    description: "Create a coding challenge or interview template",
    icon: Plus,
    size: "large",
    accent: "bg-[#1e1f24] text-white",
    hover: "hover:shadow-[0_24px_60px_-20px_rgba(0,74,224,0.35)] hover:-translate-y-1.5",
    iconAnim: "group-hover:rotate-90",
    shortcut: "N",
  },
  {
    id: "invite-team",
    label: "Invite Team",
    description: "Add members to your workspace",
    icon: UserPlus,
    size: "medium",
    accent: "bg-white border border-gray-200 text-[#1e1f24]",
    hover: "hover:shadow-xl hover:-translate-y-1 hover:border-[#004ae0]/30",
    iconAnim: "group-hover:scale-110 group-hover:text-[#004ae0]",
    shortcut: "I",
  },
  {
    id: "view-reports",
    label: "View Reports",
    description: "Analytics & candidate insights",
    icon: BarChart3,
    size: "medium",
    accent: "bg-white border border-gray-200 text-[#1e1f24]",
    hover: "hover:shadow-xl hover:-translate-y-1 hover:border-[#004ae0]/30",
    iconAnim: "group-hover:scale-110 group-hover:text-[#004ae0]",
    shortcut: "R",
  },
  {
    id: "templates",
    label: "Templates",
    description: "6 saved",
    icon: FileText,
    size: "small",
    accent: "bg-white border border-gray-200 text-[#1e1f24]",
    hover: "hover:shadow-lg hover:-translate-y-0.5 hover:border-gray-300",
    iconAnim: "group-hover:-translate-y-0.5",
    shortcut: "T",
  },
  {
    id: "settings",
    label: "Settings",
    description: "Preferences",
    icon: Settings,
    size: "small",
    accent: "bg-white border border-gray-200 text-[#1e1f24]",
    hover: "hover:shadow-lg hover:-translate-y-0.5 hover:border-gray-300",
    iconAnim: "group-hover:rotate-45",
    shortcut: "S",
  },
  {
    id: "billing",
    label: "Billing",
    description: "Pro plan",
    icon: CreditCard,
    size: "small",
    accent: "bg-white border border-gray-200 text-[#1e1f24]",
    hover: "hover:shadow-lg hover:-translate-y-0.5 hover:border-gray-300",
    iconAnim: "group-hover:translate-x-0.5",
    shortcut: "B",
  },
  {
    id: "schedule",
    label: "Schedule",
    description: "3 upcoming",
    icon: Calendar,
    size: "small",
    accent: "bg-white border border-gray-200 text-[#1e1f24]",
    hover: "hover:shadow-lg hover:-translate-y-0.5 hover:border-gray-300",
    iconAnim: "group-hover:scale-110",
    shortcut: "C",
  },
  {
    id: "coding-challenges",
    label: "Challenges",
    description: "Library",
    icon: Code2,
    size: "small",
    accent: "bg-white border border-gray-200 text-[#1e1f24]",
    hover: "hover:shadow-lg hover:-translate-y-0.5 hover:border-gray-300",
    iconAnim: "group-hover:scale-110",
    shortcut: "L",
  },
  {
    id: "published",
    label: "Published",
    description: "5 live",
    icon: Globe,
    size: "small",
    accent: "bg-white border border-gray-200 text-[#1e1f24]",
    hover: "hover:shadow-lg hover:-translate-y-0.5 hover:border-gray-300",
    iconAnim: "group-hover:scale-110",
    shortcut: "P",
  },
];

const recentDrafts = [
  { title: "Frontend Engineer Round 2", edited: "2 min ago", type: "Assessment" },
  { title: "System Design Basics", edited: "1 hour ago", type: "Template" },
  { title: "Behavioral Screening", edited: "3 hours ago", type: "Interview" },
];

const microStats = [
  { label: "Active", value: "14", icon: Zap, color: "text-[#004ae0]" },
  { label: "Students", value: "2.8K", icon: Users, color: "text-[#1e1f24]" },
  { label: "Done", value: "1.2K", icon: CheckCheck, color: "text-[#67676f]" },
  { label: "Plan", value: "Pro", icon: Crown, color: "text-[#004ae0]" },
];

export default function QuickActions() {
  const [mounted, setMounted] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredTile, setHoveredTile] = useState(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.metaKey || e.ctrlKey) {
        const tile = bentoTiles.find((t) => t.shortcut.toLowerCase() === e.key.toLowerCase());
        if (tile) {
          e.preventDefault();
          setHoveredTile(tile.id);
          setTimeout(() => setHoveredTile(null), 400);
        }
      }
      if (e.key === "/" && !searchFocused) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [searchFocused]);

  const filteredTiles = bentoTiles.filter(
    (t) =>
      t.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full overflow-y-auto bg-[#f8f9fb]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">


        
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">
            QUICKER
          </span>
        </div>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">
          Quick Actions
        </h2>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          Perform common tasks faster with shortcuts to create assessments, manage members, and organize your hiring workflows from one place.
        </p>

        {/* Bento Grid */}
        <div
          className={`mt-10 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-[#004ae0]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Quick Actions
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredTiles.map((tile, i) => {
              const Icon = tile.icon;
              const isLarge = tile.size === "large";
              const isMedium = tile.size === "medium";
              const isHovered = hoveredTile === tile.id;

              return (
                <button
                  key={tile.id}
                  onMouseEnter={() => setHoveredTile(tile.id)}
                  onMouseLeave={() => setHoveredTile(null)}
                  className={`group relative text-left rounded-2xl p-5 transition-all duration-500 ${
                    isLarge ? "col-span-2 row-span-2 sm:row-span-1 lg:row-span-2" : ""
                  } ${isMedium ? "col-span-2 sm:col-span-1" : ""} ${
                    tile.accent
                  } ${tile.hover} ${
                    mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  } ${isHovered ? "ring-2 ring-[#004ae0]/20" : ""}`}
                  style={{ transitionDelay: `${250 + i * 60}ms` }}
                >
                  {/* Shortcut badge */}
                  <span className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-black/5 text-[9px] font-mono text-[#67676f]">
                      <Command size={8} /> {tile.shortcut}
                    </span>
                  </span>

                  <div className={`${isLarge ? "h-12 w-12" : "h-10 w-10"} rounded-xl flex items-center justify-center transition-all duration-300 ${
                    tile.id === "new-assessment" ? "bg-[#004ae0]" : "bg-gray-50 group-hover:bg-[#004ae0]/10"
                  }`}>
                    <Icon
                      size={isLarge ? 22 : 18}
                      className={`transition-all duration-300 ${
                        tile.id === "new-assessment" ? "text-white" : "text-[#1e1f24] group-hover:text-[#004ae0]"
                      } ${tile.iconAnim}`}
                    />
                  </div>

                  <div className={`${isLarge ? "mt-6" : "mt-4"}`}>
                    <h3 className={`font-semibold text-[#1e1f24] ${isLarge ? "text-lg" : "text-[13px]"}`}>
                      {tile.label}
                    </h3>
                    <p className={`mt-1 ${isLarge ? "text-[13px]" : "text-[11px]"} text-[#67676f] leading-relaxed`}>
                      {tile.description}
                    </p>
                  </div>

                  {isLarge && (
                    <div className="mt-5 flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((_, j) => (
                          <div
                            key={j}
                            className="h-7 w-7 rounded-full border-2 border-[#1e1f24] bg-gray-700 flex items-center justify-center"
                          >
                            <span className="text-[8px] text-white font-medium">
                              {String.fromCharCode(65 + j)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <span className="text-[11px] text-gray-400">+24 this week</span>
                    </div>
                  )}

                  <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                    isLarge ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}>
                    <div className="h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#004ae0] transition-colors duration-300">
                      <ArrowUpRight size={14} className="text-white" />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Drafts Strip */}
        <div
          className={`mt-8 transition-all duration-700 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#004ae0]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Recent Drafts
              </span>
            </div>
            <button className="text-[11px] font-medium text-[#004ae0] hover:underline flex items-center gap-1">
              View all <ChevronRight size={12} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {recentDrafts.map((draft, i) => (
              <button
                key={draft.title}
                className={`group flex items-center gap-3 bg-white rounded-xl border border-gray-200 p-4 text-left transition-all duration-300 hover:shadow-md hover:border-gray-300 hover:-translate-y-0.5 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${550 + i * 80}ms` }}
              >
                <div className="h-9 w-9 rounded-lg bg-[#004ae0]/10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <FileText size={15} className="text-[#004ae0]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium text-[#1e1f24] truncate">{draft.title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-gray-400">{draft.type}</span>
                    <span className="h-0.5 w-0.5 rounded-full bg-gray-300" />
                    <span className="text-[10px] text-gray-400">{draft.edited}</span>
                  </div>
                </div>
                <ChevronRight size={14} className="text-gray-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#004ae0]" />
              </button>
            ))}
          </div>
        </div>

        {/* Keyboard Shortcuts Footer */}
        <div
          className={`mt-10 pb-8 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Command size={14} className="text-[#004ae0]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Keyboard Shortcuts
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
              {bentoTiles.slice(0, 5).map((tile) => (
                <div
                  key={tile.id}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-gray-50 border border-transparent hover:border-gray-200 hover:bg-white transition-all duration-200"
                >
                  <span className="flex items-center justify-center h-6 w-6 rounded-md bg-white border border-gray-200 text-[10px] font-mono font-semibold text-[#1e1f24]">
                    {tile.shortcut}
                  </span>
                  <span className="text-[11px] font-medium text-[#67676f]">{tile.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}