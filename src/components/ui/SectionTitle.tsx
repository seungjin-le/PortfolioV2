const SectionTitle = ({ label }: { label: string }) => (
  <div className="flex-col-start-start gap-2">
    <span className="text-t16 text-[var(--color-p500)]">
      {label.toUpperCase()}
    </span>
    <div className="h-1 w-12 rounded-full bg-[var(--color-p500)]" />
  </div>
)

export default SectionTitle
