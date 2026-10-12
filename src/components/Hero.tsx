
export default function Hero() {
  return (
    <section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden bg-[#F7F1EB] text-[#30262B]">
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[#E8C7CE]/50 blur-[100px] animate-soft-pulse" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#842D4B]/10 blur-[100px]" />

      <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-[1440px] flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-16">
        <div className="flex items-center justify-between animate-fade-up">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#842D4B]">
            Portfolio · 2026
          </p>

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#796C72]">
            Independent Developer
          </p>
        </div>

        <div className="relative grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-10">
          <div className="relative z-10 animate-fade-up">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#842D4B]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#842D4B]">
                Thoughtful digital experiences
              </p>
            </div>

            <h1 className="text-[clamp(4rem,10.5vw,9.5rem)] font-medium leading-[0.79] tracking-[-0.085em]">
              Eman
              <br />
              <span className="bg-gradient-to-r from-[#842D4B] via-[#A64D68] to-[#C77B91] bg-clip-text font-serif font-normal italic text-transparent">
                Mehmood.
              </span>
            </h1>

            <div className="mt-10 grid max-w-2xl gap-6 border-t border-[#D8C7C6] pt-6 sm:grid-cols-[0.8fr_1.2fr]">
              <p className="text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-[#796C72]">
                Frontend Developer
                <br />
                React · Next.js · TypeScript
              </p>

              <p className="max-w-md text-sm leading-7 text-[#62545B] sm:text-base">
                I turn ideas into thoughtful web experiences, bringing
                together clean code, considered design, and interactions
                that feel just right.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#featured-projects"
                className="group inline-flex items-center gap-5 rounded-full bg-[#842D4B] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(132,45,75,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#642038] hover:shadow-[0_16px_36px_rgba(132,45,75,0.32)] active:translate-y-0"
              >
                Explore my work
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#796C72]">
                <span className="h-2 w-2 rounded-full bg-[#842D4B] shadow-[0_0_12px_rgba(132,45,75,0.45)]" />
                Available for opportunities
              </span>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center lg:ml-auto animate-fade-up [animation-delay:200ms]">
            <div className="absolute inset-[8%] rounded-full border border-[#D8B5B7]/80" />

            <div className="absolute inset-[17%] rounded-full border border-dashed border-[#B77A8A]/70 animate-[spin_55s_linear_infinite] motion-reduce:animate-none" />

            <div className="absolute right-[12%] top-[17%] h-3 w-3 rounded-full bg-[#842D4B] shadow-[0_0_20px_rgba(132,45,75,0.55)]" />

            <div className="absolute bottom-[20%] left-[13%] h-2 w-2 rounded-full bg-[#C77B91] animate-soft-pulse" />

            <div className="relative flex aspect-square w-[70%] items-center justify-center rounded-full bg-gradient-to-br from-[#F0DCE0] via-[#E8C7CE] to-[#D5A5B1] shadow-[0_25px_70px_rgba(132,45,75,0.16)] animate-float">
              <div className="absolute inset-[9%] rounded-full border border-white/60" />

              <div className="absolute h-[72%] w-[38%] rotate-[-35deg] rounded-[50%_50%_45%_45%] bg-gradient-to-b from-[#A64D68] to-[#642038] shadow-[12px_18px_35px_rgba(100,32,56,0.2)]" />

              <div className="absolute h-[72%] w-[38%] rotate-[35deg] rounded-[50%_50%_45%_45%] bg-gradient-to-b from-[#D08A9D] to-[#A64D68] mix-blend-multiply" />

              <div className="absolute h-[52%] w-[52%] rounded-full border border-white/80" />

              <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/80 bg-[#FFF9F5]/90 text-center shadow-[0_12px_35px_rgba(72,36,51,0.14)] backdrop-blur-sm sm:h-28 sm:w-28">
                <span className="font-serif text-4xl italic text-[#842D4B]">
                  E.
                </span>
                <span className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#796C72]">
                  Creative code
                </span>
              </div>
            </div>

            <div className="absolute bottom-[8%] left-[1%] rounded-full border border-[#E5D2D2] bg-[#FFF9F5]/80 px-4 py-2 text-[9px] uppercase tracking-[0.16em] text-[#796C72] shadow-[0_8px_25px_rgba(48,38,43,0.05)] backdrop-blur-sm">
              Code with intention
            </div>

            <p className="absolute right-[1%] top-[9%] text-[9px] uppercase tracking-[0.22em] text-[#796C72] [writing-mode:vertical-rl]">
              Design meets function
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between border-t border-[#D8C7C6] pt-5">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#796C72]">
            Selected work · Personal portfolio
          </p>

          <a
            href="#about"
            className="group flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#30262B] transition-colors hover:text-[#842D4B]"
          >
            Scroll to discover
            <span className="transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}