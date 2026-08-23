"use client";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { num: "01", label: "FEATURES", href: "#features" },
    { num: "02", label: "DOCS", href: "#docs" },
    { num: "03", label: "PRICING", href: "/pricing" },
    { num: "04", label: "SUPPORT", href: "#support" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-[#fafafa]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <button
            onClick={() => router.push("/")}
            className="text-[18px] font-semibold tracking-tight text-[#1e1f24] hover:opacity-70 transition-opacity"
          >
            ASSESX
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 text-[14px] text-[#67676f]">
            {navItems.map((item, i) => (
              <div key={item.label} className="flex items-center">
                <button
                  onClick={() => item.href.startsWith("/") ? router.push(item.href) : router.push(item.href)}
                  className="group relative px-3 py-1.5 hover:text-[#1e1f24] transition-colors"
                >
                  <span className="text-[12px] text-gray-400 mr-1.5">{item.num}</span>
                  {item.label}
                  <span className="absolute bottom-0 left-3 right-3 h-px bg-[#004ae0] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
                {i < navItems.length - 1 && (
                  <span className="text-gray-200 mx-0.5">/</span>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3 text-[14px]">
            <button
              onClick={() => router.push("/auth/login")}
              className="text-[#67676f] hover:text-[#1e1f24] transition-colors px-2 py-1"
            >
              LOGIN
            </button>
            <button
              onClick={() => router.push("/auth/signup")}
              className="rounded-md bg-black px-4 py-1.5 text-white hover:bg-[#004ae0] hover:scale-[1.02] transition-all duration-150 shadow-sm"
            >
              SIGN UP
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-1.5 text-[#1e1f24] hover:bg-gray-100 rounded-md transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl border-l border-gray-100 flex flex-col">
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="text-[16px] font-semibold text-[#1e1f24]">ASSESX</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer Nav */}
            <nav className="flex-1 px-5 py-6 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setMobileOpen(false);
                    item.href.startsWith("/") ? router.push(item.href) : router.push(item.href);
                  }}
                  className="flex items-center gap-3 px-3 py-3 rounded-lg text-[15px] text-[#1e1f24] hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="text-[12px] text-gray-400 font-medium">{item.num}</span>
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Drawer Footer */}
            <div className="px-5 py-5 border-t border-gray-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  router.push("/auth/login");
                }}
                className="w-full py-2.5 rounded-lg border border-gray-200 text-[14px] font-medium text-[#1e1f24] hover:bg-gray-50 transition-colors"
              >
                LOGIN
              </button>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  router.push("/auth/signup");
                }}
                className="w-full py-2.5 rounded-lg bg-black text-[14px] font-medium text-white hover:bg-[#004ae0] transition-colors"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}