import { PROJECTS } from '@/constants/portfolio'
import { SectionTitle } from './AboutSection'
import { ExternalLink } from 'lucide-react'

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="flex-col-center w-full bg-[var(--color-n50)] px-8 py-28 m:px-5 m:py-20"
    >
      <div className="flex-col-start-start w-full max-w-[var(--spacing-content)] gap-16 m:gap-10">
        <SectionTitle label="Projects" />

        <div className="flex-col-start-start w-full gap-8">
          {PROJECTS.map((project, i) => (
            <article
              key={i}
              className="group flex-col-start-start w-full gap-5 rounded-2xl border border-[var(--color-n200)] bg-white p-8 transition-shadow hover:shadow-lg m:p-5"
            >
              {/* Header */}
              <div className="flex-row-center-between w-full m:flex-col m:items-start m:gap-2">
                <div className="flex-col-start-start gap-1">
                  <h3 className="text-t24 text-[var(--color-n900)] m:text-[20px]">
                    {project.title}
                  </h3>
                  <div className="flex-row-center gap-3">
                    <span className="text-b14 text-[var(--color-n500)]">
                      {project.period}
                    </span>
                    <span className="text-b14 text-[var(--color-p500)]">
                      {project.role}
                    </span>
                  </div>
                </div>

                {project.links && (
                  <div className="flex-row-center gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-row-center text-b14 gap-1.5 rounded-lg border border-[var(--color-n200)] px-3 py-1.5 text-[var(--color-n600)] transition-colors hover:border-[var(--color-p500)] hover:text-[var(--color-p500)]"
                      >
                        <ExternalLink size={14} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-b16p text-[var(--color-n700)]">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="flex-col-start-start gap-2">
                {project.highlights.map((item, j) => (
                  <li
                    key={j}
                    className="flex-row-start gap-2 text-b14p text-[var(--color-n700)]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-s500)]" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-b14 rounded-lg bg-[var(--color-s500)]/10 px-3 py-1 text-[var(--color-s700)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
