import { useLanguage } from '../i18n/LanguageProvider'

export default function AboutSection() {
  const { copy } = useLanguage()
  const audiences = copy.about.audiences

  return (
    <section className="scroll-mt-28 px-4 pb-20 pt-12 sm:px-8 md:px-12 md:pb-28 md:pt-20 lg:px-16" id="club">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-zinc-500">{copy.about.label}</p>
            <h2 className="mt-5 max-w-4xl text-balance font-display text-[clamp(3rem,6.8vw,6.5rem)] uppercase leading-[1.02] tracking-[0.025em] text-white">
              {copy.about.title}
            </h2>
          </div>

          <div className="self-end lg:pb-1">
            <p className="max-w-[65ch] text-pretty text-base leading-8 text-zinc-400 sm:text-lg">
              {copy.about.body}
            </p>
          </div>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] md:grid-cols-3">
          {audiences.map((audience, index) => (
            <article
              key={audience.title}
              className={`group relative min-h-64 p-7 transition duration-500 ease-premium hover:bg-white/[0.04] sm:p-8 ${
                index < audiences.length - 1 ? 'border-b border-white/10 md:border-b-0 md:border-r' : ''
              }`}
            >
              <span className="font-display text-5xl font-semibold leading-none text-white/10 transition duration-500 group-hover:text-white/20">
                {audience.number}
              </span>
              <div className="mt-14">
                <h3 className="text-sm font-bold tracking-[0.24em] text-white">{audience.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 !text-zinc-300 sm:text-base">{audience.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
