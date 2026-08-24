"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  Plus,
  Mail,
  Shield,
  MoreHorizontal,
  Search,
  Crown,
  Pencil,
  Trash2,
  Check,
  X,
  ChevronDown,
  ArrowUpRight,
  UserPlus,
  Filter,
  Clock,
  Activity,
  BarChart3,
} from "lucide-react";

const initialMembers = [
  { id: 1, name: "Sarah Chen", email: "sarah@company.com", role: "Admin", status: "Active", initials: "SC", lastActive: "2 min ago", assessments: 24 },
  { id: 2, name: "Marcus Johnson", email: "marcus@company.com", role: "Admin", status: "Active", initials: "MJ", lastActive: "Now", assessments: 18 },
  { id: 3, name: "Emily Davis", email: "emily@company.com", role: "Editor", status: "Active", initials: "ED", lastActive: "15 min ago", assessments: 31 },
  { id: 4, name: "Alex Kim", email: "alex@company.com", role: "Viewer", status: "Offline", initials: "AK", lastActive: "3 hours ago", assessments: 8 },
  { id: 5, name: "Jordan Lee", email: "jordan@company.com", role: "Editor", status: "Active", initials: "JL", lastActive: "1 hour ago", assessments: 12 },
  { id: 6, name: "Priya Sharma", email: "priya@company.com", role: "Viewer", status: "Pending", initials: "PS", lastActive: "—", assessments: 0 },
  { id: 7, name: "David Park", email: "david@company.com", role: "Editor", status: "Active", initials: "DP", lastActive: "45 min ago", assessments: 19 },
  { id: 8, name: "Lisa Wong", email: "lisa@company.com", role: "Viewer", status: "Offline", initials: "LW", lastActive: "1 day ago", assessments: 5 },
];

const roles = [
  { value: "Admin", label: "Admin", desc: "Full access", color: "bg-[#1e1f24] text-white", dot: "bg-white" },
  { value: "Editor", label: "Editor", desc: "Can edit", color: "bg-[#004ae0]/10 text-[#004ae0]", dot: "bg-[#004ae0]" },
  { value: "Viewer", label: "Viewer", desc: "Read only", color: "bg-gray-100 text-[#67676f]", dot: "bg-[#67676f]" },
];

const statusConfig = {
  Active: { dot: "bg-[#004ae0]", text: "text-[#004ae0]", bg: "bg-[#004ae0]/10" },
  Offline: { dot: "bg-gray-300", text: "text-[#67676f]", bg: "bg-gray-100" },
  Pending: { dot: "bg-[#1e1f24]", text: "text-[#1e1f24]", bg: "bg-[#1e1f24]/10" },
};

