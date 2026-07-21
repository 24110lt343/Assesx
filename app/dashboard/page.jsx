import {
  BadgeCheck,
  Building2,
  School,
  ReceiptText,
  Bookmark,
  Crown ,
  ClipboardList ,
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  ChartNoAxesColumn,
  Blocks,
  CheckCheck,
  CreditCard, Briefcase, ShieldCheck,
  Brain,
  Code2,
  Sparkles,
  GraduationCap,
  ChevronDown,
  Boxes,
  FilePenLine,
  Workflow,
  Users,
  UserPlus,
  Shield,
  KeyRound,
  Settings,
  History,
  LayoutTemplate,
  Plus,
  House,
  Archive,
  Zap ,
  TextInitial,
  MoveRight,
  CornerDownRight
} from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { Globe } from "@/components/ui/globe";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { NotebookText } from "lucide-react";



export default function Dashboard() {

  return (
    <>
      <div className="bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)]  bg-[#fafafa] bg-size-[auto,22px_22px] h-screen">
        
        {/* Header */}
        <div className="px-5 py-4 bg-white border-b h-[7%] flex items-center justify-between">
            <div>
              <span className="text-[18px] border-black px-2 py-1  rounded-sm font-semibold">AX</span>&nbsp;&nbsp;&nbsp; <span className="text-[19px] text-gray-300">/</span>&nbsp;&nbsp;&nbsp;
              <span>Organization</span> &nbsp;&nbsp;&nbsp; <span className="text-[19px] text-gray-300">/</span> &nbsp;&nbsp;&nbsp; <span className="">Overview</span> &nbsp;&nbsp;&nbsp;
            </div>

            <div>
              Icons
            </div>
                
        </div>

        <div className="flex h-[93%] ">

            <div className="bg-[#fcfcfc] border-r w-[15%] px-2.5 py-1.5 flex flex-col items-start">
                <span className="text-[13px] my-2 ">Getting Started</span>
                <button className="text-[15.5px] border-l-2 border-[gray] rounded px-1.5 text-left py-1.5 mb-1 bg-gray-100 hover:cursor-pointer  w-full text-black flex gap-1 items-center">
                <House strokeWidth={2} size={20} />
                Overview</button>
                <button className="text-[15.5px] hover:cursor-pointer rounded px-1.5 text-left py-1.5   w-full  text-gray-500 flex gap-1 items-center mb-1">
                <History strokeWidth={2} size={20} />
                Recent Activity</button>
                <button className="text-[15.5px] hover:cursor-pointer rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                <Zap  strokeWidth={2} size={20} />
                Quick Actions</button>

                <span className="text-[13px] mb-2 mt-5 ">Manage</span>
                <div>
                    <button className="text-[15.5px] mb-1 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <Workflow strokeWidth={2} size={20} />
                    Workflow</button>

                    {/* <button className="text-[14.6px] ml-3 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <CornerDownRight strokeWidth={2} size={18} />
                    All Workflows</button> */}

                    {/* <button className="text-[14.6px] ml-3 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <CornerDownRight strokeWidth={2} size={18} />
                    Create Workflows</button>

                    <button className="text-[14.6px] ml-3 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <CornerDownRight strokeWidth={2} size={18} />
                    Templates</button>

                    <button className="text-[14.6px] ml-3 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <CornerDownRight strokeWidth={2} size={18} />
                    Favorites</button>

                    <button className="text-[14.6px] ml-3 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <CornerDownRight strokeWidth={2} size={18} />
                    Shared with Me</button> */}

                </div>
                
                <div>
                    <button className="text-[15.5px] mb-1 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <LayoutTemplate strokeWidth={2} size={20} />
                    Template</button>

                    

                </div>

                

                <div>
                    <button className="text-[15.5px] rounded px-1.5 mb-1 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <BadgeCheck strokeWidth={2} size={20} />
                    Published</button>
                </div>

                


                <div>
                    <button className="text-[15.5px] rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <Blocks  strokeWidth={2} size={20} />
                    Components</button>

                </div>
                
                <div>
                    <button className="text-[15.5px] rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <Users strokeWidth={2} size={20} />
                    Team Management</button>

                     {/* <button className="text-[15px] ml-5 rounded px-1.5 text-left py-1.5 mb-1 mt-1   w-full text-gray-500 flex gap-2 items-center">
                    <CornerDownRight strokeWidth={2} size={18} />
                    All Members</button>

                    <button className="text-[15px] ml-5 rounded px-1.5 text-left py-1.5 mb-1   w-full text-gray-500 flex gap-2 items-center">
                    <CornerDownRight strokeWidth={2} size={18} />
                    Roles</button>

                    <button className="text-[15px] ml-5 rounded px-1.5 text-left py-1.5 mb-1   w-full text-gray-500 flex gap-2 items-center">
                    <CornerDownRight strokeWidth={2} size={18} />
                    Invitations</button>

                    <button className="text-[15px] ml-5 rounded px-1.5 text-left py-1.5 mb-1   w-full text-gray-500 flex gap-2 items-center">
                    <CornerDownRight strokeWidth={2} size={18} />
                    Activity Logs</button> */}

                </div>

                



                <span className="text-[13px] mb-2 mt-5 ">Saved</span>

                <div>
                    <button className="text-[15.5px] mb-1 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <Bookmark strokeWidth={2} size={20} />
                    Saved Questions</button>
                </div>

                <div>
                    <button className="text-[15.5px] mb-1 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <Code2 strokeWidth={2} size={20} />
                    Coding Challenges</button>
                </div>


                 <span className="text-[13px] mb-2 mt-5 ">Billing</span>

                <div>
                    <button className="text-[15.5px] mb-1 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <BadgeDollarSign strokeWidth={2} size={20} />
                    Subscriptions</button>
                </div>

                <div>
                    <button className="text-[15.5px] mb-1 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <ReceiptText strokeWidth={2} size={20} />
                    Billing History</button>
                </div>

                <div>
                    <button className="text-[15.5px] mb-1 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <ChartNoAxesColumn strokeWidth={2} size={20} />
                    Usage</button>
                </div>


                <span className="text-[13px] mb-2 mt-5 ">Billing</span>

                <div>
                    <button className="text-[15.5px] mb-1 rounded px-1.5 text-left py-1.5   w-full text-gray-500 flex gap-1 items-center">
                    <Settings strokeWidth={2} size={20} />
                    Settings</button>
                </div>

            </div>


            <div className="w-[85%]">

                <div className="px-6 py-8">
                        <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                            <span className="text-[13px] font-medium tracking-wide text-gray-500 uppercase">
                                Overview
                            </span>
                        </div>
                        <h2 className="mt-2 text-[36px] font-semibold tracking-tight text-gray-900">
                            Organization Overview
                        </h2>
                        <p className="mt-2  text-[15px] font-normal leading-7 text-gray-500">
                            Manage your organization's workspace, members, subscription, and settings from one place.
                            Keep your team organized and your hiring workflows running smoothly.
                        </p>
                </div>
                  
              
<div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 xl:grid-cols-4">

  {/* Card 1 - Total Students */}
  <div className="group relative w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900/20 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.18)]">

    {/* Background texture */}
    <div
      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
      style={{
        background: "radial-gradient(circle, rgba(0,0,0,.9) 0%, transparent 70%)",
      }}
    />

    {/* Header */}
    <div className="relative flex items-start justify-between">

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
          Total Students
        </p>

        <div className="mt-2 flex items-center gap-2">

          <span className="flex items-center gap-1 rounded-full bg-zinc-900 px-2 py-1 text-[11px] font-medium text-white">
            <ArrowUpRight size={11} strokeWidth={2.3} />
            8.2%
          </span>

        </div>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black shadow-lg transition-transform duration-300 group-hover:scale-105">
        <Users size={17} className="text-white" strokeWidth={1.8} />
      </div>

    </div>

    {/* Stats */}
    <div className="relative mt-5 flex items-end justify-between">

      <div>

        <h2 className="text-[46px] font-semibold leading-none tracking-tight text-zinc-900">
          1,248
        </h2>

        <p className="mt-2 text-[13px] text-zinc-500">
          vs <span className="font-semibold text-zinc-900">1,153</span> last month
        </p>

      </div>

      <div className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1">
        <span className="text-[11px] font-medium text-zinc-600">
          73% Full
        </span>
      </div>

    </div>

    {/* Progress */}
    <div className="mt-5">

      <div className="mb-2 flex items-center justify-between">
        <span className="text-[11px] text-zinc-400">
          Enrollment Capacity
        </span>

        <span className="text-[11px] font-semibold text-zinc-900">
          73%
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100">

        <div
          className="h-full rounded-full bg-zinc-900 transition-all duration-700"
          style={{ width: "73%" }}
        />

      </div>

    </div>

  </div>

  {/* Card 2 - Ongoing Assessments */}
  <div className="group relative w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900/20 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.18)]">

    {/* Subtle background texture */}
    <div
      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-[0.04] transition-all duration-500 group-hover:opacity-[0.07]"
      style={{
        background:
          "radial-gradient(circle, rgba(0,0,0,0.9) 0%, transparent 70%)",
      }}
    />

    {/* Header */}
    <div className="relative flex items-start justify-between">

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
          Ongoing Assessments
        </p>

        <div className="mt-2 flex items-center gap-2">

          {/* Gold blinking dot */}
          <div className="relative flex h-2.5 w-2.5">

            <span
              className="absolute inline-flex h-full w-full rounded-full"
              style={{
                background: "rgba(212,175,55,.45)",
                animation: "goldPulse 1.8s infinite",
              }}
            />

            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full"
              style={{
                background:
                  "radial-gradient(circle,#FFE8A3 0%,#D4AF37 70%)",
                boxShadow: "0 0 8px rgba(212,175,55,.7)",
              }}
            />

          </div>

          <span className="text-xs font-medium text-amber-700">
            Pending
          </span>

        </div>
      </div>

      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black shadow-lg">

        <ClipboardList
          size={17}
          className="text-white"
          strokeWidth={1.8}
        />

      </div>

    </div>

    {/* Main Content */}
    <div className="relative mt-5 flex items-end justify-between">

      <div>

        <h2 className="text-[46px] font-semibold leading-none tracking-tight text-zinc-900">
          06
        </h2>

        <p className="mt-2 text-[13px] text-zinc-500">
          <span className="font-semibold text-zinc-900">
            2
          </span>{" "}
          ending today
        </p>

      </div>

      <div className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1">

        <span className="text-[11px] font-medium text-zinc-600">
          Active
        </span>

      </div>

    </div>

    {/* Footer */}
    <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">

      <button className="group/button flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-black">

        View all

        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover/button:translate-x-1"
        />

      </button>

      <span className="text-[11px] text-zinc-400">
        Live Updates
      </span>

    </div>

    <style>{`
        @keyframes goldPulse {
            0% {
                transform: scale(1);
                opacity: .8;
                box-shadow: 0 0 0 0 rgba(212,175,55,.6);
            }

            70% {
                transform: scale(2.8);
                opacity: 0;
                box-shadow: 0 0 0 10px rgba(212,175,55,0);
            }

            100% {
                transform: scale(2.8);
                opacity: 0;
            }
        }
    `}</style>

  </div>

  {/* Card 3 - Completed Assessments */}
  <div className="group relative w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900/20 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.18)]">

    {/* Background Accent */}
    <div
      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
      style={{
        background:
          "radial-gradient(circle, rgba(0,0,0,.9) 0%, transparent 70%)",
      }}
    />

    {/* Header */}
    <div className="relative flex items-start justify-between">

      <div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
          Completed Assessments
        </p>

        <div className="mt-2 flex items-center gap-2">

          {/* Green Live Dot */}
          <div className="relative flex h-2.5 w-2.5">

            <span
              className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
              style={{
                animation: "greenPulse 1.8s infinite",
              }}
            />

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(34,197,94,.7)]" />

          </div>

          <span className="text-xs font-medium text-emerald-700">
            Completed
          </span>

        </div>

      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black shadow-lg">
        <CheckCheck
          size={18}
          className="text-white"
          strokeWidth={1.8}
        />
      </div>

    </div>

    {/* Metric */}
    <div className="relative mt-5 flex items-end justify-between">

      <div>

        <h2 className="text-[46px] font-semibold leading-none tracking-tight text-zinc-900">
          184
        </h2>

        <p className="mt-2 text-[13px] text-zinc-500">
          <span className="font-semibold text-zinc-900">
            +21
          </span>{" "}
          completed this week
        </p>

      </div>

      <div className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1">
        <span className="text-[11px] font-medium text-zinc-600">
          94% Success
        </span>
      </div>

    </div>

    {/* Footer */}
    <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">

      <button className="group/button flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-black">

        View History

        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover/button:translate-x-1"
        />

      </button>

      <span className="text-[11px] text-zinc-400">
        Last updated 2m ago
      </span>

    </div>

    <style>{`
        @keyframes greenPulse {
            0% {
                transform: scale(1);
                opacity: .8;
                box-shadow: 0 0 0 0 rgba(34,197,94,.5);
            }

            70% {
                transform: scale(2.8);
                opacity: 0;
                box-shadow: 0 0 0 10px rgba(34,197,94,0);
            }

            100% {
                transform: scale(2.8);
                opacity: 0;
            }
        }
    `}</style>

  </div>

  {/* Card 4 - Subscription */}
  <div className="group relative w-full overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900/20 hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.18)]">

    {/* Background Accent */}
    <div
      className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]"
      style={{
        background:
          "radial-gradient(circle, rgba(0,0,0,.9) 0%, transparent 70%)",
      }}
    />

    {/* Header */}
    <div className="flex items-start justify-between">

      <div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
          Subscription
        </p>

        <div className="mt-2 flex items-center gap-2">

          <div className="relative flex h-2.5 w-2.5">

            <span
              className="absolute h-full w-full rounded-full"
              style={{
                background: "#D4AF37",
                animation: "premiumPulse 2s infinite",
              }}
            />

            <span
              className="relative h-2.5 w-2.5 rounded-full"
              style={{
                background:
                  "radial-gradient(circle,#FFE8A3,#D4AF37)",
                boxShadow: "0 0 8px rgba(212,175,55,.7)",
              }}
            />

          </div>

          <span className="text-xs font-medium text-amber-700">
            Active
          </span>

        </div>

      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black">
        <Crown size={18} className="text-white" />
      </div>

    </div>

    {/* Plan */}
    <div className="mt-5 flex items-end justify-between">

      <div>

        <h2 className="text-[42px] font-semibold leading-none tracking-tight text-zinc-900">
          Pro
        </h2>

        <p className="mt-2 text-[13px] text-zinc-500">
          Unlimited assessments
        </p>

      </div>

      <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-medium text-zinc-700">
        Premium
      </span>

    </div>

    <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-4">

      <div>
        <p className="text-[11px] text-zinc-400">
          Renewal
        </p>

        <p className="text-sm font-semibold text-zinc-900">
          12 Aug 2026
        </p>
      </div>

      <button className="group/button flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-black">

        Manage

        <ArrowRight
          size={14}
          className="transition-transform duration-300 group-hover/button:translate-x-1"
        />

      </button>

    </div>

    <style>{`
      @keyframes premiumPulse{
        0%{
          transform:scale(1);
          opacity:.8;
          box-shadow:0 0 0 0 rgba(212,175,55,.6);
        }
        70%{
          transform:scale(2.8);
          opacity:0;
          box-shadow:0 0 0 10px rgba(212,175,55,0);
        }
        100%{
          transform:scale(2.8);
          opacity:0;
        }
      }
    `}</style>

  </div>

</div>
           
               
                

            </div>

            

        </div>
        
      </div>
    </>
  );
}
