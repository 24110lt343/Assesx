export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] sm:text-[13px] tracking-wide">
          
          {/* Left: Brand */}
          <div className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors">
            <span>COPYRIGHT</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              width="20"
              height="20"
              fill="none"
              className="opacity-80"
            >
              <circle cx="100" cy="100" r="88" stroke="currentColor" strokeWidth="8" />
              <circle cx="100" cy="100" r="58" stroke="currentColor" strokeWidth="8" />
              <path
                d="M120 70 H88 C75 70 66 79 66 92 V108 C66 121 75 130 88 130 H120 V114 H93 C88 114 84 110 84 105 V95 C84 90 88 86 93 86 H120 Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-medium">TERRORLABS</span>
          </div>

          {/* Right: Credit */}
          <p className="text-gray-400 text-center sm:text-right">
            DESIGNED AND BUILT BY THE AWESOME PEOPLE OF TERRORLABS
            <span className="inline-block ml-1 text-[#004ae0]">♥</span>
          </p>
          
        </div>
      </div>
    </footer>
  );
}