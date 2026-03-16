const SectionTitle = ({ label }: { label: string }) => (
  <div className="flex-col-start-start gap-2">
    <span className="text-t16 text-p500">{label.toUpperCase()}</span>
    <div className="bg-p500 h-1 w-12 rounded-full" />
  </div>
)

export default SectionTitle
