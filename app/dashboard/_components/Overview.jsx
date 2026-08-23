"use client";

import {
  Users,
  ClipboardList,
  CheckCheck,
  Crown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import AssessmentStatusList from "@/components/AssessmentStatusList.jsx";

export default function QuickActions() {
  return (
    <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-4 py-3 sm:py-4">
      <div className="max-w-full  mx-auto  ">
        
        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          <span className="text-[11px] font-medium tracking-wider text-gray-500 uppercase">
            QUICKER
          </span>
        </div>
        <h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
          Quick Actions
        </h2>
        <p className="mt-2 text-[13px] sm:text-sm text-gray-500 leading-relaxed max-w-2xl">
          Perform common tasks faster with shortcuts to create assessments, manage members, and organize your hiring workflows from one place.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
          
          {/* Card 1 - Total Students */}
          <div className="group relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900/20 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.18)]">
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
              style={{ background: "radial-gradient(circle, rgba(0,0,0,.9) 0%, transparent 70%)" }}
            />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Total Students
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="flex items-center gap-1 rounded-full bg-zinc-900 px-2 py-0.5 text-[10px] font-medium text-white">
                    <ArrowUpRight size={10} strokeWidth={2.3} />
                    8.2%
                  </span>
                </div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Users size={15} className="text-white" strokeWidth={1.8} />
              </div>
            </div>
            <div className="relative mt-5 flex items-end justify-between">
              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold leading-none tracking-tight text-zinc-900">
                  1,248
                </h3>
                <p className="mt-2 text-[12px] text-zinc-500">
                  vs <span className="font-semibold text-zinc-900">1,153</span> last month
                </p>
              </div>
              <div className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5">
                <span className="text-[10px] font-medium text-zinc-600">73% Full</span>
              </div>
            </div>
            <div className="mt-5">
              <div className="mb-1.5 flex items-center justify-between">
                <span className="text-[10px] text-zinc-400">Enrollment Capacity</span>
                <span className="text-[10px] font-semibold text-zinc-900">73%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100">
                <div className="h-full rounded-full bg-zinc-900 transition-all duration-700" style={{ width: "73%" }} />
              </div>
            </div>
          </div>

          {/* Card 2 - Ongoing Assessments */}
          <div className="group relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900/20 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.18)]">
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-[0.04] transition-all duration-500 group-hover:opacity-[0.07]"
              style={{ background: "radial-gradient(circle, rgba(0,0,0,0.9) 0%, transparent 70%)" }}
            />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Ongoing Assessments
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full" style={{ background: "rgba(212,175,55,.45)", animation: "goldPulse 1.8s infinite" }} />
                    <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "radial-gradient(circle,#FFE8A3 0%,#D4AF37 70%)", boxShadow: "0 0 8px rgba(212,175,55,.7)" }} />
                  </div>
                  <span className="text-[11px] font-medium text-amber-700">Pending</span>
                </div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black shadow-lg">
                <ClipboardList size={15} className="text-white" strokeWidth={1.8} />
              </div>
            </div>
            <div className="relative mt-5 flex items-end justify-between">
              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold leading-none tracking-tight text-zinc-900">
                  06
                </h3>
                <p className="mt-2 text-[12px] text-zinc-500">
                  <span className="font-semibold text-zinc-900">2</span> ending today
                </p>
              </div>
              <div className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5">
                <span className="text-[10px] font-medium text-zinc-600">Active</span>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-3">
              <button className="group/button flex items-center gap-1.5 text-[13px] font-medium text-zinc-700 transition-colors hover:text-black">
                View all
                <ArrowRight size={12} className="transition-transform duration-300 group-hover/button:translate-x-1" />
              </button>
              <span className="text-[10px] text-zinc-400">Live Updates</span>
            </div>
          </div>

          {/* Card 3 - Completed Assessments */}
          <div className="group relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900/20 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.18)]">
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
              style={{ background: "radial-gradient(circle, rgba(0,0,0,.9) 0%, transparent 70%)" }}
            />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Completed Assessments
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400" style={{ animation: "greenPulse 1.8s infinite" }} />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,.7)]" />
                  </div>
                  <span className="text-[11px] font-medium text-emerald-700">Completed</span>
                </div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black shadow-lg">
                <CheckCheck size={16} className="text-white" strokeWidth={1.8} />
              </div>
            </div>
            <div className="relative mt-5 flex items-end justify-between">
              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold leading-none tracking-tight text-zinc-900">
                  184
                </h3>
                <p className="mt-2 text-[12px] text-zinc-500">
                  <span className="font-semibold text-zinc-900">+21</span> completed this week
                </p>
              </div>
              <div className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5">
                <span className="text-[10px] font-medium text-zinc-600">94% Success</span>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-3">
              <button className="group/button flex items-center gap-1.5 text-[13px] font-medium text-zinc-700 transition-colors hover:text-black">
                View History
                <ArrowRight size={12} className="transition-transform duration-300 group-hover/button:translate-x-1" />
              </button>
              <span className="text-[10px] text-zinc-400">Last updated 2m ago</span>
            </div>
          </div>

          {/* Card 4 - Subscription */}
          <div className="group relative w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900/20 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.18)]">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
              style={{ background: "radial-gradient(circle, rgba(0,0,0,.9) 0%, transparent 70%)" }}
            />
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                  Subscription
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <div className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full rounded-full" style={{ background: "#D4AF37", animation: "premiumPulse 2s infinite" }} />
                    <span className="relative h-2 w-2 rounded-full" style={{ background: "radial-gradient(circle,#FFE8A3,#D4AF37)", boxShadow: "0 0 8px rgba(212,175,55,.7)" }} />
                  </div>
                  <span className="text-[11px] font-medium text-amber-700">Active</span>
                </div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black">
                <Crown size={16} className="text-white" />
              </div>
            </div>
            <div className="mt-5 flex items-end justify-between">
              <div>
                <h3 className="text-3xl sm:text-4xl font-semibold leading-none tracking-tight text-zinc-900">
                  Pro
                </h3>
                <p className="mt-2 text-[12px] text-zinc-500">Unlimited assessments</p>
              </div>
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[10px] font-medium text-zinc-700">
                Premium
              </span>
            </div>
            <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-3">
              <div>
                <p className="text-[10px] text-zinc-400">Renewal</p>
                <p className="text-[13px] font-semibold text-zinc-900">12 Aug 2026</p>
              </div>
              <button className="group/button flex items-center gap-1.5 text-[13px] font-medium text-zinc-700 transition-colors hover:text-black">
                Manage
                <ArrowRight size={12} className="transition-transform duration-300 group-hover/button:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Assessment Status List */}
        <div className="mt-6">
          <AssessmentStatusList />
        </div>
      </div>

      <style>{`
        @keyframes goldPulse {
          0% { transform: scale(1); opacity: .8; box-shadow: 0 0 0 0 rgba(212,175,55,.6); }
          70% { transform: scale(2.8); opacity: 0; box-shadow: 0 0 0 10px rgba(212,175,55,0); }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes greenPulse {
          0% { transform: scale(1); opacity: .8; box-shadow: 0 0 0 0 rgba(34,197,94,.5); }
          70% { transform: scale(2.8); opacity: 0; box-shadow: 0 0 0 10px rgba(34,197,94,0); }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes premiumPulse {
          0% { transform: scale(1); opacity: .8; box-shadow: 0 0 0 0 rgba(212,175,55,.6); }
          70% { transform: scale(2.8); opacity: 0; box-shadow: 0 0 0 10px rgba(212,175,55,0); }
          100% { transform: scale(2.8); opacity: 0; }
        }
      `}</style>
    </div>
  );
}