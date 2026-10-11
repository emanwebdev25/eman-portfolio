export default function Education() {
  return (
    <section id="education" className="bg-[#F5EFE7] text-[#30252B]">
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B85C72]">Education
            </p>


            <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Always
              <br />
              <span className="font-serif font-normal italic text-[#B85C72]">
                learning.
              </span>
            </h2>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#75656D]">
              Building a strong foundation in technology while turning
              what I learn into practical projects.
            </p>
          </div>

          <div className="border-t border-[#D8C8C7]">
            <div className="py-8 sm:py-10">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#8B7B81]">
                  Bachelor of Science
                </p>

                <span className="border border-[#D8C8C7] px-3 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-[#8B5263]">
                  Currently pursuing
                </span>
              </div>

              <h3 className="mt-5 max-w-xl text-3xl font-medium leading-tight tracking-[-0.05em] sm:text-4xl lg:text-5xl">
                Information Technology
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#75656D]">
                Lahore College for Women University
              </p>
            </div>

            <div className="border-t border-[#D8C8C7] py-6">
              <p className="max-w-xl text-sm leading-7 text-[#75656D]">
                Alongside my studies, I build frontend projects to
                strengthen my development skills and apply what I learn
                to real-world interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}
