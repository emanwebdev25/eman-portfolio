import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-blush-200 bg-white">
      <div className="relative aspect-[16/10] bg-blush-100">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold">{project.name}</h3>
        <p className="mt-2 text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-blush-100 px-3 py-1 text-xs text-rose-dark"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-rose px-5 py-2 text-sm font-medium text-white transition hover:bg-rose-dark"
            >
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-rose px-5 py-2 text-sm font-medium text-rose transition hover:bg-blush-100"
            >
              GitHub
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="ml-auto text-sm font-medium text-ink underline decoration-rose underline-offset-4 hover:text-rose"
          >
            Read case study
          </Link>
        </div>
      </div>
    </article>
  );
}