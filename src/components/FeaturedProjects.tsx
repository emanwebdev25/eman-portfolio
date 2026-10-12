import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="featured-projects"
      className="relative overflow-hidden bg-[#21191F] text-[#F7F1EB]"
    >
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#842D4B]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-[45%] h-[30rem] w-[30rem] rounded-full bg-[#C77B91]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#C77B91] shadow-[0_0_15px_#C77B91]" />
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#D69AAA]">
                A collection of digital work
              </p>
            </div>

            <h2 className="mt-7 text-[clamp(3.5rem,9vw,8rem)] font-medium leading-[0.85] tracking-[-0.08em]">
              Selected
              <br />
              <span className="bg-gradient-to-r from-[#E8C7CE] via-[#C77B91] to-[#842D4B] bg-clip-text font-serif font-normal italic text-transparent">
                projects.
              </span>
            </h2>
          </div>

          <div className="max-w-xs sm:pb-2">
            <p className="text-sm leading-7 text-[#C4B4BC]">
              Thoughtful interfaces. Useful features. Real code.
              A selection of projects built with curiosity and intention.
            </p>
            <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-[#9B8791]">
              Design meets development
            </p>
          </div>
        </div>

        <div className="mt-14 space-y-24 sm:mt-20 sm:space-y-32 lg:space-y-40">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              style={{ animationDelay: `${index * 150}ms` }}
              className={`group animate-fade-up ${
                index % 2 === 1 ? "lg:ml-auto" : ""
              }`}
            >
              <div className="mb-5 flex items-center justify-between sm:mb-7">
                <span className="font-serif text-2xl italic text-[#C77B91]/80">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[9px] uppercase tracking-[0.22em] text-[#9B8791]">
                  Featured work
                </span>
              </div>

              <a
                href={`/projects/${project.slug}`}
                aria-label={`View ${project.name} project`}
                className="relative block w-full overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#30262B] shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C77B91]/40 hover:shadow-[0_30px_80px_rgba(132,45,75,0.25)] sm:rounded-[1.75rem] lg:w-[90%]"
              >
                {project.image ? (
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} website preview`}
                      loading="lazy"
                      className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>
                ) : (
                  <div
                    className={`relative flex min-h-[280px] flex-col justify-between overflow-hidden p-7 sm:min-h-[420px] sm:p-12 lg:min-h-[500px] lg:p-16 ${
                      index % 2 === 0
                        ? "bg-gradient-to-br from-[#513341] via-[#35242E] to-[#21191F]"
                        : "bg-gradient-to-br from-[#E8C7CE] via-[#C77B91] to-[#842D4B] text-[#21191F]"
                    }`}
                  >
                    <div className="pointer-events-none absolute -right-12 top-10 h-64 w-64 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-110" />
                    <div className="pointer-events-none absolute -right-2 top-20 h-48 w-48 rounded-full border border-white/15" />

                    <span className="relative text-[10px] uppercase tracking-[0.2em] text-[#E8C7CE]">
                      {project.techStack.slice(0, 3).join(" · ")}
                    </span>

                    <span className="relative break-words font-serif text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] tracking-[-0.07em]">
                      {project.name}
                      <span className="text-[#E8C7CE]">.</span>
                    </span>
                  </div>
                )}

                <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#21191F]/80 text-xl text-[#F7F1EB] shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:border-[#C77B91] group-hover:bg-[#842D4B] sm:bottom-6 sm:right-6 sm:h-14 sm:w-14">
                  ↗
                </span>
              </a>

              <div className="mt-6 grid w-full gap-6 border-b border-white/10 pb-9 sm:mt-8 sm:pb-11 lg:w-[90%] lg:grid-cols-[1fr_0.7fr] lg:gap-10">
                <div>
                  <h3 className="text-[clamp(2.5rem,5vw,4.8rem)] font-medium leading-[0.95] tracking-[-0.07em] transition-colors duration-300 group-hover:text-[#E8C7CE]">
                    {project.name}
                    <span className="text-[#C77B91]">.</span>
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-[#C4B4BC] sm:text-base">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="flex flex-col items-start justify-between gap-6 pt-1">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[9px] uppercase tracking-[0.1em] text-[#D5C5CC] transition-all duration-300 hover:border-[#C77B91]/50 hover:bg-[#842D4B]/20 hover:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/projects/${project.slug}`}
                    className="group/link inline-flex items-center gap-4 border-b border-[#C77B91]/50 pb-2 text-[10px] font-medium uppercase tracking-[0.17em] text-[#E8C7CE] transition-all duration-300 hover:border-[#E8C7CE] hover:text-white"
                  >
                    Explore project
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}