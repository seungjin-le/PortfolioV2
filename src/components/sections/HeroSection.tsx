import { PROFILE } from '@/constants/portfolio'
import { Github, Mail, FileText } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="flex-col-center bg-n900 m:px-5 relative min-h-dvh w-full overflow-hidden px-8">
      {/* Background Gradient Orbs */}
      <div className="bg-p500 absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]" />
      <div className="bg-s500 absolute -right-32 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-10 blur-[120px]" />

      <div className="flex-col-center relative z-10 gap-6">
        {/* Badge */}
        <span className="text-b14 border-p500/30 bg-p500/10 text-p400 rounded-full border px-4 py-1.5">{PROFILE.experience} Frontend Developer</span>

        {/* Name */}
        <h1 className="text-h48 m:text-[32px] m:leading-[40px] text-center text-white">{PROFILE.name}</h1>

        {/* Tagline */}
        <p className="text-b18p text-n400 m:text-[15px] m:leading-[24px] max-w-[600px] text-center">{PROFILE.summary}</p>

        {/* CTA Buttons */}
        <div className="flex-row-center m:flex-col m:w-full mt-4 gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex-row-center text-t16 bg-p500 hover:bg-p600 m:w-full m:justify-center gap-2 rounded-xl px-6 py-3 text-white transition-all"
          >
            <Mail size={18} />
            연락하기
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-row-center text-t16 border-n600 text-n300 hover:border-n400 m:w-full m:justify-center gap-2 rounded-xl border px-6 py-3 transition-all hover:text-white"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href={PROFILE.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-row-center text-t16 border-n600 text-n300 hover:border-n400 m:w-full m:justify-center gap-2 rounded-xl border px-6 py-3 transition-all hover:text-white"
          >
            <FileText size={18} />
            Blog
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex-col-center text-n500 gap-2">
          <span className="text-b14 animate-bounce">scroll</span>
          <div className="from-n500 h-8 w-px bg-linear-to-b to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
