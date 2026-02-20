import { PROFILE } from '@/constants/portfolio'
import { SectionTitle } from './AboutSection'
import { Mail, Github, FileText, Phone } from 'lucide-react'

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex-col-center w-full bg-[var(--color-n900)] px-8 py-28 m:px-5 m:py-20"
    >
      <div className="flex-col-center w-full max-w-[var(--spacing-content)] gap-12 m:gap-8">
        <div className="flex-col-center gap-4">
          <SectionTitle label="Contact" />
          <h2 className="text-h32 text-center text-white m:text-[24px]">
            함께 일하고 싶으시다면
          </h2>
          <p className="text-b16p text-center text-[var(--color-n400)]">
            새로운 기회와 협업에 항상 열려있습니다. 편하게 연락주세요.
          </p>
        </div>

        <div className="grid w-full max-w-[700px] grid-cols-2 gap-4 m:grid-cols-1">
          <ContactCard
            icon={<Mail size={20} />}
            label="Email"
            value={PROFILE.email}
            href={`mailto:${PROFILE.email}`}
          />
          <ContactCard
            icon={<Phone size={20} />}
            label="Phone"
            value={PROFILE.phone}
            href={`tel:${PROFILE.phone}`}
          />
          <ContactCard
            icon={<Github size={20} />}
            label="GitHub"
            value="github.com/gaebal-dev"
            href={PROFILE.github}
            external
          />
          <ContactCard
            icon={<FileText size={20} />}
            label="Blog"
            value="blog.gaebal.dev"
            href={PROFILE.blog}
            external
          />
        </div>

        {/* Footer */}
        <div className="flex-col-center mt-8 gap-2 border-t border-[var(--color-n700)] pt-8 w-full">
          <p className="text-b14 text-[var(--color-n500)]">
            &copy; 2026 {PROFILE.nameEn}. Built with React + TypeScript.
          </p>
        </div>
      </div>
    </section>
  )
}

const ContactCard = ({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href: string
  external?: boolean
}) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="flex-row-start gap-4 rounded-2xl border border-[var(--color-n700)] bg-[var(--color-n800)] p-5 transition-all hover:border-[var(--color-p500)]/50 hover:bg-[var(--color-n800)]/80"
  >
    <div className="flex-row-center h-10 w-10 shrink-0 rounded-xl bg-[var(--color-p500)]/10 text-[var(--color-p500)]">
      {icon}
    </div>
    <div className="flex-col-start-start gap-0.5 overflow-hidden">
      <span className="text-b14 text-[var(--color-n400)]">{label}</span>
      <span className="text-t16 truncate text-white">{value}</span>
    </div>
  </a>
)

export default ContactSection
