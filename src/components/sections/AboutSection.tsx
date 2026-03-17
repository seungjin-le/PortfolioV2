import { PROFILE, EDUCATION } from '@/constants/portfolio'
import { MapPin, GraduationCap } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import InfoCard from '@/components/ui/InfoCard'

const AboutSection = () => {
  return (
    <section id="about" className="flex-col-center m:px-5 m:py-20 w-full bg-white px-8 py-28">
      <div className="flex-col-start-start max-w-content m:gap-10 w-full gap-16">
        <SectionTitle label="About" />

        <div className="m:grid-cols-1 m:gap-10 grid w-full grid-cols-[1fr_1fr] gap-16">
          {/* Left: Introduction */}
          <div className="flex-col-start-start gap-6">
            <h3 className="text-t24 text-n900 m:text-[20px]">
              안녕하세요, <span className="text-p500">{PROFILE.name}</span>
              입니다.
            </h3>
            <ul className="flex-col-start-start gap-4">
              {PROFILE.introduction.map((text, i) => (
                <li key={i} className="flex-row-start text-b16p text-n700 gap-3">
                  <span className="bg-p400 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Info Cards */}
          <div className="flex-col-start-start gap-5">
            <InfoCard icon={<MapPin size={20} />} label="Location" value={PROFILE.location} />
            {EDUCATION.map((edu) => (
              <InfoCard key={edu.school} icon={<GraduationCap size={20} />} label={edu.school} value={`${edu.major} (${edu.period})`} sub={edu.note} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
