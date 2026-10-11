export default function Navbar() {
return ( <nav className="sticky top-0 z-50 border-b border-[#E5D9D5]/80 bg-[#F5EFE7]/95 backdrop-blur-md"> <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 sm:px-10 lg:px-16"> <a
       href="#top"
       className="text-xl font-semibold tracking-[-0.06em] text-[#30252B] transition-colors hover:text-[#B85C72]"
     >
EMAN<span className="text-[#B85C72]">.</span> </a>

    <div className="hidden items-center gap-8 text-[10px] font-medium uppercase tracking-[0.16em] text-[#75656D] md:flex lg:gap-10">
      <a href="#featured-projects" className="transition-colors hover:text-[#B85C72]">
        Work
      </a>

      <a href="#about" className="transition-colors hover:text-[#B85C72]">
        About
      </a>

      <a href="#skills" className="transition-colors hover:text-[#B85C72]">
        Skills
      </a>

      <a href="#education" className="transition-colors hover:text-[#B85C72]">
        Education
      </a>
    </div>

    <a
      href="#contact"
      className="group inline-flex items-center gap-2 border border-[#B85C72] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#B85C72] transition-colors duration-300 hover:bg-[#B85C72] hover:text-[#F5EFE7] sm:px-5"
    >
      Let's talk
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        ↗
      </span>
    </a>
  </div>
</nav>


);
}
