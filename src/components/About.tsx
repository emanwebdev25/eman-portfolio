export default function About() {
return ( <section id="about" className="bg-[#F5EFE7] text-[#30252B]"> <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"> <div className="mb-12 flex items-center justify-between"> <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
 A little about me </p>


      <span className="text-[10px] uppercase tracking-[0.18em] text-[#8B7B81]">
        Lahore, Pakistan
      </span>
    </div>

    <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex min-h-[420px] flex-col justify-between bg-[#E8D6D2] p-7 sm:p-12 lg:min-h-[560px] lg:p-16">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#80505E]">
          The person behind the code
        </p>

        <h2 className="max-w-2xl text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[0.86] tracking-[-0.075em]">
          I build for
          <br />
          <span className="font-serif font-normal italic text-[#B85C72]">
            people,
          </span>
          <br />
          not just
          <br />
          screens.
        </h2>

        <div className="mt-12 flex items-end justify-between gap-4">
          <p className="max-w-[220px] text-sm leading-6 text-[#62545B]">
            Good interfaces should feel natural to use and thoughtful in
            every detail.
          </p>

          <span className="font-serif text-5xl italic text-[#B85C72]">
            E.
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-[#30252B] p-7 text-[#F5EFE7] sm:p-12 lg:p-16">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#D995A4]">
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

        <div className="mt-16 border-t border-[#5A454F] pt-7">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#D995A4]">
            My everyday toolkit
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="border border-[#68545E] px-3 py-2 text-[10px] text-[#F0E5E8] transition-colors duration-300 hover:border-[#D995A4] hover:bg-[#493540]"
                >
                  {skill}
                </span>
              )
            )}
          </div>

          <a
            href="#featured-projects"
            className="group mt-9 inline-flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.17em] text-[#F5EFE7]"
          >
            See what I've been building
            <span className="text-base text-[#D995A4] transition-transform duration-300 group-hover:translate-x-2">
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
