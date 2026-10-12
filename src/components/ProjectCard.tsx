import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#30262B] text-[#F7F1EB] shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#C77B91]/40 hover:shadow-[0_28px_65px_rgba(132,45,75,0.2)] sm:rounded-[1.75rem]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#21191F]">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#21191F]/50 via-transparent to-white/[0.03]" />

        <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#21191F]/70 text-lg text-white shadow-lg backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-[#C77B91]/60 group-hover:bg-[#842D4B]">
          ↗
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-7">
        <h3 className="text-2xl font-medium tracking-[-0.045em] transition-colors duration-300 group-hover:text-[#E8C7CE] sm:text-3xl">
          {project.name}
          <span className="text-[#C77B91]">.</span>
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#C4B4BC]">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] text-[#D5C5CC] transition-colors duration-300 group-hover:border-[#C77B91]/20"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#842D4B] to-[#A94F6B] px-5 py-2.5 text-xs font-medium text-white shadow-[0_6px_20px_rgba(132,45,75,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(132,45,75,0.35)]"
            >
              Live Demo ↗
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-medium text-[#E8C7CE] transition-all duration-300 hover:border-[#C77B91]/50 hover:bg-[#842D4B]/20 hover:text-white"
            >
              GitHub ↗
            </a>
          )}

          <Link
            href={`/projects/${project.slug}`}
            className="group/case inline-flex items-center gap-2 text-xs font-medium text-[#C4B4BC] transition-colors duration-300 hover:text-[#E8C7CE] sm:ml-auto"
          >
            Case study
            <span className="transition-transform duration-300 group-hover/case:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}