export default function VelouraProjectPage() {
    return (
        <main className="min-h-screen bg-[#F5EFE7] text-[#30252B]">
            <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"> <a
                href="/"
                className="text-sm text-[#B85C72] transition-colors hover:text-[#30252B]"
            >
                ← Back to portfolio
            </a>


                <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
                            Wedding & Event Studio
                        </p>

                        <h1 className="mt-6 text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.85] tracking-[-0.08em]">
                            Veloura
                            <span className="font-serif font-normal italic text-[#B85C72]">
                                .
                            </span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-[#75656D] sm:text-lg">
                            A luxury event studio website designed to present wedding
                            celebrations and special occasions through an elegant,
                            editorial-inspired digital experience.
                        </p>
                    </div>

                    <div className="border-t border-[#D8C8C7] pt-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8B7B81]">
                                    Project type
                                </p>
                                <p className="mt-3 text-sm font-medium">
                                    Event studio website
                                </p>
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#8B7B81]">
                                    Focus
                                </p>
                                <p className="mt-3 text-sm font-medium">
                                    UI & frontend
                                </p>
                            </div>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-2">
                            {["React", "React Router", "CSS"].map((tech) => (
                                <span
                                    key={tech}
                                    className="border border-[#D8C8C7] px-3 py-2 text-[10px] uppercase tracking-[0.1em] text-[#75656D]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 overflow-hidden border border-[#D8C8C7] sm:mt-20">
                    <img
                        src="/projects/veloura.png"
                        alt="Veloura wedding and event studio website preview"
                        className="block h-auto w-full"
                    />
                </div>

                <div className="mt-20 grid gap-12 border-b border-[#D8C8C7] pb-16 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
                            The concept
                        </p>

                        <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
                            Celebrations deserve a thoughtful digital presence.
                        </h2>
                    </div>

                    <p className="text-sm leading-8 text-[#75656D] sm:text-base">
                        Veloura was created as a website concept for a wedding and
                        event studio. The goal was to give the brand an elegant
                        visual identity and make its services easy to explore. The
                        layout brings together refined typography, clear content
                        sections, and a consistent visual style.
                    </p>
                </div>

                <div className="grid gap-12 border-b border-[#D8C8C7] py-16 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">
                            Development
                        </p>

                        <h2 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl">
                            Designed with clarity and consistency.
                        </h2>
                    </div>

                    <div className="space-y-6 text-sm leading-8 text-[#75656D] sm:text-base">
                        <p>
                            React was used to build the interface from reusable
                            components, while React Router supports navigation between
                            the website's pages.
                        </p>

                        <p>
                            The focus was on creating a consistent layout, clear
                            navigation, and a responsive experience across screen
                            sizes.
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
                            href="https://veloura-events-zeta.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#B85C72] px-5 py-3 text-sm text-white transition-opacity hover:opacity-90"
                        >
                            View Live Website ↗
                        </a>

                        <a
                            href="https://github.com/emanwebdev25/veloura-events"
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
