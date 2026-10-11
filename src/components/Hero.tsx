export default function Hero() {
  return (<section className="relative min-h-[calc(100svh-80px)] overflow-hidden bg-[#F5EFE7] text-[#30252B]"> <div className="mx-auto flex min-h-[calc(100svh-80px)] max-w-[1440px] flex-col justify-between px-6 py-8 sm:px-10 sm:py-10 lg:px-16">


    <div className="flex items-center justify-between">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#B85C72]">
        Portfolio · 2026
      </p>

      <p className="text-[10px] uppercase tracking-[0.2em] text-[#75656C]">
        Independent Developer
      </p>
    </div>

    <div className="relative grid flex-1 items-center gap-8 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-10">
      <div className="relative z-10">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-[#B85C72]" />
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#B85C72]">
            Thoughtful digital experiences
          </p>
        </div>

        <h1 className="text-[clamp(4rem,10.5vw,9.5rem)] font-medium leading-[0.79] tracking-[-0.085em]">
          Eman
          <br />
          <span className="font-serif font-normal italic text-[#B85C72]">
            Mehmood.
          </span>
        </h1>

        <div className="mt-10 grid max-w-2xl gap-6 border-t border-[#D8C9C8] pt-6 sm:grid-cols-[0.8fr_1.2fr]">
          <p className="text-[11px] font-medium uppercase leading-6 tracking-[0.12em] text-[#75656C]">
            Frontend Developer
            <br />
            React · Next.js · TypeScript
          </p>

          <p className="max-w-md text-sm leading-7 text-[#62545B] sm:text-base">
            I turn ideas into thoughtful web experiences, bringing together
            clean code, considered design, and interactions that feel just
            right.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href="#featured-projects"
            className="group inline-flex items-center gap-5 rounded-full bg-[#30252B] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-[#F5EFE7] transition-all duration-300 hover:bg-[#B85C72] active:bg-[#B85C72] [@media(hover:none)]:bg-[#B85C72]"
          >
            Explore my work
            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          <span className="text-[10px] uppercase tracking-[0.16em] text-[#8B7B81]">
            Available for opportunities
          </span>
        </div>
      </div>

      <div className="relative mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center lg:ml-auto">
        <div className="absolute inset-[8%] rounded-full border border-[#D8B5B7]" />

        <div className="absolute inset-[17%] rounded-full border border-dashed border-[#C99AA3] animate-[spin_45s_linear_infinite] motion-reduce:animate-none" />

        <div className="absolute right-[12%] top-[17%] h-3 w-3 rounded-full bg-[#B85C72]" />

        <div className="relative flex aspect-square w-[70%] items-center justify-center rounded-full bg-[#E6C5C5] animate-[pulse_7s_ease-in-out_infinite] motion-reduce:animate-none">
          <div className="absolute inset-[9%] rounded-full border border-[#B85C72]/40" />

          <div className="absolute h-[72%] w-[38%] rotate-[-35deg] rounded-[50%_50%_45%_45%] bg-[#B85C72] shadow-xl shadow-[#8D4558]/15" />

          <div className="absolute h-[72%] w-[38%] rotate-[35deg] rounded-[50%_50%_45%_45%] bg-[#C97989] mix-blend-multiply" />

          <div className="absolute h-[52%] w-[52%] rounded-full border border-[#F5EFE7]/80" />

          <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#F5EFE7] text-center shadow-sm sm:h-28 sm:w-28">
            <span className="font-serif text-4xl italic text-[#B85C72]">
              E.
            </span>
            <span className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#75656C]">
              Creative code
            </span>
          </div>
        </div>

        <p className="absolute bottom-[8%] left-[1%] text-[9px] uppercase tracking-[0.22em] text-[#8B7B81]">
          Code with intention
        </p>

        <p className="absolute right-[1%] top-[9%] text-[9px] uppercase tracking-[0.22em] text-[#8B7B81] [writing-mode:vertical-rl]">
          Design meets function
        </p>
      </div>
    </div>

    <div className="flex items-end justify-between border-t border-[#D8C9C8] pt-5">
      <p className="text-[9px] uppercase tracking-[0.2em] text-[#8B7B81]">
        Selected work · Personal portfolio
      </p>

      <a
        href="#about"
        className="group flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-[#B85C72]"
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
