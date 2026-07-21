export default function Header() {
  // Styling area
  const cursorPointer = "hover:cursor-pointer hover:text-black transition-all";
  return (
    <>
      <div className="flex items-center justify-center lg:justify-between py-6 px-3 xl:px-48 text-white text-[13.5px] bg-black ">

        <span className="flex items-center">
          COPYRIGHT&nbsp;
          <svg
          
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            width="25"
            height="25"
            fill="none"
          >
            <circle
              cx="100"
              cy="100"
              r="88"
              stroke="#fff"
              strokeWidth="8"
            />

            <circle
              cx="100"
              cy="100"
              r="58"
              stroke="#fff"
              strokeWidth="8"
            />

            <path
              d="
      M120 70
      H88
      C75 70 66 79 66 92
      V108
      C66 121 75 130 88 130
      H120
      V114
      H93
      C88 114 84 110 84 105
      V95
      C84 90 88 86 93 86
      H120
      Z
    "
              fill="#fff"
              rx="6"
            />
          </svg>
          &nbsp;
          TERRORLABS
        </span>

        
            <p className="hidden md:block">DESIGNED AND BUILT BY 
            THE AWESOME PEOPLE OF TERRORLABS ‪‪❤︎‬‪</p>
       


        

      </div>
    </>
  );
}
