export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#21191F] text-[#F7F1EB]">
      <div className="h-px bg-gradient-to-r from-transparent via-[#842D4B] to-transparent" />

      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <a
          href="#top"
          className="group w-fit text-xl font-semibold tracking-[-0.06em] transition-colors duration-300 hover:text-[#E8C7CE]"
        >
          EMAN<span className="text-[#C77B91] transition-colors group-hover:text-[#E8C7CE]">.</span>
        </a>

        <p className="text-[9px] uppercase tracking-[0.16em] text-[#9B8791] sm:text-[10px]">
          Frontend Developer <span className="mx-2 text-[#842D4B]">·</span>{" "}
          Portfolio 2026
        </p>

        <a
          href="#top"
          className="group flex w-fit items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] text-[#C4B4BC] transition-colors duration-300 hover:text-[#E8C7CE]"
        >
          Back to top
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#C77B91]/40 group-hover:bg-[#842D4B]/20">
            ↑
          </span>
        </a>
      </div>
    </footer>
  );
}