const ContactCard = ({ icon, label, value, href, external }: { icon: React.ReactNode; label: string; value: string; href: string; external?: boolean }) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="flex-row-start border-n700 bg-n800 hover:border-p500/50 hover:bg-n800/80 gap-4 rounded-2xl border p-5 transition-all"
  >
    <div className="flex-row-center bg-p500/10 text-p500 h-10 w-10 shrink-0 rounded-xl">{icon}</div>
    <div className="flex-col-start-start gap-0.5 overflow-hidden">
      <span className="text-b14 text-n400">{label}</span>
      <span className="text-t16 truncate text-white">{value}</span>
    </div>
  </a>
)

export default ContactCard
