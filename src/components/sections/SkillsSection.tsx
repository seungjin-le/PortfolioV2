import { SKILLS } from '@/constants/portfolio'
import SectionTitle from '@/components/ui/SectionTitle'

const SkillsSection = () => {
  return (
    <section id="skills" className="flex-col-center m:px-5 m:py-20 w-full bg-(--color-n50) px-8 py-28">
      <div className="flex-col-start-start max-w-content m:gap-10 w-full gap-16">
        <SectionTitle label="Skills" />

        <div className="m:grid-cols-1 m:gap-6 grid w-full grid-cols-2 gap-8">
          {SKILLS.map((group) => (
            <div key={group.category} className="flex-col-start-start border-n200 m:p-5 gap-5 rounded-2xl border bg-white p-6">
              <h3 className="text-t18 text-n900">{group.category}</h3>
              <div className="flex-col-start-start w-full gap-4">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex-col-start-start w-full gap-2">
                    <div className="flex-row-center-between w-full">
                      <span className="text-b14 text-n700">{skill.name}</span>
                      <span className="text-b14 text-n500">{skill.level}/5</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-(--color-n100)">
                      <div className="from-p400 to-p500 h-full rounded-full bg-linear-to-r transition-all duration-700" style={{ width: `${(skill.level / 5) * 100}%` }} />
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
