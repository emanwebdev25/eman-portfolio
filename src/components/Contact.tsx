export default function Contact() {
return ( <section id="contact" className="bg-[#B85C72] text-[#F5EFE7]"> <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32"> <div className="flex flex-col justify-between gap-14 lg:flex-row lg:items-end lg:gap-16"> <div className="max-w-4xl"> <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F2D9DE]">
Let's work together </p>


        <h2 className="mt-7 text-[clamp(3.5rem,8.5vw,8.5rem)] font-medium leading-[0.88] tracking-[-0.075em]">
          Have a good
          <br />
          <span className="font-serif font-normal italic text-[#30252B]">
            idea?
          </span>
          <br />
          Let's build it.
        </h2>

        <p className="mt-8 max-w-md text-sm leading-7 text-[#F8E9EC] sm:text-base">
          I'm open to frontend opportunities, freelance projects, and
          collaborations. Have a project in mind? Let's talk.
        </p>
      </div>

      <div className="w-full max-w-md border-t border-[#E1A4B2] lg:mb-2">
        <a
          href="mailto:emanmehmood932@example.com"
          className="group flex items-center justify-between border-b border-[#E1A4B2] py-5 transition-colors hover:text-white sm:py-6"
        >
          <span className="text-sm font-medium uppercase tracking-[0.14em]">
            Email me
          </span>

          <span className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/eman-mehmood-773230436"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between border-b border-[#E1A4B2] py-5 transition-colors hover:text-white sm:py-6"
        >
          <span className="text-sm font-medium uppercase tracking-[0.14em]">
            LinkedIn
          </span>

          <span className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </a>

        <a
          href="https://github.com/emanwebdev25"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center justify-between border-b border-[#E1A4B2] py-5 transition-colors hover:text-white sm:py-6"
        >
          <span className="text-sm font-medium uppercase tracking-[0.14em]">
            GitHub
          </span>

          <span className="text-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </div>
    </div>

    <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#E1A4B2] pt-6 text-[10px] uppercase tracking-[0.15em] text-[#F2D9DE] sm:mt-20 sm:flex-row sm:items-center">
      <span>EMAN · Frontend Developer</span>
    </div>
  </div>
</section>


);
}