export default function TeamManagement() {
  const [mounted, setMounted] = useState(false);
  const [members, setMembers] = useState(initialMembers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [editingId, setEditingId] = useState(null);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [showInvite, setShowInvite] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [copiedId, setCopiedId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setMounted(true), 60);
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpenId(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const filtered = members.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase());
    const matchesRole = roleFilter === "All" || m.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const handleRoleChange = (id, newRole) => {
    setMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, role: newRole } : m))
    );
    setEditingId(null);
  };

  const handleRemove = (id) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
    setMenuOpenId(null);
  };

  const handleCopyEmail = (email, id) => {
    navigator.clipboard?.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleInvite = () => {
    if (!inviteEmail.trim()) return;
    const newMember = {
      id: Date.now(),
      name: inviteEmail.split("@")[0],
      email: inviteEmail,
      role: "Viewer",
      status: "Pending",
      initials: inviteEmail.substring(0, 2).toUpperCase(),
      lastActive: "—",
      assessments: 0,
    };
    setMembers([newMember, ...members]);
    setInviteEmail("");
    setShowInvite(false);
  };

  const adminCount = members.filter((m) => m.role === "Admin").length;
  const activeCount = members.filter((m) => m.status === "Active").length;

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
              Team
            </h2>
            <p className="mt-2 text-[13px] text-[#67676f] leading-relaxed max-w-lg">
              Invite, manage roles, and control access for everyone in your organization from one place.
            </p>
          </div>
          <button
            onClick={() => setShowInvite(!showInvite)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1e1f24] text-white text-[13px] font-medium hover:bg-[#004ae0] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 self-start sm:self-auto"
          >
            <UserPlus size={15} strokeWidth={2.5} />
            Invite Member
          </button>
        </div>

        {/* Invite Drawer */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            showInvite ? "max-h-32 mt-6 opacity-100" : "max-h-0 mt-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="colleague@company.com"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleInvite()}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-[13px] focus:outline-none focus:border-[#004ae0] focus:ring-1 focus:ring-[#004ae0]"
              />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                onClick={handleInvite}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#004ae0] text-white text-[13px] font-medium hover:bg-[#1e1f24] transition-colors"
              >
                Send Invite
              </button>
              <button
                onClick={() => setShowInvite(false)}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-[13px] text-[#67676f] hover:bg-gray-50"
              >
                <X size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats + Search + Filter */}
        <div
          className={`mt-8 flex flex-col lg:flex-row lg:items-center gap-4 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-[#004ae0]/10 flex items-center justify-center">
                <Users size={14} className="text-[#004ae0]" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#1e1f24] leading-none">{members.length}</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-400 mt-0.5">Members</p>
              </div>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-[#1e1f24]/10 flex items-center justify-center">
                <Crown size={14} className="text-[#1e1f24]" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#1e1f24] leading-none">{adminCount}</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-400 mt-0.5">Admins</p>
              </div>
            </div>
            <div className="h-6 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gray-100 flex items-center justify-center">
                <Activity size={14} className="text-[#67676f]" />
              </div>
              <div>
                <p className="text-[15px] font-bold text-[#1e1f24] leading-none">{activeCount}</p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-gray-400 mt-0.5">Online</p>
              </div>
            </div>
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-3">
            <div className="relative flex-1 lg:w-64">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search members..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-[13px] focus:outline-none focus:border-[#004ae0]"
              />
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {["All", "Admin", "Editor", "Viewer"].map((r) => (
                <button
                  key={r}
                  onClick={() => setRoleFilter(r)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap transition-all ${
                    roleFilter === r
                      ? "bg-[#1e1f24] text-white"
                      : "bg-white text-[#67676f] border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Member Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((member, i) => {
            const statusCfg = statusConfig[member.status];
            const currentRole = roles.find((r) => r.value === member.role);
            const isEditing = editingId === member.id;
            const isMenuOpen = menuOpenId === member.id;

            return (
              <div
                key={member.id}
                className={`group relative bg-white rounded-2xl border border-gray-200 p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] hover:border-gray-300 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${150 + i * 60}ms` }}
              >
                {/* Top actions */}
                <div className="absolute top-3 right-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleCopyEmail(member.email, member.id)}
                    className={`p-1.5 rounded-lg transition-all ${
                      copiedId === member.id ? "bg-[#004ae0] text-white" : "hover:bg-gray-100 text-gray-400"
                    }`}
                    title="Copy email"
                  >
                    {copiedId === member.id ? <Check size={13} /> : <Mail size={13} />}
                  </button>
                  <div className="relative" ref={isMenuOpen ? menuRef : null}>
                    <button
                      onClick={() => setMenuOpenId(isMenuOpen ? null : member.id)}
                      className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"
                    >
                      <MoreHorizontal size={13} />
                    </button>
                    {isMenuOpen && (
                      <div className="absolute right-0 top-8 z-20 w-40 bg-white rounded-xl border border-gray-200 shadow-xl py-1 animate-in fade-in zoom-in-95">
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-[#1e1f24] hover:bg-gray-50">
                          <Pencil size={12} /> Edit Profile
                        </button>
                        <button className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-[#1e1f24] hover:bg-gray-50">
                          <Shield size={12} /> Permissions
                        </button>
                        <div className="mx-2 my-1 h-px bg-gray-100" />
                        <button
                          onClick={() => handleRemove(member.id)}
                          className="w-full flex items-center gap-2 px-3 py-2 text-[12px] text-red-600 hover:bg-red-50"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Avatar + Name */}
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-[#004ae0] flex items-center justify-center text-white text-[12px] font-bold flex-shrink-0">
                    {member.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold text-[#1e1f24] truncate">{member.name}</p>
                    <button
                      onClick={() => handleCopyEmail(member.email, member.id)}
                      className="text-[11px] text-gray-400 truncate hover:text-[#004ae0] transition-colors cursor-pointer"
                    >
                      {member.email}
                    </button>
                  </div>
                </div>

                {/* Role Selector */}
                <div className="mt-4 relative">
                  {isEditing ? (
                    <div className="space-y-1.5">
                      {roles.map((r) => (
                        <button
                          key={r.value}
                          onClick={() => handleRoleChange(member.id, r.value)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] font-medium transition-all ${
                            member.role === r.value
                              ? "bg-gray-50 border border-gray-200"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <span className={`h-2 w-2 rounded-full ${r.dot}`} />
                          <span className="text-[#1e1f24]">{r.label}</span>
                          <span className="ml-auto text-[10px] text-gray-400">{r.desc}</span>
                        </button>
                      ))}
                      <button
                        onClick={() => setEditingId(null)}
                        className="w-full text-center text-[11px] text-gray-400 hover:text-[#1e1f24] py-1"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditingId(member.id)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all hover:shadow-sm ${currentRole.color}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${currentRole.dot}`} />
                      {member.role}
                      <ChevronDown size={11} className="opacity-50" />
                    </button>
                  )}
                </div>

                {/* Status + Meta */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${statusCfg.dot} ${member.status === "Active" ? "animate-pulse" : ""}`} />
                    <span className={`text-[11px] font-medium ${statusCfg.text}`}>{member.status}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-gray-400">
                    <Clock size={11} />
                    {member.lastActive}
                  </div>
                </div>

                {/* Activity Bar */}
                <div className="mt-4 pt-3.5 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <BarChart3 size={12} className="text-gray-400" />
                      <span className="text-[11px] text-gray-400">
                        <span className="font-semibold text-[#1e1f24]">{member.assessments}</span> assessments
                      </span>
                    </div>
                    <button className="flex items-center gap-1 text-[11px] font-medium text-[#004ae0] opacity-0 group-hover:opacity-100 transition-opacity hover:underline">
                      View <ArrowUpRight size={10} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty */}
        {filtered.length === 0 && (
          <div className="mt-12 text-center py-16">
            <div className="h-14 w-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto">
              <Search size={24} className="text-gray-300" />
            </div>
            <p className="mt-4 text-[14px] font-medium text-[#1e1f24]">No members found</p>
            <p className="mt-1 text-[12px] text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}