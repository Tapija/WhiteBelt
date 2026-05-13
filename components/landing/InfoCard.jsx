export default function InfoCard({ icon, title, children, className = '' }) {
  return (
    <div className={`group h-full ${className}`}>
      <div className="h-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-1.5 transition duration-700 ease-premium group-hover:-translate-y-1">
        <div className="flex h-full flex-col rounded-[calc(2rem-0.375rem)] border border-white/10 bg-zinc-950/90 p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-white/[0.02] text-zinc-100">
              {icon}
            </div>
            <h3 className="text-sm font-bold tracking-[0.24em]">{title}</h3>
          </div>
          <div className="flex flex-1 flex-col">{children}</div>
        </div>
      </div>
    </div>
  )
}
