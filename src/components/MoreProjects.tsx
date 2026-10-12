import { projects } from "@/data/projects";

export default function MoreProjects() {
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="more-projects"
      className="relative overflow-hidden bg-[#21191F] text-[#F7F1EB]"
    >
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#842D4B]/15 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#C77B91]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.8fr] lg:gap-24">
          <div className="flex flex-col justify-between gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#C77B91] shadow-[0_0_14px_#C77B91]" />
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#D69AAA]">
                  Beyond the highlights
                </p>
              </div>

              <h2 className="mt-7 text-[clamp(3.5rem,6vw,6rem)] font-medium leading-[0.85] tracking-[-0.075em]">
                The
                <br />
                <span className="bg-gradient-to-r from-[#E8C7CE] to-[#842D4B] bg-clip-text font-serif font-normal italic text-transparent">
                  archive.
                </span>
              </h2>

              <p className="mt-8 max-w-xs text-sm leading-7 text-[#C4B4BC]">
                Experiments, ideas, and digital products that are part of my
                ongoing journey as a frontend developer.
              </p>
            </div>

            <div className="hidden border-t border-white/10 pt-5 lg:block">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#9B8791]">
                Every project is a new perspective.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-12 bg-gradient-to-r from-[#842D4B] to-[#C77B91]" />
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#C4B4BC]">
                  Keep exploring
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C4B4BC]">
                Project directory
              </span>

              <span className="rounded-full border border-[#C77B91]/25 bg-[#842D4B]/15 px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-[#E8C7CE]">
                {String(moreProjects.length).padStart(2, "0")} Projects
              </span>
            </div>

            <div>
              {moreProjects.map((project, index) => (
                <article
                  key={project.slug}
                  style={{ animationDelay: `${index * 120}ms` }}
                  className="group animate-fade-up relative border-b border-white/10 py-7 transition-all duration-300 hover:border-[#C77B91]/40 sm:py-9"
                >
                  <div className="absolute inset-0 -mx-4 rounded-2xl bg-gradient-to-r from-[#842D4B]/0 via-[#842D4B]/[0.08] to-[#C77B91]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:-mx-6" />

                  <div className="relative flex items-start gap-5 sm:gap-7">
                    <span className="pt-1 font-serif text-xl italic text-[#C77B91]/60 transition-colors duration-300 group-hover:text-[#E8C7CE]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-medium tracking-[-0.045em] transition-colors duration-300 group-hover:text-[#E8C7CE] sm:text-3xl">
                          {project.name}
                          <span className="text-[#C77B91]">.</span>
                        </h3>

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-[#C4B4BC] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-[#C77B91]/40 group-hover:bg-[#842D4B]/20 group-hover:text-white">
                          ↗
                        </span>
                      </div>

                      <p className="mt-3 max-w-lg text-sm leading-7 text-[#C4B4BC]">
                        {project.shortDescription}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[9px] uppercase tracking-[0.1em] text-[#B7A4AE] transition-all duration-300 group-hover:border-[#C77B91]/20 group-hover:text-[#E8C7CE]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {moreProjects.length === 0 && (
              <p className="border-b border-white/10 py-8 text-sm text-[#C4B4BC]">
                More projects are on the way.
              </p>
            )}

            <div className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#9B8791]">
                Built with curiosity
              </p>

              <a
                href="#contact"
                className="group/link inline-flex items-center gap-3 self-start border-b border-[#C77B91]/40 pb-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#E8C7CE] transition-all duration-300 hover:border-[#E8C7CE] hover:text-white sm:self-auto"
              >
                Have a project in mind?
                <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
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