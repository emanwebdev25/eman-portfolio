export default function RoamlyProjectPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE7] text-[#30252B]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <a href="/" className="text-sm text-[#B85C72] hover:text-[#30252B]">
          ← Back to portfolio
        </a>


        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
              Travel Planning
            </p>

            <h1 className="mt-6 text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.85] tracking-[-0.08em]">
              Roamly<span className="font-serif font-normal italic text-[#B85C72]">.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#75656D] sm:text-lg">
              A travel planner that brings destination discovery and
              useful travel information into one responsive interface.
              Designed to make planning a trip feel clear, visual, and
              straightforward.
            </p>
          </div>

          <div className="border-t border-[#D8C8C7] pt-6">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#8B7B81]">
              Technologies
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["React", "TypeScript", "Open-Meteo", "Unsplash API"].map((tech) => (
                <span key={tech} className="border border-[#D8C8C7] px-3 py-2 text-[10px] uppercase tracking-[0.1em] text-[#75656D]">
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-7 text-sm leading-7 text-[#75656D]">
              Frontend development · API integration · Responsive UI
            </p>
          </div>
        </div>

        <div className="mt-16 overflow-hidden border border-[#D8C8C7] sm:mt-20">
          <img
            src="/projects/roamly.png"
            alt="Roamly travel planner website preview"
            className="block h-auto w-full"
          />
        </div>

        <div className="mt-20 grid gap-12 border-b border-[#D8C8C7] pb-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
              The concept
            </p>

            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
              Making trip planning feel less overwhelming.
            </h2>
          </div>

          <p className="text-sm leading-8 text-[#75656D] sm:text-base">
            Roamly was built around the idea of bringing travel inspiration
            and practical information together. Its interface uses visual
            destination content, a clear information hierarchy, and a
            calm teal identity to give the experience its own character.
          </p>
        </div>

        <div className="grid gap-12 border-b border-[#D8C8C7] py-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
              Development
            </p>

            <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
              Real data, connected to the interface.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-[#75656D] sm:text-base">
            <p>
              React and TypeScript were used to structure the application
              and keep its components and data handling organized.
            </p>

            <p>
              Open-Meteo provides weather information, while Unsplash
              supplies destination imagery. Integrating external APIs
              helped connect the interface to data beyond static content.
            </p>

            <p>
              The responsive layout aims to keep destination details
              readable and useful across desktop and mobile screens.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
              Explore the project
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
              Ready to explore?
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://roamly-tau.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#B85C72] px-5 py-3 text-sm text-white transition-opacity hover:opacity-90"
            >
              View Live Website ↗
            </a>

            <a
              href="https://github.com/emanwebdev25/roamly"
              target="_blank"
              rel="noreferrer"
              className="border border-[#30252B] px-5 py-3 text-sm transition-colors hover:bg-[#30252B] hover:text-white"
            >
              View Source Code ↗
            </a>
          </div>
        </div>
      </div>
    </main>


  );
}
