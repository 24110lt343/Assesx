"use client"
import { LineStyle } from "lucide-react"
import { useRouter } from "next/navigation";

export default function Header(){

  const router = useRouter();
  // Styling area
   
  const cursorPointer = "hover:cursor-pointer hover:text-black transition-all"
  return<>
    <div className="flex z-20 sticky bg-[#f2f2f2]  bg-[radial-gradient(ellipse_0%_0%_at_50%_30%,rgba(0,74,224,0.12),transparent_70%),radial-gradient(rgba(0,74,224,0.18)_1.2px,transparent_1px)]  bg-size-[auto,22px_22px]  top-0  xl:px-48 items-center justify-between px-3.5 py-6  border-gray-200/60 border-b shadow-[5px] " >

       
          <button onClick={()=>router.push("/")}  className="text-[19.3px] font-semibold hover:cursor-pointer ">ASSESX</button >


        <div className=" hidden lg:flex items-center gap-6  text-[15.1px] -mr-2 text-[#67676f]">
            
              <button className={cursorPointer}>
                <span className="text-[14px]"> 01</span>&nbsp;
                 FEATURES</button> <span className="text-gray-300">/</span>
              <button className={cursorPointer}>
                <span className="text-[14px]"> 02</span>&nbsp;
                 DOCS</button> <span className="text-gray-300">/</span>
              <button onClick={()=>router.push("/pricing")} className={cursorPointer}>
                <span className="text-[14px]"> 03</span>&nbsp;
                 PRICING</button> <span className="text-gray-300">/</span>
              <button className={cursorPointer}>
                <span className="text-[14px]"> 04</span>&nbsp;
                 SUPPORT</button>
            
        </div>

        <div className="flex gap-6 text-[14.5px] items-center">
          <button onClick={()=>router.push("/auth/login")} className={`text-[#67676f] ${cursorPointer}  `} >LOGIN</button>
          <button onClick={()=>router.push("/auth/signup")} className="border px-4 py-1 rounded-[3px] hover:cursor-pointer hover:scale-[1.02] duration-75 hover:bg-[#004ae0] hover:shadow-sm  bg-black text-white">SIGN UP</button>

          <LineStyle className="lg:hidden"/>
        </div>

    </div>
  </>
}