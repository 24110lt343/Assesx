"use client";

import React from "react";
import { Users, Plus, Mail, Shield, User } from "lucide-react";

const teamMembers = [
  { id: 1, name: "Sarah Chen", email: "sarah@company.com", role: "Admin", status: "Active", initials: "SC" },
  { id: 2, name: "Marcus Johnson", email: "marcus@company.com", role: "Admin", status: "Active", initials: "MJ" },
  { id: 3, name: "Emily Davis", email: "emily@company.com", role: "Editor", status: "Active", initials: "ED" },
  { id: 4, name: "Alex Kim", email: "alex@company.com", role: "Viewer", status: "Offline", initials: "AK" },
  { id: 5, name: "Jordan Lee", email: "jordan@company.com", role: "Editor", status: "Active", initials: "JL" },
  { id: 6, name: "Priya Sharma", email: "priya@company.com", role: "Viewer", status: "Pending", initials: "PS" },
];

const roleStyles = {
  Admin: "bg-[#1e1f24] text-white",
  Editor: "bg-[#004ae0]/10 text-[#004ae0]",
  Viewer: "bg-gray-100 text-[#67676f]",
};

export default function TeamManagement() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">MANAGE</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">Team Management</h2>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1e1f24] text-white text-[13px] font-medium hover:bg-[#004ae0] transition-colors">
            <Plus size={15} /> Invite Member
          </button>
        </div>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          Manage team access, roles, and permissions across your organization.
        </p>

        <div className="mt-6 bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-5 py-3 border-b border-gray-100 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
            <div className="col-span-6 sm:col-span-4">Member</div>
            <div className="hidden sm:block sm:col-span-3">Role</div>
            <div className="col-span-3 sm:col-span-2">Status</div>
            <div className="col-span-3 sm:col-span-3 text-right">Actions</div>
          </div>
          {teamMembers.map(m => (
            <div key={m.id} className="grid grid-cols-12 gap-4 px-5 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors items-center">
              <div className="col-span-6 sm:col-span-4 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-[#004ae0] flex items-center justify-center text-white text-[11px] font-semibold flex-shrink-0">
                  {m.initials}
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-[#1e1f24] truncate">{m.name}</p>
                  <p className="text-[11px] text-gray-400 truncate">{m.email}</p>
                </div>
              </div>
              <div className="hidden sm:block sm:col-span-3">
                <span className={`inline-block px-2.5 py-1 rounded-lg text-[10px] font-semibold ${roleStyles[m.role]}`}>
                  {m.role}
                </span>
              </div>
              <div className="col-span-3 sm:col-span-2">
                <span className={`inline-block h-2 w-2 rounded-full mr-1.5 ${m.status === "Active" ? "bg-[#004ae0]" : m.status === "Offline" ? "bg-gray-300" : "bg-gray-400"}`} />
                <span className="text-[11px] text-[#67676f]">{m.status}</span>
              </div>
              <div className="col-span-3 sm:col-span-3 flex justify-end gap-1">
                <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"><Mail size={13} className="text-gray-400" /></button>
                <button className="p-1.5 rounded-lg hover:bg-gray-200 transition-colors"><Shield size={13} className="text-gray-400" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}