export default function Footer() {
return ( <footer className="bg-[#30252B] text-[#F5EFE7]"> <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-6 py-7 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16"> <a
       href="#top"
       className="w-fit text-lg font-semibold tracking-[-0.05em] transition-colors hover:text-[#D995A4]"
     >
EMAN<span className="text-[#D995A4]">.</span> </a>


    <p className="text-[10px] uppercase tracking-[0.16em] text-[#CBBBC1]">
      Frontend Developer · Portfolio 2026
    </p>

    <a
      href="#top"
      className="group flex w-fit items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em] text-[#F5EFE7] transition-colors hover:text-[#D995A4]"
    >
      Back to top
      <span className="transition-transform duration-300 group-hover:-translate-y-1">
        ↑
      </span>
    </a>
  </div>
</footer>


);
}
