export default function VelouraProjectPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#21191F] text-[#F7F1EB]">
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-[#842D4B]/20 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <a
          href="/"
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-[#C4B4BC] transition-colors duration-300 hover:text-[#E8C7CE]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to portfolio
        </a>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div className="animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#C77B91] shadow-[0_0_14px_#C77B91]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D69AAA]">
                Wedding & Event Studio
              </p>
            </div>

            <h1 className="mt-7 text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.85] tracking-[-0.08em]">
              Veloura
              <span className="bg-gradient-to-r from-[#E8C7CE] to-[#842D4B] bg-clip-text font-serif font-normal italic text-transparent">
                .
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#C4B4BC] sm:text-lg">
              A luxury event studio website designed to present wedding
              celebrations and special occasions through an elegant,
              editorial-inspired digital experience.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_15px_45px_rgba(0,0,0,0.15)] sm:p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#D69AAA]">
                  Project type
                </p>
                <p className="mt-3 text-sm font-medium text-[#F7F1EB]">
                  Event studio website
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#D69AAA]">
                  Focus
                </p>
                <p className="mt-3 text-sm font-medium text-[#F7F1EB]">
                  UI & frontend
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
              {["React", "React Router", "CSS"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.1em] text-[#E8C7CE] transition-colors duration-300 hover:border-[#C77B91]/50 hover:bg-[#842D4B]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="group relative mt-14 overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#30262B] shadow-[0_25px_80px_rgba(0,0,0,0.3)] sm:mt-20 sm:rounded-[2rem]">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#21191F]/20 via-transparent to-white/[0.02]" />
          <img
            src="/projects/veloura.png"
            alt="Veloura wedding and event studio website preview"
            className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>

        <div className="mt-20 grid gap-10 border-b border-white/10 pb-16 sm:mt-28 sm:pb-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D69AAA]">
              01 / The concept
            </p>

            <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
              Celebrations deserve a thoughtful digital presence.
            </h2>
          </div>

          <p className="text-sm leading-8 text-[#C4B4BC] sm:text-base">
            Veloura was created as a website concept for a wedding and event
            studio. The goal was to give the brand an elegant visual identity
            and make its services easy to explore. The layout brings together
            refined typography, clear content sections, and a consistent
            visual style.
          </p>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D69AAA]">
              02 / Development
            </p>

            <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
              Designed with clarity and consistency.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-[#C4B4BC] sm:text-base">
            <p>
              React was used to build the interface from reusable components,
              while React Router supports navigation between the website's
              pages.
            </p>

            <p>
              The focus was on creating a consistent layout, clear navigation,
              and a responsive experience across screen sizes.
            </p>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#38232E] via-[#30262B] to-[#21191F] p-7 sm:mt-20 sm:rounded-[2rem] sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#C77B91]/15" />
          <div className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-[#C77B91]/15" />

          <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D69AAA]">
                03 / Explore the project
              </p>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Take a closer look.
                <span className="font-serif italic text-[#C77B91]">.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#C4B4BC]">
                Explore the event studio website or browse the source code.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://veloura-events-zeta.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-[#842D4B] to-[#A94F6B] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_25px_rgba(132,45,75,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(132,45,75,0.4)]"
              >
                View Live Website ↗
              </a>

              <a
                href="https://github.com/emanwebdev25/veloura-events"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-[#E8C7CE] transition-all duration-300 hover:-translate-y-1 hover:border-[#C77B91]/50 hover:bg-white/[0.05] hover:text-white"
              >
                View Source Code ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-[9px] uppercase tracking-[0.16em] text-[#9B8791]">
          <span>EMAN · Frontend Developer</span>

          <a
            href="/"
            className="transition-colors duration-300 hover:text-[#E8C7CE]"
          >
            Back to portfolio ↑
          </a>
        </div>
      </div>
    </main>
  );
}