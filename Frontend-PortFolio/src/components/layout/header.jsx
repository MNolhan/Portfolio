export default function Header() {
  return (
    <header className="bg-[#151515] text-white border-b border-[#1b1b1b] font-jersey">
      <div className="mx-auto w-full max-w-6xl px-6 py-6 flex items-center justify-between">

        <h1 className="text-3xl font-bold tracking-wide select-none">
          <span className="text-[#FF4438]">Nolhan</span>
          <span className="text-[#D9D9D9]">Dev</span>
        </h1>

        <div className="flex items-center gap-8">
          
            <nav className="hidden md:flex items-center gap-10 text-[#D9D9D9]">
                <a
                    href="#presentation"
                    className="
                    text-base tracking-wide
                    transition-all duration-200 ease-out
                    hover:text-white
                    transform-gpu hover:scale-[1.03] active:scale-[0.98]
                    ">
                    Présentation
                </a>

                <a
                    href="#service"
                    className="
                    text-base tracking-wide
                    transition-all duration-200 ease-out
                    hover:text-white
                    transform-gpu hover:scale-[1.03] active:scale-[0.98]
                    ">
                    Service
                </a>

                <a
                    href="#projects"
                    className="
                    text-base tracking-wide
                    transition-all duration-200 ease-out
                    hover:text-white
                    transform-gpu hover:scale-[1.03] active:scale-[0.98]
                    ">
                    Projects
                </a>

                <a
                    href="#"
                    className="
                    text-base tracking-wide
                    transition-all duration-200 ease-out
                    hover:text-white
                    transform-gpu hover:scale-[1.03] active:scale-[0.98]
                    ">
                    Login
                </a>
            </nav>

            <button
                className="
                    px-8 py-3 rounded-xl text-base text-white
                    border border-[#FF4438]/70 bg-[#2a1a1a]
                    hover:bg-[#331e1e]
                    transition-all duration-200 ease-out
                    transform-gpu will-change-transform
                    hover:scale-[1.04] active:scale-[0.98]
                "
                >
                Sign up
            </button>

        </div>
      </div>
    </header>
  );
}
