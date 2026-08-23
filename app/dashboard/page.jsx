"use client";

import {
  BadgeCheck,
  Bookmark,
  ReceiptText,
  BadgeDollarSign,
  ChartNoAxesColumn,
  Blocks,
  Code2,
  Workflow,
  Users,
  Settings,
  History,
  LayoutTemplate,
  Zap,
  House,
  Menu,
  X,
} from "lucide-react";
import { Suspense, lazy, useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";

const Overview = lazy(() => import("./_components/Overview.jsx"));
const RecentActivity = lazy(() => import("./_components/RecentActivity.jsx"));
const QuickActions = lazy(() => import("./_components/QuickActions.jsx"));
const Workflowx = lazy(() => import("./_components/Workflow.jsx"));
const Templates = lazy(() => import("./_components/Templates.jsx"));
const Published = lazy(() => import("./_components/Published.jsx"));
const Components = lazy(() => import("./_components/Components.jsx"));
const TeamManagement = lazy(() => import("./_components/TeamManagement.jsx"));
const SavedQuestions = lazy(() => import("./_components/SavedQuestions.jsx"));
const CodingChallenges = lazy(() => import("./_components/CodingChallenges.jsx"));
const Subscriptions = lazy(() => import("./_components/Subscriptions.jsx"));
const BillingHistory = lazy(() => import("./_components/BillingHistory.jsx"));
const Usage = lazy(() => import("./_components/Usage.jsx"));
const SettingsScreen = lazy(() => import("./_components/Settings.jsx"));
import Loader from "./_components/Loading.jsx";

const navSections = [
  {
    label: "Getting Started",
    items: [
      { key: "overview", label: "Overview", icon: House },
      { key: "recent-activity", label: "Recent Activity", icon: History },
      { key: "quick-actions", label: "Quick Actions", icon: Zap },
    ],
  },
  {
    label: "Manage",
    items: [
      { key: "workflow", label: "Workflow", icon: Workflow },
      { key: "template", label: "Template", icon: LayoutTemplate },
      { key: "published", label: "Published", icon: BadgeCheck },
      { key: "components", label: "Components", icon: Blocks },
      { key: "team-management", label: "Team Management", icon: Users },
    ],
  },
  {
    label: "Saved",
    items: [
      { key: "saved-questions", label: "Saved Questions", icon: Bookmark },
      { key: "coding-challenges", label: "Coding Challenges", icon: Code2 },
    ],
  },
  {
    label: "Billing",
    items: [
      { key: "subscriptions", label: "Subscriptions", icon: BadgeDollarSign },
      { key: "billing-history", label: "Billing History", icon: ReceiptText },
      { key: "usage", label: "Usage", icon: ChartNoAxesColumn },
    ],
  },
  {
    label: "Settings",
    items: [{ key: "settings", label: "Settings", icon: Settings }],
  },
];

const viewMap = {
  overview: Overview,
  "recent-activity": RecentActivity,
  "quick-actions": QuickActions,
  workflow: Workflowx,
  template: Templates,
  published: Published,
  components: Components,
  "team-management": TeamManagement,
  "saved-questions": SavedQuestions,
  "coding-challenges": CodingChallenges,
  subscriptions: Subscriptions,
  "billing-history": BillingHistory,
  usage: Usage,
  settings: SettingsScreen,
};

export default function Dashboard() {
  const [visibleView, setVisibleView] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const ActiveComponent = viewMap[visibleView];

  return (
    <div className="bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)] bg-[#fafafa] bg-size-[auto,22px_22px] h-screen flex flex-col overflow-hidden">
      
      {/* Header */}
      <header className="px-4 sm:px-5 py-3 bg-white border-b flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-1.5 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
          >
            <Menu size={18} />
          </button>
          <span className="text-[15px] border border-black px-1.5 py-0.5 rounded-sm font-semibold">
            AX
          </span>
          <span className="hidden sm:inline text-gray-300">/</span>
          <span className="hidden sm:inline text-[13px] text-gray-500">Organization</span>
          <span className="hidden sm:inline text-gray-300">/</span>
          <span className="text-[13px] font-medium text-[#1e1f24]">
            {navSections
              .flatMap((s) => s.items)
              .find((i) => i.key === visibleView)?.label || "Overview"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <RainbowButton size="sm" variant="outline">
            <span className="sr-only">Menu</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </RainbowButton>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-60 bg-[#fcfcfc] border-r flex-col overflow-y-auto py-3 px-2.5">
          <SidebarContent visibleView={visibleView} onSelect={(key) => setVisibleView(key)} />
        </aside>

        {/* Mobile Sidebar Drawer */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-60 bg-[#fcfcfc] border-r shadow-xl flex flex-col overflow-y-auto py-3 px-2.5">
              <div className="flex items-center justify-between mb-4 px-1">
                <span className="text-[15px] font-semibold">Menu</span>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <SidebarContent
                visibleView={visibleView}
                onSelect={(key) => {
                  setVisibleView(key);
                  setSidebarOpen(false);
                }}
              />
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 overflow-y-auto p-4 sm:p-6">
          <Suspense fallback={<Loader />}>
            {ActiveComponent && <ActiveComponent />}
          </Suspense>
        </main>
      </div>
    </div>
  );
}

/* Sidebar Content Component */
function SidebarContent({ visibleView, onSelect }) {
  return (
    <>
      {navSections.map((section) => (
        <div key={section.label} className="mb-4">
          <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium px-1.5 mb-1.5 block">
            {section.label}
          </span>
          {section.items.map((item) => {
            const isActive = visibleView === item.key;
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                onClick={() => onSelect(item.key)}
                className={`w-full text-left flex items-center gap-2 px-2 py-1.5 rounded-md text-[13px] transition-all ${
                  isActive
                    ? "bg-gray-200 text-black font-medium border-l-2 border-gray-800"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
              >
                <Icon size={17} strokeWidth={2} />
                {item.label}
              </button>
            );
          })}
        </div>
      ))}
    </>
  );
}