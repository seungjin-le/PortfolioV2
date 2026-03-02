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

export default ContactCard
