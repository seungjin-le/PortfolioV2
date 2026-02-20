import Navigation from '@/components/home/Navigation'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import SkillsSection from '@/components/home/SkillsSection'
import ExperienceSection from '@/components/home/ExperienceSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import ContactSection from '@/components/home/ContactSection'

const Page = () => {
  return (
    <div className="flex-col-center min-h-dvh w-full">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default Page
