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
return ( <section id="skills" className="bg-[#30252B] text-[#F5EFE7]"> <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"> <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"> <div className="flex flex-col justify-between gap-12"> <div> <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D995A4]">
The tools I work with </p>


          <h2 className="mt-7 text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.84] tracking-[-0.08em]">
            Skills
            <br />
            <span className="font-serif font-normal italic text-[#D995A4]">
              in practice.
            </span>
          </h2>

          <p className="mt-8 max-w-sm text-sm leading-7 text-[#CBBBC1] sm:text-base">
            The technologies I use to turn ideas into responsive,
            functional web experiences, from the first component to
            deployment.
          </p>
        </div>

        <div className="hidden border-t border-[#5A454F] pt-6 lg:block">
          <p className="text-xs leading-6 text-[#A9959E]">
            My focus is on building, learning, and getting better with
            every project.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-px border border-[#5A454F] bg-[#5A454F] sm:grid-cols-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex min-h-[180px] flex-col justify-between bg-[#30252B] p-6 transition-colors duration-300 hover:bg-[#44313C] sm:min-h-[210px] sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-[9px] uppercase tracking-[0.17em] text-[#A9959E] transition-colors group-hover:text-[#D995A4]">
                {skill.type}
              </span>

              <span className="text-lg text-[#8F737F] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D995A4]">
                ↗
              </span>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-medium tracking-[-0.045em] transition-colors duration-300 group-hover:text-[#E7A8B5] sm:text-3xl">
                {skill.name}
              </h3>

              <p className="mt-2 text-xs leading-5 text-[#CBBBC1] sm:text-sm">
                {skill.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#5A454F] pt-6">
      <p className="text-[9px] uppercase tracking-[0.18em] text-[#A9959E]">
        Tools are only the beginning
      </p>

      <a
        href="#featured-projects"
        className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:text-[#D995A4]"
      >
        See them in action
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          ↗
        </span>
      </a>
    </div>
  </div>
</section>


);
}
