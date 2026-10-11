
import { projects } from "@/data/projects";

export default function SavorePage() {
    const project = projects.find((project) => project.slug === "savore");

    if (!project) {
        return null;
    }

    return (
        <main className="min-h-screen bg-[#F5EFE7] text-[#30252B]">
            <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
                <a href="/" className="text-sm text-[#B85C72] hover:text-[#30252B]">
                    ← Back to portfolio
                </a>

                <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
                            Restaurant & Dining
                        </p>

                        <h1 className="mt-6 text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.85] tracking-[-0.08em]">
                            Savoré<span className="font-serif font-normal italic text-[#B85C72]">.</span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-[#75656D] sm:text-lg">
                            A restaurant website concept showcasing desi and continental
                            cuisine through food-focused imagery, inviting layouts, and
                            a responsive browsing experience.
                        </p>
                    </div>

                    <div className="border-t border-[#D8C8C7] pt-6">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-[#8B7B81]">
                            Technologies
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="border border-[#D8C8C7] px-3 py-2 text-[10px] uppercase tracking-[0.1em] text-[#75656D]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="mt-7 text-sm leading-7 text-[#75656D]">
                            Frontend development · Restaurant website experience
                        </p>
                    </div>
                </div>

                <div className="mt-16 overflow-hidden border border-[#D8C8C7] sm:mt-20">
                    <img
                        src={project.image || "/projects/savore.png"}
                        alt="Savoré restaurant website preview"
                        className="block h-auto w-full"
                    />
                </div>

                <div className="mt-20 grid gap-12 border-b border-[#D8C8C7] pb-16 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
                            The concept
                        </p>

                        <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
                            A dining experience that begins before the first bite.
                        </h2>
                    </div>

                    <p className="text-sm leading-8 text-[#75656D] sm:text-base">
                        Savoré presents a restaurant experience centered around desi and
                        continental cuisine. The goal was to create an inviting digital
                        presence where visitors can explore the restaurant's atmosphere
                        and food through a clear, visually engaging interface.
                    </p>
                </div>

                <div className="grid gap-12 border-b border-[#D8C8C7] py-16 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
                            Development
                        </p>

                        <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
                            Food-focused visuals with a responsive layout.
                        </h2>
                    </div>

                    <div className="space-y-6 text-sm leading-8 text-[#75656D] sm:text-base">
                        <p>
                            React helps organize the website into reusable components,
                            making the main sections easier to maintain and update.
                        </p>

                        <p>
                            The design brings together food imagery, typography, and
                            structured content to establish a consistent restaurant
                            identity and guide visitors through the experience.
                        </p>

                        <p>
                            Responsive styling helps the layout adapt to different
                            screen sizes while keeping images and restaurant content
                            accessible on desktop and mobile.
                        </p>
                    </div>
                </div>

                <div className="mt-16 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
                            Explore the project
                        </p>

                        <h2 className="mt-4 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
                            Take a closer look.
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#B85C72] px-5 py-3 text-sm text-white transition-opacity hover:opacity-90"
                        >
                            View Live Website ↗
                        </a>

                        <a
                            href={project.githubUrl}
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

