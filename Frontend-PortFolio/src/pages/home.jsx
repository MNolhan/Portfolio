import Moi from '../assets/PhotoPortFolio.png';

export default function HomeScreen() {
  return (
    <main className="flex-1 grid place-items-center overflow-hidden -translate-y-6">
      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-14">
 
          <div className="w-full md:max-w-xl">
            <p className="text-[#D9D9D9] text-base">
              Hey, I'm <span className="text-[#FF4438] font-bold">Nolhan</span>
            </p>

            <h2 className="mt-2 text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
              <span className="text-[#D9D9D9]">I'm a </span>
              <span className="text-[#FF4438]">Developper</span>
            </h2>

            <p className="mt-5 text-[#BFBFBF] text-sm md:text-base leading-relaxed max-w-lg">
              Full-stack orienté JavaScript & PHP. <br />
              Je crée des projets modernes, rapides et fiables - de la conception à la publication,
              avec une attention particulière à la qualité du code, à la performance et à l'expérience utilisateur.
            </p>

            <div className="mt-9 flex items-center gap-6">
              <a
                href="#projects"
                className="px-10 py-3 rounded-xl text-sm font-semibold border border-[#FF4438]/70 bg-[#2a1a1a]
                           transition-all duration-200 ease-out transform-gpu hover:scale-[1.03] active:scale-[0.98]"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="px-10 py-3 rounded-xl text-sm font-semibold text-[#D9D9D9] border border-[#2f2f2f] bg-[#1d1d1d]
                           transition-all duration-200 ease-out transform-gpu hover:scale-[1.03] active:scale-[0.98] hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="w-full md:w-[420px] flex justify-center md:justify-end">
            <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border border-[#2a2a2a]">
              <img src={Moi} alt="Nolhan" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
