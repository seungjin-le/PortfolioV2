import { EXPERIENCES } from '@/constants/portfolio'
import { SectionTitle } from './AboutSection'
import { Building2 } from 'lucide-react'

const ExperienceSection = () => {
  return (
    <section id="experience" className="flex-col-center m:px-5 m:py-20 w-full bg-white px-8 py-28">
      <div className="flex-col-start-start m:gap-10 max-w-content w-full gap-16">
        <SectionTitle label="Experience" />

        <div className="flex-col-start-start relative w-full gap-12">
          {/* Timeline Line */}
          <div className="m:left-[15px] bg-n200 absolute top-0 bottom-0 left-[19px] w-[2px]" />

          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="flex-row-start m:gap-5 relative w-full gap-8">
              {/* Timeline Dot */}
              <div className="flex-row-center border-p500 m:h-8 m:w-8 relative z-10 h-10 w-10 shrink-0 rounded-full border-2 bg-white">
                <Building2 size={18} className="text-p500 m:h-4 m:w-4" />
              </div>

              {/* Content */}
              <div className="flex-col-start-start border-n200 m:p-5 w-full gap-4 rounded-2xl border bg-(--color-n50) p-6">
                <div className="flex-col-start-start gap-1">
                  <div className="flex-row-center m:flex-col m:items-start m:gap-1 gap-3">
                    <h3 className="text-t20 text-n900">{exp.company}</h3>
                    <span className="text-b14 bg-p500/10 text-p500 rounded-full px-3 py-0.5">{exp.role}</span>
                  </div>
                  <span className="text-b14 text-n500">{exp.period}</span>
                </div>

                <p className="text-b16p text-n700">{exp.description}</p>

                <ul className="flex-col-start-start gap-2">
                  {exp.achievements.map((item, j) => (
                    <li key={j} className="flex-row-start text-b14p text-n700 gap-2">
                      <span className="bg-n400 mt-2 h-1 w-1 shrink-0 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="text-b14 bg-n900 text-n300 rounded-lg px-3 py-1">
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
