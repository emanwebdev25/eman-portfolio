export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#F7F1EB] text-[#30262B]"
    >
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-[#E8C7CE]/40 blur-[110px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#842D4B] shadow-[0_0_12px_rgba(132,45,75,0.35)]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#842D4B]">
                Education
              </p>
            </div>

            <h2 className="mt-7 text-[clamp(3rem,6vw,5.5rem)] font-medium leading-[0.9] tracking-[-0.07em]">
              Always
              <br />
              <span className="bg-gradient-to-r from-[#842D4B] to-[#C77B91] bg-clip-text font-serif font-normal italic text-transparent">
                learning.
              </span>
            </h2>

            <p className="mt-7 max-w-xs text-sm leading-7 text-[#796C72]">
              Building a strong foundation in technology while turning
              what I learn into practical projects.
            </p>

            <div className="mt-10 hidden items-center gap-4 lg:flex">
              <span className="h-px w-12 bg-gradient-to-r from-[#842D4B] to-[#C77B91]" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#796C72]">
                Knowledge into practice
              </span>
            </div>
          </div>

          <div className="animate-fade-up lg:pt-3">
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-[#E7D8D8] bg-white/50 p-6 shadow-[0_18px_55px_rgba(48,38,43,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(72,36,51,0.12)] sm:rounded-[2rem] sm:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#E8C7CE]/30 blur-3xl transition-transform duration-700 group-hover:scale-125" />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#796C72]">
                    Bachelor of Science
                  </p>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#842D4B]/15 bg-[#E8C7CE]/30 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#842D4B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#842D4B]" />
                    Currently pursuing
                  </span>
                </div>

                <h3 className="mt-7 max-w-xl text-3xl font-medium leading-[1.05] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                  Information
                  <br />
                  Technology
                  <span className="font-serif italic text-[#842D4B]">.</span>
                </h3>

                <div className="mt-7 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#842D4B] to-[#C77B91] text-lg text-white shadow-[0_8px_20px_rgba(132,45,75,0.2)]">
                    ✳
                  </div>

                  <div className="pt-1">
                    <p className="text-sm font-medium text-[#30262B]">
                      Lahore College for Women University
                    </p>
                    <p className="mt-2 text-xs text-[#796C72]">
                      Undergraduate studies
                    </p>
                  </div>
                </div>

                <div className="mt-9 h-px bg-gradient-to-r from-[#842D4B]/30 via-[#E7D8D8] to-transparent" />

                <p className="mt-7 max-w-xl text-sm leading-7 text-[#796C72]">
                  Alongside my studies, I build frontend projects to
                  strengthen my development skills and apply what I learn
                  to real-world interfaces.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between px-1">
              <span className="text-[9px] uppercase tracking-[0.16em] text-[#796C72]">
                Theory & practice
              </span>
              <span className="font-serif text-sm italic text-[#842D4B]">
                Growing, one project at a time.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}