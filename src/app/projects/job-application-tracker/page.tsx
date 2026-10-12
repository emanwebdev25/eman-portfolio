export default function JobApplicationTrackerPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#21191F] text-[#F7F1EB]">
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#842D4B]/20 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <a
          href="/"
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-[#C4B4BC] transition-colors duration-300 hover:text-[#E8C7CE]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          Back to portfolio
        </a>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div className="animate-fade-up">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#C77B91] shadow-[0_0_14px_#C77B91]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D69AAA]">
                Career & Productivity
              </p>
            </div>

            <h1 className="mt-7 text-[clamp(3.5rem,8vw,7rem)] font-medium leading-[0.85] tracking-[-0.08em]">
              Job Tracker
              <span className="bg-gradient-to-r from-[#E8C7CE] to-[#842D4B] bg-clip-text font-serif font-normal italic text-transparent">
                .
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#C4B4BC] sm:text-lg">
              A job application dashboard designed to help users organize
              opportunities, track application progress, and manage their
              job search in one focused workspace.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_15px_45px_rgba(0,0,0,0.15)] sm:p-8">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#D69AAA]">
              Technologies
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "localStorage",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] uppercase tracking-[0.1em] text-[#E8C7CE] transition-colors duration-300 hover:border-[#C77B91]/50 hover:bg-[#842D4B]/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 border-t border-white/10 pt-5">
              <p className="text-sm leading-7 text-[#C4B4BC]">
                Frontend development · Application management dashboard
              </p>
            </div>
          </div>
        </div>

        <div className="group relative mt-14 overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#30262B] shadow-[0_25px_80px_rgba(0,0,0,0.3)] sm:mt-20 sm:rounded-[2rem]">
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#21191F]/20 via-transparent to-white/[0.02]" />
          <img
            src="/projects/job-tracker.png"
            alt="Job Application Tracker dashboard preview"
            className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>

        <div className="mt-20 grid gap-10 border-b border-white/10 pb-16 sm:mt-28 sm:pb-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D69AAA]">
              01 / The concept
            </p>

            <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
              A more organized way to navigate the job search.
            </h2>
          </div>

          <p className="text-sm leading-8 text-[#C4B4BC] sm:text-base">
            Keeping track of multiple job applications can quickly become
            overwhelming. This project brings application details and progress
            into one dashboard, making it easier to review opportunities and
            stay organized throughout the job search.
          </p>
        </div>

        <div className="grid gap-10 border-b border-white/10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D69AAA]">
              02 / Development
            </p>

            <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
              A practical dashboard with persistent data.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-[#C4B4BC] sm:text-base">
            <p>
              Next.js and React provide the foundation for the dashboard,
              while TypeScript helps keep the application's data and
              components consistent.
            </p>

            <p>
              Tailwind CSS is used to build the interface, including the
              dashboard layout, application cards, status indicators, and
              responsive styling.
            </p>

            <p>
              localStorage keeps application data available between visits
              without requiring a separate backend or database.
            </p>
          </div>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#38232E] via-[#30262B] to-[#21191F] p-7 sm:mt-20 sm:rounded-[2rem] sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#C77B91]/15" />
          <div className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-[#C77B91]/15" />

          <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D69AAA]">
                03 / Explore the project
              </p>

              <h2 className="mt-5 text-3xl font-medium tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Take a closer look
                <span className="font-serif italic text-[#C77B91]">.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#C4B4BC]">
                Explore the live dashboard or browse the source code.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://job-application-tracker-nine-flame.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gradient-to-r from-[#842D4B] to-[#A94F6B] px-6 py-3 text-sm font-medium text-white shadow-[0_8px_25px_rgba(132,45,75,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(132,45,75,0.4)]"
              >
                View Live Website ↗
              </a>

              <a
                href="https://github.com/emanwebdev25/job-application-tracker"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-[#E8C7CE] transition-all duration-300 hover:-translate-y-1 hover:border-[#C77B91]/50 hover:bg-white/[0.05] hover:text-white"
              >
                View Source Code ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-[9px] uppercase tracking-[0.16em] text-[#9B8791]">
          <span>EMAN · Frontend Developer</span>
          <a
            href="/"
            className="transition-colors duration-300 hover:text-[#E8C7CE]"
          >
            Back to portfolio ↑
          </a>
        </div>
      </div>
    </main>
  );
}