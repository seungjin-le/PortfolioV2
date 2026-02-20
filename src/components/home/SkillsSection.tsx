import { SKILLS } from '@/constants/portfolio'
import { SectionTitle } from './AboutSection'

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="flex-col-center w-full bg-[var(--color-n50)] px-8 py-28 m:px-5 m:py-20"
    >
      <div className="flex-col-start-start w-full max-w-[var(--spacing-content)] gap-16 m:gap-10">
        <SectionTitle label="Skills" />

        <div className="grid w-full grid-cols-2 gap-8 m:grid-cols-1 m:gap-6">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="flex-col-start-start gap-5 rounded-2xl border border-[var(--color-n200)] bg-white p-6 m:p-5"
            >
              <h3 className="text-t18 text-[var(--color-n900)]">
                {group.category}
              </h3>
              <div className="flex-col-start-start w-full gap-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex-col-start-start w-full gap-2">
                    <div className="flex-row-center-between w-full">
                      <span className="text-b14 text-[var(--color-n700)]">
                        {skill.name}
                      </span>
                      <span className="text-b14 text-[var(--color-n500)]">
                        {skill.level}/5
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--color-n100)]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--color-p400)] to-[var(--color-p500)] transition-all duration-700"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
