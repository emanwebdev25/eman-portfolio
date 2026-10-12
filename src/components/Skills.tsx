const skills = [
  {
    name: "React",
    detail: "Component-based interfaces",
    type: "Frontend",
  },
  {
    name: "Next.js",
    detail: "Routing & web applications",
    type: "Framework",
  },
  {
    name: "TypeScript",
    detail: "Typed application development",
    type: "Language",
  },
  {
    name: "JavaScript",
    detail: "Interactive web experiences",
    type: "Language",
  },
  {
    name: "Tailwind CSS",
    detail: "Responsive interface styling",
    type: "Styling",
  },
  {
    name: "REST APIs",
    detail: "Connecting data & services",
    type: "Integration",
  },
  {
    name: "Git / GitHub",
    detail: "Version control & collaboration",
    type: "Workflow",
  },
  {
    name: "Vercel",
    detail: "Deployment & hosting",
    type: "Deployment",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#30262B] text-[#F7F1EB]"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#842D4B]/25 blur-[110px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#C77B91]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E8AFC0]">
                The tools I work with
              </p>

              <h2 className="mt-7 text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.84] tracking-[-0.08em]">
                Skills
                <br />
                <span className="bg-gradient-to-r from-[#E8AFC0] to-[#C77B91] bg-clip-text font-serif font-normal italic text-transparent">
                  in practice.
                </span>
              </h2>

              <p className="mt-8 max-w-sm text-sm leading-7 text-[#D1C1C7] sm:text-base">
                The technologies I use to turn ideas into responsive,
                functional web experiences, from the first component to
                deployment.
              </p>
            </div>

            <div className="max-w-sm border-l-2 border-[#C77B91] py-2 pl-5">
              <p className="text-xs leading-6 text-[#C1ADB5]">
                My focus is on building, learning, and getting better with
                every project.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                style={{ animationDelay: `${index * 90}ms` }}
                className="group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.02] p-6 shadow-[0_12px_32px_rgba(0,0,0,0.12)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#C77B91]/50 hover:shadow-[0_22px_45px_rgba(0,0,0,0.25)] animate-fade-up sm:min-h-[215px] sm:p-7"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#842D4B]/0 blur-2xl transition-all duration-500 group-hover:bg-[#842D4B]/45" />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="rounded-full border border-[#C77B91]/25 bg-[#842D4B]/20 px-3 py-1.5 text-[9px] uppercase tracking-[0.15em] text-[#E8AFC0]">
                    {skill.type}
                  </span>

                  <span className="text-lg text-[#C77B91] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>

                <div className="relative mt-10">
                  <h3 className="text-2xl font-medium tracking-[-0.045em] text-[#FFF8F5] transition-colors duration-300 group-hover:text-[#E8AFC0] sm:text-3xl">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#C1ADB5] sm:text-sm">
                    {skill.detail}
                  </p>
                </div>

                <div className="absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-[#842D4B] to-[#E8AFC0] transition-transform duration-500 group-hover:scale-x-100 sm:left-7 sm:right-7" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
          <p className="text-[9px] uppercase tracking-[0.18em] text-[#C1ADB5]">
            Tools are only the beginning
          </p>

          <a
            href="#featured-projects"
            className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 hover:text-[#E8AFC0]"
          >
            See them in action
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}