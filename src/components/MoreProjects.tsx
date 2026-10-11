import { projects } from "@/data/projects";

export default function MoreProjects() {
  const moreProjects = projects.filter((project) => !project.featured);

  return (<section
    id="more-projects"
    className="bg-[#30252B] text-[#F5EFE7]"
  >
    <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"> <div className="grid gap-12 lg:grid-cols-[0.8fr_1.8fr] lg:gap-24"> <div className="flex flex-col justify-between gap-10"> <div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D995A4]">
        The Archive </p>


      <h2 className="mt-7 text-[clamp(3.5rem,6vw,6rem)] font-medium leading-[0.85] tracking-[-0.075em]">
        More
        <br />
        <span className="font-serif font-normal italic text-[#D995A4]">
          things.
        </span>
      </h2>

      <p className="mt-8 max-w-xs text-sm leading-7 text-[#CBBBC1]">
        Experiments, ideas, and digital products that are part of my
        ongoing journey as a frontend developer.
      </p>
    </div>

      <div className="hidden border-t border-[#5A454F] pt-5 lg:block">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#A9959E]">
          Every project is a new perspective.
        </p>
      </div>
    </div>

      <div>
        <div className="flex items-center justify-between border-b border-[#5A454F] pb-5">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#CBBBC1]">
            Project Directory
          </span>

          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D995A4]">
            {moreProjects.length} Projects
          </span>
        </div>

        <div>
          {moreProjects.map((project) => (
            <div
              key={project.slug}
              className="grid gap-4 border-b border-[#5A454F] py-6 sm:py-7"
            >


              <div>
                <h3 className="text-2xl font-medium tracking-[-0.045em] transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                  {project.name}
                  <span className="text-[#D995A4]">.</span>
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-[#CBBBC1]">
                  {project.shortDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] uppercase tracking-[0.12em] text-[#A9959E]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {moreProjects.length === 0 && (
          <p className="border-b border-[#5A454F] py-8 text-sm text-[#CBBBC1]">
            More projects are on the way.
          </p>
        )}

        <div className="mt-8 flex items-center justify-between gap-4">
          <p className="text-[9px] uppercase tracking-[0.18em] text-[#A9959E]">
            Built with curiosity
          </p>

          <a
            href="#contact"
            className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#F5EFE7] transition-colors hover:text-[#D995A4]"
          >
            Have a project in mind? ↗
          </a>
        </div>
      </div>
    </div>
    </div>
  </section>


  );
}
