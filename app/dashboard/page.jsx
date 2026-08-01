"use client"
import {
  BadgeCheck,
  Building2,
  School,
  ReceiptText,
  Bookmark,
  Crown,
  ClipboardList,
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  ChartNoAxesColumn,
  Blocks,
  CheckCheck,
  CreditCard,
  Briefcase,
  ShieldCheck,
  Brain,
  LineStyle,
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
  Target,
  KeyRound,
  Settings,
  History,
  LayoutTemplate,
  Plus,
  House,
  Archive,
  Zap,
  TextInitial,
  MoveRight,
  CornerDownRight,
} from "lucide-react";
import { Suspense,lazy } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Image from "next/image";
import { useState } from "react";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { Globe } from "@/components/ui/globe";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { NotebookText } from "lucide-react";
import AssessmentStatusList from "@/components/AssessmentStatusList.jsx";
const Overview = lazy(()=>import("./_components/Overview.jsx"));
const RecentActivity = lazy(()=>import("./_components/RecentActivity.jsx"));
const QuickActions = lazy(()=>import("./_components/QuickActions.jsx"));
const Workflowx = lazy(()=>import("./_components/Workflow.jsx"));
const Templates = lazy(()=>import("./_components/Templates.jsx"));
const Published = lazy(()=>import("./_components/Published.jsx"));
const Components = lazy(()=>import("./_components/Components.jsx"));
const TeamManagement = lazy(()=>import("./_components/TeamManagement.jsx"));
const SavedQuestions = lazy(()=>import("./_components/SavedQuestions.jsx"));
const CodingChallenges = lazy(()=>import("./_components/CodingChallenges.jsx"));
const Subscriptions = lazy(()=>import("./_components/Subscriptions.jsx"));
const BillingHistory = lazy(()=>import("./_components/BillingHistory.jsx"));
const Usage = lazy(()=>import("./_components/Usage.jsx"));
const SettingsScreen = lazy(()=>import("./_components/Settings.jsx"));
import Loader from "./_components/Loading.jsx";


