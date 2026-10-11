import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (<section id="featured-projects" className="bg-[#F5EFE7] text-[#30252B]"> <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"> <div className="flex flex-col justify-between gap-8 border-b border-[#D8C9C8] pb-10 sm:flex-row sm:items-end"> <div> <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#B85C72]">
    Selected Work </p>


    <h2 className="mt-6 text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.85] tracking-[-0.08em]">
      Made with
      <br />
      <span className="font-serif font-normal italic text-[#B85C72]">
        intention.
      </span>
    </h2>
  </div>

    <p className="max-w-xs text-sm leading-7 text-[#75656C] sm:pb-2">
      A selection of digital experiences shaped by thoughtful design,
      useful features, and hands-on development.
    </p>
  </div>

    <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-16 lg:space-y-20">
      {featuredProjects.map((project, index) => (
        <article key={project.slug} className="group">
          <a
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.name} project`}
            className="relative block w-full overflow-hidden lg:w-[85%]"
          >
            {project.image ? (
              <div className="overflow-hidden border border-[#D8C9C8]">
                <img
                  src={project.image}
                  alt={`${project.name} website preview`}
                  loading="lazy"
                  className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            ) : (
              <div
                className={`flex min-h-[280px] flex-col justify-between p-7 sm:min-h-[420px] sm:p-12 lg:min-h-[500px] lg:p-16 ${index % 2 === 0
                    ? "bg-[#E8D6D2] text-[#30252B]"
                    : "bg-[#30252B] text-[#F5EFE7]"
                  }`}
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#B85C72]">
                  {project.techStack.slice(0, 3).join(" · ")}
                </span>

                <span className="break-words font-serif text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] tracking-[-0.07em]">
                  {project.name}
                  <span className="text-[#B85C72]">.</span>
                </span>
              </div>
            )}

            <span className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EFE7] text-xl text-[#30252B] transition-colors duration-300 group-hover:bg-[#B85C72] group-hover:text-white sm:bottom-6 sm:right-6">
              ↗
            </span>
          </a>

          <div
            className="mt-5 grid w-full gap-5 border-b border-[#D8C9C8] pb-8 sm:mt-6 sm:pb-9 lg:w-[85%] lg:grid-cols-[1fr_0.65fr] lg:gap-10"
          >
            <div>
              <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.07em]">
                {project.name}
                <span className="text-[#B85C72]">.</span>
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#75656C] sm:text-base">
                {project.shortDescription}
              </p>
            </div>

            <div className="flex flex-col items-start justify-between gap-6 border-t border-[#D8C9C8] pt-5 lg:border-t-0 lg:pt-2">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] uppercase tracking-[0.12em] text-[#75656C]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-4 border-b border-[#B85C72] pb-2 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:text-[#B85C72]"
              >
                Explore project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
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
