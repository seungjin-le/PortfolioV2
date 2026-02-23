import { PROJECTS } from '@/constants/portfolio'
import { SectionTitle } from './AboutSection'
import { ExternalLink } from 'lucide-react'

const ProjectsSection = () => {
  return (
    <section id="projects" className="flex-col-center m:px-5 m:py-20 w-full bg-(--color-n50) px-8 py-28">
      <div className="flex-col-start-start m:gap-10 max-w-content w-full gap-16">
        <SectionTitle label="Projects" />

        <div className="flex-col-start-start w-full gap-8">
          {PROJECTS.map((project, i) => (
            <article key={i} className="group flex-col-start-start m:p-5 border-n200 w-full gap-5 rounded-2xl border bg-white p-8 transition-shadow hover:shadow-lg">
              {/* Header */}
              <div className="flex-row-center-between m:flex-col m:items-start m:gap-2 w-full">
                <div className="flex-col-start-start gap-1">
                  <h3 className="text-t24 m:text-[20px] text-n900">{project.title}</h3>
                  <div className="flex-row-center mt-1 gap-3">
                    <span className="text-b14 text-n500">{project.period}</span>
                    <span className="text-b14 text-p500">{project.role}</span>
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
                        className="flex-row-center text-b14 border-n200 text-n600 hover:border-p500 hover:text-p500 gap-1.5 rounded-lg border px-3 py-1.5 transition-colors"
                      >
                        <ExternalLink size={14} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-b16p text-n700">{project.description}</p>
              {/* Highlights */}
              <ul className="flex-col-start-start gap-2">
                {project.highlights.map((item, j) => (
                  <li key={j} className="flex-row-start text-b14p text-n700 gap-2">
                    <span className="bg-s500 mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-b14 bg-s500/10 text-s700 rounded-lg px-3 py-1">
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