export default function Dashboard() {
  // overview
  // recent-activity 
  // quick-actions
  // workflow
  //template
  //published
  //components
  // tmanagement
  //saved-questions
  //coding-challenges
  //subscriptions
  //billing-history
  //usage
  //settings
  const [visibleView, setVisibleView] = useState("overview");
  return (
    <>
      <div className="bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)]  bg-[#fafafa] bg-size-[auto,22px_22px] h-screen">
        {/* Header */}
        <div className="px-5 py-4 bg-white border-b h-[7%] flex items-center justify-between">
          <div>
            <span className="text-[16px] border-black px-2 py-1  rounded-sm font-semibold">
              AX
            </span>
            &nbsp;&nbsp;&nbsp;{" "}
            <span className="text-[16px] text-gray-300">/</span>
            &nbsp;&nbsp;&nbsp;
            <span>Organization</span> &nbsp;&nbsp;&nbsp;{" "}
            <span className="text-[16px] text-gray-300">/</span>{" "}
            &nbsp;&nbsp;&nbsp; <span className="">Overview</span>{" "}
            &nbsp;&nbsp;&nbsp;
          </div>
        

          <div className="flex items-center gap-3">
             

            <RainbowButton size="sm" variant="outline">
              <LineStyle />
            </RainbowButton>
          </div>
        </div>

        <div className="flex h-[93%] ">
          <div className="bg-[#fcfcfc] overflow-y-scroll scrollbar-thumb-accent  scrollbar-thin  border-r w-[15%] px-2.5 py-1.5 flex flex-col items-start">
            <span className="text-[13px] my-2 ">Getting Started</span>

            <button onClick={()=>setVisibleView("overview")} className={`text-[15.5px] ${visibleView == "overview"?"border-l-2":null} ${visibleView == "overview"?"text-black":"text-gray-500"} ${visibleView == "overview"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200 w-full text-black flex gap-1 items-center`}>
              <House strokeWidth={2} size={20} />
              Overview
            </button>

            <button onClick={()=>setVisibleView("recent-activity")} className={`text-[15.5px] ${visibleView == "recent-activity"?"border-l-2":null} ${visibleView == "recent-activity"?"text-black":"text-gray-500"} ${visibleView == "recent-activity"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1 hover:bg-gray-200  hover:cursor-pointer  w-full text-black flex gap-1 items-center`}>
              <History strokeWidth={2} size={20} />
              Recent Activity
            </button>
            <button onClick={()=>setVisibleView("quick-actions")} className={`text-[15.5px] ${visibleView == "quick-actions"?"border-l-2":null} ${visibleView == "quick-actions"?"text-black":"text-gray-500"} ${visibleView == "quick-actions"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1 hover:bg-gray-200  hover:cursor-pointer  w-full text-black flex gap-1 items-center`}>
              <Zap strokeWidth={2} size={20} />
              Quick Actions
            </button>

            <span className="text-[13px] mb-2 mt-5 ">Manage</span>

            
           
              <button onClick={()=>setVisibleView("workflow")} className={`text-[15.5px] ${visibleView == "workflow"?"border-l-2":null} ${visibleView == "workflow"?"text-black":"text-gray-500"} ${visibleView == "workflow"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200  w-full text-black flex gap-1 items-center`}>
                <Workflow strokeWidth={2} size={20} />
                Workflow
              </button>     

      
              <button onClick={()=>setVisibleView("template")} className={`text-[15.5px] ${visibleView == "template"?"border-l-2":null} ${visibleView == "template"?"text-black":"text-gray-500"} ${visibleView == "template"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200  w-full text-black flex gap-1 items-center`}>
                <LayoutTemplate strokeWidth={2} size={20} />
                Template
              </button>
           
      
              <button onClick={()=>setVisibleView("published")} className={`text-[15.5px] ${visibleView == "published"?"border-l-2":null} ${visibleView == "published"?"text-black":"text-gray-500"} ${visibleView == "published"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200  w-full text-black flex gap-1 items-center`}>
                <BadgeCheck strokeWidth={2} size={20} />
                Published
              </button>
        

          
              <button onClick={()=>setVisibleView("components")} className={`text-[15.5px] ${visibleView == "components"?"border-l-2":null} ${visibleView == "components"?"text-black":"text-gray-500"} ${visibleView == "components"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200  w-full text-black flex gap-1 items-center`}>
                <Blocks strokeWidth={2} size={20} />
                Components
              </button>
          

         
              <button onClick={()=>setVisibleView("team-management")} className={`text-[15.5px] ${visibleView == "team-management"?"border-l-2":null} ${visibleView == "team-management"?"text-black":"text-gray-500"} ${visibleView == "team-management"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200  w-full text-black flex gap-1 items-center`}>
                <Users strokeWidth={2} size={20} />
                Team Management
              </button>

             

            <span className="text-[13px] mb-2 mt-5 ">Saved</span>

           
              <button onClick={()=>setVisibleView("saved-questions")} className={`text-[15.5px] ${visibleView == "saved-questions"?"border-l-2":null} ${visibleView == "saved-questions"?"text-black":"text-gray-500"} ${visibleView == "saved-questions"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200  w-full text-black flex gap-1 items-center`}>
                <Bookmark strokeWidth={2} size={20} />
                Saved Questions
              </button>
            

       
              <button onClick={()=>setVisibleView("coding-challenges")} className={`text-[15.5px] ${visibleView == "coding-challenges"?"border-l-2":null} ${visibleView == "coding-challenges"?"text-black":"text-gray-500"} ${visibleView == "coding-challenges"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200  w-full text-black flex gap-1 items-center`}>
                <Code2 strokeWidth={2} size={20} />
                Coding Challenges
              </button>
           

            <span className="text-[13px] mb-2 mt-5 ">Billing</span>

      
              <button onClick={()=>setVisibleView("subscriptions")} className={`text-[15.5px] ${visibleView == "subscriptions"?"border-l-2":null} ${visibleView == "subscriptions"?"text-black":"text-gray-500"} ${visibleView == "subscriptions"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200  w-full text-black flex gap-1 items-center`}>
                <BadgeDollarSign strokeWidth={2} size={20} />
                Subscriptions
              </button>
        

        
              <button onClick={()=>setVisibleView("billing-history")} className={`text-[15.5px] ${visibleView == "billing-history"?"border-l-2":null} ${visibleView == "billing-history"?"text-black":"text-gray-500"} ${visibleView == "billing-history"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200  w-full text-black flex gap-1 items-center`}>
                <ReceiptText strokeWidth={2} size={20} />
                Billing History
              </button>
            

           
              <button onClick={()=>setVisibleView("usage")} className={`text-[15.5px] ${visibleView == "usage"?"border-l-2":null} ${visibleView == "usage"?"text-black":"text-gray-500"} ${visibleView == "usage"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200  w-full text-black flex gap-1 items-center`}>
                <ChartNoAxesColumn strokeWidth={2} size={20} />
                Usage
              </button>
         

            <span className="text-[13px] mb-2 mt-5 ">Settings</span>

        
              <button onClick={()=>setVisibleView("settings")} className={`text-[15.5px] ${visibleView == "settings"?"border-l-2":null} ${visibleView == "settings"?"text-black":"text-gray-500"} ${visibleView == "settings"?"bg-gray-200":null} border-[gray] rounded px-1.5 text-left py-1.5 mb-1  hover:cursor-pointer hover:bg-gray-200  w-full text-black flex gap-1 items-center`}>
                <Settings strokeWidth={2} size={20} />
                Settings
              </button>
      
          </div>

          {
            visibleView == "overview"?<Suspense fallback={<Loader/>}><Overview/></Suspense>:null
          }

          {
            visibleView == "recent-activity"?<Suspense fallback={<Loader/>}><RecentActivity/></Suspense>:null
          }

          {
            visibleView == "quick-actions"?<Suspense fallback={<Loader/>}><QuickActions/></Suspense>:null
          }

          {
            visibleView == "workflow"?<Suspense fallback={<Loader/>}><Workflowx/></Suspense>:null
          }

          {
            visibleView == "template"?<Suspense fallback={<Loader/>}><Templates/></Suspense>:null
          }

          {
            visibleView == "published"?<Suspense fallback={<Loader/>}><Published/></Suspense>:null
          }

          {
            visibleView == "team-management"?<Suspense fallback={<Loader/>}><TeamManagement/></Suspense>:null
          }

          {
            visibleView == "components"?<Suspense fallback={<Loader/>}><Components/></Suspense>:null
          }

          {
            visibleView == "saved-questions"?<Suspense fallback={<Loader/>}><SavedQuestions/></Suspense>:null
          }

          {
            visibleView == "coding-challenges"?<Suspense fallback={<Loader/>}><CodingChallenges/></Suspense>:null
          }

          {
            visibleView == "subscriptions"?<Suspense fallback={<Loader/>}><Subscriptions/></Suspense>:null
          }

          {
            visibleView == "billing-history"?<Suspense fallback={<Loader/>}><BillingHistory/></Suspense>:null
          }

          {
            visibleView == "usage"?<Suspense fallback={<Loader/>}><Usage/></Suspense>:null
          }

          {
            visibleView == "settings"?<Suspense fallback={<Loader/>}><SettingsScreen/></Suspense>:null
          }

        </div>
      </div>
    </>
  );
}
