import { EXPERIENCES } from '@/constants/portfolio'
import { SectionTitle } from './AboutSection'
import { Building2 } from 'lucide-react'

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="flex-col-center w-full bg-white px-8 py-28 m:px-5 m:py-20"
    >
      <div className="flex-col-start-start w-full max-w-[var(--spacing-content)] gap-16 m:gap-10">
        <SectionTitle label="Experience" />

        <div className="flex-col-start-start relative w-full gap-12">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-[19px] w-[2px] bg-[var(--color-n200)] m:left-[15px]" />

          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="flex-row-start relative gap-8 m:gap-5">
              {/* Timeline Dot */}
              <div className="flex-row-center relative z-10 h-10 w-10 shrink-0 rounded-full border-2 border-[var(--color-p500)] bg-white m:h-8 m:w-8">
                <Building2
                  size={18}
                  className="text-[var(--color-p500)] m:h-4 m:w-4"
                />
              </div>

              {/* Content */}
              <div className="flex-col-start-start gap-4 rounded-2xl border border-[var(--color-n200)] bg-[var(--color-n50)] p-6 m:p-5">
                <div className="flex-col-start-start gap-1">
                  <div className="flex-row-center gap-3 m:flex-col m:items-start m:gap-1">
                    <h3 className="text-t20 text-[var(--color-n900)]">
                      {exp.company}
                    </h3>
                    <span className="text-b14 rounded-full bg-[var(--color-p500)]/10 px-3 py-0.5 text-[var(--color-p500)]">
                      {exp.role}
                    </span>
                  </div>
                  <span className="text-b14 text-[var(--color-n500)]">
                    {exp.period}
                  </span>
                </div>

                <p className="text-b16p text-[var(--color-n700)]">
                  {exp.description}
                </p>

                <ul className="flex-col-start-start gap-2">
                  {exp.achievements.map((item, j) => (
                    <li
                      key={j}
                      className="flex-row-start gap-2 text-b14p text-[var(--color-n700)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-n400)]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-b14 rounded-lg bg-[var(--color-n900)] px-3 py-1 text-[var(--color-n300)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
