import {
  BadgeCheck,
  Building2,
  School,
  Brain,
  ShieldCheck,
  Sparkles,
  Workflow,
  GraduationCap,
  ChevronDown,
  Boxes,
  Plus,
  Check,
  TextInitial,
  MoveRight,
} from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { Globe } from "@/components/ui/globe";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { NotebookText } from "lucide-react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

export default function PricingPage() {
  return (
    <>
    <Header/>
      <div className="bg-[#f2f2f2]  bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)]  bg-size-[auto,22px_22px]  top-0  xl:px-48 items-center justify-between px-3.5 py-6  border-gray-200/60 border-b shadow-[5px] flex flex-col">
        
          <div className="text-foreground flex flex-col  items-center justify-center p-8">
            <h1 className="text-center text-4xl font-semibold tracking-tight md:text-5xl leading-15">
              Simple, Transparent Pricing <br /> for every{" "}
              <DiaTextReveal
                repeat
                repeatDelay={1.2}
                text={[
                  "team.",
                  "startup.",
                  "business.",
                  "organization.",
                  "enterprise.",
                  "company.",
                ]}
              />
            </h1>
            <p className="text-center text-[19px] mt-5 leading-7">
              Transparent pricing with powerful assessment tools, built to
              support teams at every stage of growth.
            </p>
          </div>

           <div className="flex gap-5 justify-between">

          

            <div className="w-[33%] rounded-3xl border border-neutral-200 bg-linear-to-b from-neutral-50 via-white to-neutral-100 p-3 shadow-sm">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <StripedPattern color="#d4d4d4" width={6} height={6} />

                    <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[90px]" />

                    <div className="relative z-10 flex h-full flex-col p-8">

                    {/* Badge */}
                    <div className="flex justify-between items-center">
                        <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold tracking-wider text-blue-700">
                        STARTER
                        </span>

                        <span className="text-sm font-medium text-neutral-500">
                        Free Trial
                        </span>
                    </div>

                    {/* Plan */}
                    <div className="mt-8">
                        <h2 className="text-4xl font-bold text-neutral-900">
                        Free Trial
                        </h2>

                        <p className="mt-3 text-neutral-500 leading-7">
                        Everything you need to start creating technical assessments and evaluate candidates for free.
                        </p>
                    </div>

                    {/* Price */}
                    <div className="mt-5 flex items-end gap-2">
                        <h1 className="text-6xl font-black tracking-tight">
                        ₹0
                        </h1>

                        <span className="mb-2 text-neutral-500">
                        /month
                        </span>
                    </div>

                    <button className="mt-5 w-full rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition hover:cursor-pointer hover:bg-blue-600">
                        Start Free Trial
                    </button>

                    <div className="my-3 h-px bg-neutral-200" />

                    {/* Features */}

                    <div className="space-y-5 flex-1">

                        {[
                        "1 active evaluation workflow.",
                        "Up to 25 Participants.",
                        "Coding Assessments.",
                        "Live Coding Room.",
                        "System Design Room.",
                        "Data Collection Forms.",
                        "Basic Candidate Reports.",
                        "Question Library Access.",
                        "Email support",
                        ].map((feature) => (
                        <div
                            key={feature}
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                            <Check size={15} className="text-blue-600" />
                            </div>

                            <span className="text-[15px] text-neutral-700">
                            {feature}
                            </span>
                        </div>
                        ))}

                    </div>

                    <p className="mt-8 text-center text-xs text-neutral-400">
                        No hidden fees • Cancel anytime
                    </p>

                    </div>
                </div>
            </div>


             <div className="w-[33%] rounded-3xl border border-neutral-200 bg-linear-to-b from-neutral-50 via-white to-neutral-100 p-3 shadow-sm">
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <StripedPattern color="#d4d4d4" width={6} height={6} />

                    <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[90px]" />

                    <div className="relative z-10 flex h-full flex-col p-8">

                    {/* Badge */}
                    <div className="flex justify-between items-center">
                        <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold tracking-wider text-blue-700">
                        MOST POPULAR
                        </span>

                        <span className="text-sm font-medium text-neutral-500">
                        Professional
                        </span>
                    </div>

                    {/* Plan */}
                    <div className="mt-8">
                        <h2 className="text-4xl font-bold text-neutral-900">
                            Pro
                        </h2>

                        <p className="mt-3 text-neutral-500 leading-7">
                        Everything you need to automate technical evaluations and collaborate with your team.
                        </p>
                    </div>

                    {/* Price */}
                    <div className="mt-5 flex items-end gap-2">
                        <h1 className="text-6xl font-black tracking-tight">
                        ₹2499
                        </h1>

                        <span className="mb-2 text-neutral-500">
                        /month
                        </span>
                    </div>

                    <button className="mt-5 w-full rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition hover:cursor-pointer hover:bg-blue-600">
                        Choose Plan
                    </button>

                    <div className="my-3 h-px bg-neutral-200" />

                    {/* Features */}

                    <div className="space-y-5 flex-1">

                        {[
                            "25 active evaluation workflow.",
                            "Up to 1000 Participants.",
                            "Advanced AI evaluations.",
                            "Advanced team management.",
                            "SSO authentication.",
                            "API & ATS integrations.",
                            "Custom branding.",
                            "Dedicated success manager.",
                            "24/7 priority support.",
                            ].map((feature) => (
                        <div
                            key={feature}
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                            <Check size={15} className="text-blue-600" />
                            </div>

                            <span className="text-[15px] text-neutral-700">
                            {feature}
                            </span>
                        </div>
                        ))}

                    </div>

                    <p className="mt-8 text-center text-xs text-neutral-400">
                        No hidden fees • Cancel anytime
                    </p>

                    </div>
                </div>
            </div>

             <div className="w-[33%] rounded-3xl border border-neutral-200 bg-linear-to-b from-neutral-50 via-white to-neutral-100 p-3 shadow-sm">
                
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                    <StripedPattern color="#d4d4d4" width={6} height={6} />

                    <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/15 blur-[90px]" />

                    <div className="relative z-10 flex h-full flex-col p-8">

                    {/* Badge */}
                    <div className="flex justify-between items-center">
                        <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold tracking-wider text-blue-700">
                        ENTERPRISE
                        </span>

                        <span className="text-sm font-medium text-neutral-500">
                        Industry Grade
                        </span>
                    </div>

                    {/* Plan */}
                    <div className="mt-8">
                        <h2 className="text-4xl font-bold text-neutral-900">
                        Enterprise
                        </h2>

                        <p className="mt-3 text-neutral-500 leading-7">
                            Everything you need to manage large-scale evaluations with enterprise-grade security.
                        </p>
                    </div>

                    {/* Price */}
                    <div className="mt-5 flex items-end gap-2">
                        <h1 className="text-6xl font-black tracking-tight">
                        ₹9999
                        </h1>

                        <span className="mb-2 text-neutral-500">
                        /month
                        </span>
                    </div>

                    <button className="mt-5 w-full rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition hover:cursor-pointer hover:bg-blue-600">
                        Contact Sales
                    </button>

                    <div className="my-3 h-px bg-neutral-200" />

                    {/* Features */}

                    <div className="space-y-5 flex-1">

                        {[
                            "Unlimited workflows.",
                            "Unlimited participants.",
                            "Unlimited AI evaluations.",
                            "Advanced team management.",
                            "Role-based access control.",
                            "SSO authentication.",
                            "API & ATS integrations.",
                            "Custom branding.",
                            "24/7 priority support.",
                            ].map((feature) => (
                        <div
                            key={feature}
                            className="flex items-center gap-3"
                        >
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                            <Check size={15} className="text-blue-600" />
                            </div>

                            <span className="text-[15px] text-neutral-700">
                            {feature}
                            </span>
                        </div>
                        ))}

                    </div>

                    <p className="mt-8 text-center text-xs text-neutral-400">
                        No hidden fees • Cancel anytime
                    </p>

                    </div>
                </div>
            </div>



           



          


         </div>

                <div className="font-normal text-[11px] text-gray-400 mt-10">
            |⎯⎯⎯⎯⎯⎯⎯⎯ WE OFFER
            ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
            TO YOU
          </div>
     

              <div className="rounded-xl flex flex-row gap-10 h-[50%] border-2 mt-8 p-3">

               

                <div className="relative  transition-all ease-in-out hover:scale-[1.01] hover:cursor-pointer flex h-full  items-center justify-center overflow-hidden rounded-md border bg-white  shadow-sm">
                  <StripedPattern width={6} height={6} color="#d4d4d4" />
              
                  <div className="z-10 p-3 w-full h-full">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10  items-center justify-center rounded-md bg-black ring-3 ring-gray-300">
                        <ShieldCheck
                          color="white"
                          size={27}
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-[18px] text-black">
                        Transparent Pricing
                      </p>
                    </div>
                    <div className=" mt-2  flex flex-col ">
                      <p className="text-black/50 my-1">
                       No hidden charges—just clear, predictable pricing for every plan.
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

                <div className="relative  transition-all ease-in-out hover:scale-[1.01] hover:cursor-pointer flex h-full  items-center justify-center overflow-hidden rounded-md border bg-white  shadow-sm">
                  <StripedPattern width={6} height={6} color="#d4d4d4" />
              
                  <div className="z-10 p-3 w-full h-full">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10  items-center justify-center rounded-md bg-black ring-3 ring-gray-300">
                        <ShieldCheck
                          color="white"
                          size={27}
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-[18px] text-black">
                        Cancel Anytime
                      </p>
                    </div>
                    <div className=" mt-2  flex flex-col ">
                      <p className="text-black/50 my-1">
                       Change or cancel your subscription whenever your needs evolve.
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

                <div className="relative  transition-all ease-in-out hover:scale-[1.01] hover:cursor-pointer flex h-full  items-center justify-center overflow-hidden rounded-md border bg-white  shadow-sm">
                  <StripedPattern width={6} height={6} color="#d4d4d4" />
              
                  <div className="z-10 p-3 w-full h-full">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10  items-center justify-center rounded-md bg-black ring-3 ring-gray-300">
                        <ShieldCheck
                          color="white"
                          size={27}
                          strokeWidth={1.5}
                        />
                      </div>
                      <p className="text-[18px] text-black">
                        Enterprise Security
                      </p>
                    </div>
                    <div className=" mt-2  flex flex-col ">
                      <p className="text-black/50 my-1">
                       Your data is protected with trusted enterprise-grade security.
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

          <Footer/>

        
      
    </>
  );
}
