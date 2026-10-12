export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F1EB] text-[#30262B]"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#E8C7CE]/30 blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mb-12 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#842D4B]">
            A little about me
          </p>

          <span className="text-[10px] uppercase tracking-[0.18em] text-[#796C72]">
            Lahore, Pakistan
          </span>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-0">
          <div className="relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F0DDE0] via-[#E8C7CE] to-[#D8A8B4] p-7 shadow-[0_24px_70px_rgba(132,45,75,0.12)] transition-transform duration-500 hover:-translate-y-1 sm:p-12 lg:min-h-[560px] lg:rounded-r-none lg:p-16">
            <div className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full border border-white/40" />
            <div className="pointer-events-none absolute -right-8 top-28 h-48 w-48 rounded-full border border-white/40" />

            <p className="relative text-[10px] font-medium uppercase tracking-[0.2em] text-[#842D4B]">
              The person behind the code
            </p>

            <h2 className="relative mt-16 max-w-2xl text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.075em]">
              I build for
              <br />
              <span className="font-serif font-normal italic text-[#842D4B]">
                people,
              </span>
              <br />
              not just
              <br />
              screens.
            </h2>

            <div className="relative mt-12 flex items-end justify-between gap-4">
              <p className="max-w-[220px] text-sm leading-6 text-[#62545B]">
                Good interfaces should feel natural to use and thoughtful in
                every detail.
              </p>

              <span className="animate-float font-serif text-5xl italic text-[#842D4B]">
                E.
              </span>
            </div>
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#30262B] p-7 text-[#FFF8F5] shadow-[0_24px_70px_rgba(48,38,43,0.16)] sm:p-12 lg:rounded-l-none lg:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#842D4B]/30 blur-[80px]" />

            <div className="relative">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E8AFC0]">
                Hello, I'm Eman.
              </span>

              <p className="mt-8 text-lg leading-8 text-[#F0E5E8] sm:text-xl sm:leading-9">
                I'm a frontend developer and BS.IT student who enjoys turning
                ideas into useful, responsive web experiences. I care about
                how a product looks, how it works, and how it feels to use.
              </p>

              <p className="mt-6 text-sm leading-7 text-[#CBBBC1] sm:text-base">
                I learn by building real projects, working through problems,
                and understanding the decisions behind the code. Every project
                gives me something new to question, improve, or try differently.
              </p>
            </div>

            <div className="relative mt-16 border-t border-white/15 pt-7">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#E8AFC0]">
                My everyday toolkit
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "JavaScript",
                  "Tailwind CSS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-[10px] text-[#F0E5E8] transition-all duration-300 hover:-translate-y-1 hover:border-[#E8AFC0]/60 hover:bg-[#842D4B]/40 hover:shadow-[0_6px_20px_rgba(132,45,75,0.18)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="#featured-projects"
                className="group mt-9 inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.17em] text-[#FFF8F5]"
              >
                See what I've been building
                <span className="text-base text-[#E8AFC0] transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}