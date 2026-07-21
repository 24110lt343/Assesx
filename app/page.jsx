import {
  BadgeCheck,
  Building2,
  School,
  Brain,
  Sparkles,
  Workflow,
  GraduationCap,
  ChevronDown,
  Boxes,
  Plus,
  TextInitial,
  MoveRight,
} from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { StripedPattern } from "@/components/magicui/striped-pattern";

import { Globe } from "@/components/ui/globe";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { NotebookText } from "lucide-react";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function Home() {

  return (
    <>

    <Header/>
      <div className="bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)]  bg-[#fafafa] bg-size-[auto,22px_22px]">
        
        <div className="flex    h-[90vh]   flex-col justify-center items-center ">
          <span className="text-[50px] leading-14.5  font-bold flex justify-center text-center text-[#1e1f24]">
            Hire exceptional engineers <br /> with confidence.
          </span>
          <p className="text-[20px] text-center my-4">
            Assesx hlps organizations screen, interview, assess, and hire top
            engineering talent through <br /> a unified platform built for
            modern technical hiring.
          </p>

          <div className="flex items-center gap-5 mt-3.5 text-[15.5px]">
            <RainbowButton className="border-2 px-5 py-3 bg-black text-white hover:bg-[#004ae0] text-[15.5px] rounded transition-all hover:scale-[1.03] ease-in-out duration-75 hover:cursor-pointer">
              Get Started
            </RainbowButton>
            <button className="border border-gray-300 hover:cursor-pointer hover:bg-gray-300 px-5 py-2 rounded hover:scale-[1.03]">
              See How it Works
            </button>
          </div>

          <div className="flex items-center gap-15 py-10">
            <div className="flex items-center gap-1">
              <BadgeCheck size={26} fill="black" color="white" />
              Live Coding Interviews
            </div>

            <div className="flex items-center gap-1">
              <BadgeCheck size={26} fill="black" color="white" />
              Real Time Assesment{" "}
            </div>

            <div className="flex items-center gap-1">
              <BadgeCheck size={26} fill="black" color="white" />
              Real Time Collaboration
            </div>
            <div className="flex items-center gap-1">
              <BadgeCheck size={26} fill="black" color="white" />
              AI Evaluation
            </div>
          </div>
        </div>
        <div className="px-48 text-[#67676f] mb-5 mt-15">
          <div className="w-full flex items-center gap-3 mb-6 overflow-hidden">
  <span className="shrink-0 text-[13px]  text-gray-400 tracking-wider">
    01
  </span>

  <div className="h-px w-8 shrink-0 bg-gray-300" />

  <span className="shrink-0 text-[13px] tracking-[0.15em] text-gray-400 uppercase">
    Features
  </span>

  <div className="h-px flex-1 min-w-6 bg-gray-300" />

  <span className="hidden sm:inline shrink-0 text-[13px] tracking--widest text-gray-400 uppercase whitespace-nowrap">
    That Assesx Provides
  </span>
</div>

          <div className="py-8">
            <h1 className="text-[30px] text-black">
              Powerful Features, Built for Every Workflow
            </h1>
          </div>

          <div className="bg-[#f6f6f6] py-3 px-3 mb-20 rounded-sm border-2 flex items-center gap-3 justify-between shadow-sm">
            <div className="relative w-full h-50 overflow-hidden rounded-sm border bg-white drop-shadow-md transition-all duration-75 hover:scale-[1.01] hover:cursor-pointer">
              <FlickeringGrid
                className="absolute inset-0 z-0"
                squareSize={4}
                gridGap={6}
                color="black"
                maxOpacity={0.13}
                flickerChance={1}
              />

              {/* Optional white overlay so the grid is subtle */}
              <div className="absolute inset-0  z-1" />

              <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex ring-3 h-12 w-18 items-center justify-center rounded bg-black">
                    <Workflow color="white" size={28} strokeWidth={2} />
                  </div>

                  <span className="text-[17px] text-black">
                    Canvas Based Hiring Workflows
                  </span>
                </div>

                <p className="text-gray-600 text-[15px]">
                  Design every stage of your hiring process on a visual
                  canvas—from applications to final selection.
                </p>
              </div>
            </div>

            <div className="relative w-full h-50 overflow-hidden rounded-sm border bg-white drop-shadow-md transition-all duration-75 hover:scale-[1.01] hover:cursor-pointer">
              {/* <FlickeringGrid
                className="absolute inset-0 z-0"
                squareSize={4}
                gridGap={6}
                color="black"
                maxOpacity={0.13}
                flickerChance={1}
              /> */}

              {/* Optional white overlay so the grid is subtle */}
              <div className="absolute inset-0  z-1" />

              <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex border-2  border-gray-400 h-12 w-12 items-center justify-center ring-3 ring-gray-200 rounded ">
                    <TextInitial color="gray" size={28} strokeWidth={1.5} />
                  </div>

                  <span className="text-[17px] text-black">
                    Custom Form Builder
                  </span>
                </div>

                <p className="text-gray-600 text-[15px]">
                  Create intelligent forms with drag-and-drop, smart logic, and
                  powerful workflows—without code.
                </p>
              </div>
            </div>

            <div className="relative w-full h-50 overflow-hidden rounded-sm border bg-white drop-shadow-md transition-all duration-75 hover:scale-[1.01] hover:cursor-pointer">
              {/* <FlickeringGrid
                className="absolute inset-0 z-0"
                squareSize={4}
                gridGap={6}
                color="black"
                maxOpacity={0.13}
                flickerChance={1}
              /> */}

              {/* Optional white overlay so the grid is subtle */}
              <div className="absolute inset-0  z-1" />

              <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex border-2  border-gray-400 h-12 w-22 items-center justify-center ring-3 ring-gray-200 rounded ">
                    <NotebookText size={28} color="gray" strokeWidth={1.5} />
                  </div>

                  <span className="text-[17px] text-black">
                    Advanced Coding & MCQ Assessments
                  </span>
                </div>

                <p className="text-gray-600 text-[15px]">
                  Create MCQs, coding challenges, and DSA tests with custom test
                  cases and automated evaluation.
                </p>
              </div>
            </div>

            <div className="relative w-full h-50 overflow-hidden rounded-sm border bg-white drop-shadow-md transition-all duration-75 hover:scale-[1.01] hover:cursor-pointer">
              {/* <FlickeringGrid
                className="absolute inset-0 z-0"
                squareSize={4}
                gridGap={6}
                color="black"
                maxOpacity={0.13}
                flickerChance={1}
              /> */}

              {/* Optional white overlay so the grid is subtle */}
              <div className="absolute inset-0  z-1" />

              <div className="relative z-10 flex h-full flex-col justify-center gap-4 px-4 py-4">
                <div className="flex items-center gap-2">
                  <div className="flex border-2  border-gray-400 h-12 w-17 items-center justify-center ring-3 ring-gray-200 rounded ">
                    <Boxes size={28} strokeWidth={1.5} color="gray" />
                  </div>

                  <span className="text-[17px] text-black">
                    Real-Time Coding Workspace
                  </span>
                </div>

                <p className="text-gray-600 text-[15px]">
                  Write, collaborate, and execute code together in real time
                  with support for 10+ programming languages.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center gap-3 mb-6 overflow-hidden">
  <span className="shrink-0 text-[13px]  text-gray-400 tracking-wider">
    02
  </span>

  <div className="h-px w-8 shrink-0 bg-gray-300" />

  <span className="shrink-0 text-[13px]  tracking-[0.15em] text-gray-400 uppercase">
    Target
  </span>

  <div className="h-px flex-1 min-w-6 bg-gray-300" />

  <span className="hidden sm:inline shrink-0 text-[13px] tracking-wide text-gray-400 uppercase whitespace-nowrap">
    Organizations
  </span>
</div>

          <div className="py-8">
            <h1 className="text-[30px] text-black">Who assesx is built for</h1>
          </div>

          <div className="mb-20 flex justify-center items-center   py-2 px-2 gap-3">
            <div className="w-[33%] flex flex-col gap-3 h-120">
              <div className="rounded-xl h-[50%] border-2 bg-gray-50 p-3">
                <div className="relative transition-all ease-in-out hover:scale-[1.01] hover:cursor-pointer flex h-full  items-center justify-center overflow-hidden rounded-md border bg-white  shadow-sm">
                  <StripedPattern width={6} height={6} color="#d4d4d4" />
                  <div className="z-10 p-3 w-full h-full">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-13  items-center justify-center rounded-md bg-black  ring-3">
                        <GraduationCap
                          color="white"
                          size={27}
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-[18px] text-black">
                        Colleges & Placement Cells
                      </p>
                    </div>
                    <div className=" mb-2 mt-2  flex flex-col">
                      <p className="text-black/50">
                        Empower placement cells with secure technical
                        assessments, live coding interviews, and detailed
                        candidate evaluation.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-black text-[15px]">
                          AI Description
                        </span>
                        <RainbowButton
                          variant={"outline"}
                          className="flex items-center gap-2 rounded-sm border-2  px-5 py-3 text-[15.5px] text-white transition-all bg-transparent duration-200 hover:scale-105 hover:bg-[#004ae0]"
                        >
                          <MoveRight className="h-4 w-4" color="black" />
                        </RainbowButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl h-[50%] border-2 bg-gray-50 p-3">
                <div className="relative transition-all ease-in-out hover:scale-[1.01] hover:cursor-pointer flex h-full  items-center justify-center overflow-hidden rounded-md border bg-white  shadow-sm">
                  <StripedPattern width={6} height={6} color="#d4d4d4" />


                  <div className="z-10 p-3 w-full h-full">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-17  items-center justify-center rounded-md bg-black  ring-3">
                        <Building2
                          color="white"
                          size={27}
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-[18px] text-black">
                        Startups & Tech based Companies
                      </p>
                    </div>
                    <div className=" mt-2  flex flex-col gap-3">
                      <p className="text-black/50">
                        Find and hire skilled developers with fast, reliable technical assessments and live coding interviews.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-black text-[15px]">
                          AI Description
                        </span>
                        <RainbowButton
                          variant={"outline"}
                          className="flex items-center gap-2 rounded-sm border-2  px-5 py-3 text-[15.5px] text-white transition-all bg-transparent duration-200 hover:scale-105 hover:bg-[#004ae0]"
                        >
                          <MoveRight className="h-4 w-4" color="black" />
                        </RainbowButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[33%]  h-120 rounded-3xl border border-neutral-200 bg-linear-to-b from-neutral-50 via-white to-neutral-100 p-3 shadow-sm">
              <div className="relative flex h-full overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md  ">
                {/* Background Pattern */}
                <StripedPattern
                  color="#d4d4d4"
                  width={6}
                  height={6}
                  
                />

                {/* Blue Glow */}
                <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[90px]" />

                {/* Decorative circles */}
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-blue-200 bg-blue-100/40 backdrop-blur-xl" />
                <div className="absolute -left-10 bottom-8 h-24 w-24 rounded-full border border-neutral-200 bg-neutral-100/70 backdrop-blur-xl" />

                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-10 text-center">

                  {/* Badge */}
                  <div className="mb-6 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700 mt-4">
                    Developer Platform
                  </div>

                

                  {/* Title */}
                  <h2 className="bg-linear-to-r from-neutral-900 via-neutral-800 to-blue-600 bg-clip-text text-5xl font-black tracking-tight text-transparent">
                    Assesx
                  </h2>

                  {/* Slogan */}
                  <p className="mt-4 text-xl font-medium text-neutral-800">
                    The Future of Technical Hiring.
                  </p>

                  {/* Description */}
                  <p className="mt-5 max-w-sm text-[15px] leading-7 text-neutral-500">
                    Conduct coding assessments, collaborate in real time, and hire exceptional engineers from a single modern platform.
                  </p>

                  {/* CTA */}
                  <button className="mt-10 rounded-md hover:cursor-pointer bg-black px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-103 hover:bg-blue-600">
                    Explore Assesx &nbsp;→
                  </button>
                </div>
              </div>
            </div>

            <div className="w-[33%] flex flex-col  gap-3 h-120">
              <div className="rounded-xl h-[50%] border-2 bg-gray-50 p-3">
                <div className="relative  transition-all ease-in-out hover:scale-[1.01] hover:cursor-pointer flex h-full  items-center justify-center overflow-hidden rounded-md border bg-white  shadow-sm">
                  <StripedPattern width={6} height={6} color="#d4d4d4" />
              
                  <div className="z-10 p-3 w-full h-full">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-15  items-center justify-center rounded-md bg-black  ring-3">
                        <School
                          color="white"
                          size={27}
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-[18px] text-black">
                        Universities & Training Centers
                      </p>
                    </div>
                    <div className=" mt-2  flex flex-col ">
                      <p className="text-black/50">
                       Create interactive coding challenges, track learner progress, and measure technical skills with real-time assessments.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-black text-[15px]">
                          AI Description
                        </span>
                        <RainbowButton
                          variant={"outline"}
                          className="flex items-center gap-2 rounded-sm border-2  px-5 py-3 text-[15.5px] text-white transition-all bg-transparent duration-200 hover:scale-105 hover:bg-[#004ae0]"
                        >
                          <MoveRight className="h-4 w-4" color="black" />
                        </RainbowButton>
                      </div>
                    </div>
                  </div>


                </div>
              </div>


              <div className="rounded-xl h-[50%] border-2 bg-gray-50 p-3">
                <div className="relative transition-all ease-in-out hover:scale-[1.01] hover:cursor-pointer flex h-full  items-center justify-center overflow-hidden rounded-md border bg-white  shadow-sm">
                  <StripedPattern width={6} height={6} color="#d4d4d4" />
              
                  <div className="z-10 p-3 w-full h-full">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-18  items-center justify-center rounded-md bg-black  ring-3">
                        <Brain
                          color="white"
                          size={27}
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-[18px] text-black">
                        Training & Upskilling Organizations
                      </p>
                    </div>
                    <div className=" mt-2  flex flex-col ">
                      <p className="text-black/50">
                       Build engaging learning programs with practical coding exercises, skill assessments, and detailed performance analytics.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-black text-[15px]">
                          AI Description
                        </span>
                        <RainbowButton
                          variant={"outline"}
                          className="flex items-center gap-2 rounded-sm border-2  px-5 py-3 text-[15.5px] text-white transition-all bg-transparent duration-200 hover:scale-105 hover:bg-[#004ae0]"
                        >
                          <MoveRight className="h-4 w-4" color="black" />
                        </RainbowButton>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

            


            </div>
          </div>

          <div className="w-full flex items-center gap-3 mb-6 overflow-hidden">
  <span className="shrink-0 text-[13px]  text-gray-400 tracking-wider">
    03
  </span>

  <div className="h-px w-8 shrink-0 bg-gray-300" />

  <span className="shrink-0 text-[13px] tracking-[0.15em] text-gray-400 uppercase">
    FAQ's
  </span>

  <div className="h-px flex-1 min-w-6 bg-gray-300" />

  <span className="hidden sm:inline shrink-0 text-[13px] tracking-widest text-gray-400 uppercase whitespace-nowrap">
    Common Asked Question!
  </span>
</div>

          <div className="pt-8 ">
            <h1 className="text-[30px] text-black">
              Frequently asked questions
            </h1>
          </div>

          <div className="py-5 select-none ">
            <div className="flex mt-5 flex-col bg-white rounded-tr-sm  text-black rounded-tl-sm border-2 border-gray-300  hover:bg-black/5 transition-all ease-in-out duration-75 hover:cursor-pointer  px-4 py-5   ">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <Plus />
                  How is Assesly different from tools like Google Forms?
                </div>

                <ChevronDown />
              </div>

              <p className="text-[13.5px] text-gray-600 pl-8 text-justify pr-4 mt-1">
                Assesly goes beyond simple data collection. It offers smart
                applicant filtering, multi-user access, reviewer workflows, and
                automated communication — all designed specifically for
                application and vetting processes.
              </p>
            </div>

            <div className="flex  border-2 border-gray-300  border-t-0 px-4 py-5 gap-1.5  items-center">
              <Plus />
              How secure is my data with Assesly?
            </div>

            <div className="flex  border-2 border-gray-300  border-t-0 px-4 py-5 gap-1.5  items-center">
              <Plus />
              Is any technical skill required to use Assesly?
            </div>

            <div className="flex  border-2 border-gray-300  border-t-0 px-4 py-5 gap-1.5  items-center">
              <Plus />
              Can I use Assesly for multiple programs at once?
            </div>

            <div className="flex  border-2 border-gray-300 border-t-0 px-4 py-5 gap-1.5  items-center">
              <Plus />
              Can I collaborate with my team on Assesly?
            </div>

            <div className="flex mb-10 rounded-br-2xl rounded-bl-2xl border-2  border-gray-300  border-t-0 px-4 py-5 gap-1.5  items-center">
              <Plus strokeWidth={1.8} />
              Can I use Assesly for multiple programs at once?
            </div>
          </div>

          <div className="w-full flex items-center gap-3 mb-6 overflow-hidden">
  <span className="shrink-0 text-[13px]  text-gray-400 tracking-wider">
    04
  </span>

  <div className="h-px w-8 shrink-0 bg-gray-300" />

 <span className="hidden sm:inline shrink-0 text-[13px] tracking-widest text-gray-400 uppercase whitespace-nowrap">
    LET's BEGIN
  </span>

  <div className="h-px flex-1 min-w-6 bg-gray-300" />

  <span className="hidden sm:inline shrink-0 text-[13px] tracking-widest text-gray-400 uppercase whitespace-nowrap">
    Signup Now!
  </span>
</div>

          <div className="flex shadow-sm items-center rounded-sm my-15 justify-between border-2 py-10  pl-15">
            <div>
              <h1 className="text-[40px] font-semibold leading-13 mb-4 text-black">
                Get started with <br /> Assesx today
              </h1>
              <p className="text-[16.6px] leading-7">
                Whether you're launching a grant or running a global
                competition, Assesly gives you the control, speed, and tools you
                need.
              </p>

              <button className="border flex items-center gap-2 my-6 px-5 py-2 bg-black text-white hover:bg-[#004ae0] rounded transition-all hover:scale-[1.03] ease-in-out duration-75 hover:cursor-pointer">
                Let's Get Started <MoveRight />
              </button>
            </div>

            <div className="relative flex  size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-5 pt-8 pb-40 md:pb-60">
              <Globe className="-top-15" />
            </div>

            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
}
