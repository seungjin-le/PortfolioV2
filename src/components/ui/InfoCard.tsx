const InfoCard = ({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode
  label: string
  value: string
  sub?: string
}) => (
  <div className="flex-row-start gap-4 w-full rounded-2xl border border-[var(--color-n200)] bg-[var(--color-n50)] p-5">
    <div className="flex-row-center h-10 w-10 shrink-0 rounded-xl bg-[var(--color-p500)]/10 text-[var(--color-p500)]">
      {icon}
    </div>
    <div className="flex-col-start-start gap-1">
      <span className="text-t16 text-[var(--color-n900)]">{label}</span>
      <span className="text-b14p text-[var(--color-n600)]">{value}</span>
      {sub && (
        <span className="text-b14 text-[var(--color-n500)]">{sub}</span>
      )}
    </div>
  </div>
)

export default InfoCard
