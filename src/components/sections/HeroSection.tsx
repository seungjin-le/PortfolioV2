import { PROFILE } from '@/constants/portfolio'
import { Github, Mail, FileText } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="flex-col-center relative min-h-dvh w-full overflow-hidden bg-[var(--color-n900)] px-8 m:px-5">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-[var(--color-p500)] opacity-10 blur-[120px]" />
      <div className="absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[var(--color-s500)] opacity-10 blur-[120px]" />

      <div className="flex-col-center relative z-10 gap-6">
        {/* Badge */}
        <span className="text-b14 rounded-full border border-[var(--color-p500)]/30 bg-[var(--color-p500)]/10 px-4 py-1.5 text-[var(--color-p400)]">
          {PROFILE.experience} Frontend Developer
        </span>

        {/* Name */}
        <h1 className="text-h48 text-center text-white m:text-[32px] m:leading-[40px]">
          {PROFILE.name}
        </h1>

        {/* Tagline */}
        <p className="text-b18p max-w-[600px] text-center text-[var(--color-n400)] m:text-[15px] m:leading-[24px]">
          {PROFILE.summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex-row-center mt-4 gap-4 m:flex-col m:w-full">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex-row-center text-t16 gap-2 rounded-xl bg-[var(--color-p500)] px-6 py-3 text-white transition-all hover:bg-[var(--color-p600)] m:w-full m:justify-center"
          >
            <Mail size={18} />
            연락하기
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-row-center text-t16 gap-2 rounded-xl border border-[var(--color-n600)] px-6 py-3 text-[var(--color-n300)] transition-all hover:border-[var(--color-n400)] hover:text-white m:w-full m:justify-center"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={PROFILE.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-row-center text-t16 gap-2 rounded-xl border border-[var(--color-n600)] px-6 py-3 text-[var(--color-n300)] transition-all hover:border-[var(--color-n400)] hover:text-white m:w-full m:justify-center"
          >
            <FileText size={18} />
            Blog
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex-col-center gap-2 text-[var(--color-n500)]">
          <span className="text-b14 animate-bounce">scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-[var(--color-n500)] to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
