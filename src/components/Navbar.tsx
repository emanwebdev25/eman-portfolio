export default function Navbar() {
  return (
    <nav className="relative z-50 border-b border-[#E7D8D8]/70 bg-[#F7F1EB]/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(48,38,43,0.04)]">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a
          href="#top"
          className="group text-xl font-semibold tracking-[-0.07em] text-[#30262B] transition-colors duration-300 hover:text-[#842D4B]"
        >
          EMAN
          <span className="inline-block text-[#842D4B] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
            .
          </span>
        </a>

        <div className="hidden items-center gap-7 rounded-full border border-white/80 bg-white/45 px-7 py-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#796C72] shadow-[0_5px_22px_rgba(48,38,43,0.04)] md:flex lg:gap-9">
          <a
            href="#featured-projects"
            className="group relative py-1 transition-colors duration-300 hover:text-[#842D4B]"
          >
            Work
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#842D4B] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#about"
            className="group relative py-1 transition-colors duration-300 hover:text-[#842D4B]"
          >
            About
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#842D4B] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#skills"
            className="group relative py-1 transition-colors duration-300 hover:text-[#842D4B]"
          >
            Skills
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#842D4B] transition-all duration-300 group-hover:w-full" />
          </a>

          <a
            href="#education"
            className="group relative py-1 transition-colors duration-300 hover:text-[#842D4B]"
          >
            Education
            <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#842D4B] transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center gap-3 rounded-full bg-[#842D4B] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-white shadow-[0_6px_20px_rgba(132,45,75,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#642038] hover:shadow-[0_10px_28px_rgba(132,45,75,0.28)] active:translate-y-0 sm:px-6"
        >
          Let's talk
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </div>
    </nav>
  );
}