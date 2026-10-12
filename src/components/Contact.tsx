export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#21191F] text-[#F7F1EB]"
    >
      <div className="pointer-events-none absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-[#842D4B]/25 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#C77B91]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
        <div className="flex flex-col justify-between gap-14 lg:flex-row lg:items-end lg:gap-16">
          <div className="max-w-4xl animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#C77B91] shadow-[0_0_16px_#C77B91]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D69AAA]">
                Let's work together
              </p>
            </div>

            <h2 className="mt-8 text-[clamp(3.5rem,8.5vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
              Have a good
              <br />
              <span className="bg-gradient-to-r from-[#E8C7CE] via-[#C77B91] to-[#842D4B] bg-clip-text font-serif font-normal italic text-transparent">
                idea?
              </span>
              <br />
              Let's build it<span className="text-[#C77B91]">.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#C4B4BC] sm:text-base">
              I'm open to frontend opportunities, freelance projects, and
              collaborations. Have a project in mind? Let's talk.
            </p>
          </div>

          <div className="w-full max-w-md animate-fade-up lg:mb-2">
            <p className="mb-5 text-[9px] uppercase tracking-[0.2em] text-[#9B8791]">
              Find me around the web
            </p>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] px-5 sm:px-7">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=emanmehmood932@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors duration-300 hover:text-[#E8C7CE]"
              >
                <div>
                  <span className="block text-sm font-medium uppercase tracking-[0.14em]">
                    Email me
                  </span>
                  <span className="mt-1.5 block text-xs text-[#9B8791]">
                    Let's start a conversation
                  </span>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#C77B91]/40 group-hover:bg-[#842D4B]/20">
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/eman-mehmood-773230436"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors duration-300 hover:text-[#E8C7CE]"
              >
                <div>
                  <span className="block text-sm font-medium uppercase tracking-[0.14em]">
                    LinkedIn
                  </span>
                  <span className="mt-1.5 block text-xs text-[#9B8791]">
                    Connect professionally
                  </span>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#C77B91]/40 group-hover:bg-[#842D4B]/20">
                  ↗
                </span>
              </a>

              <a
                href="https://github.com/emanwebdev25"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-6 transition-colors duration-300 hover:text-[#E8C7CE]"
              >
                <div>
                  <span className="block text-sm font-medium uppercase tracking-[0.14em]">
                    GitHub
                  </span>
                  <span className="mt-1.5 block text-xs text-[#9B8791]">
                    Explore my code
                  </span>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#C77B91]/40 group-hover:bg-[#842D4B]/20">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.16em] text-[#9B8791] sm:mt-28 sm:flex-row sm:items-center">
          <span>EMAN · Frontend Developer</span>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 self-start transition-colors duration-300 hover:text-[#E8C7CE] sm:self-auto"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}