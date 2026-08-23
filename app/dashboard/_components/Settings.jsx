"use client";

import React, { useState } from "react";
import { Settings, Bell, Shield, User, Palette, Save } from "lucide-react";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "appearance", label: "Appearance", icon: Palette },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#004ae0]" />
          <span className="text-[11px] font-medium tracking-wider text-gray-400 uppercase">SETTINGS</span>
        </div>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-[#1e1f24]">Settings</h2>
        <p className="mt-2 text-[13px] sm:text-sm text-[#67676f] leading-relaxed max-w-2xl">
          Manage your account preferences and organization settings.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-6">
          <div className="sm:w-56 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-200 p-2 space-y-1">
              {tabs.map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
                      activeTab === tab.id ? "bg-[#1e1f24] text-white" : "text-[#67676f] hover:bg-gray-50"
                    }`}
                  >
                    <Icon size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex-1 bg-white rounded-2xl border border-gray-200 p-6">
            {activeTab === "profile" && (
              <div className="space-y-5">
                <h3 className="text-[14px] font-semibold text-[#1e1f24]">Profile Information</h3>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-[#004ae0] flex items-center justify-center text-white text-lg font-semibold">JD</div>
                  <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-[12px] font-medium text-[#67676f] hover:bg-gray-50">Change Avatar</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-1.5">First Name</label>
                    <input type="text" defaultValue="John" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:border-[#004ae0]" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-1.5">Last Name</label>
                    <input type="text" defaultValue="Doe" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:border-[#004ae0]" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-1.5">Email</label>
                    <input type="email" defaultValue="john@company.com" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:border-[#004ae0]" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-1.5">Organization</label>
                    <input type="text" defaultValue="Acme Corp" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:border-[#004ae0]" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-5">
                <h3 className="text-[14px] font-semibold text-[#1e1f24]">Notification Preferences</h3>
                {["Email me when an assessment is completed", "Notify on new team member join", "Weekly summary report", "Billing alerts"].map((label, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked={i < 2} className="h-4 w-4 rounded border-gray-300 text-[#004ae0] focus:ring-[#004ae0]" />
                    <span className="text-[13px] text-[#1e1f24]">{label}</span>
                  </label>
                ))}
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-5">
                <h3 className="text-[14px] font-semibold text-[#1e1f24]">Security Settings</h3>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-1.5">Current Password</label>
                  <input type="password" placeholder="Enter current password" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:border-[#004ae0]" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-1.5">New Password</label>
                  <input type="password" placeholder="Enter new password" className="w-full px-3 py-2 rounded-lg border border-gray-200 text-[13px] focus:outline-none focus:border-[#004ae0]" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-1.5">Two-Factor Authentication</label>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                    <span className="text-[13px] text-[#1e1f24]">Enable 2FA</span>
                    <button className="px-3 py-1.5 rounded-lg bg-[#1e1f24] text-white text-[11px] font-medium">Enable</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "appearance" && (
              <div className="space-y-5">
                <h3 className="text-[14px] font-semibold text-[#1e1f24]">Appearance</h3>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-1.5">Theme</label>
                  <div className="flex gap-3">
                    {["Light", "Dark", "System"].map(theme => (
                      <button key={theme} className={`px-4 py-2 rounded-lg text-[12px] font-medium border transition-all ${theme === "Light" ? "bg-[#1e1f24] text-white border-[#1e1f24]" : "bg-white text-[#67676f] border-gray-200 hover:border-gray-300"}`}>
                        {theme}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-400 mb-1.5">Accent Color</label>
                  <div className="flex gap-3">
                    {["#004ae0", "#1e1f24", "#67676f"].map(color => (
                      <button key={color} className="h-8 w-8 rounded-full border-2 border-white shadow-md hover:scale-110 transition-transform" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 pt-5 border-t border-gray-100 flex justify-end">
              <button
                onClick={handleSave}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
                  saved ? "bg-[#004ae0] text-white" : "bg-[#1e1f24] text-white hover:bg-[#004ae0]"
                }`}
              >
                <Save size={14} />
                {saved ? "Saved!" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}